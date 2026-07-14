import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const FARM_ID = "7089202106478272";
const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const searchIcon = "/assets/sunflower-land/icons/search.png";
const lightningIcon = "/assets/sunflower-land/icons/lightning.png";
const referralUrl = "https://sunflower-land.com/play/?ref=ChuckFresco";
const farmVisitUrl = `https://sunflower-land.com/play/#/visit/${FARM_ID}`;
const fishingAssetPath = "/assets/sunflower-land/fishing";
const seasonAssetPath = "/assets/sunflower-land/seasons";
const caughtMarvelsStorageKey = "sunflower-land-fishing-caught-marvels";
const seasonTimeZone = "America/Los_Angeles";
const seasonResetHour = 17;
const seasonAnchorLocalTime = Date.UTC(2026, 6, 13, seasonResetHour);
const seasonWeekMs = 7 * 24 * 60 * 60 * 1000;
const seasonRotation = ["autumn", "winter", "spring", "summer"];

const pacificDateTimeFormatter = new Intl.DateTimeFormat("en-US", {
  timeZone: seasonTimeZone,
  year: "numeric",
  month: "numeric",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hourCycle: "h23"
});

const getPacificDateTimeParts = date => (
  pacificDateTimeFormatter.formatToParts(date).reduce((parts, part) => {
    if (part.type !== "literal") {
      parts[part.type] = Number(part.value);
    }
    return parts;
  }, {})
);

// Convert a Pacific wall-clock time to an instant without relying on the visitor's time zone.
const pacificDateTimeToUtc = localTime => {
  let utcTime = localTime;

  for (let attempt = 0; attempt < 3; attempt += 1) {
    const parts = getPacificDateTimeParts(new Date(utcTime));
    const representedLocalTime = Date.UTC(
      parts.year,
      parts.month - 1,
      parts.day,
      parts.hour,
      parts.minute,
      parts.second
    );
    utcTime += localTime - representedLocalTime;
  }

  return utcTime;
};

const getSeasonClock = (now = new Date()) => {
  const parts = getPacificDateTimeParts(now);
  const currentPacificWallTime = Date.UTC(
    parts.year,
    parts.month - 1,
    parts.day,
    parts.hour,
    parts.minute,
    parts.second
  );
  const resetIndex = Math.floor((currentPacificWallTime - seasonAnchorLocalTime) / seasonWeekMs);
  const seasonIndex = ((resetIndex % seasonRotation.length) + seasonRotation.length) % seasonRotation.length;
  const nextResetLocalTime = seasonAnchorLocalTime + ((resetIndex + 1) * seasonWeekMs);

  return {
    seasonId: seasonRotation[seasonIndex],
    nextResetAt: pacificDateTimeToUtc(nextResetLocalTime)
  };
};

const formatCountdown = milliseconds => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${days}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
};

const asset = fileName => encodeURI(`${fishingAssetPath}/${fileName}`);

const itemImages = {
  Anchovy: asset("imgi_11_Anchovy.png"),
  Angelfish: asset("imgi_96_Angelfish.png"),
  Apple: asset("imgi_57_Apple.png"),
  Artichoke: asset("imgi_67_Artichoke.png"),
  Banana: asset("imgi_65_Banana.png"),
  "Barred Knifejaw": asset("imgi_100_Barred Knifejaw.png"),
  Beetroot: asset("imgi_59_Beetroot.png"),
  Blueberry: asset("imgi_44_Blueberry.png"),
  "Blue Marlin": asset("imgi_105_Blue Marlin.png"),
  Blowfish: asset("imgi_127_Blowfish.png"),
  Broccoli: asset("imgi_58_Broccoli.png"),
  Cabbage: asset("imgi_51_Cabbage.png"),
  Butterflyfish: asset("imgi_84_Butterflyfish.png"),
  Carrot: asset("imgi_38_Carrot.png"),
  Clownfish: asset("imgi_86_Clownfish.png"),
  Cobia: asset("imgi_113_Cobia.png"),
  Coelacanth: asset("imgi_131_Coelacanth.png"),
  Crab: asset("imgi_54_Crab.png"),
  "Crystal Shrimp": asset("imgi_119_Crystal Shrimp.png"),
  "Deep Sea Pig": asset("imgi_121_Deep Sea Pig.png"),
  "Deep Sea Slug": asset("imgi_120_Deep Sea Slug.png"),
  Earthworm: asset("imgi_37_Earthworm.png"),
  Egg: asset("imgi_39_Egg.png"),
  "Crab Stick": asset("imgi_102_Crab Stick.png"),
  "Fat Chicken": asset("imgi_108_Fat Chicken.png"),
  "Fish Flake": asset("imgi_76_Fish Flake.png"),
  "Fish Oil": asset("imgi_101_Fish Oil.png"),
  "Fish Stick": asset("imgi_99_Fish Stick.png"),
  "Fishing Lure": asset("imgi_91_Fishing Lure.png"),
  "Football fish": asset("imgi_130_Football fish.png"),
  Gold: asset("imgi_72_Gold.png"),
  Grub: asset("imgi_89_Grub.png"),
  "Gilded Swordfish": asset("imgi_118_Gilded Swordfish.png"),
  Halibut: asset("imgi_123_Halibut.png"),
  "Hammerhead shark": asset("imgi_98_Hammerhead shark.png"),
  "Horse Mackerel": asset("imgi_88_Horse Mackerel.png"),
  Honey: asset("imgi_69_Honey.png"),
  Iron: asset("imgi_79_Iron.png"),
  Corn: asset("imgi_74_Corn.png"),
  Eggplant: asset("imgi_43_Eggplant.png"),
  Kale: asset("imgi_77_Kale.png"),
  "Mahi Mahi": asset("imgi_104_Mahi Mahi.png"),
  "Moray Eel": asset("imgi_93_Moray Eel.png"),
  Muskellunge: asset("imgi_124_Muskellunge.png"),
  Napoleanfish: asset("imgi_94_Napoleanfish.png"),
  Onion: asset("imgi_46_Onion.png"),
  Orange: asset("imgi_61_Orange.png"),
  Oarfish: asset("imgi_129_Oarfish.png"),
  "Olive Flounder": asset("imgi_125_Olive Flounder.png"),
  Parrotfish: asset("imgi_106_Parrotfish.png"),
  Pepper: asset("imgi_60_Pepper.png"),
  "Phantom Barracuda": asset("imgi_117_Phantom Barracuda.png"),
  Porgy: asset("imgi_133_Porgy.png"),
  Ray: asset("imgi_97_Ray.png"),
  "Radiant Ray": asset("imgi_116_Radiant Ray.png"),
  "Red Wiggler": asset("imgi_90_Red Wiggler.png"),
  "Red Snapper": asset("imgi_62_Red Snapper.png"),
  Rhubarb: asset("imgi_48_Rhubarb.png"),
  "Rock Blackfish": asset("imgi_126_Rock Blackfish.png"),
  "Sea Bass": asset("imgi_122_Sea Bass.png"),
  "Sea Horse": asset("imgi_87_Sea Horse.png"),
  Seaweed: asset("imgi_52_Seaweed.png"),
  "Saw Shark": asset("imgi_109_Saw Shark.png"),
  "Speed Chicken": asset("imgi_110_Speed Chicken.png"),
  Squid: asset("imgi_81_Squid.png"),
  Stone: asset("imgi_92_Stone.png"),
  "Starlight Tuna": asset("imgi_115_Starlight Tuna.png"),
  Sunflower: asset("imgi_45_Sunflower.png"),
  Sunfish: asset("imgi_83_Sunfish.png"),
  Surgeonfish: asset("imgi_95_Surgeonfish.png"),
  Trout: asset("imgi_132_Trout.png"),
  "Twilight Anglerfish": asset("imgi_114_Twilight Anglerfish.png"),
  Tuna: asset("imgi_73_Tuna.png"),
  Turnip: asset("imgi_49_Turnip.png"),
  Tilapia: asset("imgi_103_Tilapia.png"),
  Walleye: asset("imgi_128_Walleye.png"),
  Weakfish: asset("imgi_134_Weakfish.png"),
  Wheat: asset("imgi_68_Wheat.png"),
  "Whale Shark": asset("imgi_107_Whale Shark.png"),
  "White Shark": asset("imgi_111_White Shark.png"),
  "Wild Mushroom": asset("imgi_47_Wild Mushroom.png"),
  Yam: asset("imgi_50_Yam.png"),
  Zucchini: asset("imgi_64_Zucchini.png"),
  "Zebra Turkeyfish": asset("imgi_85_Zebra Turkeyfish.png")
};

