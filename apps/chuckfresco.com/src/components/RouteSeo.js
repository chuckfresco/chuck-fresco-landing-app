import React from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import seoByPath from "./routeSeoData.json";

const SITE_URL = "https://chuckfresco.com";
const PREVIEW_BASE = `${SITE_URL}/assets/social/previews`;

const RouteSeo = () => {
  const { pathname } = useLocation();
  const seo = seoByPath[pathname];
  if (!seo) return null;

  const [title, description, imageName, canonicalPath = pathname] = seo;
  const canonical = `${SITE_URL}${canonicalPath}`;
  const image = `${PREVIEW_BASE}/${imageName}`;
  const fullTitle = `${title} | Chuck Fresco`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Chuck Fresco" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} social preview`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ChuckFresco" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${title} social preview`} />
    </Helmet>
  );
};

export default RouteSeo;
