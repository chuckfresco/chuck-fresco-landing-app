import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { getSunflowerSeasonClock } from "../../utils/sunflowerSeason";

const asset = name => encodeURI(`/assets/sunflower-land/fishing/${name}`);
const seasonAssetPath = "/assets/sunflower-land/seasons";
const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const lightningIcon = "/assets/sunflower-land/icons/lightning.png";
const referralUrl = "https://sunflower-land.com/play/?ref=ChuckFresco";

const images = {
  "Fish Flake": asset("imgi_76_Fish Flake.png"), "Fish Stick": asset("imgi_99_Fish Stick.png"),
  "Crab Stick": asset("imgi_102_Crab Stick.png"), "Fish Oil": asset("imgi_101_Fish Oil.png"),
  Anchovy: asset("imgi_11_Anchovy.png"), Butterflyfish: asset("imgi_84_Butterflyfish.png"), Halibut: asset("imgi_123_Halibut.png"),
  Blowfish: asset("imgi_127_Blowfish.png"), Porgy: asset("imgi_133_Porgy.png"), Clownfish: asset("imgi_86_Clownfish.png"),
  "Sea Bass": asset("imgi_122_Sea Bass.png"), "Sea Horse": asset("imgi_87_Sea Horse.png"), Muskellunge: asset("imgi_124_Muskellunge.png"),
  "Horse Mackerel": asset("imgi_88_Horse Mackerel.png"), Squid: asset("imgi_81_Squid.png"), "Moray Eel": asset("imgi_93_Moray Eel.png"),
  "Olive Flounder": asset("imgi_125_Olive Flounder.png"), Tilapia: asset("imgi_103_Tilapia.png"), Napoleanfish: asset("imgi_94_Napoleanfish.png"),
  Surgeonfish: asset("imgi_95_Surgeonfish.png"), "Zebra Turkeyfish": asset("imgi_85_Zebra Turkeyfish.png"), Walleye: asset("imgi_128_Walleye.png"),
  Angelfish: asset("imgi_96_Angelfish.png"), Ray: asset("imgi_97_Ray.png"), "Rock Blackfish": asset("imgi_126_Rock Blackfish.png"),
  "Hammerhead shark": asset("imgi_98_Hammerhead shark.png"), Tuna: asset("imgi_73_Tuna.png"), "Mahi Mahi": asset("imgi_104_Mahi Mahi.png"),
  "Blue Marlin": asset("imgi_105_Blue Marlin.png"), Weakfish: asset("imgi_134_Weakfish.png"), Oarfish: asset("imgi_129_Oarfish.png"),
  "Football fish": asset("imgi_130_Football fish.png"), Sunfish: asset("imgi_83_Sunfish.png"), Cobia: asset("imgi_113_Cobia.png"),
  "Barred Knifejaw": asset("imgi_100_Barred Knifejaw.png"), Trout: asset("imgi_132_Trout.png"), Coelacanth: asset("imgi_131_Coelacanth.png"),
  "Saw Shark": asset("imgi_109_Saw Shark.png"), "Whale Shark": asset("imgi_107_Whale Shark.png"), "White Shark": asset("imgi_111_White Shark.png"),
  Parrotfish: asset("imgi_106_Parrotfish.png"), Crab: asset("imgi_54_Crab.png"), "Red Snapper": asset("imgi_62_Red Snapper.png"),
  Earthworm: asset("imgi_37_Earthworm.png"), Grub: asset("imgi_89_Grub.png"), "Red Wiggler": asset("imgi_90_Red Wiggler.png"), "Fishing Lure": asset("imgi_91_Fishing Lure.png"),
  Carrot: asset("imgi_38_Carrot.png"), Egg: asset("imgi_39_Egg.png"), Banana: asset("imgi_65_Banana.png"), Wheat: asset("imgi_68_Wheat.png"), Yam: asset("imgi_50_Yam.png"),
  Sunflower: asset("imgi_45_Sunflower.png"), Cabbage: asset("imgi_51_Cabbage.png"), Broccoli: asset("imgi_58_Broccoli.png"), Iron: asset("imgi_79_Iron.png"), Blueberry: asset("imgi_44_Blueberry.png"),
  Corn: asset("imgi_74_Corn.png"), Gold: asset("imgi_72_Gold.png"), Turnip: asset("imgi_49_Turnip.png"), Kale: asset("imgi_77_Kale.png"), Rhubarb: asset("imgi_48_Rhubarb.png"),
  Seaweed: asset("imgi_52_Seaweed.png"), Onion: asset("imgi_46_Onion.png"), Apple: asset("imgi_57_Apple.png"), Honey: asset("imgi_69_Honey.png"), "Speed Chicken": asset("imgi_110_Speed Chicken.png"),
  Eggplant: asset("imgi_43_Eggplant.png"), Orange: asset("imgi_61_Orange.png"), "Wild Mushroom": asset("imgi_47_Wild Mushroom.png"), Zucchini: asset("imgi_64_Zucchini.png"),
  Artichoke: asset("imgi_67_Artichoke.png"), Pepper: asset("imgi_60_Pepper.png"), Beetroot: asset("imgi_59_Beetroot.png"), "Fat Chicken": asset("imgi_108_Fat Chicken.png"), "Radiant Ray": asset("imgi_116_Radiant Ray.png")
};

const seasons = [
  { id: "spring", label: "Spring", icon: `${seasonAssetPath}/spring.webp`, color: "#3d8a5d", shadow: "#90d58e" },
  { id: "summer", label: "Summer", icon: `${seasonAssetPath}/summer.webp`, color: "#d99a22", shadow: "#ffe889" },
  { id: "autumn", label: "Autumn", icon: `${seasonAssetPath}/autumn.webp`, color: "#c95839", shadow: "#f4a35f" },
  { id: "winter", label: "Winter", icon: `${seasonAssetPath}/winter.webp`, color: "#2876d5", shadow: "#8ed8ff" }
];