const seasons = [
  { id: "spring", label: "Spring", color: "#3d8a5d", shadow: "#90d58e", icon: `${seasonAssetPath}/spring.webp` },
  { id: "summer", label: "Summer", color: "#d99a22", shadow: "#ffe889", icon: `${seasonAssetPath}/summer.webp` },
  { id: "autumn", label: "Autumn", color: "#c95839", shadow: "#f4a35f", icon: `${seasonAssetPath}/autumn.webp` },
  { id: "winter", label: "Winter", color: "#2876d5", shadow: "#8ed8ff", icon: `${seasonAssetPath}/winter.webp` }
];

const sourceFishSeasons = {
  Anchovy: ["spring", "summer", "autumn", "winter"],
  Angelfish: ["summer", "winter"],
  "Barred Knifejaw": ["spring", "summer"],
  "Blue Marlin": ["summer", "winter"],
  Blowfish: ["winter"],
  Butterflyfish: ["summer", "autumn"],
  Clownfish: ["summer", "winter"],
  Cobia: ["summer"],
  Coelacanth: ["spring", "winter"],
  "Football fish": ["winter"],
  Halibut: ["spring", "autumn"],
  "Hammerhead shark": ["summer", "autumn"],
  "Horse Mackerel": ["summer", "winter"],
  "Mahi Mahi": ["summer", "autumn"],
  "Moray Eel": ["summer", "autumn"],
  Muskellunge: ["autumn"],
  Napoleanfish: ["summer", "autumn"],
  Oarfish: ["spring", "winter"],
  "Olive Flounder": ["spring", "autumn"],
  Parrotfish: ["spring", "summer"],
  Porgy: ["spring"],
  Ray: ["spring", "summer"],
  "Red Snapper": ["spring", "summer", "autumn", "winter"],
  "Rock Blackfish": ["autumn"],
  "Saw Shark": ["spring", "summer"],
  "Sea Bass": ["spring", "autumn"],
  "Sea Horse": ["spring", "summer"],
  Squid: ["spring", "winter"],
  Sunfish: ["summer", "autumn"],
  Surgeonfish: ["summer", "autumn"],
  Tilapia: ["summer"],
  Trout: ["winter"],
  Tuna: ["spring", "summer", "autumn", "winter"],
  Walleye: ["winter"],
  Weakfish: ["spring"],
  "Whale Shark": ["summer", "winter"],
  "White Shark": ["summer", "winter"],
  "Zebra Turkeyfish": ["spring", "summer"]
};

const fishRequirements = {
  Anchovy: {
    bait: ["Earthworm"],
    likes: ["Carrot", "Egg"]
  },
  Angelfish: {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Banana"]
  },
  "Barred Knifejaw": {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Anchovy"]
  },
  "Blue Marlin": {
    bait: ["Grub", "Red Wiggler", "Fishing Lure"],
    likes: ["Wheat"]
  },
  Blowfish: {
    bait: ["Earthworm"],
    likes: ["Yam"]
  },
  Butterflyfish: {
    bait: ["Earthworm"],
    likes: ["Sunflower"]
  },
  Clownfish: {
    bait: ["Earthworm"],
    likes: ["Cabbage"]
  },
  Cobia: {
    bait: ["Red Wiggler"],
    likes: ["Broccoli"]
  },
  Coelacanth: {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Cabbage"]
  },
  "Football fish": {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Sunflower"]
  },
  Halibut: {
    bait: ["Earthworm"],
    likes: ["Anchovy"]
  },
  "Hammerhead shark": {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Iron"]
  },
  "Horse Mackerel": {
    bait: ["Earthworm"],
    likes: ["Blueberry"]
  },
  "Mahi Mahi": {
    bait: ["Grub", "Red Wiggler", "Fishing Lure"],
    likes: ["Corn"]
  },
  "Moray Eel": {
    bait: ["Earthworm", "Grub", "Fishing Lure"],
    likes: ["Gold"]
  },
  Muskellunge: {
    bait: ["Earthworm"],
    likes: ["Turnip"]
  },
  Napoleanfish: {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Carrot"]
  },
  Oarfish: {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Kale"]
  },
  "Olive Flounder": {
    bait: ["Earthworm", "Grub", "Fishing Lure"],
    likes: ["Rhubarb"]
  },
  Parrotfish: {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Seaweed"]
  },
  Porgy: {
    bait: ["Earthworm"],
    likes: ["Yam"]
  },
  Ray: {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Squid"]
  },
  "Red Snapper": {
    bait: ["Grub", "Red Wiggler", "Fishing Lure"],
    likes: ["Apple", "Honey"]
  },
  "Rock Blackfish": {
    bait: ["Grub"],
    likes: ["Onion"]
  },
  "Saw Shark": {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Red Snapper", "Speed Chicken"]
  },
  "Sea Bass": {
    bait: ["Earthworm"],
    likes: ["Anchovy"]
  },
  "Sea Horse": {
    bait: ["Earthworm"],
    likes: ["Seaweed"]
  },
  Squid: {
    bait: ["Earthworm"],
    likes: ["Eggplant", "Onion"]
  },
  Sunfish: {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Horse Mackerel"]
  },
  Surgeonfish: {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Orange"]
  },
  Trout: {
    bait: ["Red Wiggler"],
    likes: ["Pepper"]
  },
  Tuna: {
    bait: ["Grub", "Red Wiggler", "Fishing Lure"],
    likes: ["Orange", "Wild Mushroom"]
  },
  Tilapia: {
    bait: ["Grub"],
    likes: ["Zucchini"]
  },
  Walleye: {
    bait: ["Grub"],
    likes: ["Broccoli"]
  },
  Weakfish: {
    bait: ["Red Wiggler"],
    likes: ["Artichoke"]
  },
  "Whale Shark": {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Crab", "Fat Chicken"]
  },
  "White Shark": {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Tuna"]
  },
  "Zebra Turkeyfish": {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Beetroot", "Rhubarb"]
  }
};

const guaranteedCatchFishByBait = {
  "Fish Flake": [
    "Anchovy",
    "Butterflyfish",
    "Halibut",
    "Blowfish",
    "Porgy",
    "Clownfish",
    "Sea Bass",
    "Sea Horse",
    "Muskellunge",
    "Horse Mackerel",
    "Squid",
    "Moray Eel",
    "Olive Flounder",
    "Tilapia",
    "Napoleanfish",
    "Surgeonfish",
    "Zebra Turkeyfish",
    "Walleye",
    "Angelfish",
    "Ray"
  ],
  "Fish Stick": [
    "Rock Blackfish",
    "Hammerhead shark",
    "Tuna",
    "Mahi Mahi",
    "Blue Marlin",
    "Weakfish",
    "Oarfish",
    "Football fish",
    "Sunfish",
    "Cobia"
  ],
  "Fish Oil": [
    "Barred Knifejaw",
    "Trout",
    "Coelacanth",
    "Saw Shark"
  ],
  "Crab Stick": [
    "Barred Knifejaw",
    "Whale Shark",
    "White Shark",
    "Parrotfish"
  ]
};

