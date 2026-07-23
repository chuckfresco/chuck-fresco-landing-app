import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { getSunflowerSeasonClock } from "../../utils/sunflowerSeason";

const asset = name => encodeURI(`/assets/sunflower-land/fishing/${name}`);
const seasonAssetPath = "/assets/sunflower-land/seasons";
const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const lightningIcon = "/assets/sunflower-land/icons/lightning.png";
const cropMachineIcon = "/assets/sunflower-land/crops/crop-machine.webp";
const lavaPitIcon = "/assets/sunflower-land/crops/lava-pit.webp";
const animalFeedIcon = "/assets/sunflower-land/crops/cow-sfl.webp";
const composterAsset = name => `/assets/sunflower-land/crops/${name}`;
const cropAsset = name => encodeURI(`/assets/sunflower-land/crops/${name}`);
const referralUrl = "https://sunflower-land.com/play/?ref=ChuckFresco";

const images = {
  Sunflower: asset("imgi_45_Sunflower.png"), Potato: asset("imgi_55_Potato.png"), Rhubarb: asset("imgi_48_Rhubarb.png"),
  Pumpkin: asset("imgi_56_Pumpkin.png"), Zucchini: asset("imgi_64_Zucchini.png"), Carrot: asset("imgi_38_Carrot.png"),
  Yam: asset("imgi_50_Yam.png"), Cabbage: asset("imgi_51_Cabbage.png"), Broccoli: asset("imgi_58_Broccoli.png"),
  Beetroot: asset("imgi_59_Beetroot.png"), Pepper: asset("imgi_60_Pepper.png"),
  Cauliflower: asset("imgi_63_Cauliflower.png"), Parsnip: asset("imgi_66_Parsnip.png"), Eggplant: asset("imgi_43_Eggplant.png"),
  Corn: asset("imgi_74_Corn.png"), Onion: asset("imgi_46_Onion.png"), Radish: asset("imgi_75_Radish.png"),
  Wheat: asset("imgi_68_Wheat.png"), Turnip: asset("imgi_49_Turnip.png"), Kale: asset("imgi_77_Kale.png"),
  Artichoke: asset("imgi_67_Artichoke.png"), Barley: asset("imgi_78_Barley.png"), Gold: asset("imgi_72_Gold.png"),
  Blueberry: asset("imgi_44_Blueberry.png"), Egg: asset("imgi_39_Egg.png"), Banana: asset("imgi_65_Banana.png"),
  Apple: asset("imgi_57_Apple.png"),
  Crimstone: cropAsset("crimstone.png"), Oil: cropAsset("oil.webp"), "Merino Wool": cropAsset("merino_wool.webp"),
  Lunara: cropAsset("Lunara.webp"), Duskberry: cropAsset("duskberry.webp"), Celestine: cropAsset("celestine.webp"),
  Soybean: cropAsset("soybean.png")
};

const seasons = [
  { id: "spring", label: "Spring", icon: `${seasonAssetPath}/spring.webp`, color: "#3d8a5d", shadow: "#90d58e" },
  { id: "summer", label: "Summer", icon: `${seasonAssetPath}/summer.webp`, color: "#d99a22", shadow: "#ffe889" },
  { id: "autumn", label: "Autumn", icon: `${seasonAssetPath}/autumn.webp`, color: "#c95839", shadow: "#f4a35f" },
  { id: "winter", label: "Winter", icon: `${seasonAssetPath}/winter.webp`, color: "#2876d5", shadow: "#8ed8ff" }
];