const recipes = {
  autumn: {
    "Fish Flake": [["Anchovy", 4], ["Halibut", 2], ["Muskellunge", 2]],
    "Fish Stick": [["Red Snapper", 6], ["Moray Eel", 2], ["Napoleanfish", 2]],
    "Crab Stick": [["Crab", 1], ["Shrimp", 1], ["Lobster", 1], ["Barnacle", 1]],
    "Fish Oil": [["Tuna", 8], ["Mahi Mahi", 4], ["Crab", 2]]
  },
  winter: {
    "Fish Flake": [["Anchovy", 4], ["Blowfish", 2], ["Clownfish", 2]],
    "Fish Stick": [["Red Snapper", 6], ["Walleye", 2], ["Angelfish", 2]],
    "Crab Stick": [["Crab", 1], ["Oyster", 1], ["Isopod", 1], ["Garden Eel", 1]],
    "Fish Oil": [["Tuna", 8], ["Blue Marlin", 2], ["Football fish", 2]]
  },
  spring: {
    "Fish Flake": [["Anchovy", 4], ["Porgy", 2], ["Sea Bass", 2]],
    "Fish Stick": [["Red Snapper", 6], ["Olive Flounder", 2], ["Zebra Turkeyfish", 2]],
    "Crab Stick": [["Crab", 1], ["Blue Crab", 1], ["Hermit Crab", 1], ["Sea Slug", 1]],
    "Fish Oil": [["Tuna", 8], ["Weakfish", 2], ["Oarfish", 2]]
  },
  summer: {
    "Fish Flake": [["Anchovy", 4], ["Butterflyfish", 2], ["Sea Horse", 2]],
    "Fish Stick": [["Red Snapper", 6], ["Surgeonfish", 2], ["Tilapia", 2]],
    "Crab Stick": [["Crab", 1], ["Mussel", 1], ["Isopod", 1], ["Sea Snail", 1]],
    "Fish Oil": [["Tuna", 8], ["Cobia", 2], ["Sunfish", 2]]
  }
};

const guaranteed = {
  "Fish Flake": ["Anchovy", "Butterflyfish", "Halibut", "Blowfish", "Porgy", "Clownfish", "Sea Bass", "Sea Horse", "Muskellunge", "Horse Mackerel", "Squid", "Moray Eel", "Olive Flounder", "Tilapia", "Napoleanfish", "Surgeonfish", "Zebra Turkeyfish", "Walleye", "Angelfish", "Ray"],
  "Fish Stick": ["Rock Blackfish", "Hammerhead shark", "Tuna", "Mahi Mahi", "Blue Marlin", "Weakfish", "Oarfish", "Football fish", "Sunfish", "Cobia"],
  "Fish Oil": ["Barred Knifejaw", "Trout", "Coelacanth", "Saw Shark"],
  "Crab Stick": ["Barred Knifejaw", "Whale Shark", "White Shark", "Parrotfish"]
};

const fishInfo = {
  Anchovy: [["Earthworm"], ["Carrot", "Egg"]], Angelfish: [["Grub", "Fishing Lure"], ["Banana"]], "Barred Knifejaw": [["Grub", "Fishing Lure"], ["Anchovy"]], "Blue Marlin": [["Grub", "Red Wiggler", "Fishing Lure"], ["Wheat"]], Blowfish: [["Earthworm"], ["Yam"]], Butterflyfish: [["Earthworm"], ["Sunflower"]], Clownfish: [["Earthworm"], ["Cabbage"]], Cobia: [["Red Wiggler"], ["Broccoli"]], Coelacanth: [["Red Wiggler", "Fishing Lure"], ["Cabbage"]], "Football fish": [["Red Wiggler", "Fishing Lure"], ["Sunflower"]], Halibut: [["Earthworm"], ["Anchovy"]], "Hammerhead shark": [["Grub", "Fishing Lure"], ["Iron"]], "Horse Mackerel": [["Earthworm"], ["Blueberry"]], "Mahi Mahi": [["Grub", "Red Wiggler", "Fishing Lure"], ["Corn"]], "Moray Eel": [["Earthworm", "Grub", "Fishing Lure"], ["Gold"]], Muskellunge: [["Earthworm"], ["Turnip"]], Napoleanfish: [["Grub", "Fishing Lure"], ["Carrot"]], Oarfish: [["Red Wiggler", "Fishing Lure"], ["Kale"]], "Olive Flounder": [["Earthworm", "Grub", "Fishing Lure"], ["Rhubarb"]], Parrotfish: [["Red Wiggler", "Fishing Lure"], ["Seaweed"]], Porgy: [["Earthworm"], ["Yam"]], Ray: [["Grub", "Fishing Lure"], ["Squid"]], "Rock Blackfish": [["Grub"], ["Onion"]], "Saw Shark": [["Red Wiggler", "Fishing Lure"], ["Red Snapper", "Speed Chicken"]], "Sea Bass": [["Earthworm"], ["Anchovy"]], "Sea Horse": [["Earthworm"], ["Seaweed"]], Squid: [["Earthworm"], ["Eggplant", "Onion"]], Sunfish: [["Red Wiggler", "Fishing Lure"], ["Horse Mackerel"]], Surgeonfish: [["Grub", "Fishing Lure"], ["Orange"]], Trout: [["Red Wiggler"], ["Pepper"]], Tuna: [["Grub", "Red Wiggler", "Fishing Lure"], ["Orange", "Wild Mushroom"]], Tilapia: [["Grub"], ["Zucchini"]], Walleye: [["Grub"], ["Broccoli"]], Weakfish: [["Red Wiggler"], ["Artichoke"]], "Whale Shark": [["Red Wiggler", "Fishing Lure"], ["Crab", "Fat Chicken"]], "White Shark": [["Red Wiggler", "Fishing Lure"], ["Tuna"]], "Zebra Turkeyfish": [["Grub", "Fishing Lure"], ["Beetroot", "Rhubarb"]]
};

const marvelSources = {
  Halibut: ["Starlight Tuna", "2.5%"], "Horse Mackerel": ["Starlight Tuna", "36%"], Clownfish: ["Twilight Anglerfish", "2.5%"], Parrotfish: ["Twilight Anglerfish", "21%"], "Rock Blackfish": ["Gilded Swordfish", "5%"], "White Shark": ["Gilded Swordfish", "30%"], Trout: ["Radiant Ray", "2%"], "Hammerhead shark": ["Radiant Ray", "5%"], "Mahi Mahi": ["Phantom Barracuda", "0.18%"], Squid: ["Phantom Barracuda", "5%"], Sunfish: ["Deep Sea Pig", "0.5%"], Coelacanth: ["Deep Sea Pig", "0.5%"], Surgeonfish: ["Deep Sea Slug", "0.1%"], "Barred Knifejaw": ["Deep Sea Slug", "1%"], Tuna: ["Crystal Shrimp", "0.8%"], "Sea Bass": ["Crystal Shrimp", "3%"]
};

const itemOrder = ["Fish Flake", "Fish Stick", "Crab Stick", "Fish Oil"];
const fallbackIcons = { Shrimp: "🦐", Lobster: "🦞", Barnacle: "🐚", Oyster: "🦪", Isopod: "🪨", "Garden Eel": "🪱", "Blue Crab": "🦀", "Hermit Crab": "🐚", "Sea Slug": "🐌", Mussel: "🦪", "Sea Snail": "🐚" };
const slugifyFishName = name => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const getInitialBait = () => {
  if (typeof window === "undefined") return "Fish Flake";
  const baitSlug = new URLSearchParams(window.location.search).get("bait");
  return itemOrder.find(bait => slugifyFishName(bait) === baitSlug) || "Fish Flake";
};