const guaranteedCatchBaitsByFish = Object.entries(guaranteedCatchFishByBait).reduce(
  (lookup, [bait, fishList]) => {
    fishList.forEach(fish => {
      lookup[fish] = [...(lookup[fish] || []), bait];
    });

    return lookup;
  },
  {}
);

const fishCatalogNames = Array.from(new Set([
  ...Object.keys(sourceFishSeasons),
  ...Object.keys(fishRequirements),
  ...Object.keys(guaranteedCatchBaitsByFish)
])).sort((a, b) => a.localeCompare(b));

const fishCatalog = fishCatalogNames.map(fish => ({
  fish,
  seasons: sourceFishSeasons[fish] || [],
  requirements: fishRequirements[fish] || { bait: [], likes: [] },
  guaranteedCatchBaits: guaranteedCatchBaitsByFish[fish] || [],
  image: itemImages[fish],
  marketOnlySeasonData: false
}));

const marvels = [
  {
    name: "Starlight Tuna",
    mapSources: [
      { fish: "Halibut", chance: "2.5%" },
      { fish: "Horse Mackerel", chance: "36%" }
    ]
  },
  {
    name: "Twilight Anglerfish",
    mapSources: [
      { fish: "Clownfish", chance: "2.5%" },
      { fish: "Parrotfish", chance: "21%" }
    ]
  },
  {
    name: "Gilded Swordfish",
    mapSources: [
      { fish: "Rock Blackfish", chance: "5%" },
      { fish: "White Shark", chance: "30%" }
    ]
  },
  {
    name: "Radiant Ray",
    mapSources: [
      { fish: "Trout", chance: "2%" },
      { fish: "Hammerhead shark", chance: "5%" }
    ]
  },
  {
    name: "Phantom Barracuda",
    mapSources: [
      { fish: "Mahi Mahi", chance: "0.18%" },
      { fish: "Squid", chance: "5%" }
    ]
  },
  {
    name: "Deep Sea Pig",
    requirement: "Salt Awakening",
    mapSources: [
      { fish: "Sunfish", chance: "0.5%" },
      { fish: "Coelacanth", chance: "0.5%" }
    ]
  },
  {
    name: "Deep Sea Slug",
    requirement: "Salt Awakening",
    mapSources: [
      { fish: "Surgeonfish", chance: "0.1%" },
      { fish: "Barred Knifejaw", chance: "1%" }
    ]
  },
  {
    name: "Crystal Shrimp",
    requirement: "Salt Awakening",
    mapSources: [
      { fish: "Tuna", chance: "0.8%" },
      { fish: "Sea Bass", chance: "3%" }
    ]
  }
].map(marvel => ({
  ...marvel,
  piecesNeeded: 9,
  mapSources: marvel.mapSources.map(source => ({
    ...source,
    seasons: sourceFishSeasons[source.fish] || [],
    requirements: fishRequirements[source.fish] || { bait: [], likes: [] },
    guaranteedCatchBaits: guaranteedCatchBaitsByFish[source.fish] || [],
    image: itemImages[source.fish]
  }))
}));

