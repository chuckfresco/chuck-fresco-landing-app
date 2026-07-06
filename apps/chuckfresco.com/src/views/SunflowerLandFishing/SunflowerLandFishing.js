import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";

const FARM_ID = "7089202106478272";
const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const searchIcon = "/assets/sunflower-land/icons/search.png";
const lightningIcon = "/assets/sunflower-land/icons/lightning.png";
const referralUrl = "https://sunflower-land.com/play/?ref=ChuckFresco";
const farmVisitUrl = `https://sunflower-land.com/play/#/visit/${FARM_ID}`;
const fishingAssetPath = "/assets/sunflower-land/fishing";

const asset = fileName => encodeURI(`${fishingAssetPath}/${fileName}`);

const itemImages = {
  Anchovy: asset("imgi_11_Anchovy.png"),
  "Barred Knifejaw": asset("imgi_100_Barred Knifejaw.png"),
  Blueberry: asset("imgi_44_Blueberry.png"),
  Clownfish: asset("imgi_86_Clownfish.png"),
  Coelacanth: asset("imgi_131_Coelacanth.png"),
  Earthworm: asset("imgi_37_Earthworm.png"),
  "Fish Oil": asset("imgi_101_Fish Oil.png"),
  "Fish Stick": asset("imgi_99_Fish Stick.png"),
  "Fishing Lure": asset("imgi_91_Fishing Lure.png"),
  Grub: asset("imgi_89_Grub.png"),
  Halibut: asset("imgi_123_Halibut.png"),
  "Hammerhead shark": asset("imgi_98_Hammerhead shark.png"),
  "Horse Mackerel": asset("imgi_88_Horse Mackerel.png"),
  "Mahi Mahi": asset("imgi_104_Mahi Mahi.png"),
  Parrotfish: asset("imgi_106_Parrotfish.png"),
  "Red Wiggler": asset("imgi_90_Red Wiggler.png"),
  "Rock Blackfish": asset("imgi_126_Rock Blackfish.png"),
  "Sea Bass": asset("imgi_122_Sea Bass.png"),
  Squid: asset("imgi_81_Squid.png"),
  Stone: asset("imgi_92_Stone.png"),
  Sunfish: asset("imgi_83_Sunfish.png"),
  Surgeonfish: asset("imgi_95_Surgeonfish.png"),
  Trout: asset("imgi_132_Trout.png"),
  Tuna: asset("imgi_73_Tuna.png"),
  "White Shark": asset("imgi_111_White Shark.png")
};

const seasons = [
  { id: "spring", label: "Spring", color: "#3d8a5d", shadow: "#90d58e" },
  { id: "summer", label: "Summer", color: "#d99a22", shadow: "#ffe889" },
  { id: "autumn", label: "Autumn", color: "#c95839", shadow: "#f4a35f" },
  { id: "winter", label: "Winter", color: "#2876d5", shadow: "#8ed8ff" }
];

const sourceFishSeasons = {
  "Barred Knifejaw": ["spring", "summer"],
  Clownfish: ["summer", "winter"],
  Coelacanth: ["spring", "winter"],
  Halibut: ["spring", "autumn"],
  "Hammerhead shark": ["summer", "autumn"],
  "Horse Mackerel": ["summer", "winter"],
  "Mahi Mahi": ["summer", "autumn"],
  Parrotfish: ["spring", "summer"],
  "Rock Blackfish": ["autumn"],
  "Sea Bass": ["spring", "autumn"],
  Squid: ["spring", "winter"],
  Sunfish: ["summer", "autumn"],
  Surgeonfish: ["summer", "autumn"],
  Trout: ["winter"],
  Tuna: ["spring", "summer", "autumn", "winter"],
  "White Shark": ["summer", "winter"]
};