const crops = [
  { name: "Barley", tier: "Advanced", time: "23 hrs 32 mins", oldTime: "2 days 6 hrs", seasons: ["spring", "autumn"], feed: true },
  { name: "Artichoke", tier: "Advanced", time: "17 hrs 30 mins", oldTime: "1 day 12 hrs", seasons: ["autumn"], lava: { autumn: 30 } },
  { name: "Kale", tier: "Advanced", time: "17 hrs 30 mins", oldTime: "1 day 12 hrs", seasons: ["spring", "winter"] },
  { name: "Wheat", tier: "Advanced", time: "11 hrs", oldTime: "1 day", seasons: ["spring", "summer", "autumn", "winter"], feed: true },
  { name: "Turnip", tier: "Advanced", time: "11 hrs", oldTime: "1 day", seasons: ["winter"], lava: { winter: 200 } },
  { name: "Radish", tier: "Advanced", time: "11 hrs", oldTime: "1 day", seasons: ["summer"] },
  { name: "Onion", tier: "Advanced", time: "9 hrs", oldTime: "20 hrs", seasons: ["winter"], lava: { winter: 400 } },
  { name: "Corn", tier: "Advanced", time: "7 hrs", oldTime: "30 hrs", seasons: ["spring"], feed: true },
  { name: "Eggplant", tier: "Advanced", time: "7 hrs", oldTime: "16 hrs", seasons: ["summer"] },
  { name: "Parsnip", tier: "Medium", time: "6 hrs", oldTime: "12 hrs", seasons: ["winter"] },
  { name: "Cauliflower", tier: "Medium", time: "4 hrs", oldTime: "6 hrs", seasons: ["summer", "winter"] },
  { name: "Pepper", tier: "Medium", time: "2 hrs", oldTime: "4 hrs", seasons: ["summer"], lava: { summer: 750 } },
  { name: "Beetroot", tier: "Medium", time: "2 hrs", oldTime: "4 hrs", seasons: ["summer", "winter"] },
  { name: "Soybean", tier: "Medium", time: "1 hr", oldTime: "3 hrs", seasons: ["spring", "autumn"] },
  { name: "Broccoli", tier: "Medium", time: "1 hr", oldTime: "2 hrs", seasons: ["autumn"], lava: { autumn: 750 } },
  { name: "Cabbage", tier: "Medium", time: "1 hr", oldTime: "2 hrs", seasons: ["spring", "winter"] },
  { name: "Yam", tier: "Medium", time: "32 mins", oldTime: "1 hr", seasons: ["autumn"], lava: { autumn: 1000 } },
  { name: "Carrot", tier: "Medium", time: "32 mins", oldTime: "1 hr", seasons: ["spring", "autumn"] },
  { name: "Zucchini", tier: "Basic", time: "16 mins", oldTime: "30 mins", seasons: ["summer"], lava: { summer: 1000 } },
  { name: "Pumpkin", tier: "Basic", time: "16 mins", oldTime: "30 mins", seasons: ["autumn"] },
  { name: "Rhubarb", tier: "Basic", time: "5 mins", oldTime: "10 mins", seasons: ["spring"], lava: { spring: 2000 } },
  { name: "Potato", tier: "Basic", time: "2 mins", oldTime: "5 mins", seasons: ["summer", "autumn", "winter"] },
  { name: "Sunflower", tier: "Basic", time: "32 secs", oldTime: "1 min", seasons: ["spring", "summer"] }
];

const lavaRequirements = {
  autumn: { items: [{ name: "Artichoke", qty: 30 }, { name: "Broccoli", qty: 750 }, { name: "Yam", qty: 1000 }, { name: "Gold", qty: 5 }, { name: "Crimstone", qty: 6 }] },
  winter: { items: [{ name: "Onion", qty: 400 }, { name: "Turnip", qty: 200 }, { name: "Merino Wool", qty: 150 }, { name: "Crimstone", qty: 5 }] },
  spring: { items: [{ name: "Rhubarb", qty: 2000 }, { name: "Celestine", qty: 2 }, { name: "Lunara", qty: 2 }, { name: "Duskberry", qty: 2 }, { name: "Crimstone", qty: 10 }] },
  summer: { items: [{ name: "Pepper", qty: 750 }, { name: "Zucchini", qty: 1000 }, { name: "Oil", qty: 70 }, { name: "Crimstone", qty: 4 }] }
};

const compostRequirements = {
  spring: {
    bin: [{ name: "Rhubarb", qty: 10 }, { name: "Carrot", qty: 5 }],
    turbo: [{ name: "Soybean", qty: 5 }, { name: "Corn", qty: 3 }],
    premium: [{ name: "Blueberry", qty: 8 }, { name: "Egg", qty: 5 }]
  },
  summer: {
    bin: [{ name: "Zucchini", qty: 10 }, { name: "Pepper", qty: 2 }],
    turbo: [{ name: "Cauliflower", qty: 4 }, { name: "Eggplant", qty: 3 }],
    premium: [{ name: "Banana", qty: 3 }, { name: "Egg", qty: 5 }]
  },
  autumn: {
    bin: [{ name: "Yam", qty: 15 }],
    turbo: [{ name: "Broccoli", qty: 10 }, { name: "Artichoke", qty: 2 }],
    premium: [{ name: "Apple", qty: 4 }, { name: "Tomato", qty: 5 }]
  },
  winter: {
    bin: [{ name: "Potato", qty: 10 }, { name: "Cabbage", qty: 3 }],
    turbo: [{ name: "Onion", qty: 5 }, { name: "Turnip", qty: 2 }],
    premium: [{ name: "Lemon", qty: 3 }, { name: "Apple", qty: 3 }]
  }
};

const composters = [
  { id: "bin", label: "Compost Bin", image: composterAsset("composter_basic_closed.webp") },
  { id: "turbo", label: "Turbo Composter", image: composterAsset("composter_advanced_closed.webp") },
  { id: "premium", label: "Premium Composter", image: composterAsset("composter_expert_closed.webp") }
];