const slugifyMarvelName = name => name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const marvelNames = marvels.map(marvel => marvel.name);
const marvelSlugLookup = marvels.reduce((lookup, marvel) => ({
  ...lookup,
  [slugifyMarvelName(marvel.name)]: marvel.name
}), {});

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: "100vh",
    background: "#27364c",
    padding: "0 12px 40px"
  },
  shell: {
    maxWidth: 1180,
    margin: "0 auto"
  },
  hero: {
    width: "calc(100% + 24px)",
    minHeight: 288,
    margin: "0 -12px",
    padding: "34px 12px 30px",
    background:
      "linear-gradient(90deg, rgba(39,54,76,0.98) 0%, rgba(61,92,82,0.9) 48%, rgba(40,118,213,0.68) 100%), #27364c",
    borderBottom: "5px solid #101018",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    [theme.breakpoints.down("xs")]: {
      minHeight: 250,
      paddingTop: 26,
      paddingBottom: 24
    }
  },
  heroInner: {
    width: "100%",
    maxWidth: 1180,
    margin: "0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
    [theme.breakpoints.down("sm")]: {
      alignItems: "flex-start",
      flexDirection: "column"
    }
  },
  heroCopy: {
    maxWidth: 720,
    color: "#fff8d6",
    fontFamily: "'Courier New', monospace",
    textShadow: "3px 3px 0 rgba(16,16,24,0.4)"
  },
  heroTitle: {
    margin: 0,
    fontSize: 46,
    lineHeight: 1,
    fontWeight: 900,
    [theme.breakpoints.down("xs")]: {
      fontSize: 34
    }
  },
  heroSubtitle: {
    maxWidth: 660,
    margin: "12px 0 0",
    fontSize: 18,
    lineHeight: 1.35,
    fontWeight: 900,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15
    }
  },
  heroLogoPanel: {
    flex: "0 0 auto",
    background: "#e8ad76",
    border: "5px solid #101018",
    borderRadius: 14,
    boxShadow: "inset 0 0 0 4px #f8d29b, 8px 8px 0 rgba(0,0,0,0.24)",
    padding: "18px 22px",
    transform: "rotate(1.5deg)",
    [theme.breakpoints.down("sm")]: {
      transform: "none"
    }
  },
  heroLogo: {
    width: 280,
    maxWidth: "62vw",
    display: "block",
    imageRendering: "pixelated"
  },
  referral: {
    width: "calc(100% + 24px)",
    margin: "-5px -12px 0",
    padding: "7px 16px 9px",
    backgroundColor: "#b95791",
    borderTop: "4px solid #1d1730",
    borderRight: "5px solid #4c2b67",
    borderBottom: "5px solid #4c2b67",
    borderLeft: "4px solid #fb6f8c",
    boxShadow: "inset 0 4px 0 #f78ab2, inset 0 -4px 0 #f16383",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      padding: "7px 12px 9px",
      gap: 8
    }
  },
  referralIcon: {
    width: 16,
    height: 22,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  referralText: {
    color: "#fff4ff",
    fontFamily: "SmallestPixel7, monospace",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1,
    textAlign: "center",
    textShadow: "2px 2px 0 rgba(43,28,64,0.65)",
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 190px",
      fontSize: 15,
      textAlign: "left"
    }
  },
  referralLink: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    minHeight: 28,
    padding: "4px 12px",
    color: "#2d2739",
    backgroundColor: "#d8def2",
    border: "3px solid #12162a",
    boxShadow: "4px 4px 0 #f5f3ef, 0 5px 0 #12162a",
    fontFamily: "SmallestPixel7, monospace",
    fontSize: 22,
    lineHeight: 1,
    letterSpacing: 0,
    textAlign: "center",
    textDecoration: "none",
    whiteSpace: "nowrap",
    transition: "transform 120ms ease, box-shadow 120ms ease",
    "&:hover": {
      textDecoration: "none",
      transform: "translate(2px, 2px)",
      boxShadow: "2px 2px 0 #f5f3ef, 0 3px 0 #12162a"
    },
    [theme.breakpoints.down("xs")]: {
      minHeight: 26,
      padding: "4px 8px",
      fontSize: 18,
      boxShadow: "3px 3px 0 #f5f3ef, 0 4px 0 #12162a"
    }
  },
  referralLinkIcon: {
    width: 17,
    height: 17,
    flex: "0 0 auto",
    strokeWidth: 3,
    [theme.breakpoints.down("xs")]: {
      width: 15,
      height: 15
    }
  },
  sunflowerNav: {
    width: "calc(100% + 24px)",
    margin: "0 -12px 18px",
    padding: "6px 12px 8px",
    background: "#27364c",
    borderBottom: "4px solid #101018",
    boxShadow: "inset 0 3px 0 rgba(255,255,255,0.08), inset 0 -2px 0 rgba(16,16,24,0.35)",
    display: "flex",
    justifyContent: "center",
    gap: 8,
    flexWrap: "wrap"
  },
  sunflowerNavLink: {
    minHeight: 30,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff8d6",
    background: "#1f5da8",
    border: "3px solid #101018",
    borderRadius: 8,
    boxShadow: "inset 0 0 0 2px rgba(255,248,214,0.22)",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1,
    padding: "4px 12px 5px",
    textDecoration: "none",
    whiteSpace: "nowrap",
    "&:hover": {
      color: "#fff8d6",
      textDecoration: "none",
      filter: "brightness(1.08)"
    },
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 132px",
      fontSize: 16,
      paddingLeft: 8,
      paddingRight: 8
    }
  },
  activeSunflowerNavLink: {
    color: "#20192b",
    background: "#f4c08a",
    boxShadow: "inset 0 0 0 2px #fff8d6",
    "&:hover": {
      color: "#2d2739"
    }
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 320px",
    gap: 18,
    alignItems: "start",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr"
    }
  },
  panel: {
    background: "#e8ad76",
    border: "4px solid #101018",
    borderRadius: 14,
    boxShadow: "inset 0 0 0 4px #f8d29b, 8px 8px 0 rgba(0,0,0,0.22)",
    color: "#332235",
    fontFamily: "'Courier New', monospace"
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    padding: "14px 16px 10px",
    borderBottom: "4px solid rgba(51,34,53,0.25)",
    flexWrap: "wrap"
  },
  brand: {
    display: "flex",
    alignItems: "center",
    gap: 12
  },
  logo: {
    width: 160,
    maxWidth: "42vw",
    imageRendering: "pixelated"
  },
  title: {
    margin: 0,
    fontSize: 24,
    lineHeight: 1,
    fontWeight: 900
  },
  farmTag: {
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    border: "3px solid #2a2540",
    borderRadius: 8,
    background: "#eef2ff",
    color: "#2a2540",
    padding: "4px 9px 4px 5px",
    fontSize: 15,
    fontWeight: 900,
    textDecoration: "none",
    boxShadow: "inset 0 0 0 3px #c9d4f5",
    "&:hover": {
      textDecoration: "none",
      filter: "brightness(1.04)"
    }
  },
  farmSearchIcon: {
    width: 32,
    height: 32,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  body: {
    padding: 16
  },
  panelTitle: {
    margin: 0,
    fontSize: 24,
    fontWeight: 900,
    lineHeight: 1.1
  },
  seasonHeading: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    flexWrap: "wrap"
  },
  seasonCountdown: {
    display: "inline-flex",
    alignItems: "center",
    border: "3px solid #2a2540",
    borderRadius: 8,
    background: "#eef2ff",
    boxShadow: "inset 0 0 0 3px #c9d4f5",
    color: "#2a2540",
    fontSize: 14,
    fontWeight: 900,
    padding: "5px 9px",
    whiteSpace: "nowrap"
  },
  boardMeta: {
    margin: "8px 0 14px",
    fontWeight: 900,
    lineHeight: 1.35
  },
  tabs: {
    display: "flex",
    gap: 10,
    padding: "4px 0 14px",
    overflowX: "auto"
  },
  tab: {
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#f1c08a",
    color: "#20192b",
    cursor: "pointer",
    font: "inherit",
    fontSize: 18,
    fontWeight: 900,
    padding: "7px 10px",
    whiteSpace: "nowrap",
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.24)",
    "&:hover": {
      filter: "brightness(1.04)"
    }
  },
  seasonTabIcon: {
    width: 24,
    height: 24,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  activeTab: {
    background: "#2876d5",
    color: "#fff8d6",
    boxShadow: "inset 0 0 0 3px #55b6ff"
  },
  searchGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 120px",
    gap: 12,
    marginBottom: 14,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  field: {
    position: "relative",
    display: "grid",
    gap: 6,
    fontSize: 14,
    fontWeight: 900
  },
  input: {
    width: "100%",
    minHeight: 44,
    boxSizing: "border-box",
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    color: "#332235",
    font: "inherit",
    fontSize: 18,
    fontWeight: 900,
    padding: "7px 10px"
  },
  clearButton: {
    alignSelf: "end",
    minHeight: 44,
    appearance: "none",
    cursor: "pointer",
    background: "#d8def2",
    border: "4px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.35)",
    color: "#2d2739",
    font: "inherit",
    fontSize: 16,
    fontWeight: 900,
    padding: "7px 10px",
    "&:hover:not(:disabled)": {
      filter: "brightness(1.04)"
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.55
    }
  },
  suggestions: {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    zIndex: 5,
    display: "grid",
    gap: 3,
    marginTop: 4,
    padding: 5,
    listStyle: "none",
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 10,
    boxShadow: "0 6px 0 rgba(0,0,0,0.22), inset 0 0 0 3px #f4c08a"
  },
  suggestionButton: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: 8,
    minHeight: 34,
    appearance: "none",
    cursor: "pointer",
    border: "2px solid transparent",
    borderRadius: 6,
    background: "transparent",
    color: "#332235",
    font: "inherit",
    fontSize: 16,
    fontWeight: 900,
    textAlign: "left",
    padding: "3px 6px",
    "&:hover, &:focus": {
      background: "#f1c08a",
      borderColor: "#332235",
      outline: "none"
    }
  },
  stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 8,
    marginBottom: 14,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  stat: {
    background: "#f1c08a",
    border: "3px solid #332235",
    borderRadius: 8,
    padding: "8px 10px",
    fontWeight: 900
  },
  seasonJump: {
    background: "#fff8d6",
    border: "3px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    color: "#332235",
    padding: "10px 12px",
    fontWeight: 900,
    marginBottom: 12
  },
  seasonJumpActions: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 8
  },
  seasonJumpButton: {
    appearance: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    cursor: "pointer",
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#d8def2",
    color: "#2d2739",
    font: "inherit",
    fontSize: 14,
    fontWeight: 900,
    padding: "4px 8px",
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.35)",
    "&:hover": {
      filter: "brightness(1.04)"
    }
  },
  seasonJumpIcon: {
    width: 18,
    height: 18,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  results: {
    display: "grid",
    gap: 12
  },
  fishResultsSection: {
    marginTop: 18,
    paddingTop: 14,
    borderTop: "4px solid rgba(51,34,53,0.25)"
  },
  fishSectionTopline: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap",
    marginBottom: 10
  },
  fishSectionMeta: {
    margin: 0,
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1.2
  },
  fishGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 8,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  fishCard: {
    background: "#fff8d6",
    color: "#332235",
    border: "3px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    padding: "9px 10px",
    fontWeight: 900
  },
  marvelCard: {
    background: "#2876d5",
    color: "#fff",
    border: "4px solid #111827",
    borderRadius: 12,
    boxShadow: "inset 0 0 0 3px #55b6ff",
    padding: 12,
    fontWeight: 900
  },
  completedCard: {
    background: "#4a5568",
    color: "#e2e8f0",
    boxShadow: "inset 0 0 0 3px #94a3b8"
  },
  dimCard: {
    background: "#4a5568",
    boxShadow: "inset 0 0 0 3px #7b8798"
  },
  marvelTopline: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: 10,
    flexWrap: "wrap"
  },
  marvelName: {
    margin: 0,
    color: "#fff2a8",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 30,
    lineHeight: 1,
    fontWeight: 900
  },
  marvelTitle: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    minWidth: 0
  },
  marvelIcon: {
    width: 34,
    height: 34,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  completedName: {
    color: "#cbd5e1",
    textDecoration: "line-through"
  },
  marvelControls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    flexWrap: "wrap"
  },
  caughtToggle: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: 26,
    gap: 5,
    cursor: "pointer",
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#fff8d6",
    color: "#2d2739",
    padding: "2px 8px 2px 5px",
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1,
    boxShadow: "inset 0 0 0 3px rgba(244,192,138,0.8)",
    userSelect: "none"
  },
  caughtCheckbox: {
    width: 15,
    height: 15,
    margin: 0,
    accentColor: "#178f5a",
    cursor: "pointer"
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 26,
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#d8def2",
    color: "#2d2739",
    padding: "2px 8px",
    fontSize: 13,
    fontWeight: 900,
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.35)"
  },
  saltBadge: {
    background: "#e93652",
    color: "#fff8d6"
  },
  sourceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 8,
    marginTop: 12,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  source: {
    background: "#fff8d6",
    color: "#332235",
    border: "3px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    padding: "9px 10px"
  },
  activeSource: {
    background: "#178f5a",
    color: "#fff",
    boxShadow: "inset 0 0 0 3px #52c98a"
  },
  sourceName: {
    display: "flex",
    alignItems: "center",
    gap: 7,
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1.1
  },
  fishIcon: {
    width: 28,
    height: 28,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  sourceMeta: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 6,
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1
  },
  requirementBlock: {
    display: "grid",
    gap: 6,
    marginTop: 9
  },
  requirementRow: {
    display: "grid",
    gridTemplateColumns: "82px minmax(0, 1fr)",
    gap: 8,
    alignItems: "center"
  },
  requirementLabel: {
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1,
    textTransform: "uppercase"
  },
  requirementItems: {
    display: "flex",
    gap: 6,
    flexWrap: "wrap"
  },
  itemChip: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    minHeight: 26,
    border: "2px solid rgba(16,16,24,0.5)",
    borderRadius: 8,
    background: "rgba(255,255,255,0.22)",
    color: "inherit",
    padding: "2px 6px",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1
  },
  marketChip: {
    background: "rgba(255,242,168,0.55)",
    borderColor: "rgba(16,16,24,0.65)"
  },
  marketBadge: {
    position: "absolute",
    top: -7,
    right: -7,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 14,
    height: 14,
    border: "2px solid #101018",
    borderRadius: 999,
    background: "#fff2a8",
    color: "#2d2739",
    fontSize: 9,
    fontWeight: 900,
    lineHeight: 1
  },
  marketBadgeInline: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: 14,
    height: 14,
    marginRight: 6,
    border: "2px solid #101018",
    borderRadius: 999,
    background: "#fff2a8",
    color: "#2d2739",
    fontSize: 9,
    fontWeight: 900,
    lineHeight: 1,
    verticalAlign: "middle"
  },
  itemIcon: {
    width: 22,
    height: 22,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  seasonList: {
    marginTop: 8,
    display: "flex",
    gap: 5,
    flexWrap: "wrap"
  },
  seasonPill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    border: "2px solid rgba(16,16,24,0.45)",
    borderRadius: 999,
    padding: "2px 7px 2px 5px",
    background: "rgba(255,255,255,0.22)",
    color: "inherit",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1
  },
  seasonPillIcon: {
    width: 15,
    height: 15,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  empty: {
    padding: "24px 16px",
    textAlign: "center",
    fontWeight: 900
  },
  board: {
    padding: "14px 8px",
    position: "sticky",
    top: 16,
    [theme.breakpoints.down("sm")]: {
      position: "static"
    }
  },
  farmList: {
    display: "grid",
    gap: 8,
    margin: 0,
    padding: 0,
    listStyle: "none"
  },
  farmRow: {
    display: "grid",
    gridTemplateColumns: "32px minmax(0, 1fr) auto",
    gap: 8,
    alignItems: "center",
    background: "#178f5a",
    border: "3px solid #111827",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 2px #52c98a",
    color: "#fff",
    padding: "8px 6px"
  },
  farmName: {
    minWidth: 0,
    fontSize: 16,
    fontWeight: 900,
    lineHeight: 1.1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  farmItems: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    flexWrap: "wrap",
    marginTop: 5
  },
  farmItemGroup: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    flexWrap: "wrap",
    minWidth: 0
  },
  farmItemTooltip: {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
    outline: "none",
    "&:hover $farmItemTooltipLabel, &:focus $farmItemTooltipLabel": {
      opacity: 1,
      transform: "translate(-50%, -6px)",
      pointerEvents: "none"
    },
    "&:focus $itemIcon": {
      boxShadow: "0 0 0 2px #fff2a8",
      borderRadius: 4
    }
  },
  farmItemButton: {
    appearance: "none",
    border: 0,
    borderRadius: 6,
    background: "transparent",
    padding: 0,
    cursor: "pointer",
    font: "inherit",
    lineHeight: 0,
    "&:hover $itemIcon": {
      filter: "brightness(1.12)",
      transform: "translateY(-1px)"
    },
    "&:focus": {
      boxShadow: "0 0 0 2px #fff2a8"
    }
  },
  farmItemTooltipLabel: {
    position: "absolute",
    left: "50%",
    bottom: "100%",
    zIndex: 3,
    opacity: 0,
    pointerEvents: "none",
    transform: "translate(-50%, 0)",
    transition: "opacity 120ms ease, transform 120ms ease",
    whiteSpace: "nowrap",
    background: "#111827",
    color: "#fff8d6",
    border: "2px solid #fff2a8",
    borderRadius: 6,
    boxShadow: "0 3px 0 rgba(0,0,0,0.28)",
    padding: "4px 7px",
    fontSize: 11,
    fontWeight: 900,
    lineHeight: 1
  },
  farmMeta: {
    marginTop: 4,
    color: "#fff8d6",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1.15
  },
  farmChance: {
    color: "#fff2a8",
    fontSize: 18,
    fontWeight: 900
  },
  boardActions: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
    flexWrap: "wrap"
  },
  completedCount: {
    color: "#332235",
    fontSize: 13,
    fontWeight: 900
  },
  resetButton: {
    appearance: "none",
    cursor: "pointer",
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#d8def2",
    color: "#2d2739",
    font: "inherit",
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1,
    padding: "5px 8px",
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.35)",
    "&:hover:not(:disabled)": {
      filter: "brightness(1.04)"
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.55
    }
  },
  tipPanel: {
    marginTop: 20,
    padding: 16
  },
  tipGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 8,
    marginTop: 12,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr"
    }
  },
  tip: {
    background: "#f1c08a",
    border: "3px solid #332235",
    borderRadius: 8,
    padding: "10px 12px",
    fontWeight: 900,
    lineHeight: 1.25
  }
}));

