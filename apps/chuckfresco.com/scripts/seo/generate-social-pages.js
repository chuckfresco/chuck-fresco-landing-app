const fs = require("fs");
const path = require("path");

const SITE_URL = "https://chuckfresco.com";
const PREVIEW_BASE = `${SITE_URL}/assets/social/previews`;
const appRoot = path.resolve(__dirname, "../..");
const buildRoot = path.join(appRoot, "build");
const outputRoot = path.join(buildRoot, ".social-pages");
const templatePath = path.join(buildRoot, "index.html");
const seoByPath = require("../../src/components/routeSeoData.json");

const escapeHtml = value =>
  String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

const removeExistingSocialMetadata = html =>
  html
    .replace(/<title[\s\S]*?<\/title>/gi, "")
    .replace(
      /<meta\b(?=[^>]*(?:property=["']og:|name=["'](?:description|twitter:)))[\s\S]*?>/gi,
      ""
    )
    .replace(/<link\b(?=[^>]*rel=["']canonical["'])[\s\S]*?>/gi, "");

const createMetadata = (route, seo) => {
  const [title, description, imageName, canonicalPath = route] = seo;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const image = `${PREVIEW_BASE}/${imageName}`;
  const fullTitle = `${title} | Chuck Fresco`;

  return [
    `<title>${escapeHtml(fullTitle)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}">`,
    `<link rel="canonical" href="${escapeHtml(canonical)}">`,
    '<meta property="og:type" content="website">',
    '<meta property="og:locale" content="en_US">',
    '<meta property="og:site_name" content="Chuck Fresco">',
    `<meta property="og:title" content="${escapeHtml(title)}">`,
    `<meta property="og:description" content="${escapeHtml(description)}">`,
    `<meta property="og:url" content="${escapeHtml(canonical)}">`,
    `<meta property="og:image" content="${escapeHtml(image)}">`,
    '<meta property="og:image:width" content="1200">',
    '<meta property="og:image:height" content="630">',
    `<meta property="og:image:alt" content="${escapeHtml(`${title} social preview`)}">`,
    '<meta name="twitter:card" content="summary_large_image">',
    '<meta name="twitter:site" content="@ChuckFresco">',
    `<meta name="twitter:title" content="${escapeHtml(title)}">`,
    `<meta name="twitter:description" content="${escapeHtml(description)}">`,
    `<meta name="twitter:image" content="${escapeHtml(image)}">`,
    `<meta name="twitter:image:alt" content="${escapeHtml(`${title} social preview`)}">`
  ].join("\n    ");
};

if (!fs.existsSync(templatePath)) {
  throw new Error(`Build template not found: ${templatePath}`);
}

fs.rmSync(outputRoot, { recursive: true, force: true });
fs.mkdirSync(outputRoot, { recursive: true });

const template = removeExistingSocialMetadata(fs.readFileSync(templatePath, "utf8"));
const manifest = [];

Object.entries(seoByPath).forEach(([route, seo], index) => {
  const fileName = `${String(index).padStart(3, "0")}.html`;
  const outputPath = path.join(outputRoot, fileName);
  const metadata = createMetadata(route, seo);
  const html = template.replace(/<head>/i, `<head>\n    ${metadata}`);

  fs.writeFileSync(outputPath, html);
  manifest.push({
    route,
    key: route.replace(/^\//, ""),
    file: path.relative(buildRoot, outputPath)
  });
});

fs.writeFileSync(
  path.join(outputRoot, "manifest.json"),
  `${JSON.stringify(manifest, null, 2)}\n`
);

console.log(`Generated crawler metadata HTML for ${manifest.length} routes.`);