const useStyles = makeStyles(theme => ({
  page: { minHeight: "100vh", background: "#27364c", padding: "0 12px 42px", color: "#332235" },
  hero: { width: "calc(100% + 24px)", minHeight: 288, margin: "0 -12px", padding: "34px 12px 30px", background: "linear-gradient(90deg,rgba(39,54,76,.98),rgba(61,92,82,.9) 48%,rgba(40,118,213,.68)),#27364c", borderBottom: "5px solid #101018", display: "flex", alignItems: "center", overflow: "hidden", [theme.breakpoints.down("xs")]: { minHeight: 250, paddingTop: 26, paddingBottom: 24 } },
  heroInner: { width: "100%", maxWidth: 1180, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, [theme.breakpoints.down("sm")]: { flexDirection: "column", alignItems: "flex-start" } },
  heroTitle: { color: "#fff8d6", font: "900 46px/1 'Courier New',monospace", margin: 0, textShadow: "3px 3px 0 rgba(16,16,24,.4)", [theme.breakpoints.down("xs")]: { fontSize: 34 } },
  heroSubtitle: { color: "#fff8d6", maxWidth: 700, font: "900 18px/1.35 'Courier New',monospace", margin: "12px 0 0" },
  logoPanel: { flex: "0 0 auto", background: "#e8ad76", border: "5px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.24)", padding: "18px 22px", transform: "rotate(1.5deg)", [theme.breakpoints.down("sm")]: { transform: "none" } },
  logo: { width: 280, maxWidth: "62vw", display: "block", imageRendering: "pixelated" },
  referral: { width: "calc(100% + 24px)", margin: "-5px -12px 0", padding: "7px 16px 9px", backgroundColor: "#b95791", borderTop: "4px solid #1d1730", borderRight: "5px solid #4c2b67", borderBottom: "5px solid #4c2b67", borderLeft: "4px solid #fb6f8c", boxShadow: "inset 0 4px 0 #f78ab2,inset 0 -4px 0 #f16383", position: "relative", zIndex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 10, flexWrap: "wrap", [theme.breakpoints.down("xs")]: { justifyContent: "flex-start", padding: "7px 12px 9px", gap: 8 } },
  referralIcon: { width: 16, height: 22, imageRendering: "pixelated", flex: "0 0 auto" },
  referralText: { color: "#fff4ff", fontFamily: "SmallestPixel7,monospace", fontSize: 18, fontWeight: 900, lineHeight: 1, textAlign: "center", textShadow: "2px 2px 0 rgba(43,28,64,.65)", [theme.breakpoints.down("xs")]: { flex: "1 1 190px", fontSize: 15, textAlign: "left" } },
  referralLink: { display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 7, minHeight: 28, padding: "4px 12px", color: "#2d2739", backgroundColor: "#d8def2", border: "3px solid #12162a", boxShadow: "4px 4px 0 #f5f3ef,0 5px 0 #12162a", fontFamily: "SmallestPixel7,monospace", fontSize: 22, lineHeight: 1, textDecoration: "none", whiteSpace: "nowrap", transition: "transform 120ms ease,box-shadow 120ms ease", "&:hover": { color: "#2d2739", textDecoration: "none", transform: "translate(2px,2px)", boxShadow: "2px 2px 0 #f5f3ef,0 3px 0 #12162a" }, [theme.breakpoints.down("xs")]: { minHeight: 26, padding: "4px 8px", fontSize: 18 } },
  referralLinkIcon: { width: 17, height: 17, flex: "0 0 auto", strokeWidth: 3 },
  nav: { width: "calc(100% + 24px)", margin: "0 -12px 18px", padding: "8px 12px", borderBottom: "4px solid #101018", display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap" },
  navLink: { minHeight: 32, display: "inline-flex", alignItems: "center", color: "#fff8d6", background: "#1f5da8", border: "3px solid #101018", borderRadius: 8, font: "900 18px/1 SmallestPixel7,'Courier New',monospace", padding: "4px 12px", textDecoration: "none", "&:hover": { color: "#fff8d6", textDecoration: "none", filter: "brightness(1.08)" } },
  activeNav: { color: "#20192b", background: "#f4c08a", boxShadow: "inset 0 0 0 2px #fff8d6" },
  shell: { maxWidth: 1380, margin: "0 auto" },
  panel: { background: "#e8ad76", border: "4px solid #101018", borderRadius: 14, boxShadow: "inset 0 0 0 4px #f8d29b,8px 8px 0 rgba(0,0,0,.22)", fontFamily: "'Courier New',monospace" },
  panelHeader: { padding: "18px 20px 12px", borderBottom: "4px solid rgba(51,34,53,.25)" },
  title: { margin: 0, fontSize: 28, fontWeight: 900 },
  intro: { margin: "7px 0 0", fontWeight: 900, lineHeight: 1.35 },
  body: { padding: 18 },
  tabs: { display: "flex", gap: 10, overflowX: "auto", paddingBottom: 18 },
  tab: { display: "inline-flex", alignItems: "center", gap: 7, border: "3px solid #101018", borderRadius: 8, background: "#f1c08a", color: "#20192b", cursor: "pointer", font: "900 18px/1 'Courier New',monospace", padding: "8px 12px", whiteSpace: "nowrap", boxShadow: "inset 0 0 0 3px rgba(255,255,255,.24)" },
  activeTab: { color: "#fff8d6" }, seasonIcon: { width: 25, height: 25, imageRendering: "pixelated" },
  layout: { display: "grid", gridTemplateColumns: "minmax(0,1fr) 470px", gridTemplateAreas: '"baits catches" "guide catches"', columnGap: 18, rowGap: 14, alignItems: "start", [theme.breakpoints.down("md")]: { gridTemplateColumns: "minmax(0,1fr) 410px" }, [theme.breakpoints.down("sm")]: { gridTemplateColumns: "1fr", gridTemplateAreas: '"baits" "catches" "guide"' } },
  leftColumn: { gridArea: "baits", minWidth: 0 },
  recipeGrid: { display: "grid", gridTemplateColumns: "repeat(2,minmax(0,1fr))", gap: 9, [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr" } },
  card: { width: "100%", textAlign: "left", color: "#332235", background: "#f3c08a", border: "3px solid #332235", borderRadius: 9, padding: 9, cursor: "pointer", fontFamily: "inherit", boxShadow: "inset 0 0 0 2px #ffd6a3", transition: "transform 120ms ease", "&:hover": { transform: "translateY(-2px)" }, "&:focus-visible": { outline: "4px solid #2876d5", outlineOffset: 2 } },
  selectedCard: { background: "#fff0bd", boxShadow: "inset 0 0 0 4px #f4c94d,5px 5px 0 rgba(51,34,53,.25)" },
  cardHead: { display: "flex", alignItems: "center", gap: 7, paddingBottom: 6, marginBottom: 6, borderBottom: "2px solid rgba(51,34,53,.25)" },
  itemIcon: { width: 34, height: 34, objectFit: "contain", imageRendering: "pixelated" },
  itemName: { margin: 0, fontSize: 18, fontWeight: 900 },
  duration: { marginLeft: "auto", background: "#d8def2", border: "2px solid #2a2540", borderRadius: 5, padding: "2px 5px", fontSize: 12, fontWeight: 900, whiteSpace: "nowrap" },
  ingredient: { display: "flex", alignItems: "center", gap: 6, minHeight: 24, fontSize: 14, fontWeight: 900 },
  ingredientIcon: { width: 20, height: 20, objectFit: "contain", imageRendering: "pixelated" }, emoji: { width: 20, textAlign: "center", fontSize: 16 },
  qty: { marginLeft: "auto", background: "#fff8d6", border: "1px solid #6e4650", borderRadius: 4, padding: "1px 5px", fontSize: 12 },
  catchPanel: { gridArea: "catches", position: "static", overflow: "hidden" },
  catchHeader: { display: "flex", alignItems: "center", gap: 9, padding: "11px 13px", background: "#cd8e70", borderBottom: "4px solid #101018" },
  catchTitle: { margin: 0, fontSize: 20, fontWeight: 900 }, catchCopy: { margin: "4px 0 0", fontSize: 12, fontWeight: 900, lineHeight: 1.2 },
  catchList: { display: "grid", gap: 8, listStyle: "none", margin: 0, padding: 8, maxHeight: 900, overflowY: "auto", overscrollBehavior: "contain", scrollbarColor: "#75516a #f3c08a", [theme.breakpoints.down("sm")]: { maxHeight: 680 } },
  expandedCatchList: { maxHeight: "none", overflowY: "visible" },
  catch: { position: "relative", display: "grid", gridTemplateColumns: "32px minmax(0,1fr) auto", gridTemplateRows: "auto auto 1fr", columnGap: 8, alignItems: "center", padding: "8px 6px", color: "#fff", background: "#178f5a", border: "3px solid #111827", borderRadius: 10, boxShadow: "inset 0 0 0 2px #52c98a", fontFamily: "'Courier New', monospace", textDecoration: "none", transition: "filter 120ms ease, transform 120ms ease", "&:hover, &:focus": { color: "#fff", textDecoration: "none", filter: "brightness(1.08)", transform: "translateY(-1px)", outline: "none" }, "&:focus-visible": { boxShadow: "inset 0 0 0 2px #52c98a, 0 0 0 3px #fff2a8" } },
  marvelCatch: {},
  catchIcon: { width: 28, height: 28, gridColumn: 1, gridRow: "1 / span 3", alignSelf: "center", flex: "0 0 auto", objectFit: "contain", imageRendering: "pixelated" },
  catchName: { gridColumn: 2, gridRow: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", lineHeight: 1.1, fontSize: 16, fontWeight: 900, whiteSpace: "nowrap" },
  catchSubtitle: { gridColumn: 2, gridRow: 2, marginTop: 4, color: "#fff8d6", fontSize: 12, fontWeight: 900, lineHeight: 1.15, whiteSpace: "nowrap" },
  catchChance: { gridColumn: 3, gridRow: "1 / span 2", alignSelf: "center", paddingLeft: 4, color: "#fff2a8", fontSize: 18, fontWeight: 900, lineHeight: 1 },
  requirementIcons: { gridColumn: "2 / span 2", gridRow: 3, display: "flex", alignItems: "center", gap: 4, minHeight: 22, marginTop: 5 },
  requirementIconWrap: { position: "relative", display: "inline-flex" },
  requirementIcon: { width: 22, height: 22, objectFit: "contain", imageRendering: "pixelated" },
  marketMark: { position: "absolute", top: -7, right: -7, width: 14, height: 14, display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#2d2739", background: "#fff2a8", border: "2px solid #101018", borderRadius: 999, font: "900 9px/1 'Courier New',monospace" },
  guide: { gridArea: "guide", marginTop: 0, padding: 12, background: "#f3c08a", border: "3px solid #332235", borderRadius: 10, boxShadow: "inset 0 0 0 2px #ffd6a3" },
  guideTitle: { display: "flex", alignItems: "center", gap: 8, margin: 0, fontSize: 20, fontWeight: 900 },
  guideLead: { margin: "5px 0 12px", fontSize: 13, fontWeight: 900, lineHeight: 1.35 },
  guideSection: { padding: 10, background: "#fff8d6", border: "3px solid #101018", borderRadius: 9, boxShadow: "inset 0 0 0 2px #f4c08a", "& + &": { marginTop: 10 } },
  guideSectionHead: { display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8, flexWrap: "wrap", marginBottom: 9 },
  guideSectionTitle: { margin: 0, fontSize: 17, fontWeight: 900 },
  boostBadge: { display: "inline-flex", alignItems: "center", gap: 5, padding: "4px 7px", color: "#fff", background: "#3f9147", border: "2px solid #101018", borderRadius: 5, fontSize: 12, fontWeight: 900 },
  flow: { display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 6, alignItems: "stretch", [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr 1fr" } },
  flowStep: { position: "relative", minHeight: 84, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 4, padding: "7px 5px", textAlign: "center", background: "#e8ad76", border: "2px solid #6e4650", borderRadius: 7, fontSize: 11, fontWeight: 900, lineHeight: 1.2 },
  flowIconRow: { minHeight: 30, display: "flex", alignItems: "center", justifyContent: "center", gap: 3 },
  flowIcon: { width: 30, height: 30, objectFit: "contain", imageRendering: "pixelated" },
  arrow: { color: "#2876d5", fontSize: 18, fontWeight: 900 },
  stat: { color: "#76506c", fontSize: 15, fontWeight: 900 },
  example: { display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: 8, alignItems: "center", marginTop: 9, padding: 8, color: "#fff8d6", background: "#178f5a", border: "3px solid #111827", borderRadius: 8, boxShadow: "inset 0 0 0 2px #52c98a", fontSize: 12, fontWeight: 900, lineHeight: 1.3 },
  exampleIcons: { display: "flex", alignItems: "center", gap: 4 },
  miniGuideIcon: { width: 26, height: 26, objectFit: "contain", imageRendering: "pixelated" },
  xpGrid: { display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 6, [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr" } },
  xpCard: { padding: 8, background: "#e8ad76", border: "2px solid #6e4650", borderRadius: 7 },
  xpCardTitle: { display: "flex", alignItems: "center", gap: 5, margin: "0 0 5px", fontSize: 13, fontWeight: 900 },
  xpCardText: { margin: 0, fontSize: 11, fontWeight: 900, lineHeight: 1.35 },
  skillChips: { display: "flex", gap: 5, flexWrap: "wrap", marginTop: 8 },
  skillChip: { display: "inline-flex", alignItems: "center", padding: "3px 6px", color: "#fff", background: "#2876d5", border: "2px solid #101018", borderRadius: 5, fontSize: 10, fontWeight: 900 },
  guideLink: { color: "#1f5da8", fontWeight: 900, textDecoration: "underline", "&:hover": { color: "#163f73" } },
  factionBoostLink: { color: "#1f5da8", fontWeight: 900, textDecoration: "underline", textUnderlineOffset: 2, "&:hover, &:focus": { color: "#163f73" } },
  chapterBar: { margin: "14px 0 8px", padding: "6px 10px", color: "#fff2a8", background: "#27364c", border: "3px solid #101018", boxShadow: "inset 0 0 0 2px #5c75a0", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 },
  strategySubhead: { margin: "10px 0 6px", padding: "6px 10px", color: "#17233a", background: "#8ed8ff", border: "3px solid #101018", boxShadow: "inset 0 0 0 2px #d8f2ff", fontSize: 18, fontWeight: 900, letterSpacing: 1, textTransform: "uppercase" },
  walkthrough: { display: "grid", gridTemplateColumns: "minmax(0,1fr) 300px", border: "3px solid #101018", background: "#fff8d6", boxShadow: "inset 0 0 0 2px #f4c08a", [theme.breakpoints.down("md")]: { gridTemplateColumns: "minmax(0,1fr) 250px" }, [theme.breakpoints.down("xs")]: { gridTemplateColumns: "1fr" } },
  walkthroughCopy: { padding: "14px 16px", borderRight: "3px solid #101018", [theme.breakpoints.down("xs")]: { borderRight: 0, borderBottom: "3px solid #101018" } },
  walkthroughText: { margin: "0 0 11px", fontSize: 14, fontWeight: 700, lineHeight: 1.55, "&:last-child": { marginBottom: 0 } },
  keyPoint: { padding: "9px 10px", margin: "12px 0", color: "#fff", background: "#2876d5", border: "3px solid #101018", boxShadow: "inset 0 0 0 2px #55b6ff", fontSize: 13, fontWeight: 900, lineHeight: 1.4 },
  walkthroughVisual: { minHeight: 230, display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 12, background: "linear-gradient(rgba(39,54,76,.05),rgba(39,54,76,.12)),#e8ad76" },
  visualHeading: { margin: 0, color: "#332235", fontSize: 15, fontWeight: 900, textAlign: "center" },
  visualScene: { minHeight: 88, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "8px 4px" },
  visualLargeIcon: { width: 58, height: 58, objectFit: "contain", imageRendering: "pixelated" },
  visualArrow: { color: "#2876d5", fontSize: 24, fontWeight: 900 },
  statTable: { border: "2px solid #101018", background: "#27364c", color: "#fff8d6" },
  statRow: { display: "grid", gridTemplateColumns: "1fr auto", gap: 8, padding: "5px 7px", borderBottom: "1px solid #8fa5ca", fontSize: 11, fontWeight: 900, "&:last-child": { borderBottom: 0 } },
  strategyList: { margin: "8px 0 12px 18px", padding: 0, fontSize: 13, fontWeight: 700, lineHeight: 1.5, "& li": { marginBottom: 5 } },
  strategyLabel: { color: "#332235", fontWeight: 900, textDecoration: "underline", textDecorationThickness: 2, textUnderlineOffset: 2 },
  strategySteps: { display: "grid", gap: 6, margin: "12px 0", padding: 8, listStyle: "none", counterReset: "strategy-step", color: "#fff", background: "#2876d5", border: "3px solid #101018", boxShadow: "inset 0 0 0 2px #55b6ff" },
  strategyStep: { counterIncrement: "strategy-step", display: "grid", gridTemplateColumns: "24px minmax(0,1fr)", gap: 7, alignItems: "center", fontSize: 13, fontWeight: 900, lineHeight: 1.3, "&:before": { content: "counter(strategy-step) '.'", color: "#fff2a8", fontSize: 15, textAlign: "right" } },
  strategyLoopTitle: { margin: "12px 0 -12px", padding: "5px 9px", color: "#17233a", background: "#8ed8ff", border: "3px solid #101018", borderBottom: 0, fontSize: 14, fontWeight: 900, textTransform: "uppercase", letterSpacing: 1 },
  skillTable: { display: "grid", gap: 4, marginTop: 8 },
  skillRow: { display: "grid", gridTemplateColumns: "105px minmax(0,1fr)", gap: 7, padding: "5px 7px", background: "#f3c08a", border: "2px solid #6e4650", fontSize: 11, lineHeight: 1.3 },
  guideScreenshot: { width: "100%", display: "block", border: "3px solid #101018", background: "#e8ad76", imageRendering: "pixelated" },
  screenshotCaption: { margin: "5px 0 9px", color: "#332235", fontSize: 10, fontWeight: 900, lineHeight: 1.25, textAlign: "center" },
  screenshotGrid: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6 },
  screenshotThumb: { width: "100%", height: 118, display: "block", objectFit: "cover", objectPosition: "top", border: "2px solid #101018", background: "#e8ad76", imageRendering: "pixelated" },
  imageEquation: { display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", gap: 5, alignItems: "center", marginTop: 10, padding: "12px 8px", background: "#fff8d6", border: "3px solid #101018", boxShadow: "inset 0 0 0 2px #f4c08a" },
  equationIcon: { width: 52, height: 52, justifySelf: "center", objectFit: "contain", imageRendering: "pixelated" },
  equationSymbol: { color: "#332235", fontSize: 22, fontWeight: 900 },
  tip: { marginTop: 18, padding: "14px 18px", font: "900 16px/1.4 'Courier New',monospace" }
}));

const ItemImage = ({ name, className }) => images[name]
  ? <img src={images[name]} alt="" className={className} />
  : <span className={className}>{fallbackIcons[name] || "🐟"}</span>;

const FishMarketGuide = ({ classes }) => <section className={classes.guide} aria-labelledby="fish-market-guide-title">
  <h2 className={classes.guideTitle} id="fish-market-guide-title"><ItemImage name="Fish Stick" className={classes.miniGuideIcon} />Fish Market Strategy Guide</h2>
  <p className={classes.guideLead}>A practical walkthrough for turning guaranteed catches into Marine Marvels, stronger fish meals, and large Bumpkin XP gains.</p>

  <h3 className={classes.chapterBar}>Strategy 1 · Catching Marine Marvels</h3>
  <article className={classes.walkthrough}>
    <div className={classes.walkthroughCopy}>
      <p className={classes.walkthroughText}>Each Fish Market bait guarantees a different group of fish. Instead of relying on the normal catch pool, choose the bait that contains the exact fish connected to the Marine Marvel you are hunting. Each reel made with that bait gives you one focused map piece attempt.</p>
      <p className={classes.walkthroughText}><strong>Example:</strong> Fish Sticks can guarantee Hammerhead Sharks. Each successful Hammerhead Shark catch has a <strong>5% chance</strong> to find a Radiant Ray map piece. Fish during a <strong>Full Moon</strong> to increase your map piece chances while working toward the nine pieces you need.</p>
      <div className={classes.keyPoint}><strong>Full Moon: During Full Moon day you get 100% increase on base chance at getting map pieces. Use your Fish Market baits during the Full Moon time to complete your Marvel Maps quicker!</strong></div>
      <p className={classes.walkthroughText}>Repeat this approach for each permanent Marine Marvel: select the correct market bait, target its source fish, and keep fishing until all nine map pieces are complete.</p>
    </div>
    <aside className={classes.walkthroughVisual} aria-label="Full Moon Marine Marvel strategy reference">
      <h4 className={classes.visualHeading}>Best Time to Use Market Bait</h4>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/map-discovered.png" alt="Radiant Ray map piece discovered after a successful fishing catch" />
      <p className={classes.screenshotCaption}>Successful target-fish catches can reveal one of the nine Marine Marvel map pieces.</p>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/full-moon.png" alt="Full Moon event, when map pieces and exotic crops have higher chances to appear" />
      <div className={classes.imageEquation} aria-label="Hammerhead Shark plus Fish Stick bait leads to Radiant Ray"><ItemImage name="Hammerhead shark" className={classes.equationIcon} /><span className={classes.equationSymbol}>+</span><ItemImage name="Fish Stick" className={classes.equationIcon} /><span className={classes.equationSymbol}>=</span><ItemImage name="Radiant Ray" className={classes.equationIcon} /></div>
    </aside>
  </article>

  <h4 className={classes.strategySubhead}>Reward: Deep Sea Helm</h4>
  <article className={classes.walkthrough}>
    <div className={classes.walkthroughCopy}>
      <p className={classes.walkthroughText}>The <strong>Deep Sea Helm</strong> is acquired by catching <strong>five of every fish</strong> in the Basic Fish, Advanced Fish, and Expert Fish categories.</p>
      <p className={classes.walkthroughText}>Use our <Link className={classes.guideLink} to="/sfl/fishing#fish-search">fish search finder</Link> to locate fish you have not caught and see which seasons they spawn in.</p>
      <div className={classes.keyPoint}><strong>Deep Sea Helm: +100% chance to find Marvel map pieces.</strong></div>
    </div>
    <aside className={classes.walkthroughVisual} aria-label="Deep Sea Helm Marine Marvel reward">
      <h4 className={classes.visualHeading}>Marvel Map Piece Boost</h4>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/deep-sea-helm.png" alt="Deep Sea Helm wearable with a one hundred percent increased chance to find Marvel map pieces" />
      <p className={classes.screenshotCaption}>Catch five of every Basic, Advanced, and Expert fish to earn the Deep Sea Helm.</p>
    </aside>
  </article>

  <h4 className={classes.strategySubhead}>Reward: Catching 5 Marine Marvels</h4>
  <article className={classes.walkthrough}>
    <div className={classes.walkthroughCopy}>
      <p className={classes.walkthroughText}>Catching all <strong>five permanent Marine Marvels</strong> awards the Luminous Anglerfish Topper. This wearable is the bridge between Marvel hunting and an advanced Bumpkin XP strategy.</p>
      <p className={classes.walkthroughText}>Equip the Topper before eating fish meals to receive <strong>+50% Bumpkin XP from fish</strong>. Once it is unlocked, valuable fish are no longer just collection targets. They become ingredients for a repeatable leveling route.</p>
      <div className={classes.keyPoint}><strong>Luminous Anglerfish Topper: +50% Bumpkin XP from fish.</strong></div>
    </div>
    <aside className={classes.walkthroughVisual} aria-label="Luminous Anglerfish Topper reward">
      <h4 className={classes.visualHeading}>Permanent Marvel Reward</h4>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/luminous-anglerfish-topper.png" alt="Luminous Anglerfish Topper wearable reward and its fifty percent fish meal experience boost" />
      <p className={classes.screenshotCaption}>Catch every permanent Marine Marvel to unlock the wearable.</p>
    </aside>
  </article>

  <h3 className={classes.chapterBar} id="xp-boosts">Strategy 2 · Increasing Bumpkin XP</h3>
  <article className={classes.walkthrough}>
    <div className={classes.walkthroughCopy}>
      <p className={classes.walkthroughText}>Start by using Fish Market bait to collect <strong>White Sharks or Saw Sharks</strong>. Fishing Frenzy makes this much more efficient because each market bait can return additional fish.</p>
      <div className={classes.keyPoint}><strong>Fishing Frenzy: Fishing Frenzy and the Frenzied Fish skill can award extra fish per bait, but those bonus fish do not provide extra map piece rolls. The extra catches are valuable for aging, deliveries, Bumpkin XP, and leveling.</strong></div>
      <p className={classes.walkthroughText}>Next, age those fish with salt. A successful attempt can produce an <strong>Aged fish</strong>, while a <strong>Prime Aged fish</strong> creates an even stronger meal but has a lower chance of occurring. You can improve your aging odds with skills and the <strong>Salt Sculpture</strong>. In this example, the chances are <strong>76% Aged</strong> and <strong>24% Prime Aged</strong>.</p>
      <ul className={classes.strategyList}>
        <li><span className={classes.strategyLabel}>Salt Sculpture:</span> Build and level the <strong>Salt Sculpture</strong> for faster recharge, larger harvest capacity, faster aging, and better Prime odds.</li>
        <li><span className={classes.strategyLabel}>Aging Skills:</span> Use <strong>Wide Rakes</strong>, <strong>Fish Smoking</strong>, <strong>Sea Blessed</strong>, and <strong>Salt Surge</strong> to strengthen the salt and aging loop.</li>
        <li><span className={classes.strategyLabel}>Fishing Skills:</span> Fish during <strong>Fishing Frenzy</strong> for the +1 fish bonus, then use <strong>Frenzied Fish</strong> for an additional chance at another fish. These extra catches make each Fish Market bait more valuable.</li>
        <li><span className={classes.strategyLabel}>Before Eating:</span> <strong>Stack the Luminous Anglerfish Topper’s +50%, Fishy Feast +20%, and the </strong><a className={classes.factionBoostLink} href="#faction-xp-boost">Faction Boost +50% for Weeks 9 and 10</a>.</li>
      </ul>
      <h4 className={classes.strategyLoopTitle}>Strategy Loop</h4>
      <ol className={classes.strategySteps} aria-label="Bumpkin XP strategy loop">
        <li className={classes.strategyStep}>Guarantee valuable fish with Fish Market bait</li>
        <li className={classes.strategyStep}>Age fish with salt</li>
        <li className={classes.strategyStep}>Stack every available XP boost</li>
        <li className={classes.strategyStep}>Eat the Aged or Prime meal</li>
      </ol>
      <p className={classes.walkthroughText}>Review seasonal fish sources, normal bait, and likes in the <Link className={classes.guideLink} to="/sfl/fishing">complete fishing guide</Link>.</p>
    </div>
    <aside className={classes.walkthroughVisual} aria-label="Fish aging and experience strategy screenshots">
      <h4 className={classes.visualHeading}>High XP Meal Route</h4>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/aged-white-shark-output.png" alt="Aged and Prime Aged White Shark output chances and experience" />
      <p className={classes.screenshotCaption}>Aging can produce Aged or Prime Aged fish with higher meal XP.</p>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/salt-sculpture.png" alt="Level six Salt Sculpture active buffs" />
      <p className={classes.screenshotCaption}>The Salt Sculpture strengthens the entire aging loop.</p>
      <div className={classes.screenshotGrid}><img className={classes.screenshotThumb} src="/assets/sunflower-land/fish-market-guide/fish-smoking.png" alt="Fish Smoking skill" /><img className={classes.screenshotThumb} src="/assets/sunflower-land/fish-market-guide/sea-blessed.png" alt="Sea Blessed skill" /><img className={classes.screenshotThumb} src="/assets/sunflower-land/fish-market-guide/salt-surge.png" alt="Salt Surge skill" /><img className={classes.screenshotThumb} src="/assets/sunflower-land/fish-market-guide/wide-rakes.png" alt="Wide Rakes skill" /><img className={classes.screenshotThumb} src="/assets/sunflower-land/fish-market-guide/fishy-feast.png" alt="Fishy Feast experience skill" /><img className={classes.screenshotThumb} src="/assets/sunflower-land/fish-market-guide/frenzied-fish.png" alt="Frenzied Fish skill" /></div>
    </aside>
  </article>

  <h4 className={classes.strategySubhead} id="faction-xp-boost">Secret: Faction XP 50% Boost</h4>
  <article className={classes.walkthrough}>
    <div className={classes.walkthroughCopy}>
      <p className={classes.walkthroughText}>A powerful <strong>50% Bumpkin XP boost</strong> is hidden inside the Faction system. Every week, your faction works together to feed its Faction Pet and meet the weekly satiation goal.</p>
      <p className={classes.walkthroughText}>Build an eight week streak by contributing food and making sure the pet’s satiation is met. When the faction completes <strong>Week 8</strong>, members who fed the pet unlock <strong>+50% Bumpkin XP during Weeks 9 and 10</strong>.</p>
      <div className={classes.keyPoint}><strong>Protect the streak:</strong> The Faction Pet must continue reaching its satiation goal. If the weekly goal is missed, the streak is lost and the pet sleeps for a week.</div>
      <p className={classes.walkthroughText}>Weeks 9 and 10 are the best time to eat your saved Aged and Prime Aged fish meals. Combine the faction bonus with the <strong>Luminous Anglerfish Topper</strong> and <strong>Fishy Feast</strong> for a much larger XP payout.</p>
      <p className={classes.walkthroughText}><span className={classes.strategyLabel}>Activating Factions:</span> <strong>At level 7, walk from the Plaza to the Faction area and speak with the faction leaders. Afterward, the Faction destination will appear in the center of your world map.</strong></p>
    </div>
    <aside className={classes.walkthroughVisual} aria-label="Faction experience boost guide screenshots">
      <h4 className={classes.visualHeading}>Faction Pet Streak</h4>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/faction-pet.png" alt="Faction Pet weekly feeding goal and streak interface" />
      <p className={classes.screenshotCaption}>Contribute food and meet the pet’s weekly satiation goal.</p>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/faction-map.png" alt="World map showing the Faction area north of the Plaza" />
      <p className={classes.screenshotCaption}>Travel north from the Plaza to reach the Faction area.</p>
      <img className={classes.guideScreenshot} src="/assets/sunflower-land/fish-market-guide/faction-leader.png" alt="Faction leader activation area" />
    </aside>
  </article>
</section>;

const SunflowerLandFishMarket = () => {
  const classes = useStyles();
  const [activeSeason, setActiveSeason] = useState(() => getSunflowerSeasonClock().seasonId);
  const [selectedItem, setSelectedItem] = useState(getInitialBait);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sortedCatches = [...guaranteed[selectedItem]].sort((a, b) => {
    const aChance = marvelSources[a] ? parseFloat(marvelSources[a][1]) : -1;
    const bChance = marvelSources[b] ? parseFloat(marvelSources[b][1]) : -1;
    return bChance - aChance || a.localeCompare(b);
  });
  const showCompleteCatchList = selectedItem === "Fish Stick" || selectedItem === "Fish Flake";

  return <div className={classes.page}>
    <Helmet>
      <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
      <meta name="keywords" content="Sunflower Land Fish Market, Fish Flake, Fish Stick, Crab Stick, Fish Oil, guaranteed fish catches, Marine Marvels, fishing guide, Bumpkin XP, fish aging, Faction XP boost" />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://chuckfresco.com/sfl/fish-market#webpage",
            url: "https://chuckfresco.com/sfl/fish-market",
            name: "Sunflower Land Fish Market Recipes & Bait Guide",
            description: "Seasonal Fish Market recipes, guaranteed bait catches, Marine Marvel strategies, fish aging, and Bumpkin XP boosts for Sunflower Land.",
            inLanguage: "en-US",
            isPartOf: { "@type": "WebSite", name: "Chuck Fresco", url: "https://chuckfresco.com" },
            about: { "@type": "VideoGame", name: "Sunflower Land", url: "https://sunflower-land.com" }
          },
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://chuckfresco.com/" },
              { "@type": "ListItem", position: 2, name: "Sunflower Land Fishing", item: "https://chuckfresco.com/sfl/fishing" },
              { "@type": "ListItem", position: 3, name: "Fish Market", item: "https://chuckfresco.com/sfl/fish-market" }
            ]
          },
          {
            "@type": "ItemList",
            name: "Sunflower Land Fish Market Baits",
            numberOfItems: 4,
            itemListElement: itemOrder.map((bait, index) => ({ "@type": "ListItem", position: index + 1, name: bait }))
          },
          {
            "@type": "HowTo",
            name: "Use Fish Market bait to increase Bumpkin XP",
            description: "Guarantee valuable fish, age them with salt, stack XP boosts, and eat Aged or Prime Aged fish meals.",
            step: [
              { "@type": "HowToStep", position: 1, name: "Guarantee valuable fish", text: "Use Fish Market bait to guarantee valuable fish catches." },
              { "@type": "HowToStep", position: 2, name: "Age fish with salt", text: "Use salt and aging skills to produce Aged or Prime Aged fish." },
              { "@type": "HowToStep", position: 3, name: "Stack XP boosts", text: "Equip the Luminous Anglerfish Topper and activate available fishing and Faction XP boosts." },
              { "@type": "HowToStep", position: 4, name: "Eat the fish meal", text: "Eat the Aged or Prime Aged meal while the boosts are active." }
            ]
          }
        ]
      })}</script>
    </Helmet>
    <header className={classes.hero}><div className={classes.heroInner}><div><h1 className={classes.heroTitle}>Sunflower Land Fish Market</h1><p className={classes.heroSubtitle}>Plan every seasonal recipe, then choose a market bait to see exactly which fish it guarantees.</p></div><div className={classes.logoPanel}><img src={sunflowerLogo} alt="Sunflower Land" className={classes.logo} /></div></div></header>
    <div className={classes.referral}>
      <img src={lightningIcon} alt="" className={classes.referralIcon} />
      <span className={classes.referralText}>If you'd like to support me, use my referral code:</span>
      <a className={classes.referralLink} href={referralUrl} target="_blank" rel="noopener noreferrer" aria-label="Use referral code ChuckFresco">
        ChuckFresco
        <OpenInNewIcon className={classes.referralLinkIcon} aria-hidden="true" />
      </a>
    </div>
    <nav className={classes.nav} aria-label="Sunflower Land pages"><Link className={classes.navLink} to="/sfl/helpers">Leaderboard</Link><Link className={classes.navLink} to="/sfl/fishing">Fishing</Link><Link className={`${classes.navLink} ${classes.activeNav}`} to="/sfl/fish-market">Fish Market</Link><Link className={classes.navLink} to="/sfl/crops">Crops</Link></nav>
    <main className={classes.shell}>
      <section className={classes.panel}><div className={classes.panelHeader}><h2 className={classes.title}>Fish Market recipes by season</h2><p className={classes.intro}>Select a season to compare the four craft recipes. Select a recipe card to inspect its guaranteed catches.</p></div><div className={classes.body}>
        <nav className={classes.tabs} aria-label="Fish Market season">{seasons.map(s => <button type="button" key={s.id} className={`${classes.tab} ${activeSeason === s.id ? classes.activeTab : ""}`} style={activeSeason === s.id ? { background: s.color, boxShadow: `inset 0 0 0 3px ${s.shadow}` } : undefined} onClick={() => setActiveSeason(s.id)} aria-pressed={activeSeason === s.id}><img src={s.icon} alt="" className={classes.seasonIcon} />{s.label}</button>)}</nav>
        <div className={classes.layout}><div className={classes.leftColumn}><div className={classes.recipeGrid}>{itemOrder.map(item => <button type="button" key={item} className={`${classes.card} ${selectedItem === item ? classes.selectedCard : ""}`} onClick={() => setSelectedItem(item)} aria-pressed={selectedItem === item}><div className={classes.cardHead}><ItemImage name={item} className={classes.itemIcon} /><h3 className={classes.itemName}>{item}</h3><span className={classes.duration}>{item === "Fish Flake" ? "1 hr" : item === "Fish Stick" ? "2 hrs" : item === "Crab Stick" ? "4 hrs" : "16 hrs"}</span></div>{recipes[activeSeason][item].map(([name, qty]) => <div className={classes.ingredient} key={name}><ItemImage name={name} className={images[name] ? classes.ingredientIcon : classes.emoji} /><span>{name}</span><span className={classes.qty}>×{qty}</span></div>)}</button>)}</div></div>
          <aside className={`${classes.panel} ${classes.catchPanel}`} aria-live="polite"><div className={classes.catchHeader}><ItemImage name={selectedItem} className={classes.itemIcon} /><div><h2 className={classes.catchTitle}>{selectedItem} catches</h2><p className={classes.catchCopy}>Marvel-helping fish are listed first. {showCompleteCatchList ? "Every guaranteed catch is shown below." : "Scroll to see every guaranteed catch."}</p></div></div><ul className={`${classes.catchList} ${showCompleteCatchList ? classes.expandedCatchList : ""}`}>{sortedCatches.map(fish => {
            const requirements = fishInfo[fish] || [[], []];
            const marvel = marvelSources[fish];
            return <li key={fish}><Link className={`${classes.catch} ${marvel ? classes.marvelCatch : ""}`} to={`/sfl/fishing?fish=${slugifyFishName(fish)}`} aria-label={`Open ${fish} details in the fishing guide`}>
              <ItemImage name={fish} className={classes.catchIcon} />
              <span className={classes.catchName}>{fish}</span>
              <span className={classes.catchSubtitle}>{marvel ? marvel[0] : "Guaranteed catch"}</span>
              {marvel && <span className={classes.catchChance}>{marvel[1]}</span>}
              <div className={classes.requirementIcons} aria-label={`Bait and likes for ${fish}`}>
                {requirements[0].map(item => <span className={classes.requirementIconWrap} title={`Bait: ${item}`} key={`bait-${item}`}><ItemImage name={item} className={classes.requirementIcon} /></span>)}
                {requirements[1].map(item => <span className={classes.requirementIconWrap} title={`Likes: ${item}`} key={`like-${item}`}><ItemImage name={item} className={classes.requirementIcon} /></span>)}
                <span className={classes.requirementIconWrap} title={`${selectedItem} guarantees this catch`}><ItemImage name={selectedItem} className={classes.requirementIcon} /><span className={classes.marketMark}>M</span></span>
              </div>
            </Link></li>;
          })}</ul></aside>
          <FishMarketGuide classes={classes} />
        </div></div></section>
    </main>
  </div>;
};

export default SunflowerLandFishMarket;