const seasonLabel = seasonId => {
  const season = seasons.find(item => item.id === seasonId);
  return season ? season.label : seasonId;
};

const SeasonPillList = ({ seasonIds, classes }) => (
  <div className={classes.seasonList}>
    {seasonIds.map(seasonId => {
      const season = seasons.find(item => item.id === seasonId);

      return (
        <span className={classes.seasonPill} key={seasonId}>
          {season && (
            <img
              src={season.icon}
              alt=""
              className={classes.seasonPillIcon}
              aria-hidden="true"
            />
          )}
          {seasonLabel(seasonId)}
        </span>
      );
    })}
  </div>
);

const sourceIsActive = (source, activeSeason) => source.seasons.includes(activeSeason);
const itemIsFish = itemName => Boolean(sourceFishSeasons[itemName]);

const ItemChip = ({ itemName, classes }) => (
  <span className={classes.itemChip}>
    {itemImages[itemName] && (
      <img src={itemImages[itemName]} alt="" className={classes.itemIcon} />
    )}
    {itemName}
  </span>
);

const MarketItemChip = ({ itemName, classes }) => (
  <span className={`${classes.itemChip} ${classes.marketChip}`}>
    {itemImages[itemName] && (
      <img src={itemImages[itemName]} alt="" className={classes.itemIcon} />
    )}
    {itemName}
    <span className={classes.marketBadge}>M</span>
  </span>
);