const fishRequirements = {
  "Barred Knifejaw": {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Anchovy"]
  },
  Clownfish: {
    bait: ["Earthworm"],
    likes: []
  },
  Coelacanth: {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: []
  },
  Halibut: {
    bait: ["Earthworm"],
    likes: ["Anchovy"]
  },
  "Hammerhead shark": {
    bait: ["Grub", "Fishing Lure"],
    likes: ["Stone"]
  },
  "Horse Mackerel": {
    bait: ["Earthworm"],
    likes: ["Blueberry"]
  },
  "Mahi Mahi": {
    bait: ["Grub", "Red Wiggler", "Fishing Lure"],
    likes: []
  },
  Parrotfish: {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: []
  },
  "Rock Blackfish": {
    bait: ["Grub"],
    likes: []
  },
  "Sea Bass": {
    bait: ["Earthworm"],
    likes: ["Anchovy"]
  },
  Squid: {
    bait: ["Earthworm"],
    likes: []
  },
  Sunfish: {
    bait: ["Red Wiggler"],
    likes: ["Horse Mackerel"]
  },
  Surgeonfish: {
    bait: ["Grub", "Fishing Lure"],
    likes: []
  },
  Trout: {
    bait: ["Red Wiggler"],
    likes: []
  },
  Tuna: {
    bait: ["Grub", "Red Wiggler", "Fishing Lure"],
    likes: ["Fish Oil"]
  },
  "White Shark": {
    bait: ["Red Wiggler", "Fishing Lure"],
    likes: ["Tuna"]
  }
};

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
    image: itemImages[source.fish]
  }))
}));

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
    margin: "-5px -12px 18px",
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
  layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 360px",
    gap: 20,
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
  activeTab: {
    background: "#2876d5",
    color: "#fff8d6",
    boxShadow: "inset 0 0 0 3px #55b6ff"
  },
  searchGrid: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) 180px",
    gap: 12,
    marginBottom: 14,
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  field: {
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
  results: {
    display: "grid",
    gap: 12
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
    gridTemplateColumns: "48px minmax(0, 1fr)",
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
    border: "2px solid rgba(16,16,24,0.45)",
    borderRadius: 999,
    padding: "2px 7px",
    background: "rgba(255,255,255,0.22)",
    color: "inherit",
    fontSize: 12,
    fontWeight: 900,
    lineHeight: 1
  },
  empty: {
    padding: "24px 16px",
    textAlign: "center",
    fontWeight: 900
  },
  board: {
    padding: 16,
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
    gap: 10,
    alignItems: "center",
    background: "#178f5a",
    border: "3px solid #111827",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 2px #52c98a",
    color: "#fff",
    padding: "8px 10px"
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
    gap: 4,
    flexWrap: "wrap",
    marginTop: 5
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
  tipPanel: {
    marginTop: 20,
    padding: 16
  },
  tipGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
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

const sourceIsActive = (source, activeSeason) => source.seasons.includes(activeSeason);

const sourceSearchText = source => [
  source.fish,
  source.chance,
  source.seasons.map(seasonLabel).join(" "),
  source.requirements.bait.join(" "),
  source.requirements.likes.join(" ")
].join(" ");

const ItemChip = ({ itemName, classes }) => (
  <span className={classes.itemChip}>
    {itemImages[itemName] && (
      <img src={itemImages[itemName]} alt="" className={classes.itemIcon} />
    )}
    {itemName}
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

const marvelSearchText = marvel => [
  marvel.name,
  marvel.requirement || "",
  ...marvel.mapSources.map(sourceSearchText)
].join(" ").toLowerCase();

const SunflowerLandFishing = () => {
  const classes = useStyles();
  const [activeSeason, setActiveSeason] = useState("summer");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const selectedSeason = seasons.find(season => season.id === activeSeason) || seasons[0];
  const normalizedQuery = query.trim().toLowerCase();

  const enrichedMarvels = useMemo(() => (
    marvels.map(marvel => {
      const activeSources = marvel.mapSources.filter(source => sourceIsActive(source, activeSeason));
      return {
        ...marvel,
        activeSources,
        canFarmPieces: activeSources.length > 0
      };
    })
  ), [activeSeason]);

  const visibleMarvels = useMemo(() => (
    enrichedMarvels.filter(marvel => {
      const matchesSearch = !normalizedQuery || marvelSearchText(marvel).includes(normalizedQuery);
      const matchesSeason = showAll || marvel.canFarmPieces;

      return matchesSearch && matchesSeason;
    })
  ), [enrichedMarvels, normalizedQuery, showAll]);

  const farmTargets = useMemo(() => (
    enrichedMarvels
      .flatMap(marvel => marvel.activeSources.map(source => ({
        ...source,
        marvel: marvel.name,
        requirement: marvel.requirement
      })))
      .sort((a, b) => Number.parseFloat(b.chance) - Number.parseFloat(a.chance))
  ), [enrichedMarvels]);

  const farmableMarvelCount = enrichedMarvels.filter(marvel => marvel.canFarmPieces).length;

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
              <h2 className={classes.panelTitle}>{selectedSeason.label} Marvel Pieces</h2>
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
                    onChange={event => setQuery(event.target.value)}
                    placeholder="Starlight, Halibut, Tuna..."
                  />
                </label>
                <label className={classes.field}>
                  Season view
                  <select
                    className={classes.input}
                    value={showAll ? "all" : "farmable"}
                    onChange={event => setShowAll(event.target.value === "all")}
                  >
                    <option value="farmable">Farmable now</option>
                    <option value="all">Show all Marvels</option>
                  </select>
                </label>
              </div>

              <div className={classes.stats}>
                <div className={classes.stat}>Farmable Marvels: {farmableMarvelCount}</div>
                <div className={classes.stat}>Fish to farm: {farmTargets.length}</div>
                <div className={classes.stat}>Pieces per Marvel: 9</div>
              </div>

              <div className={classes.results}>
                {visibleMarvels.map(marvel => (
                  <article
                    className={`${classes.marvelCard} ${!marvel.canFarmPieces ? classes.dimCard : ""}`}
                    key={marvel.name}
                  >
                    <div className={classes.marvelTopline}>
                      <h3 className={classes.marvelName}>{marvel.name}</h3>
                      <div>
                        <span className={classes.badge}>9 pieces</span>
                        {marvel.requirement && (
                          <span className={`${classes.badge} ${classes.saltBadge}`}>
                            {marvel.requirement}
                          </span>
                        )}
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
                              <RequirementRow
                                label="Bait"
                                items={source.requirements.bait}
                                classes={classes}
                              />
                              <RequirementRow
                                label="Likes"
                                items={source.requirements.likes}
                                classes={classes}
                              />
                            </div>
                            <div className={classes.seasonList}>
                              {source.seasons.map(season => (
                                <span className={classes.seasonPill} key={season}>
                                  {seasonLabel(season)}
                                </span>
                              ))}
                            </div>
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
            </div>
          </section>

          <aside className={`${classes.panel} ${classes.board}`}>
            <h2 className={classes.panelTitle}>Farm These In {selectedSeason.label}</h2>
            <p className={classes.boardMeta}>
              Sorted by map-piece drop chance. These are the fish worth targeting this season.
            </p>
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
                      {target.requirements.bait.map(item => (
                        <img
                          src={itemImages[item]}
                          alt={item}
                          title={item}
                          className={classes.itemIcon}
                          key={item}
                        />
                      ))}
                      {target.requirements.likes.map(item => (
                        <img
                          src={itemImages[item]}
                          alt={item}
                          title={item}
                          className={classes.itemIcon}
                          key={item}
                        />
                      ))}
                    </div>
                  </div>
                  <span className={classes.farmChance}>{target.chance}</span>
                </li>
              ))}
            </ol>
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default SunflowerLandFishing;