const compostCrops = new Set(
  Object.values(compostRequirements).flatMap(requirements =>
    Object.values(requirements).flatMap(items => items.map(item => item.name))
  )
);

const fallbackIcons = { Tomato: "🍅", Lemon: "🍋" };
const tierOrder = { Advanced: 0, Medium: 1, Basic: 2 };
const cropMachineCrops = new Set(["Rhubarb", "Zucchini", "Carrot", "Cabbage", "Yam", "Broccoli", "Sunflower", "Pumpkin", "Potato"]);
const getPriorityGroup = (crop, season) => {
  if (crop.lava && crop.lava[season] && !cropMachineCrops.has(crop.name)) return 0;
  if (crop.feed) return 1;
  return 2 + tierOrder[crop.tier];
};
const compareCropPriority = season => (a, b) => {
  const groupDifference = getPriorityGroup(a, season) - getPriorityGroup(b, season);
  if (groupDifference) return groupDifference;
  const aLava = Boolean(a.lava && a.lava[season]);
  const bLava = Boolean(b.lava && b.lava[season]);
  const lavaDifference = Number(bLava) - Number(aLava);
  if (lavaDifference) return lavaDifference;
  if (a.feed && b.feed) return a.seasons.length - b.seasons.length;
  return 0;
};

const useStyles = makeStyles(theme => ({
  page: { minHeight: "100vh", background: "#27364c", padding: "0 12px 42px", color: "#332235" },
  hero: { width: "calc(100% + 24px)", minHeight: 288, margin: "0 -12px", padding: "34px 12px 30px", background: "linear-gradient(90deg,rgba(39,54,76,.98),rgba(77,104,66,.9) 48%,rgba(201,88,57,.66)),#27364c", borderBottom: "5px solid #101018", display: "flex", alignItems: "center", [theme.breakpoints.down("xs")]: { minHeight: 250, paddingTop: 26, paddingBottom: 24 } },
  heroInner: { width: "100%", maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, [theme.breakpoints.down("sm")]: { flexDirection: "column", alignItems: "flex-start" } },
  heroTitle: { color: "#fff8d6", font: "900 46px/1 'Courier New',monospace", margin: 0, textShadow: "3px 3px 0 rgba(16,16,24,.4)", [theme.breakpoints.down("xs")]: { fontSize: 34 } },
  heroSubtitle: { color: "#fff8d6", maxWidth: 710, font: "900 18px/1.35 'Courier New',monospace", margin: "12px 0 0" },
  logoPanel: { flex: "0 0 auto", background: "#e8ad76", border: "5px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.24)", padding: "18px 22px", transform: "rotate(1.5deg)", [theme.breakpoints.down("sm")]: { transform: "none" } },
  logo: { width: 280, maxWidth: "62vw", display: "block", imageRendering: "pixelated" },
  referral: { width: "calc(100% + 24px)", margin: "-5px -12px 0", padding: "7px 16px 9px", backgroundColor: "#b95791", borderTop: "4px solid #1d1730", borderRight: "5px solid #4c2b67", borderBottom: "5px solid #4c2b67", borderLeft: "4px solid #fb6f8c", boxShadow: "inset 0 4px 0 #f78ab2,inset 0 -4px 0 #f16383", display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap" },
  referralIcon: { width: 16, height: 22, imageRendering: "pixelated" },
  referralText: { color: "#fff4ff", fontFamily: "SmallestPixel7,monospace", fontSize: 18, fontWeight: 900, textShadow: "2px 2px 0 rgba(43,28,64,.65)" },
  referralLink: { display: "inline-flex", alignItems: "center", gap: 7, padding: "4px 12px", color: "#2d2739", background: "#d8def2", border: "3px solid #12162a", boxShadow: "4px 4px 0 #f5f3ef,0 5px 0 #12162a", fontFamily: "SmallestPixel7,monospace", fontSize: 22, textDecoration: "none", "&:hover": { color: "#2d2739", textDecoration: "none", transform: "translate(2px,2px)" } },
  referralLinkIcon: { width: 17, height: 17 },
  nav: { width: "calc(100% + 24px)", margin: "0 -12px 18px", padding: "8px 12px", borderBottom: "4px solid #101018", display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" },
  navLink: { minHeight: 32, display: "inline-flex", alignItems: "center", color: "#fff8d6", background: "#1f5da8", border: "3px solid #101018", borderRadius: 8, font: "900 18px/1 SmallestPixel7,'Courier New',monospace", padding: "4px 12px", textDecoration: "none", "&:hover": { color: "#fff8d6", textDecoration: "none", filter: "brightness(1.08)" } },
  activeNav: { color: "#20192b", background: "#f4c08a", boxShadow: "inset 0 0 0 2px #fff8d6" },
  shell: { maxWidth: 1380, margin: "0 auto", fontFamily: "'Courier New',monospace" },
  panel: { background: "#e8ad76", border: "4px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.22)", overflow: "hidden" },
  panelHeader: { padding: "18px 20px 12px", borderBottom: "4px solid rgba(51,34,53,.25)" },
  title: { margin: 0, fontSize: 28, fontWeight: 900 },
  intro: { margin: "7px 0 0", fontWeight: 900, lineHeight: 1.35 },
  tabs: { display: "flex", gap: 10, overflowX: "auto", padding: 18 },
  tab: { display: "inline-flex", alignItems: "center", gap: 7, border: "3px solid #101018", borderRadius: 8, background: "#f1c08a", color: "#20192b", cursor: "pointer", font: "900 18px/1 'Courier New',monospace", padding: "8px 12px", whiteSpace: "nowrap", boxShadow: "inset 0 0 0 3px rgba(255,255,255,.24)" },
  activeTab: { color: "#fff8d6" },
  seasonIcon: { width: 25, height: 25, imageRendering: "pixelated" },
  seasonFilter: { display: "inline-flex", alignItems: "center", gap: 8, padding: "7px 11px", color: "#20192b", background: "#ffe889", border: "3px solid #101018", borderRadius: 8, fontSize: 13, fontWeight: 900, whiteSpace: "nowrap", cursor: "pointer" },
  seasonCheckbox: { width: 20, height: 20, margin: 0, accentColor: "#178f5a", cursor: "pointer" },
  layout: { display: "grid", gridTemplateColumns: "minmax(0,1fr) 390px", gap: 18, padding: "0 18px 18px", alignItems: "start", [theme.breakpoints.down("sm")]: { gridTemplateColumns: "1fr" } },
  queue: { background: "#f3c08a", border: "3px solid #332235", borderRadius: 10, overflow: "hidden", boxShadow: "inset 0 0 0 2px #ffd6a3" },
  queueHeader: { padding: "13px 14px", background: "#fff0bd", borderBottom: "3px solid #332235" },
  queueTitle: { margin: 0, fontSize: 21, fontWeight: 900 },
  queueCopy: { margin: "4px 0 0", fontSize: 13, fontWeight: 900 },
  cropList: { display: "grid", gap: 5, listStyle: "none", margin: 0, padding: 8 },
  machineSection: { margin: "5px 9px 10px", background: "#fff0bd", border: "3px solid #332235", borderRadius: 9, overflow: "hidden", boxShadow: "inset 0 0 0 2px #ffe889" },
  machineSectionHeader: { padding: "10px 12px", background: "#ffe889", borderBottom: "3px solid #332235" },
  machineSectionTitle: { display: "flex", alignItems: "center", gap: 8, margin: 0, fontSize: 18, fontWeight: 900 },
  machineSectionCopy: { margin: "4px 0 0", fontSize: 12, fontWeight: 900, lineHeight: 1.35 },
  cropRow: { display: "grid", gridTemplateColumns: "40px minmax(150px,1fr) minmax(135px,auto) 138px", alignItems: "center", gap: 8, padding: "7px 9px", background: "#f5d9a7", border: "2px solid #6e4650", borderRadius: 8, boxShadow: "inset 0 0 0 2px rgba(255,255,255,.25)", [theme.breakpoints.down("xs")]: { gridTemplateColumns: "36px minmax(0,1fr) auto", gap: 6 } },
  cropIcon: { width: 36, height: 36, objectFit: "contain", imageRendering: "pixelated", [theme.breakpoints.down("xs")]: { width: 32, height: 32 } },
  cropName: { margin: 0, fontSize: 18, fontWeight: 900 },
  cropMeta: { display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", marginTop: 2 },
  tier: { fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 },
  cropSeasons: { display: "inline-flex", alignItems: "center", gap: 3 },
  cropSeasonIcon: { width: 20, height: 20, objectFit: "contain", imageRendering: "pixelated" },
  oldTime: { display: "block", color: "#332235", fontSize: 15, fontWeight: 900 },
  timers: { textAlign: "right", whiteSpace: "nowrap", [theme.breakpoints.down("xs")]: { gridColumn: 3, gridRow: "1 / span 2", alignSelf: "center" } },
  badges: { display: "flex", justifyContent: "flex-end", gap: 4, flexWrap: "wrap", [theme.breakpoints.down("xs")]: { gridColumn: 2, justifyContent: "flex-start" } },
  badge: { display: "inline-flex", alignItems: "center", gap: 3, minHeight: 21, padding: "2px 5px", border: "2px solid #101018", borderRadius: 5, fontSize: 10, lineHeight: 1, fontWeight: 900, whiteSpace: "nowrap" },
  badgeIcon: { width: 16, height: 16, objectFit: "contain", imageRendering: "pixelated", flex: "0 0 auto" },
  headingIcon: { width: 34, height: 34, objectFit: "contain", imageRendering: "pixelated", flex: "0 0 auto" },
  lavaBadge: { color: "#fff", background: "#c95839", boxShadow: "inset 0 0 0 2px #f4a35f" },
  feedBadge: { color: "#fff", background: "#3d8a5d", boxShadow: "inset 0 0 0 2px #90d58e" },
  machineBadge: { color: "#20192b", background: "#ffe889", boxShadow: "inset 0 0 0 2px #fff8d6" },
  compostBadge: { color: "#fff", background: "#75516a", boxShadow: "inset 0 0 0 2px #b98aac" },
  side: { display: "grid", gap: 14 },
  alert: { padding: 13, color: "#fff8d6", background: "#9b392f", border: "4px solid #101018", borderRadius: 10, boxShadow: "inset 0 0 0 3px #df6a45" },
  alertTitle: { display: "flex", alignItems: "center", gap: 8, margin: 0, fontSize: 21, fontWeight: 900 },
  alertCopy: { margin: "5px 0 11px", fontSize: 13, fontWeight: 900, lineHeight: 1.35 },
  requirement: { display: "grid", gridTemplateColumns: "30px minmax(0,1fr) auto", gap: 7, alignItems: "center", padding: "6px 7px", background: "rgba(16,16,24,.28)", borderBottom: "1px solid rgba(255,255,255,.25)", "&:last-child": { borderBottom: 0 } },
  requirementIcon: { width: 27, height: 27, objectFit: "contain", imageRendering: "pixelated", fontSize: 19, textAlign: "center" },
  requirementName: { fontSize: 14, fontWeight: 900 },
  requirementQty: { color: "#fff2a8", fontSize: 14, fontWeight: 900 },
  feedPanel: { padding: 13, background: "#d8efc5", border: "3px solid #101018", borderRadius: 10, boxShadow: "inset 0 0 0 3px #90d58e" },
  feedTitle: { display: "flex", alignItems: "center", gap: 8, margin: 0, fontSize: 19, fontWeight: 900 },
  feedCopy: { margin: "5px 0 10px", fontSize: 13, fontWeight: 900, lineHeight: 1.35 },
  feedGrid: { display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 6 },
  feedCrop: { display: "flex", flexDirection: "column", alignItems: "center", gap: 3, padding: 7, background: "#fff8d6", border: "2px solid #332235", borderRadius: 7, fontSize: 11, fontWeight: 900 },
  unavailableFeedCrop: { color: "#716a70", background: "#d8d3c8", boxShadow: "inset 0 0 0 2px rgba(255,255,255,.28)", "& img": { filter: "grayscale(.7)", opacity: .68 } },
  liveStatus: { display: "inline-flex", alignItems: "center", gap: 6, marginTop: 3, padding: "4px 7px", color: "#fff", background: "#178f5a", border: "2px solid #101018", borderRadius: 5, boxShadow: "inset 0 0 0 2px #52c98a", fontSize: 11, fontWeight: 900, textTransform: "uppercase", letterSpacing: .5 },
  liveDot: { width: 9, height: 9, background: "#ef3038", border: "2px solid #7f1018", borderRadius: "50%", boxShadow: "0 0 0 2px rgba(239,48,56,.2)", flex: "0 0 auto" },
  unavailableStatus: { marginTop: 3, color: "#75516a", fontSize: 10, fontWeight: 900, textTransform: "uppercase", letterSpacing: .4 },
  feedIcon: { width: 36, height: 36, objectFit: "contain", imageRendering: "pixelated" },
  compostPanel: { padding: 13, background: "#e8d5c1", border: "3px solid #101018", borderRadius: 10, boxShadow: "inset 0 0 0 3px #c99a72" },
  compostTitle: { display: "flex", alignItems: "center", gap: 8, margin: 0, fontSize: 19, fontWeight: 900 },
  compostCopy: { margin: "5px 0 10px", fontSize: 13, fontWeight: 900, lineHeight: 1.35 },
  composterList: { display: "grid", gap: 7 },
  composter: { overflow: "hidden", background: "#fff0d2", border: "2px solid #332235", borderRadius: 7 },
  composterName: { minHeight: 37, display: "flex", alignItems: "center", gap: 7, margin: 0, padding: "4px 8px", color: "#fff", background: "#75516a", borderBottom: "2px solid #332235", fontSize: 13, fontWeight: 900 },
  composterImage: { width: 28, height: 28, objectFit: "contain", imageRendering: "pixelated", flex: "0 0 auto" },
  compostItem: { display: "grid", gridTemplateColumns: "25px minmax(0,1fr) auto", gap: 6, alignItems: "center", padding: "5px 7px", borderBottom: "1px solid rgba(51,34,53,.22)", "&:last-child": { borderBottom: 0 } },
  compostIcon: { width: 23, height: 23, objectFit: "contain", imageRendering: "pixelated", fontSize: 18, textAlign: "center" },
  compostItemName: { fontSize: 13, fontWeight: 900 },
  compostQty: { color: "#75516a", fontSize: 13, fontWeight: 900 },
  calendar: { marginTop: 18, background: "#e8ad76", border: "4px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.22)", overflow: "hidden" },
  calendarBody: { overflowX: "auto", padding: 12 },
  chart: { minWidth: 720 },
  chartHeader: { display: "grid", gridTemplateColumns: "180px repeat(4,1fr)", gap: 4, marginBottom: 4 },
  chartSeason: { display: "flex", alignItems: "center", justifyContent: "center", gap: 5, padding: 7, color: "#fff", border: "2px solid #101018", borderRadius: 5, fontSize: 13, fontWeight: 900 },
  chartRow: { display: "grid", gridTemplateColumns: "180px repeat(4,1fr)", gap: 4, marginBottom: 4 },
  chartCrop: { display: "flex", alignItems: "center", gap: 7, padding: 5, background: "#fff0bd", border: "2px solid #6e4650", borderRadius: 5, fontSize: 13, fontWeight: 900 },
  chartIcon: { width: 25, height: 25, objectFit: "contain", imageRendering: "pixelated" },
  chartCell: { minHeight: 37, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(255,248,214,.3)", border: "2px solid rgba(110,70,80,.4)", borderRadius: 5, fontSize: 11, fontWeight: 900 },
  available: { color: "#fff", background: "#178f5a", borderColor: "#101018", boxShadow: "inset 0 0 0 2px #52c98a" },
  machineAvailable: { color: "#20192b", background: "#ffe889", borderColor: "#101018", boxShadow: "inset 0 0 0 2px #fff8d6", textAlign: "center" }
}));

const CropImage = ({ name, className }) => images[name]
  ? <img src={images[name]} alt="" className={className} />
  : <span className={className}>{fallbackIcons[name] || "🌱"}</span>;

const CropSeasonIcons = ({ crop, classes }) => <span className={classes.cropSeasons} aria-label={`${crop.name} is naturally available in ${crop.seasons.join(", ")}`}>
  {crop.seasons.map(seasonId => {
    const season = seasons.find(item => item.id === seasonId);
    return <img key={seasonId} src={season.icon} alt="" title={season.label} className={classes.cropSeasonIcon} />;
  })}
</span>;

const SunflowerLandCrops = () => {
  const classes = useStyles();
  const [activeSeason, setActiveSeason] = useState(() => getSunflowerSeasonClock().seasonId);
  const [singleSeasonOnly, setSingleSeasonOnly] = useState(false);
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const seasonCrops = useMemo(() => crops
    .filter(crop => crop.seasons.includes(activeSeason) && (!singleSeasonOnly || crop.seasons.length === 1))
    .sort(compareCropPriority(activeSeason)), [activeSeason, singleSeasonOnly]);
  const machineOnlyCrops = useMemo(() => crops
    .filter(crop => cropMachineCrops.has(crop.name) && !crop.seasons.includes(activeSeason))
    .sort((a, b) => tierOrder[a.tier] - tierOrder[b.tier]), [activeSeason]);
  const chartCrops = useMemo(() => [...crops].sort((a, b) => {
    const machineDifference = Number(cropMachineCrops.has(a.name)) - Number(cropMachineCrops.has(b.name));
    return machineDifference || tierOrder[a.tier] - tierOrder[b.tier];
  }), []);
  const currentSeason = seasons.find(season => season.id === activeSeason);
  const lava = lavaRequirements[activeSeason];

  return <div className={classes.page}>
    <Helmet>
      <title>Sunflower Land Crops by Season & Lava Pit Guide | Chuck Fresco</title>
      <meta name="description" content="Plan Sunflower Land crops by season, check regular grow timers, protect animal feed, and stock every Lava Pit requirement." />
      <meta name="keywords" content="Sunflower Land crops, crop timers, crops by season, Lava Pit requirements, Wheat, Barley, Corn, animal feed" />
      <link rel="canonical" href="https://chuckfresco.com/sfl/crops" />
      <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "WebPage", name: "Sunflower Land Crops by Season & Lava Pit Guide", url: "https://chuckfresco.com/sfl/crops", description: "Seasonal crop availability, regular crop timers, animal feed priorities, and Lava Pit requirements for Sunflower Land.", about: { "@type": "VideoGame", name: "Sunflower Land" } })}</script>
    </Helmet>
    <header className={classes.hero}><div className={classes.heroInner}><div><h1 className={classes.heroTitle}>Sunflower Land Crops</h1><p className={classes.heroSubtitle}>Know what to plant each season, protect your animal feed, and finish the Lava Pit stockpile before the season changes.</p></div><div className={classes.logoPanel}><img src={sunflowerLogo} alt="Sunflower Land" className={classes.logo} /></div></div></header>
    <div className={classes.referral}><img src={lightningIcon} alt="" className={classes.referralIcon} /><span className={classes.referralText}>If you'd like to support me, use my referral code:</span><a className={classes.referralLink} href={referralUrl} target="_blank" rel="noopener noreferrer">ChuckFresco<OpenInNewIcon className={classes.referralLinkIcon} aria-hidden="true" /></a></div>
    <nav className={classes.nav} aria-label="Sunflower Land pages"><Link className={classes.navLink} to="/sfl/helpers">Leaderboard</Link><Link className={classes.navLink} to="/sfl/fishing">Fishing</Link><Link className={classes.navLink} to="/sfl/fish-market">Fish Market</Link><Link className={`${classes.navLink} ${classes.activeNav}`} to="/sfl/crops">Crops</Link></nav>
    <main className={classes.shell}>
      <section className={classes.panel} aria-labelledby="season-plan-title"><div className={classes.panelHeader}><h2 className={classes.title} id="season-plan-title">What to craft this season</h2><p className={classes.intro}>Lava Pit Priority comes first, followed by grouped animal feed, then Advanced, Medium, and Basic crops. Within each tier, Lava Pit crops come first. Stopwatch values are the regular crop timers.</p></div>
        <nav className={classes.tabs} aria-label="Crop season">{seasons.map(season => <button type="button" key={season.id} className={`${classes.tab} ${activeSeason === season.id ? classes.activeTab : ""}`} style={activeSeason === season.id ? { background: season.color, boxShadow: `inset 0 0 0 3px ${season.shadow}` } : undefined} onClick={() => setActiveSeason(season.id)} aria-pressed={activeSeason === season.id}><img src={season.icon} alt="" className={classes.seasonIcon} />{season.label}</button>)}<label className={classes.seasonFilter}><input className={classes.seasonCheckbox} type="checkbox" checked={singleSeasonOnly} onChange={event => setSingleSeasonOnly(event.target.checked)} />Single-season crops only</label></nav>
        <div className={classes.layout}>
          <div className={classes.queue}><div className={classes.queueHeader}><h3 className={classes.queueTitle}>{currentSeason.label} planting queue</h3><p className={classes.queueCopy}>{singleSeasonOnly ? `Only crops exclusive to ${currentSeason.label} are shown.` : "Listed by priority: Lava Pit, animal feed, then Advanced, Medium, and Basic crops. Within each tier, Lava Pit crops come first."}</p></div><ol className={classes.cropList}>{seasonCrops.map(crop => <li className={classes.cropRow} key={crop.name}><CropImage name={crop.name} className={classes.cropIcon} /><div><h4 className={classes.cropName}>{crop.name}</h4><div className={classes.cropMeta}><span className={classes.tier}>{crop.tier} crop</span><CropSeasonIcons crop={crop} classes={classes} /></div></div><div className={classes.badges}>{crop.lava && crop.lava[activeSeason] && <span className={`${classes.badge} ${classes.lavaBadge}`}><img src={lavaPitIcon} alt="" className={classes.badgeIcon} />Lava Pit ×{crop.lava[activeSeason].toLocaleString()}</span>}{crop.feed && <span className={`${classes.badge} ${classes.feedBadge}`}><img src={animalFeedIcon} alt="" className={classes.badgeIcon} />Animal feed</span>}{cropMachineCrops.has(crop.name) && <span className={`${classes.badge} ${classes.machineBadge}`}><img src={cropMachineIcon} alt="" className={classes.badgeIcon} />Crop Machine</span>}{compostCrops.has(crop.name) && <span className={`${classes.badge} ${classes.compostBadge}`}>Compost</span>}</div><div className={classes.timers}><span className={classes.oldTime}>⏱ {crop.oldTime}</span></div></li>)}</ol>{!singleSeasonOnly && <section className={classes.machineSection} aria-labelledby="machine-only-title"><div className={classes.machineSectionHeader}><h4 className={classes.machineSectionTitle} id="machine-only-title"><img src={cropMachineIcon} alt="" className={classes.headingIcon} />Crop Machine</h4><p className={classes.machineSectionCopy}>These crops are not naturally available in {currentSeason.label}, but you can still plant them using the Crop Machine.</p></div><ol className={classes.cropList}>{machineOnlyCrops.map(crop => <li className={classes.cropRow} key={crop.name}><CropImage name={crop.name} className={classes.cropIcon} /><div><h4 className={classes.cropName}>{crop.name}</h4><div className={classes.cropMeta}><span className={classes.tier}>{crop.tier} crop</span><CropSeasonIcons crop={crop} classes={classes} /></div></div><div className={classes.badges}>{crop.lava && crop.lava[activeSeason] && <span className={`${classes.badge} ${classes.lavaBadge}`}><img src={lavaPitIcon} alt="" className={classes.badgeIcon} />Lava Pit ×{crop.lava[activeSeason].toLocaleString()}</span>}<span className={`${classes.badge} ${classes.machineBadge}`}><img src={cropMachineIcon} alt="" className={classes.badgeIcon} />Crop Machine</span>{compostCrops.has(crop.name) && <span className={`${classes.badge} ${classes.compostBadge}`}>Compost</span>}</div><div className={classes.timers}><span className={classes.oldTime}>⏱ {crop.oldTime}</span></div></li>)}</ol></section>}</div>
          <aside className={classes.side}>
            <section className={classes.alert} style={{ background: currentSeason.color, boxShadow: `inset 0 0 0 3px ${currentSeason.shadow}` }} aria-labelledby="lava-title"><h3 className={classes.alertTitle} id="lava-title"><img src={lavaPitIcon} alt="" className={classes.headingIcon} />{currentSeason.label} Lava Pit Priority</h3><p className={classes.alertCopy}><strong>Note: Reserve these materials before selling or crafting with them. Lava Pits ingredients change every season.</strong></p><div>{lava.items.map(item => <div className={classes.requirement} key={item.name}><CropImage name={item.name} className={classes.requirementIcon} /><span className={classes.requirementName}>{item.name}</span><span className={classes.requirementQty}>×{item.qty.toLocaleString()}</span></div>)}</div></section>
            <section className={classes.feedPanel} aria-labelledby="feed-title"><h3 className={classes.feedTitle} id="feed-title"><img src={animalFeedIcon} alt="" className={classes.headingIcon} />Never run out of animal feed</h3><p className={classes.feedCopy}>Keep Wheat, Barley, and Corn in reserve. Plant the available feed crop whenever its season opens.</p><div className={classes.feedGrid}>{["Wheat", "Barley", "Corn"].map(name => {
              const isAvailable = crops.find(crop => crop.name === name).seasons.includes(activeSeason);
              return <div className={`${classes.feedCrop} ${!isAvailable ? classes.unavailableFeedCrop : ""}`} key={name}><CropImage name={name} className={classes.feedIcon} /><span>{name}</span>{isAvailable ? <span className={classes.liveStatus}><span className={classes.liveDot} aria-hidden="true" />Plant now</span> : <span className={classes.unavailableStatus}>Not in season</span>}</div>;
            })}</div></section>
            <section className={classes.compostPanel} aria-labelledby="compost-title">
              <h3 className={classes.compostTitle} id="compost-title">♻️ {currentSeason.label} Compost</h3>
              <p className={classes.compostCopy}>Reserve these ingredients for this season's composters.</p>
              <div className={classes.composterList}>
                {composters.map(composter => <div className={classes.composter} key={composter.id}>
                  <h4 className={classes.composterName}><img src={composter.image} alt="" className={classes.composterImage} />{composter.label}</h4>
                  {compostRequirements[activeSeason][composter.id].map(item => <div className={classes.compostItem} key={item.name}>
                    <CropImage name={item.name} className={classes.compostIcon} />
                    <span className={classes.compostItemName}>{item.name}</span>
                    <span className={classes.compostQty}>×{item.qty}</span>
                  </div>)}
                </div>)}
              </div>
            </section>
          </aside>
        </div>
      </section>
      <section className={classes.calendar} aria-labelledby="calendar-title"><div className={classes.panelHeader}><h2 className={classes.title} id="calendar-title">Crop availability chart</h2><p className={classes.intro}>Green shows normal seasonal availability. Gold shows crops that can also be planted in the Crop Machine during any season; those crops are grouped at the bottom.</p></div><div className={classes.calendarBody}><div className={classes.chart}><div className={classes.chartHeader}><span />{seasons.map(season => <div className={classes.chartSeason} style={{ background: season.color }} key={season.id}><img src={season.icon} alt="" className={classes.seasonIcon} />{season.label}</div>)}</div>{chartCrops.map(crop => <div className={classes.chartRow} key={crop.name}><div className={classes.chartCrop}><CropImage name={crop.name} className={classes.chartIcon} /><span>{crop.name}<br /><small>{cropMachineCrops.has(crop.name) ? "Crop Machine" : crop.tier}</small></span></div>{seasons.map(season => {
          const machineCrop = cropMachineCrops.has(crop.name);
          const naturalSeason = crop.seasons.includes(season.id);
          return <div className={`${classes.chartCell} ${machineCrop ? classes.machineAvailable : naturalSeason ? classes.available : ""}`} key={season.id}>{machineCrop ? naturalSeason ? "Season + Machine" : "Crop Machine" : naturalSeason ? "Available" : "—"}</div>;
        })}</div>)}</div></div></section>
    </main>
  </div>;
};

export default SunflowerLandCrops;