const RequirementRow = ({ label, items, classes }) => (
  <div className={classes.requirementRow}>
    <span className={classes.requirementLabel}>{label}</span>
    <div className={classes.requirementItems}>
      {items.length ? (
        items.map(item => (
          <ItemChip itemName={item} classes={classes} key={item} />
        ))
      ) : (
        <span className={classes.itemChip}>None listed</span>
      )}
    </div>
  </div>
);

const BaitRequirementRow = ({ bait, guaranteedCatchBaits, classes }) => (
  <div className={classes.requirementRow}>
    <span className={classes.requirementLabel}>Bait</span>
    <div className={classes.requirementItems}>
      {bait.length ? (
        bait.map(item => (
          <ItemChip itemName={item} classes={classes} key={item} />
        ))
      ) : !guaranteedCatchBaits.length ? (
        <span className={classes.itemChip}>None listed</span>
      ) : null}
      {!!guaranteedCatchBaits.length && (
        guaranteedCatchBaits.map(item => (
          <MarketItemChip itemName={item} classes={classes} key={item} />
        ))
      )}
    </div>
  </div>
);

const FarmItemIcon = ({ itemName, type, classes, onClick }) => {
  const content = (
    <>
      <img
        src={itemImages[itemName]}
        alt=""
        className={classes.itemIcon}
        aria-hidden="true"
      />
      <span className={classes.farmItemTooltipLabel}>
        {type}: {itemName}{onClick ? " - search fish" : ""}
      </span>
      {type === "Guaranteed" && (
        <span className={classes.marketBadge}>M</span>
      )}
    </>
  );

  return onClick ? (
    <button
      className={`${classes.farmItemTooltip} ${classes.farmItemButton}`}
      type="button"
      onMouseDown={event => {
        event.preventDefault();
        onClick();
      }}
      onClick={onClick}
      aria-label={`${type}: ${itemName}. Search this fish.`}
    >
      {content}
    </button>
  ) : (
    <span
      className={classes.farmItemTooltip}
      tabIndex={0}
      aria-label={`${type}: ${itemName}`}
    >
      {content}
    </span>
  );
};

const marvelSearchText = marvel => [
  marvel.name
].join(" ").toLowerCase();

const normalizeCaughtMarvels = caughtMarvels => (
  marvelNames.filter(name => caughtMarvels.includes(name))
);

const getCaughtMarvelsFromUrl = () => {
  if (typeof window === "undefined") {
    return null;
  }

  const params = new URLSearchParams(window.location.search);

  if (!params.has("caught")) {
    return null;
  }

  const slugs = params.getAll("caught").flatMap(value => value.split(",")).filter(Boolean);
  return normalizeCaughtMarvels(slugs.map(slug => marvelSlugLookup[slug]).filter(Boolean));
};

const getStoredCaughtMarvels = () => {
  if (typeof window === "undefined") {
    return [];
  }

  const caughtMarvelsFromUrl = getCaughtMarvelsFromUrl();

  if (caughtMarvelsFromUrl) {
    return caughtMarvelsFromUrl;
  }

  try {
    const stored = window.localStorage.getItem(caughtMarvelsStorageKey);
    const parsed = stored ? JSON.parse(stored) : [];

    return Array.isArray(parsed)
      ? normalizeCaughtMarvels(parsed.filter(name => typeof name === "string"))
      : [];
  } catch (error) {
    return [];
  }
};

const updateCaughtMarvelsUrl = caughtMarvels => {
  if (typeof window === "undefined") {
    return;
  }

  const url = new URL(window.location.href);
  url.searchParams.delete("caught");

  if (caughtMarvels.length) {
    caughtMarvels.map(slugifyMarvelName).forEach(slug => {
      url.searchParams.append("caught", slug);
    });
  }

  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
};

const SunflowerLandFishing = () => {
  const classes = useStyles();
  const [seasonClock, setSeasonClock] = useState(() => getSeasonClock());
  const [activeSeason, setActiveSeason] = useState(() => getSeasonClock().seasonId);
  const [query, setQuery] = useState("");
  const [selectedSearch, setSelectedSearch] = useState(null);
  const [caughtMarvels, setCaughtMarvels] = useState(getStoredCaughtMarvels);

  const selectedSeason = seasons.find(season => season.id === activeSeason) || seasons[0];
  const normalizedQuery = query.trim().toLowerCase();
  const caughtMarvelSet = useMemo(() => new Set(caughtMarvels), [caughtMarvels]);

  useEffect(() => {
    const timer = window.setInterval(() => setSeasonClock(getSeasonClock()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    setActiveSeason(seasonClock.seasonId);
  }, [seasonClock.seasonId]);

  const saveCaughtMarvels = nextCaughtMarvels => {
    const normalizedCaughtMarvels = normalizeCaughtMarvels(nextCaughtMarvels);

    setCaughtMarvels(normalizedCaughtMarvels);
    updateCaughtMarvelsUrl(normalizedCaughtMarvels);

    if (typeof window !== "undefined") {
      try {
        window.localStorage.setItem(
          caughtMarvelsStorageKey,
          JSON.stringify(normalizedCaughtMarvels)
        );
      } catch (error) {
        // Keep the checklist usable even if localStorage is unavailable.
      }
    }
  };

  const toggleCaughtMarvel = marvelName => {
    const nextCaughtMarvels = caughtMarvelSet.has(marvelName)
      ? caughtMarvels.filter(name => name !== marvelName)
      : [...caughtMarvels, marvelName];

    saveCaughtMarvels(nextCaughtMarvels);
  };

  const resetCaughtMarvels = () => {
    saveCaughtMarvels([]);
  };

  const searchFish = fishName => {
    const fish = fishCatalog.find(item => item.fish === fishName);

    if (!fish) {
      return;
    }

    setQuery(fish.fish);
    setSelectedSearch({
      name: fish.fish,
      image: fish.image,
      type: "Fish"
    });
  };

  const enrichedMarvels = useMemo(() => (
    marvels.map(marvel => {
      const activeSources = marvel.mapSources.filter(source => sourceIsActive(source, activeSeason));
      const isInSeason = activeSources.length > 0;
      const isCaught = caughtMarvelSet.has(marvel.name);
      return {
        ...marvel,
        isCaught,
        isInSeason,
        activeSources,
        canFarmPieces: isInSeason && !isCaught
      };
    })
  ), [activeSeason, caughtMarvelSet]);

  const visibleMarvels = useMemo(() => (
    enrichedMarvels
      .filter(marvel => {
        const matchesSearch = selectedSearch
          ? selectedSearch.type === "Marvel" && marvel.name === selectedSearch.name
          : !normalizedQuery || marvelSearchText(marvel).includes(normalizedQuery);

        // Marvels can be captured in every season. The season only controls
        // whether their source fish can currently be farmed for map pieces.
        return matchesSearch;
      })
      .sort((a, b) => Number(a.isCaught) - Number(b.isCaught))
  ), [enrichedMarvels, normalizedQuery, selectedSearch]);

  const visibleSeasonFish = useMemo(() => (
    fishCatalog.filter(fish => {
      const matchesSeason = selectedSearch
        ? selectedSearch.type === "Fish"
        : fish.seasons.includes(activeSeason);
      const matchesSearch = selectedSearch
        ? selectedSearch.type === "Fish" && fish.fish === selectedSearch.name
        : !normalizedQuery || fish.fish.toLowerCase().includes(normalizedQuery);

      return matchesSeason && matchesSearch;
    })
  ), [activeSeason, normalizedQuery, selectedSearch]);

  const searchSuggestions = useMemo(() => (
    normalizedQuery && !selectedSearch
      ? [
        ...fishCatalog.map(fish => ({
          name: fish.fish,
          image: fish.image,
          type: "Fish"
        })),
        ...marvels.map(marvel => ({
          name: marvel.name,
          image: itemImages[marvel.name],
          type: "Marvel"
        }))
      ]
        .filter((item, index, items) => (
          item.name.toLowerCase().includes(normalizedQuery) &&
          items.findIndex(candidate => candidate.name === item.name) === index
        ))
        .slice(0, 8)
      : []
  ), [normalizedQuery, selectedSearch]);

  const selectedSearchSeasons = useMemo(() => {
    if (!selectedSearch) {
      return [];
    }

    if (selectedSearch.type === "Fish") {
      const selectedFish = fishCatalog.find(fish => fish.fish === selectedSearch.name);
      return selectedFish ? selectedFish.seasons : [];
    }

    const selectedMarvel = marvels.find(marvel => marvel.name === selectedSearch.name);
    return selectedMarvel
      ? Array.from(new Set(selectedMarvel.mapSources.flatMap(source => source.seasons)))
      : [];
  }, [selectedSearch]);

  const selectedSearchIsOutOfSeason = selectedSearch &&
    selectedSearch.type === "Fish" &&
    !selectedSearchSeasons.includes(activeSeason);

  const farmTargets = useMemo(() => (
    enrichedMarvels
      .filter(marvel => !marvel.isCaught)
      .flatMap(marvel => marvel.activeSources.map(source => ({
        ...source,
        marvel: marvel.name,
        requirement: marvel.requirement
      })))
      .sort((a, b) => Number.parseFloat(b.chance) - Number.parseFloat(a.chance))
  ), [enrichedMarvels]);

  const farmableMarvelCount = enrichedMarvels.filter(marvel => marvel.canFarmPieces).length;
  const caughtMarvelCount = caughtMarvels.length;
  const showingFishSearch = selectedSearch && selectedSearch.type === "Fish";

  return (
    <div className={classes.page}>
      <Helmet>
        <title>Sunflower Land Fishing Tools | Chuck Fresco</title>
        <meta
          name="description"
          content="Search Sunflower Land Marvel fish map pieces by season and source fish."
        />
      </Helmet>

      <header className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.heroCopy}>
            <h1 className={classes.heroTitle}>Sunflower Land Fishing</h1>
            <p className={classes.heroSubtitle}>
              Search a season to see which Marvel map pieces are farmable, which fish drop them, and how many pieces you need.
            </p>
          </div>
          <div className={classes.heroLogoPanel}>
            <img src={sunflowerLogo} alt="Sunflower Land" className={classes.heroLogo} />
          </div>
        </div>
      </header>

      <div className={classes.referral}>
        <img src={lightningIcon} alt="" className={classes.referralIcon} />
        <span className={classes.referralText}>
          If you'd like to support me, use my referral code:
        </span>
        <a
          className={classes.referralLink}
          href={referralUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Use referral code ChuckFresco"
        >
          ChuckFresco
          <OpenInNewIcon className={classes.referralLinkIcon} aria-hidden="true" />
        </a>
      </div>

      <nav className={classes.sunflowerNav} aria-label="Sunflower Land pages">
        <Link
          className={classes.sunflowerNavLink}
          to="/sunflower-land/helpers"
        >
          Leaderboard
        </Link>
        <Link
          className={`${classes.sunflowerNavLink} ${classes.activeSunflowerNavLink}`}
          to="/sunflower-land/tools/fishing"
        >
          Fishing
        </Link>
      </nav>

      <main className={classes.shell}>
        <div className={classes.layout}>
          <section className={classes.panel}>
            <div className={classes.header}>
              <div className={classes.brand}>
                <img src={sunflowerLogo} alt="Sunflower Land" className={classes.logo} />
                <h1 className={classes.title}>Marvel Map Finder</h1>
              </div>
              <a
                className={classes.farmTag}
                href={farmVisitUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit Sunflower Land farm ${FARM_ID}`}
              >
                <img src={searchIcon} alt="" className={classes.farmSearchIcon} />
                <span>Farm ID #{FARM_ID}</span>
              </a>
            </div>

            <div className={classes.body}>
              <div className={classes.seasonHeading}>
                <h2 className={classes.panelTitle}>{selectedSeason.label} Marvel Pieces</h2>
                <span className={classes.seasonCountdown} title="Seasons reset Mondays at 5:00 PM Pacific Time">
                  Next season in {formatCountdown(seasonClock.nextResetAt - Date.now())}
                </span>
              </div>
              <p className={classes.boardMeta}>
                A Marvel needs 9 map pieces. Map pieces drop while catching specific fish, and each source fish has its own season window.
              </p>

              <nav className={classes.tabs} aria-label="Fishing season">
                {seasons.map(season => (
                  <button
                    key={season.id}
                    type="button"
                    className={`${classes.tab} ${activeSeason === season.id ? classes.activeTab : ""}`}
                    onClick={() => setActiveSeason(season.id)}
                    style={activeSeason === season.id ? {
                      background: season.color,
                      boxShadow: `inset 0 0 0 3px ${season.shadow}`
                    } : undefined}
                  >
                    <img
                      src={season.icon}
                      alt=""
                      className={classes.seasonTabIcon}
                      aria-hidden="true"
                    />
                    {season.label}
                  </button>
                ))}
              </nav>

              <div className={classes.searchGrid}>
                <label className={classes.field}>
                  Search Marvel or fish
                  <input
                    className={classes.input}
                    type="search"
                    value={query}
                    onChange={event => {
                      setQuery(event.target.value);
                      setSelectedSearch(null);
                    }}
                    placeholder="Starlight, Halibut, Tuna..."
                  />
                  {!!searchSuggestions.length && (
                    <ul className={classes.suggestions}>
                      {searchSuggestions.map(item => (
                        <li key={`${item.type}-${item.name}`}>
                          <button
                            className={classes.suggestionButton}
                            type="button"
                            onClick={() => {
                              setQuery(item.name);
                              setSelectedSearch(item);
                            }}
                          >
                            {item.image && (
                              <img src={item.image} alt="" className={classes.itemIcon} />
                            )}
                            {item.name}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </label>
                <button
                  className={classes.clearButton}
                  type="button"
                  onClick={() => {
                    setQuery("");
                    setSelectedSearch(null);
                  }}
                  disabled={!query}
                >
                  Clear
                </button>
              </div>

              <div className={classes.stats}>
                <div className={classes.stat}>Farmable Marvels: {farmableMarvelCount}</div>
                <div className={classes.stat}>Fish to farm: {farmTargets.length}</div>
                <div className={classes.stat}>Caught Marvels: {caughtMarvelCount}</div>
              </div>

              {selectedSearchIsOutOfSeason && (
                <div className={classes.seasonJump}>
                  {selectedSearch.name} is not available in {selectedSeason.label}.
                  <div className={classes.seasonJumpActions}>
                    {selectedSearchSeasons.map(seasonId => {
                      const season = seasons.find(item => item.id === seasonId);

                      return (
                        <button
                          className={classes.seasonJumpButton}
                          type="button"
                          key={seasonId}
                          onClick={() => setActiveSeason(seasonId)}
                        >
                          {season && (
                            <img
                              src={season.icon}
                              alt=""
                              className={classes.seasonJumpIcon}
                              aria-hidden="true"
                            />
                          )}
                          {seasonLabel(seasonId)}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {!showingFishSearch && (
                <div className={classes.results}>
                  {visibleMarvels.map(marvel => (
                    <article
                      className={`${classes.marvelCard} ${!marvel.canFarmPieces ? classes.dimCard : ""} ${marvel.isCaught ? classes.completedCard : ""}`}
                      key={marvel.name}
                    >
                      <div className={classes.marvelTopline}>
                        <div className={classes.marvelTitle}>
                          {itemImages[marvel.name] && (
                            <img src={itemImages[marvel.name]} alt="" className={classes.marvelIcon} />
                          )}
                          <h3 className={`${classes.marvelName} ${marvel.isCaught ? classes.completedName : ""}`}>
                            {marvel.name}
                          </h3>
                        </div>
                        <div className={classes.marvelControls}>
                          <span className={classes.badge}>9 pieces</span>
                          {marvel.requirement && (
                            <span className={`${classes.badge} ${classes.saltBadge}`}>
                              {marvel.requirement}
                            </span>
                          )}
                          <label className={classes.caughtToggle}>
                            <input
                              className={classes.caughtCheckbox}
                              type="checkbox"
                              checked={marvel.isCaught}
                              onChange={() => toggleCaughtMarvel(marvel.name)}
                            />
                            Caught
                          </label>
                        </div>
                      </div>

                      <div className={classes.sourceGrid}>
                        {marvel.mapSources.map(source => {
                          const active = sourceIsActive(source, activeSeason);

                          return (
                            <div
                              className={`${classes.source} ${active ? classes.activeSource : ""}`}
                              key={`${marvel.name}-${source.fish}`}
                            >
                              <span className={classes.sourceName}>
                                {source.image && (
                                  <img src={source.image} alt="" className={classes.fishIcon} />
                                )}
                                {active ? "Farm" : "Off season"} {source.fish}
                              </span>
                              <div className={classes.sourceMeta}>
                                <span>Map chance {source.chance}</span>
                                <span>For {marvel.name}</span>
                              </div>
                              <div className={classes.requirementBlock}>
                                <BaitRequirementRow
                                  bait={source.requirements.bait}
                                  guaranteedCatchBaits={source.guaranteedCatchBaits}
                                  classes={classes}
                                />
                                <RequirementRow
                                  label="Likes"
                                  items={source.requirements.likes}
                                  classes={classes}
                                />
                              </div>
                              <SeasonPillList seasonIds={source.seasons} classes={classes} />
                            </div>
                          );
                        })}
                      </div>
                    </article>
                  ))}

                  {!visibleMarvels.length && (
                    <div className={classes.empty}>No Marvel map pieces match this search.</div>
                  )}
                </div>
              )}

              <section className={classes.fishResultsSection}>
                <div className={classes.fishSectionTopline}>
                  <h2 className={classes.panelTitle}>
                    {showingFishSearch ? `${selectedSearch.name} Details` : `${selectedSeason.label} Fish`}
                  </h2>
                  <p className={classes.fishSectionMeta}>
                    {showingFishSearch
                      ? "Selected fish requirements and season window"
                      : `${visibleSeasonFish.length} fish shown below Marvel targets`}
                  </p>
                </div>
                <div className={classes.fishGrid}>
                  {visibleSeasonFish.map(fish => (
                    <article className={classes.fishCard} key={fish.fish}>
                      <span className={classes.sourceName}>
                        {fish.image && (
                          <img src={fish.image} alt="" className={classes.fishIcon} />
                        )}
                        {fish.fish}
                      </span>
                      <div className={classes.sourceMeta}>
                        <span>
                          {fish.seasons.includes(activeSeason)
                            ? fish.marketOnlySeasonData ? "Fish Market catch" : "Seasonal catch"
                            : `Off season in ${selectedSeason.label}`}
                        </span>
                      </div>
                      <div className={classes.requirementBlock}>
                        <BaitRequirementRow
                          bait={fish.requirements.bait}
                          guaranteedCatchBaits={fish.guaranteedCatchBaits}
                          classes={classes}
                        />
                        <RequirementRow
                          label="Likes"
                          items={fish.requirements.likes}
                          classes={classes}
                        />
                      </div>
                      <SeasonPillList seasonIds={fish.seasons} classes={classes} />
                    </article>
                  ))}
                </div>
                {!visibleSeasonFish.length && (
                  <div className={classes.empty}>No fish match this search in {selectedSeason.label}.</div>
                )}
              </section>
            </div>
          </section>

          <aside className={`${classes.panel} ${classes.board}`}>
            <h2 className={classes.panelTitle}>Farm These In {selectedSeason.label}</h2>
            <p className={classes.boardMeta}>
              Sorted by map-piece drop chance. Caught Marvels are removed from this list.
            </p>
            <div className={classes.boardActions}>
              <span className={classes.completedCount}>{caughtMarvelCount} caught</span>
              <button
                className={classes.resetButton}
                type="button"
                onClick={resetCaughtMarvels}
                disabled={!caughtMarvelCount}
              >
                Reset caught
              </button>
            </div>
            <ol className={classes.farmList}>
              {farmTargets.map(target => (
                <li className={classes.farmRow} key={`${target.marvel}-${target.fish}`}>
                  {target.image && (
                    <img src={target.image} alt="" className={classes.fishIcon} />
                  )}
                  <div>
                    <div className={classes.farmName}>{target.fish}</div>
                    <div className={classes.farmMeta}>
                      {target.marvel}{target.requirement ? ` - ${target.requirement}` : ""}
                    </div>
                    <div className={classes.farmItems}>
                      <span className={classes.farmItemGroup}>
                        {target.requirements.bait.map(item => (
                          <FarmItemIcon
                            itemName={item}
                            type="Bait"
                            classes={classes}
                            key={`bait-${item}`}
                          />
                        ))}
                        {target.requirements.likes.map(item => (
                          <FarmItemIcon
                            itemName={item}
                            type="Likes"
                            classes={classes}
                            onClick={itemIsFish(item) ? () => searchFish(item) : undefined}
                            key={`likes-${item}`}
                          />
                        ))}
                      </span>
                      {!!target.guaranteedCatchBaits.length && (
                        <span className={classes.farmItemGroup}>
                          {target.guaranteedCatchBaits.map(item => (
                            <FarmItemIcon
                              itemName={item}
                              type="Guaranteed"
                              classes={classes}
                              key={`guaranteed-${item}`}
                            />
                          ))}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className={classes.farmChance}>{target.chance}</span>
                </li>
              ))}
            </ol>
            {!farmTargets.length && (
              <div className={classes.empty}>No uncaught Marvel targets this season.</div>
            )}
          </aside>
        </div>

        <section className={`${classes.panel} ${classes.tipPanel}`}>
          <h2 className={classes.panelTitle}>Map Piece Rules</h2>
          <div className={classes.tipGrid}>
            <div className={classes.tip}>
              Collect 9 map pieces for a Marvel fish before you can complete that Marvel.
            </div>
            <div className={classes.tip}>
              Full Moon gives +1 chance to find a map piece. Deep Sea Helm gives +1 Marvel map-piece chance and stacks with Full Moon.
            </div>
            <div className={classes.tip}>
              You cannot find pieces for Marvels you have already caught. The current rule is 1 Marvel per player.
            </div>
            <div className={classes.tip}>
              <span className={classes.marketBadgeInline}>M</span>
              Fish Market bait. Using that bait guarantees catching that fish.
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SunflowerLandFishing;
