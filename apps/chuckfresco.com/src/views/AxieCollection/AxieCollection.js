import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet";
import { makeStyles } from "@material-ui/core/styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import FilterListIcon from "@material-ui/icons/FilterList";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SearchIcon from "@material-ui/icons/Search";
import SortIcon from "@material-ui/icons/Sort";
import { trackEvent } from "utils/analytics";

const AXIE_COLLECTION_SNAPSHOT_URL = "/assets/axie/collection/axieCollection.json";
const DEFAULT_X_REQUEST_POST_URL = "https://x.com/ChuckFresco/status/2076234287314247819?s=20";
const X_FOLLOW_URL = "https://x.com/intent/follow?screen_name=ChuckFresco";
const MANUALLY_RESERVED_AXIE_IDS = [
  "968",
  "2866",
  "3022",
  "11216656",
  "8697437",
  "11315678",
  "10685600",
  "6105683",
  "7714767",
  "8054260"
];
const TITLE_ORDER = ["Origin", "MEO Corp", "MEO Corp II", "Japan", "Xmas", "Shiny", "Summer", "Nightmare", "AgamoGenesis"];
const ASSET_BASE = "/assets/axie/collection";
const TERRARIUM_LOGO = `${ASSET_BASE}/dojo-building-icon.png`;
const EGG_ICON = `${ASSET_BASE}/download (14).svg`;
const X_ICON = "/assets/logo/x-logo-brand/logo-white.png";

const classIcons = {
  Aquatic: `${ASSET_BASE}/imgi_21_aquatic.png`,
  Beast: `${ASSET_BASE}/imgi_19_beast.png`,
  Bird: `${ASSET_BASE}/imgi_23_bird.png`,
  Bug: `${ASSET_BASE}/imgi_27_bug.png`,
  Dawn: `${ASSET_BASE}/dawn.png`,
  Dusk: `${ASSET_BASE}/imgi_32_dusk.png`,
  Mech: `${ASSET_BASE}/imgi_26_mech.png`,
  Plant: `${ASSET_BASE}/imgi_22_plant.png`,
  Reptile: `${ASSET_BASE}/imgi_29_reptile.png`
};

const collectionIcons = {
  AgamoGenesis: `${ASSET_BASE}/imgi_20_mystic.png`,
  Japan: `${ASSET_BASE}/imgi_31_japan.png`,
  "MEO Corp": `${ASSET_BASE}/imgi_28_meo.png`,
  "MEO Corp II": `${ASSET_BASE}/imgi_28_meo.png`,
  Mystic: `${ASSET_BASE}/imgi_20_mystic.png`,
  Nightmare: `${ASSET_BASE}/imgi_17_icon-nightmare.png`,
  Origin: `${ASSET_BASE}/imgi_18_origin.png`,
  Shiny: `${ASSET_BASE}/imgi_25_shiny.png`,
  Summer: `${ASSET_BASE}/imgi_24_summer.png`,
  Xmas: `${ASSET_BASE}/imgi_30_xmas.png`
};

const collectionBadgeColors = {
  AgamoGenesis: "#e83c76",
  Japan: "#9a6437",
  "MEO Corp": "#29303b",
  "MEO Corp II": "#2f6d95",
  Mystic: "#8d38d1",
  Nightmare: "#9f00a8",
  Origin: "#c92a1e",
  Shiny: "#1396bd",
  Summer: "#00a77d",
  Xmas: "#158611"
};

const collectionAliases = Object.keys(collectionIcons).reduce((aliases, marker) => {
  aliases[marker.toLowerCase()] = marker;
  return aliases;
}, {});

const collectionSignalMatchers = [
  { marker: "Shiny", test: value => value.includes("shiny") },
  { marker: "Summer", test: value => value.includes("summer") },
  { marker: "Xmas", test: value => value.includes("xmas") || value.includes("christmas") },
  { marker: "Japan", test: value => value.includes("japan") },
  { marker: "Mystic", test: value => value.includes("mystic") },
  { marker: "Nightmare", test: value => value.includes("nightmare") }
];

const classColors = {
  Aquatic: "#22c7e9",
  Beast: "#f2a51f",
  Bird: "#ff6aa2",
  Bug: "#ff4e45",
  Dawn: "#8ee8ff",
  Dusk: "#00a9b6",
  Mech: "#b7c4d7",
  Plant: "#8cc63f",
  Reptile: "#a166ff"
};

const useStyles = makeStyles(theme => ({
  page: {
    minHeight: "100vh",
    background: "#0f131a",
    color: "#f5f7fb",
    padding: "34px 24px 56px",
    [theme.breakpoints.down("xs")]: {
      padding: "24px 14px 42px"
    }
  },
  shell: {
    maxWidth: 1440,
    margin: "0 auto"
  },
  hero: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) auto",
    gap: 28,
    alignItems: "center",
    marginBottom: 28,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr"
    }
  },
  eyebrow: {
    margin: "0 0 10px",
    color: "#ff9e45",
    fontSize: 14,
    fontWeight: 900,
    letterSpacing: 0,
    textTransform: "uppercase"
  },
  title: {
    margin: 0,
    color: "#ffffff",
    fontSize: 46,
    lineHeight: 1.05,
    fontWeight: 900,
    [theme.breakpoints.down("xs")]: {
      fontSize: 34
    }
  },
  subtitle: {
    maxWidth: 760,
    margin: "14px 0 0",
    color: "#aab3c5",
    fontSize: 17,
    lineHeight: 1.6
  },
  rulesPanel: {
    maxWidth: 860,
    marginTop: 18,
    border: "1px solid #242b36",
    borderRadius: 8,
    background: "#151a22",
    overflow: "hidden"
  },
  rulesHeader: {
    minHeight: 52,
    borderBottom: "1px solid #242b36",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    padding: "0 16px"
  },
  rulesTitle: {
    margin: 0,
    color: "#ffffff",
    fontSize: 18,
    fontWeight: 900
  },
  rulesActions: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    flexWrap: "wrap"
  },
  ruleAction: {
    minHeight: 36,
    borderRadius: 8,
    background: "#ff9e45",
    color: "#11151c",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: "0 11px",
    textDecoration: "none",
    fontSize: 13,
    fontWeight: 900,
    whiteSpace: "nowrap",
    transition: "background 160ms ease, transform 160ms ease",
    "&:hover, &:focus": {
      background: "#ffb15f",
      outline: 0,
      transform: "translateY(-1px)"
    }
  },
  ruleList: {
    listStyle: "none",
    margin: 0,
    padding: "14px 16px 12px",
    display: "grid",
    gap: 12
  },
  ruleItem: {
    display: "grid",
    gridTemplateColumns: "22px minmax(0, 1fr)",
    gap: 10,
    alignItems: "start",
    color: "#c7d0df",
    fontSize: 15,
    lineHeight: 1.45,
    fontWeight: 750,
    "& svg": {
      color: "#48d597",
      marginTop: 1
    },
    "& strong": {
      color: "#ffffff",
      fontWeight: 900
    }
  },
  ruleWarningIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    color: "#ff4e45",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 24,
    lineHeight: 1,
    fontWeight: 900,
    marginTop: -2
  },
  ruleTemplate: {
    margin: "0 16px 16px",
    border: "1px solid #303746",
    borderRadius: 8,
    background: "#0d1117",
    overflow: "hidden"
  },
  ruleTemplateHeader: {
    minHeight: 34,
    borderBottom: "1px solid #242b36",
    color: "#ff9e45",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8,
    padding: "0 12px",
    fontSize: 13,
    fontWeight: 900
  },
  copyTemplateButton: {
    minHeight: 24,
    border: "1px solid #303746",
    borderRadius: 6,
    background: "#151a22",
    color: "#ffffff",
    cursor: "pointer",
    padding: "0 9px",
    fontSize: 12,
    fontWeight: 900,
    "&:hover, &:focus": {
      borderColor: "#ff9e45",
      color: "#ff9e45",
      outline: 0
    }
  },
  ruleTemplateText: {
    margin: 0,
    color: "#d8dfeb",
    padding: "12px",
    fontFamily: "Menlo, Monaco, Consolas, 'Liberation Mono', monospace",
    fontSize: 13,
    lineHeight: 1.5,
    whiteSpace: "pre-wrap"
  },
  logo: {
    width: 250,
    maxWidth: "60vw",
    justifySelf: "end",
    filter: "drop-shadow(0 18px 30px rgba(0,0,0,0.35))",
    [theme.breakpoints.down("sm")]: {
      justifySelf: "start"
    }
  },
  statsPanel: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 1,
    marginBottom: 24,
    border: "1px solid #242a35",
    borderRadius: 8,
    overflow: "hidden",
    background: "#242a35",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr"
    }
  },
  stat: {
    minHeight: 94,
    padding: "18px 20px",
    background: "#191e27",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  statLabel: {
    color: "#8994a8",
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase"
  },
  statValue: {
    marginTop: 6,
    color: "#ffffff",
    fontSize: 28,
    lineHeight: 1,
    fontWeight: 900
  },
  toolbar: {
    display: "grid",
    gridTemplateColumns: "minmax(220px, 1fr) minmax(190px, auto) auto",
    gap: 12,
    alignItems: "center",
    margin: "0 0 24px",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr 1fr"
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  inputWrap: {
    minHeight: 50,
    border: "1px solid #2a3140",
    borderRadius: 8,
    background: "#151a22",
    color: "#ffffff",
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 14px"
  },
  input: {
    width: "100%",
    border: 0,
    outline: 0,
    background: "transparent",
    color: "#ffffff",
    fontSize: 15,
    "&::placeholder": {
      color: "#737f92"
    }
  },
  select: {
    minHeight: 50,
    border: "1px solid #2a3140",
    borderRadius: 8,
    background: "#151a22",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 800,
    padding: "0 38px 0 14px",
    outline: 0
  },
  multiFilter: {
    minHeight: 50,
    border: "1px solid #2a3140",
    borderRadius: 8,
    background: "#151a22",
    color: "#ffffff",
    position: "relative",
    minWidth: 190
  },
  multiFilterSummary: {
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 14px",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 900,
    listStyle: "none",
    "&::-webkit-details-marker": {
      display: "none"
    }
  },
  multiFilterLabel: {
    minWidth: 0,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  multiFilterChevron: {
    marginLeft: "auto",
    color: "#8994a8",
    fontSize: 12
  },
  multiFilterMenu: {
    position: "absolute",
    top: "calc(100% + 8px)",
    left: 0,
    right: 0,
    zIndex: 30,
    border: "1px solid #2a3140",
    borderRadius: 8,
    background: "#171d26",
    boxShadow: "0 18px 40px rgba(0,0,0,0.4)",
    padding: 8,
    maxHeight: 270,
    overflowY: "auto"
  },
  advancedFilter: {
    minHeight: 50,
    border: "1px solid #2a3140",
    borderRadius: 8,
    background: "#151a22",
    color: "#ffffff",
    position: "relative",
    minWidth: 190,
    justifySelf: "end"
  },
  filterBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 39,
    background: "rgba(0, 0, 0, 0.68)",
    cursor: "default"
  },
  advancedFilterSummary: {
    minHeight: 50,
    display: "flex",
    alignItems: "center",
    gap: 10,
    padding: "0 16px",
    cursor: "pointer",
    fontSize: 15,
    fontWeight: 900,
    listStyle: "none",
    "&::-webkit-details-marker": {
      display: "none"
    }
  },
  activeFilterCount: {
    minWidth: 22,
    height: 22,
    borderRadius: 999,
    background: "#ff8f3d",
    color: "#10151d",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 900
  },
  advancedFilterMenu: {
    position: "fixed",
    top: 0,
    right: 0,
    zIndex: 40,
    width: 620,
    maxWidth: "calc(100vw - 28px)",
    height: "100vh",
    overflow: "hidden",
    borderLeft: "1px solid #2d3544",
    borderRadius: 0,
    background: "#1b2029",
    boxShadow: "-24px 0 64px rgba(0,0,0,0.55)",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("xs")]: {
      width: "calc(100vw - 18px)",
      maxWidth: "calc(100vw - 18px)"
    }
  },
  filterPanelHeader: {
    minHeight: 66,
    borderBottom: "1px solid #2d3544",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 18,
    padding: "0 22px",
    flex: "0 0 auto",
    zIndex: 2,
    background: "#1b2029"
  },
  filterPanelTitle: {
    alignSelf: "stretch",
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    borderBottom: "3px solid #ff8f3d",
    fontSize: 22,
    fontWeight: 900
  },
  filterPanelActions: {
    display: "flex",
    alignItems: "center",
    gap: 20
  },
  clearPanelButton: {
    border: 0,
    background: "transparent",
    color: "#ff9e45",
    cursor: "pointer",
    fontSize: 18,
    fontWeight: 900
  },
  closePanelButton: {
    width: 34,
    height: 34,
    border: 0,
    background: "transparent",
    color: "#9aa5b8",
    cursor: "pointer",
    fontSize: 34,
    lineHeight: 1
  },
  filterPanelBody: {
    padding: "24px 32px 32px",
    overflowY: "auto",
    flex: "1 1 auto",
    [theme.breakpoints.down("xs")]: {
      padding: "20px 18px 28px"
    }
  },
  filterSection: {
    padding: "22px 0",
    borderTop: "1px solid #2d3544",
    "&:first-child": {
      borderTop: 0,
      paddingTop: 0
    }
  },
  filterSectionHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 14,
    marginBottom: 18
  },
  filterSectionTitle: {
    margin: 0,
    color: "#ffffff",
    fontSize: 21,
    lineHeight: 1.2,
    fontWeight: 900
  },
  filterGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "16px 28px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr"
    }
  },
  filterCheckLabel: {
    minHeight: 38,
    color: "#f5f7fb",
    display: "flex",
    alignItems: "center",
    gap: 12,
    fontSize: 16,
    fontWeight: 900,
    cursor: "pointer"
  },
  filterCheck: {
    width: 26,
    height: 26,
    borderRadius: 6,
    accentColor: "#ff8f3d",
    cursor: "pointer"
  },
  filterCheckIcon: {
    width: 19,
    height: 19,
    objectFit: "contain"
  },
  filterPill: {
    minHeight: 32,
    borderRadius: 999,
    background: "#272e3a",
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    gap: 7,
    padding: "0 12px",
    fontSize: 16,
    fontWeight: 900,
    lineHeight: 1
  },
  collectionPill: {
    background: "#272e3a",
    paddingLeft: 7
  },
  collectionIconCircle: {
    width: 23,
    height: 23,
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
    boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08), 0 4px 10px rgba(0,0,0,0.24)"
  },
  collectibleToggle: {
    minHeight: 42,
    color: "#ff9e45",
    display: "inline-flex",
    alignItems: "center",
    gap: 12,
    marginBottom: 22,
    fontSize: 18,
    fontWeight: 900,
    cursor: "pointer"
  },
  toggleInput: {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none"
  },
  toggleTrack: {
    width: 54,
    height: 28,
    borderRadius: 999,
    background: "#272e3a",
    position: "relative",
    flex: "0 0 auto",
    transition: "background 160ms ease",
    "&::after": {
      content: "\"\"",
      position: "absolute",
      top: 3,
      left: 3,
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "#ffffff",
      transition: "transform 160ms ease"
    }
  },
  toggleTrackOn: {
    background: "#ff8f3d",
    "&::after": {
      transform: "translateX(26px)"
    }
  },
  collectibleGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "18px 76px",
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "1fr",
      gap: 16
    }
  },
  collectionGroupLabel: {
    gridColumn: "1 / -1",
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 900,
    marginTop: 4
  },
  rangeRow: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)",
    gap: 18,
    alignItems: "center",
    marginTop: 14
  },
  rangeInput: {
    width: "100%",
    minHeight: 48,
    border: "1px solid #3a4354",
    borderRadius: 8,
    background: "#10141b",
    color: "#ffffff",
    padding: "0 14px",
    fontSize: 18,
    fontWeight: 800,
    outline: 0
  },
  rangeDash: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: 900
  },
  rangeSlider: {
    width: "100%",
    accentColor: "#ff8f3d"
  },
  sectionActiveCount: {
    width: 34,
    height: 34,
    borderRadius: "50%",
    background: "#ff8f3d",
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 900
  },
  dualRange: {
    position: "relative",
    height: 42,
    marginTop: 26
  },
  dualRangeTrack: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 18,
    height: 6,
    borderRadius: 999,
    background: "#4a5263"
  },
  dualRangeSelected: {
    position: "absolute",
    top: 18,
    height: 6,
    borderRadius: 999,
    background: "#ff8f3d"
  },
  dualRangeInput: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: 42,
    margin: 0,
    background: "transparent",
    pointerEvents: "none",
    appearance: "none",
    WebkitAppearance: "none",
    "&::-webkit-slider-runnable-track": {
      height: 6,
      background: "transparent"
    },
    "&::-webkit-slider-thumb": {
      width: 22,
      height: 22,
      marginTop: -8,
      borderRadius: "50%",
      border: "3px solid #151a22",
      background: "#ffffff",
      cursor: "pointer",
      pointerEvents: "auto",
      appearance: "none",
      WebkitAppearance: "none",
      boxShadow: "0 2px 8px rgba(0,0,0,0.35)"
    },
    "&::-moz-range-track": {
      height: 6,
      background: "transparent"
    },
    "&::-moz-range-thumb": {
      width: 18,
      height: 18,
      borderRadius: "50%",
      border: "3px solid #151a22",
      background: "#ffffff",
      cursor: "pointer",
      pointerEvents: "auto",
      boxShadow: "0 2px 8px rgba(0,0,0,0.35)"
    }
  },
  rangeTicks: {
    display: "grid",
    gridTemplateColumns: "repeat(8, minmax(0, 1fr))",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 900,
    marginTop: 4,
    "& span": {
      textAlign: "center"
    }
  },
  clearAllFilters: {
    width: "100%",
    minHeight: 42,
    border: "1px solid #394252",
    borderRadius: 8,
    background: "#111720",
    color: "#ff9e45",
    cursor: "pointer",
    fontSize: 14,
    fontWeight: 900
  },
  filterOption: {
    minHeight: 36,
    borderRadius: 6,
    color: "#c6cedb",
    display: "flex",
    alignItems: "center",
    gap: 9,
    padding: "0 8px",
    fontSize: 14,
    fontWeight: 800,
    cursor: "pointer",
    "&:hover": {
      background: "#222a36",
      color: "#ffffff"
    }
  },
  filterCheckbox: {
    accentColor: "#ff9e45"
  },
  filterIcon: {
    width: 22,
    height: 22,
    objectFit: "contain",
    flex: "0 0 auto"
  },
  clearFilter: {
    width: "100%",
    minHeight: 34,
    border: "1px solid #303746",
    borderRadius: 6,
    background: "#10151d",
    color: "#ff9e45",
    cursor: "pointer",
    fontSize: 13,
    fontWeight: 900,
    marginTop: 6
  },
  button: {
    minHeight: 50,
    border: "1px solid #303746",
    borderRadius: 8,
    background: "#181d26",
    color: "#ffffff",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    padding: "0 16px",
    fontSize: 15,
    fontWeight: 900,
    whiteSpace: "nowrap",
    transition: "border-color 160ms ease, transform 160ms ease",
    "&:hover": {
      borderColor: "#ff9e45",
      transform: "translateY(-1px)"
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.6,
      transform: "none"
    }
  },
  sectionTitleRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
    marginBottom: 18,
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start",
      flexDirection: "column"
    }
  },
  sectionTitle: {
    margin: 0,
    color: "#ffffff",
    fontSize: 28,
    lineHeight: 1.2,
    fontWeight: 900
  },
  statusText: {
    color: "#8f9caf",
    fontSize: 14,
    fontWeight: 700
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(252px, 1fr))",
    gap: 18,
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))"
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
      gap: 12
    }
  },
  card: {
    border: "1px solid #242b36",
    borderRadius: 8,
    background: "#0d1117",
    overflow: "hidden",
    minWidth: 0,
    boxShadow: "0 18px 40px rgba(0,0,0,0.22)"
  },
  art: {
    position: "relative",
    minHeight: 312,
    background:
      "radial-gradient(circle at 50% 62%, rgba(255,158,69,0.2), transparent 38%), linear-gradient(180deg, #151a22 0%, #151a22 42%, #262318 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "48px 22px 24px",
    [theme.breakpoints.down("xs")]: {
      minHeight: 280
    }
  },
  axieImage: {
    width: "88%",
    maxWidth: 280,
    objectFit: "contain",
    filter: "drop-shadow(0 18px 14px rgba(0,0,0,0.42))"
  },
  level: {
    position: "absolute",
    top: 14,
    left: 14,
    width: 36,
    height: 36,
    borderRadius: "50%",
    color: "#f7f9fd",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 12,
    fontWeight: 900,
    boxShadow: "0 8px 18px rgba(0,0,0,0.28)",
    "& span": {
      width: 28,
      height: 28,
      borderRadius: "50%",
      background: "#151a22",
      position: "relative",
      zIndex: 1,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center"
    },
    [theme.breakpoints.down("xs")]: {
      top: 12,
      left: 12,
      width: 32,
      height: 32,
      fontSize: 11,
      "& span": {
        width: 25,
        height: 25
      }
    }
  },
  maxLevelRing: {
    boxShadow: "0 0 0 1px rgba(255, 221, 118, 0.7), 0 0 18px rgba(242, 185, 59, 0.7), 0 8px 18px rgba(0,0,0,0.34)",
    "&::after": {
      content: "\"\"",
      position: "absolute",
      inset: -3,
      borderRadius: "50%",
      background: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0) 34%, rgba(255,218,95,0.58) 62%, rgba(255,255,255,0))",
      opacity: 0.7,
      pointerEvents: "none",
      mixBlendMode: "screen"
    },
    "& span": {
      color: "#ffe9a6",
      background: "#151a22",
      textShadow: "none"
    }
  },
  badges: {
    position: "absolute",
    top: 54,
    left: 14,
    display: "flex",
    flexDirection: "column",
    gap: 6,
    [theme.breakpoints.down("xs")]: {
      top: 50,
      left: 12,
      gap: 5
    }
  },
  badge: {
    minWidth: 26,
    minHeight: 26,
    borderRadius: 999,
    color: "#ffffff",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 8px",
    fontSize: 12,
    fontWeight: 900,
    boxShadow: "0 4px 12px rgba(0,0,0,0.28)"
  },
  iconBadge: {
    width: 23,
    height: 23,
    minWidth: 23,
    minHeight: 23,
    padding: 0,
    background: "rgba(17, 21, 28, 0.74)"
  },
  badgeIcon: {
    width: 14,
    height: 14,
    objectFit: "contain"
  },
  rightStats: {
    position: "absolute",
    top: 16,
    right: 14,
    color: "#a9b3c5",
    display: "grid",
    gap: 8,
    textAlign: "right",
    fontSize: 12,
    fontWeight: 900,
    [theme.breakpoints.down("xs")]: {
      top: 14,
      right: 10,
      gap: 6,
      fontSize: 11
    }
  },
  purenessStat: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 6,
    justifySelf: "end"
  },
  eggIcon: {
    width: 15,
    height: 15,
    background: "#a9b3c5",
    display: "inline-block",
    flex: "0 0 auto",
    mask: `url("${EGG_ICON}") center / contain no-repeat`,
    WebkitMask: `url("${EGG_ICON}") center / contain no-repeat`
  },
  terrariumBadge: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "flex-end",
    justifySelf: "end",
    gap: 5,
    minHeight: 26,
    padding: "4px 7px",
    border: "1px solid rgba(72, 213, 151, 0.35)",
    borderRadius: 8,
    background: "rgba(10, 18, 16, 0.78)",
    color: "#ffffff",
    boxShadow: "0 10px 24px rgba(0,0,0,0.28)",
    fontSize: 11,
    lineHeight: 1,
    whiteSpace: "nowrap"
  },
  terrariumLogo: {
    width: 17,
    height: 17,
    objectFit: "contain",
    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.35))"
  },
  infoWrap: {
    position: "absolute",
    right: 16,
    bottom: 16,
    zIndex: 4
  },
  infoButton: {
    width: 40,
    height: 40,
    border: "1px solid #313949",
    borderRadius: 8,
    background: "rgba(23, 29, 38, 0.94)",
    color: "#dce3ef",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 10px 24px rgba(0,0,0,0.3)",
    transition: "border-color 160ms ease, color 160ms ease",
    "&:hover, &:focus": {
      borderColor: "#ff9e45",
      color: "#ffffff",
      outline: 0
    }
  },
  partPopover: {
    position: "absolute",
    right: 0,
    bottom: 50,
    width: 320,
    maxWidth: "calc(100vw - 40px)",
    border: "1px solid #2c3443",
    borderRadius: 8,
    background: "#1a1f28",
    color: "#eef3fb",
    boxShadow: "0 24px 52px rgba(0,0,0,0.5)",
    padding: "16px 18px",
    opacity: 0,
    pointerEvents: "none",
    transform: "translateY(8px)",
    transition: "opacity 150ms ease, transform 150ms ease"
  },
  partPopoverOpen: {
    opacity: 1,
    pointerEvents: "auto",
    transform: "translateY(0)"
  },
  requestOverlay: {
    position: "absolute",
    left: 16,
    bottom: 16,
    zIndex: 3,
    minHeight: 40,
    borderRadius: 8,
    background: "#ff9e45",
    color: "#11151c",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 7,
    padding: "0 12px",
    fontSize: 13,
    fontWeight: 900,
    textDecoration: "none",
    boxShadow: "0 10px 24px rgba(0,0,0,0.3)",
    transition: "transform 160ms ease, background 160ms ease",
    "&:hover, &:focus": {
      background: "#ffb15f",
      outline: 0,
      transform: "translateY(-1px)"
    }
  },
  xRequestIcon: {
    width: 16,
    height: 16,
    background: "transparent",
    display: "block",
    objectFit: "contain"
  },
  xRequestIconWrap: {
    width: 24,
    height: 24,
    borderRadius: 6,
    background: "#000000",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flex: "0 0 auto",
    overflow: "hidden"
  },
  ascendStatus: {
    position: "absolute",
    left: "50%",
    bottom: 62,
    zIndex: 3,
    color: "#ffe8bd",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 0,
    fontSize: 14,
    fontWeight: 900,
    whiteSpace: "nowrap",
    transform: "translateX(-50%)",
    textShadow: "0 2px 8px rgba(0,0,0,0.85)"
  },
  ascendIcon: {
    width: 20,
    height: 20,
    borderRadius: "50%",
    background: "#ffe8bd",
    color: "#7c421a",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    lineHeight: 1,
    fontWeight: 900
  },
  partPopoverTitle: {
    margin: "0 0 12px",
    color: "#aeb8ca",
    fontSize: 14,
    fontWeight: 900,
    textTransform: "uppercase"
  },
  partRows: {
    display: "grid",
    gap: 8
  },
  partRow: {
    display: "grid",
    gridTemplateColumns: "72px minmax(0, 1fr)",
    gap: 10,
    alignItems: "baseline",
    fontSize: 14,
    lineHeight: 1.25
  },
  partType: {
    color: "#8f9caf",
    fontWeight: 900
  },
  partName: {
    color: "#b7f238",
    fontWeight: 900,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
  specialPartName: {
    color: "#ff5dac"
  },
  cardBody: {
    padding: "16px 16px 18px"
  },
  idRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginBottom: 10
  },
  idPill: {
    borderRadius: 999,
    background: "#1f2733",
    color: "#ff9e45",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    padding: "5px 10px",
    fontSize: 14,
    fontWeight: 900,
    textDecoration: "none",
    transition: "background 160ms ease, color 160ms ease",
    "&:hover, &:focus": {
      background: "#2a3342",
      color: "#ffffff",
      outline: 0
    }
  },
  idIcon: {
    width: 18,
    height: 18,
    objectFit: "contain"
  },
  available: {
    color: "#48d597",
    display: "inline-flex",
    alignItems: "center",
    gap: 5,
    fontSize: 12,
    fontWeight: 900,
    textTransform: "uppercase"
  },
  name: {
    margin: "0 0 4px",
    color: "#ffffff",
    fontSize: 18,
    lineHeight: 1.25,
    fontWeight: 900
  },
  meta: {
    color: "#99a4b6",
    fontSize: 14,
    lineHeight: 1.45,
    fontWeight: 700
  },
  empty: {
    border: "1px solid #242b36",
    borderRadius: 8,
    background: "#151a22",
    color: "#aab3c5",
    padding: 28,
    fontSize: 16,
    lineHeight: 1.5
  },
  error: {
    border: "1px solid rgba(255, 94, 94, 0.45)",
    borderRadius: 8,
    background: "rgba(255, 94, 94, 0.08)",
    color: "#ffb8b8",
    padding: 16,
    marginBottom: 18,
    fontWeight: 800
  }
}));

const isAvailable = axie => (
  !axie.delegationState &&
  !MANUALLY_RESERVED_AXIE_IDS.includes(String(axie.id)) &&
  !getCollectionMarkers(axie).includes("Mystic")
);

const getSpecialParts = axie => (
  (axie.parts || []).filter(part => part.specialGenes).map(part => part.specialGenes)
);

const unique = values => Array.from(new Set(values.filter(Boolean))).sort();

const getCollectionMarkers = axie => {
  if (axie.collectionMarkers) return axie.collectionMarkers;

  const markers = [];
  const addMarker = marker => {
    if (!marker) return;

    const markerValue = String(marker).toLowerCase();
    const normalizedMarker = collectionAliases[markerValue];

    if (normalizedMarker && !markers.includes(normalizedMarker)) {
      markers.push(normalizedMarker);
    }

    collectionSignalMatchers.forEach(({ marker: matchedMarker, test }) => {
      if (test(markerValue) && !markers.includes(matchedMarker)) {
        markers.push(matchedMarker);
      }
    });
  };

  addMarker(axie.title);
  addMarker(axie.bodyShape);
  getSpecialParts(axie).forEach(addMarker);

  return sortTitleOptions(markers);
};

const sortTitleOptions = titles => (
  [...titles].sort((first, second) => {
    const firstIndex = TITLE_ORDER.indexOf(first);
    const secondIndex = TITLE_ORDER.indexOf(second);

    if (firstIndex >= 0 || secondIndex >= 0) {
      return (firstIndex >= 0 ? firstIndex : TITLE_ORDER.length) - (secondIndex >= 0 ? secondIndex : TITLE_ORDER.length);
    }

    return first.localeCompare(second);
  })
);

const getXPostId = postUrl => {
  const match = String(postUrl || "").match(/status\/(\d+)/);
  return match ? match[1] : "";
};

const getRequestTemplate = axieId => (
  [
    `Applying for Axie #${axieId || "[Axie ID]"} 🐉`,
    "Ronin Address: [Your Ronin address]",
    "I want to borrow this Axie because:",
    "[Tell me how you plan to use it]"
  ].join("\n")
);

const getRequestUrl = (axie, requestPostUrl) => {
  const text = getRequestTemplate(axie.id);
  const postId = getXPostId(requestPostUrl);
  const intentUrl = new URL("https://twitter.com/intent/tweet");

  intentUrl.searchParams.set("text", text);
  if (postId) {
    intentUrl.searchParams.set("in_reply_to", postId);
  }

  return intentUrl.toString();
};

const getAxieMarketplaceUrl = axie => `https://app.axieinfinity.com/marketplace/axies/${axie.id}/`;

const getAxieImageUrl = axie => {
  if (axie && axie.image) {
    return axie.image.replace("https://assets.axieinfinity.com/", "https://axiecdn.axieinfinity.com/");
  }

  return `https://axiecdn.axieinfinity.com/axies/${axie.id}/axie/axie-full-transparent.png`;
};

const getAxieLevel = axie => (
  Number(
    axie.level ||
    (axie.axpInfo && axie.axpInfo.level) ||
    (axie.battleInfo && axie.battleInfo.level) ||
    1
  )
);

const ASCEND_LEVELS = [9, 19, 29, 39, 49];

const getAxpProgress = axie => {
  const axpInfo = axie.axpInfo || {};
  const xp = Number(axpInfo.xp) || 0;
  const xpToLevelUp = Number(axpInfo.xpToLevelUp) || Number(axpInfo.xpToAscend) || 0;

  if (!xpToLevelUp) return 0;

  return Math.min(100, Math.max(0, (xp / xpToLevelUp) * 100));
};

const isReadyToAscend = axie => {
  const axpInfo = axie.axpInfo || {};
  const level = getAxieLevel(axie);

  if (axpInfo.shouldAscend) return true;

  return ASCEND_LEVELS.includes(Number(level)) && getAxpProgress(axie) >= 100;
};

const prepareAxieForCollection = axie => {
  const collectionMarkers = getCollectionMarkers(axie);
  const specialParts = getSpecialParts(axie);
  const level = getAxieLevel(axie);
  const evolvedPartsCount = (axie.parts || []).filter(part => Number(part.stage) > 1).length;
  const hasLocked = (axie.rep15TokenContexts || []).some(context => context.locked);
  const readyToAscend = isReadyToAscend(axie);
  const axpToday = (axie.axpStatDay && axie.axpStatDay.totalGainedAxpDay) || 0;
  const searchText = [
    axie.id,
    axie.name,
    axie.class,
    axie.title,
    axie.bodyShape,
    ...collectionMarkers,
    ...(axie.parts || []).map(part => part.name),
    ...specialParts
  ].join(" ").toLowerCase();

  return {
    ...axie,
    axpToday,
    collectionMarkers,
    evolvedPartsCount,
    hasLockedContext: hasLocked,
    level,
    readyToAscend,
    searchText,
    specialParts
  };
};

const toggleSelection = (values, value) => (
  values.includes(value)
    ? values.filter(item => item !== value)
    : [...values, value]
);

const getAxieSortLevel = axie => Number(axie.level || (axie.axpInfo && axie.axpInfo.level) || (axie.battleInfo && axie.battleInfo.level) || 1);

const compareAxies = sortMode => (first, second) => {
  const firstId = Number(first.id) || 0;
  const secondId = Number(second.id) || 0;

  if (sortMode === "axpToday") {
    return ((Number(second.axpToday) || 0) - (Number(first.axpToday) || 0)) || (firstId - secondId);
  }

  const firstLevel = getAxieSortLevel(first);
  const secondLevel = getAxieSortLevel(second);

  if (["levelAsc", "lowestLevel", "levelLow"].includes(sortMode)) {
    return (firstLevel - secondLevel) || (firstId - secondId);
  }

  return (secondLevel - firstLevel) || (firstId - secondId);
};

const RangeFilterSection = ({ classes, max, min, setValue, ticks, title, value }) => {
  const rangeSize = max - min;
  const lowPercent = ((value[0] - min) / rangeSize) * 100;
  const highPercent = ((value[1] - min) / rangeSize) * 100;
  const isActive = value[0] !== min || value[1] !== max;
  const updateRange = (index, rawValue) => {
    const numericValue = Math.max(min, Math.min(max, Number(rawValue)));

    setValue(current => {
      const next = [...current];
      next[index] = numericValue;
      if (next[0] > next[1]) {
        next[index === 0 ? 1 : 0] = numericValue;
      }
      return next;
    });
  };

  return (
    <section className={classes.filterSection}>
      <div className={classes.filterSectionHeader}>
        <h3 className={classes.filterSectionTitle}>
          {title}
          {isActive && <span className={classes.sectionActiveCount}>1</span>}
        </h3>
      </div>
      <div className={classes.dualRange}>
        <div className={classes.dualRangeTrack} />
        <div
          className={classes.dualRangeSelected}
          style={{ left: `${lowPercent}%`, width: `${highPercent - lowPercent}%` }}
        />
        <input
          className={classes.dualRangeInput}
          type="range"
          min={min}
          max={max}
          value={value[0]}
          onChange={event => updateRange(0, event.target.value)}
          aria-label={`${title} minimum`}
        />
        <input
          className={classes.dualRangeInput}
          type="range"
          min={min}
          max={max}
          value={value[1]}
          onChange={event => updateRange(1, event.target.value)}
          aria-label={`${title} maximum`}
        />
      </div>
      {ticks && (
        <div className={classes.rangeTicks} style={{ gridTemplateColumns: `repeat(${ticks.length}, minmax(0, 1fr))` }}>
          {ticks.map(tick => <span key={tick}>{tick}</span>)}
        </div>
      )}
      <div className={classes.rangeRow}>
        <input
          className={classes.rangeInput}
          type="number"
          min={min}
          max={max}
          value={value[0]}
          onChange={event => updateRange(0, event.target.value)}
        />
        <input
          className={classes.rangeInput}
          type="number"
          min={min}
          max={max}
          value={value[1]}
          onChange={event => updateRange(1, event.target.value)}
        />
      </div>
    </section>
  );
};

const AdvancedFilterDropdown = ({
  activeFilterCount,
  anyCollectibleOnly,
  breedRange,
  classOptions,
  classes,
  collectionOptions,
  evolvedRange,
  inTerrariumOnly,
  levelRange,
  notInTerrariumOnly,
  readyToAscendOnly,
  readyToEvolveOnly,
  resetFilters,
  selectedClasses,
  selectedCollections,
  setAnyCollectibleOnly,
  setBreedRange,
  setEvolvedRange,
  setInTerrariumOnly,
  setLevelRange,
  setNotInTerrariumOnly,
  setReadyToAscendOnly,
  setReadyToEvolveOnly,
  setSelectedClasses,
  setSelectedCollections
}) => {
  const [open, setOpen] = useState(false);

  return (
    <details className={classes.advancedFilter} open={open} onToggle={event => setOpen(event.currentTarget.open)}>
      <summary className={classes.advancedFilterSummary} aria-label="All Axie filters">
        <FilterListIcon fontSize="small" />
        <span>All Filters</span>
        {activeFilterCount > 0 && <span className={classes.activeFilterCount}>{activeFilterCount}</span>}
        <span className={classes.multiFilterChevron}>▼</span>
      </summary>
      {open && <button className={classes.filterBackdrop} type="button" aria-label="Close filters" onClick={() => setOpen(false)} />}
      {open && <div className={classes.advancedFilterMenu}>
        <div className={classes.filterPanelHeader}>
          <div className={classes.filterPanelTitle}>Filters</div>
          <div className={classes.filterPanelActions}>
            <button className={classes.clearPanelButton} type="button" onClick={resetFilters}>
              Clear all
            </button>
            <button className={classes.closePanelButton} type="button" onClick={() => setOpen(false)} aria-label="Close filters">
              ×
            </button>
          </div>
        </div>
        <div className={classes.filterPanelBody}>
        <section className={classes.filterSection}>
          <div className={classes.filterSectionHeader}>
            <h3 className={classes.filterSectionTitle}>Class</h3>
          </div>
          <div className={classes.filterGrid}>
            {classOptions.map(option => (
              <label key={option} className={classes.filterCheckLabel}>
                <input
                  className={classes.filterCheck}
                  type="checkbox"
                  checked={selectedClasses.includes(option)}
                  onChange={() => setSelectedClasses(current => toggleSelection(current, option))}
                />
                <span
                  className={classes.filterPill}
                  style={{ color: classColors[option] || "#ffffff" }}
                >
                  {classIcons[option] && (
                    <img className={classes.filterCheckIcon} src={classIcons[option]} alt="" aria-hidden="true" />
                  )}
                  {option}
                </span>
              </label>
            ))}
          </div>
        </section>

        <section className={classes.filterSection}>
          <div className={classes.filterSectionHeader}>
            <h3 className={classes.filterSectionTitle}>Collection</h3>
          </div>
          <label className={classes.collectibleToggle}>
            <input
              className={classes.toggleInput}
              type="checkbox"
              checked={anyCollectibleOnly}
              onChange={event => setAnyCollectibleOnly(event.target.checked)}
            />
            <span
              className={`${classes.toggleTrack} ${anyCollectibleOnly ? classes.toggleTrackOn : ""}`}
              aria-hidden="true"
            />
            Any Collectibles
          </label>
          <div className={classes.collectibleGrid}>
            {collectionOptions.map((option, index) => (
              <React.Fragment key={option}>
                {index > 0 && option === "AgamoGenesis" && (
                  <div className={classes.collectionGroupLabel}>Other</div>
                )}
                <label className={classes.filterCheckLabel}>
                  <input
                    className={classes.filterCheck}
                    type="checkbox"
                    checked={selectedCollections.includes(option)}
                    onChange={() => setSelectedCollections(current => toggleSelection(current, option))}
                  />
                  <span className={`${classes.filterPill} ${classes.collectionPill}`}>
                    {collectionIcons[option] && (
                      <span
                        className={classes.collectionIconCircle}
                        style={{ background: collectionBadgeColors[option] || "#272e3a" }}
                        aria-hidden="true"
                      >
                        <img className={classes.filterCheckIcon} src={collectionIcons[option]} alt="" />
                      </span>
                    )}
                    {option === "Summer" ? "Summer2022" : option}
                  </span>
                </label>
              </React.Fragment>
            ))}
          </div>
        </section>

        <RangeFilterSection classes={classes} max={60} min={1} setValue={setLevelRange} title="Level" value={levelRange} />
        <RangeFilterSection classes={classes} max={7} min={0} setValue={setBreedRange} ticks={[0, 1, 2, 3, 4, 5, 6, 7]} title="Breed count" value={breedRange} />
        <RangeFilterSection classes={classes} max={6} min={0} setValue={setEvolvedRange} ticks={[0, 1, 2, 3, 4, 5, 6]} title="Evolved parts count" value={evolvedRange} />

        <section className={classes.filterSection}>
          <div className={classes.filterSectionHeader}>
            <h3 className={classes.filterSectionTitle}>Other</h3>
          </div>
          <div className={classes.filterGrid}>
            <label className={classes.filterCheckLabel}>
              <input
                className={classes.filterCheck}
                type="checkbox"
                checked={inTerrariumOnly}
                onChange={event => {
                  setInTerrariumOnly(event.target.checked);
                  if (event.target.checked) setNotInTerrariumOnly(false);
                }}
              />
              In Terrarium
            </label>
            <label className={classes.filterCheckLabel}>
              <input
                className={classes.filterCheck}
                type="checkbox"
                checked={notInTerrariumOnly}
                onChange={event => {
                  setNotInTerrariumOnly(event.target.checked);
                  if (event.target.checked) setInTerrariumOnly(false);
                }}
              />
              Not in Terrarium
            </label>
            <label className={classes.filterCheckLabel}>
              <input
                className={classes.filterCheck}
                type="checkbox"
                checked={readyToAscendOnly}
                onChange={event => setReadyToAscendOnly(event.target.checked)}
              />
              Ready to Ascend
            </label>
            <label className={classes.filterCheckLabel}>
              <input
                className={classes.filterCheck}
                type="checkbox"
                checked={readyToEvolveOnly}
                onChange={event => setReadyToEvolveOnly(event.target.checked)}
              />
              Ready to Evolve
            </label>
          </div>
        </section>

        </div>
      </div>}
    </details>
  );
};

const AxieCard = React.memo(({ axie, classes, requestPostUrl }) => {
  const [partsOpen, setPartsOpen] = useState(false);
  const level = axie.level || getAxieLevel(axie);
  const isMaxLevel = Number(level) >= 60;
  const readyToAscend = axie.readyToAscend || isReadyToAscend(axie);
  const axpProgress = isMaxLevel || readyToAscend ? 100 : getAxpProgress(axie);
  const axpRingColor = isMaxLevel ? "#f2b93b" : readyToAscend ? "#129bff" : "#ff8f3d";
  const classColor = classColors[axie.class] || "#ff9e45";
  const classIcon = classIcons[axie.class];
  const collectionMarkers = axie.collectionMarkers || getCollectionMarkers(axie);
  const lockedContext = (axie.rep15TokenContexts || []).find(context => context.locked);
  const xpDay = axie.axpToday;
  const imageUrl = getAxieImageUrl(axie);

  return (
    <article className={classes.card}>
      <div
        className={classes.art}
        style={{
          background: `radial-gradient(circle at 50% 62%, ${classColor}33, transparent 40%), linear-gradient(180deg, #151a22 0%, #151a22 42%, ${classColor}22 100%)`
        }}
      >
        <div
          className={`${classes.level} ${isMaxLevel ? classes.maxLevelRing : ""}`}
          style={{
            background: `conic-gradient(${axpRingColor} ${axpProgress}%, #3a4354 0)`
          }}
          title={isMaxLevel ? "Level 60 complete" : `${Math.round(axpProgress)}% AXP to next level`}
        >
          <span>{level}</span>
        </div>
        {!!collectionMarkers.length && (
          <div className={classes.badges}>
          {collectionMarkers.slice(0, 3).map(marker => (
            <span
              key={`${axie.id}-${marker}`}
              className={`${classes.badge} ${classes.iconBadge}`}
              style={{ background: collectionBadgeColors[marker] || "rgba(17, 21, 28, 0.74)" }}
              title={marker}
            >
              <img className={classes.badgeIcon} src={collectionIcons[marker]} alt="" aria-hidden="true" />
            </span>
          ))}
          </div>
        )}
        <div className={classes.rightStats}>
          {lockedContext && (
            <span className={classes.terrariumBadge} title="In Terrarium">
              <img className={classes.terrariumLogo} src={TERRARIUM_LOGO} alt="" aria-hidden="true" />
              In Terrarium
            </span>
          )}
          <span className={classes.purenessStat}>
            <span className={classes.eggIcon} aria-hidden="true" />
            {axie.pureness || 0}/6
          </span>
        </div>
        <div
          className={classes.infoWrap}
          onMouseEnter={() => setPartsOpen(true)}
          onMouseLeave={() => setPartsOpen(false)}
          onFocus={() => setPartsOpen(true)}
          onBlur={() => setPartsOpen(false)}
        >
          <button
            className={classes.infoButton}
            type="button"
            aria-label={`Show parts for Axie #${axie.id}`}
            aria-expanded={partsOpen}
            onClick={() => setPartsOpen(open => !open)}
          >
            <InfoOutlinedIcon fontSize="small" />
          </button>
          <div className={`${classes.partPopover} ${partsOpen ? classes.partPopoverOpen : ""}`} role="tooltip">
            <h3 className={classes.partPopoverTitle}>Parts</h3>
            <div className={classes.partRows}>
              {(axie.parts || []).slice(0, 6).map(part => (
                <div key={part.id} className={classes.partRow}>
                  <span className={classes.partType}>{part.type}</span>
                  <span
                    className={`${classes.partName} ${part.specialGenes ? classes.specialPartName : ""}`}
                    title={part.specialGenes ? `${part.name} · ${part.specialGenes}` : part.name}
                  >
                    {part.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <img
          className={classes.axieImage}
          src={imageUrl}
          alt={axie.name || `Axie #${axie.id}`}
          loading="lazy"
          onError={event => {
            event.currentTarget.style.display = "none";
          }}
        />
        {readyToAscend && (
          <span className={classes.ascendStatus}>
            <span className={classes.ascendIcon} aria-hidden="true">^</span>
            Ready to Ascend
          </span>
        )}
        <a
          className={classes.requestOverlay}
          href={getRequestUrl(axie, requestPostUrl)}
          onClick={() => trackEvent("request_axie", { axie_id: String(axie.id) })}
          target="_blank"
          rel="noopener noreferrer"
          title={`Request Axie #${axie.id} on X`}
        >
          <span className={classes.xRequestIconWrap} aria-hidden="true">
            <img className={classes.xRequestIcon} src={X_ICON} alt="" />
          </span>
          Request
        </a>
      </div>
      <div className={classes.cardBody}>
        <div className={classes.idRow}>
          <a
            className={classes.idPill}
            href={getAxieMarketplaceUrl(axie)}
            onClick={() => trackEvent("view_axie_marketplace", { axie_id: String(axie.id) })}
            target="_blank"
            rel="noopener noreferrer"
            title={`Open Axie #${axie.id} on Axie Infinity`}
          >
            {classIcon && <img className={classes.idIcon} src={classIcon} alt="" aria-hidden="true" />}
            #{axie.id}
          </a>
          <span className={classes.available}>
            <CheckCircleIcon fontSize="small" />
            Available
          </span>
        </div>
        <h2 className={classes.name}>{axie.name || `Axie #${axie.id}`}</h2>
        <div className={classes.meta}>
          {axie.title || "Collector Axie"} · {axie.class || "Unknown"}
          {typeof xpDay === "number" ? ` · ${xpDay.toLocaleString()} AXP today` : ""}
        </div>
      </div>
    </article>
  );
});

const AxieCollection = () => {
  const classes = useStyles();
  const [axies, setAxies] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [lastUpdated, setLastUpdated] = useState("");
  const requestPostUrl = DEFAULT_X_REQUEST_POST_URL;
  const [search, setSearch] = useState("");
  const [anyCollectibleOnly, setAnyCollectibleOnly] = useState(false);
  const [selectedClasses, setSelectedClasses] = useState([]);
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [levelRange, setLevelRange] = useState([1, 60]);
  const [breedRange, setBreedRange] = useState([0, 7]);
  const [evolvedRange, setEvolvedRange] = useState([0, 6]);
  const [inTerrariumOnly, setInTerrariumOnly] = useState(false);
  const [notInTerrariumOnly, setNotInTerrariumOnly] = useState(false);
  const [readyToAscendOnly, setReadyToAscendOnly] = useState(false);
  const [readyToEvolveOnly, setReadyToEvolveOnly] = useState(false);
  const [sort, setSort] = useState("level");
  const [templateCopied, setTemplateCopied] = useState(false);

  const copyRequestTemplate = useCallback(async () => {
    const text = getRequestTemplate();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setTemplateCopied(true);
      trackEvent("copy_axie_request_template");
      window.setTimeout(() => setTemplateCopied(false), 1800);
    } catch {
      setTemplateCopied(false);
    }
  }, []);

  const loadAxies = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(AXIE_COLLECTION_SNAPSHOT_URL, { cache: "no-cache" });

      if (!response.ok) {
        throw new Error(`Axie collection snapshot returned ${response.status}`);
      }

      const payload = await response.json();
      const axieCollection = payload.data && payload.data.axies;
      const results = (axieCollection && axieCollection.results) || [];
      const syncedAt = (payload.snapshot && payload.snapshot.syncedAt) || (axieCollection && axieCollection.syncedAt);

      setAxies(results);
      setTotal((axieCollection && axieCollection.total) || results.length);
      setLastUpdated(
        syncedAt
          ? new Date(syncedAt).toLocaleString([], {
              month: "short",
              day: "numeric",
              hour: "numeric",
              minute: "2-digit"
            })
          : ""
      );
    } catch (fetchError) {
      setError(fetchError.message || "Unable to load the local Axie collection snapshot.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadAxies();
  }, [loadAxies]);

  const preparedAxies = useMemo(() => axies.map(prepareAxieForCollection), [axies]);
  const availableAxies = useMemo(() => preparedAxies.filter(isAvailable), [preparedAxies]);
  const delegatedAxies = axies.length - availableAxies.length;
  const classesForFilter = useMemo(() => unique(availableAxies.map(axie => axie.class)), [availableAxies]);
  const collectionsForFilter = useMemo(() => sortTitleOptions(unique(availableAxies.flatMap(axie => axie.collectionMarkers))), [availableAxies]);
  const activeFilterCount = selectedClasses.length +
    (anyCollectibleOnly ? 1 : 0) +
    selectedCollections.length +
    (levelRange[0] !== 1 || levelRange[1] !== 60 ? 1 : 0) +
    (breedRange[0] !== 0 || breedRange[1] !== 7 ? 1 : 0) +
    (evolvedRange[0] !== 0 || evolvedRange[1] !== 6 ? 1 : 0) +
    (inTerrariumOnly ? 1 : 0) +
    (notInTerrariumOnly ? 1 : 0) +
    (readyToAscendOnly ? 1 : 0) +
    (readyToEvolveOnly ? 1 : 0);
  const resetFilters = () => {
    setAnyCollectibleOnly(false);
    setSelectedClasses([]);
    setSelectedCollections([]);
    setLevelRange([1, 60]);
    setBreedRange([0, 7]);
    setEvolvedRange([0, 6]);
    setInTerrariumOnly(false);
    setNotInTerrariumOnly(false);
    setReadyToAscendOnly(false);
    setReadyToEvolveOnly(false);
  };

  const filteredAxies = useMemo(() => {
    const query = search.trim().toLowerCase();
    const selectedClassSet = new Set(selectedClasses);
    const selectedCollectionSet = new Set(selectedCollections);
    const matchingAxies = availableAxies
      .filter(axie => !query || axie.searchText.includes(query))
      .filter(axie => !selectedClasses.length || selectedClassSet.has(axie.class))
      .filter(axie => !anyCollectibleOnly || axie.collectionMarkers.length > 0)
      .filter(axie => !selectedCollections.length || axie.collectionMarkers.some(collection => selectedCollectionSet.has(collection)))
      .filter(axie => {
        const level = axie.level;
        return level >= levelRange[0] && level <= levelRange[1];
      })
      .filter(axie => {
        const breedCount = Number(axie.breedCount) || 0;
        return breedCount >= breedRange[0] && breedCount <= breedRange[1];
      })
      .filter(axie => {
        const evolvedPartsCount = axie.evolvedPartsCount;
        return evolvedPartsCount >= evolvedRange[0] && evolvedPartsCount <= evolvedRange[1];
      })
      .filter(axie => !inTerrariumOnly || axie.hasLockedContext)
      .filter(axie => !notInTerrariumOnly || !axie.hasLockedContext)
      .filter(axie => !readyToAscendOnly || axie.readyToAscend);

    return matchingAxies.sort(compareAxies(sort));
  }, [anyCollectibleOnly, availableAxies, breedRange, evolvedRange, inTerrariumOnly, levelRange, notInTerrariumOnly, readyToAscendOnly, search, selectedClasses, selectedCollections, sort]);

  return (
    <main className={classes.page}>
      <Helmet>
        <title>Axie Collection | Chuck Fresco</title>
        <meta
          name="description"
          content="Browse Chuck Fresco Axies that are currently not delegated and available to request."
        />
      </Helmet>

      <div className={classes.shell}>
        <section className={classes.hero}>
          <div>
            <p className={classes.eyebrow}>Axie delegation inventory</p>
            <h1 className={classes.title}>Axie Collection</h1>
            <div className={classes.rulesPanel}>
              <div className={classes.rulesHeader}>
                <h2 className={classes.rulesTitle}>Rules to Getting Axies Delegated</h2>
                <div className={classes.rulesActions}>
                  <a className={classes.ruleAction} href={X_FOLLOW_URL} target="_blank" rel="noopener noreferrer">
                    <span className={classes.xRequestIconWrap} aria-hidden="true">
                      <img className={classes.xRequestIcon} src={X_ICON} alt="" />
                    </span>
                    Follow
                  </a>
                  <a className={classes.ruleAction} href={requestPostUrl} target="_blank" rel="noopener noreferrer">
                    <span className={classes.xRequestIconWrap} aria-hidden="true">
                      <img className={classes.xRequestIcon} src={X_ICON} alt="" />
                    </span>
                    Weekly Post
                  </a>
                </div>
              </div>
              <ul className={classes.ruleList}>
                <li className={classes.ruleItem}>
                  <CheckCircleIcon fontSize="small" />
                  <span>
                    Must <strong>follow ChuckFresco on X</strong>.
                  </span>
                </li>
                <li className={classes.ruleItem}>
                  <CheckCircleIcon fontSize="small" />
                  <span>
                    Must <strong>like and repost this week&apos;s request post</strong> on X.
                  </span>
                </li>
                <li className={classes.ruleItem}>
                  <CheckCircleIcon fontSize="small" />
                  <span>
                    Must only select <strong>1 Axie</strong> in the comment section. Axie is not guaranteed.
                  </span>
                </li>
                <li className={classes.ruleItem}>
                  <CheckCircleIcon fontSize="small" />
                  <span>
                    Comment your <strong>chosen Axie</strong>, your <strong>Ronin address</strong>, and the reason you
                    want to borrow it.
                  </span>
                </li>
                <li className={classes.ruleItem}>
                  <span className={classes.ruleWarningIcon} aria-hidden="true">×</span>
                  <span>
                    <strong>
                      If the Axie is not being used or earning AXP, it will be returned. No Slips. Use is for Origins,
                      Classic, and other Axie games that earn AXP.
                    </strong>
                  </span>
                </li>
              </ul>
              <div className={classes.ruleTemplate}>
                <div className={classes.ruleTemplateHeader}>
                  <span>Comment Template</span>
                  <button className={classes.copyTemplateButton} type="button" onClick={copyRequestTemplate}>
                    {templateCopied ? "Copied" : "Copy"}
                  </button>
                </div>
                <pre className={classes.ruleTemplateText}>{getRequestTemplate()}</pre>
              </div>
            </div>
          </div>
          <img className={classes.logo} src="/assets/logo/axie-infinity-logo.png" alt="Axie Infinity" />
        </section>

        <section className={classes.statsPanel} aria-label="Axie collection summary">
          <div className={classes.stat}>
            <span className={classes.statLabel}>Available</span>
            <strong className={classes.statValue}>{availableAxies.length.toLocaleString()}</strong>
          </div>
          <div className={classes.stat}>
            <span className={classes.statLabel}>Delegated</span>
            <strong className={classes.statValue}>{delegatedAxies.toLocaleString()}</strong>
          </div>
          <div className={classes.stat}>
            <span className={classes.statLabel}>Total</span>
            <strong className={classes.statValue}>{(total || axies.length).toLocaleString()}</strong>
          </div>
        </section>

        {error && <div className={classes.error}>{error}</div>}

        <section className={classes.toolbar} aria-label="Axie filters">
          <label className={classes.inputWrap}>
            <SearchIcon fontSize="small" />
            <input
              className={classes.input}
              value={search}
              onChange={event => setSearch(event.target.value)}
              placeholder="Search ID, part, class, title..."
            />
          </label>
          <label className={classes.inputWrap}>
            <SortIcon fontSize="small" />
            <select className={classes.input} value={sort} onChange={event => setSort(event.target.value)}>
              <option value="level">Highest level</option>
              <option value="lowestLevel">Lowest level</option>
              <option value="axpToday">Highest AXP today</option>
            </select>
          </label>
          <AdvancedFilterDropdown
            activeFilterCount={activeFilterCount}
            anyCollectibleOnly={anyCollectibleOnly}
            breedRange={breedRange}
            classOptions={classesForFilter}
            classes={classes}
            collectionOptions={collectionsForFilter}
            evolvedRange={evolvedRange}
            inTerrariumOnly={inTerrariumOnly}
            levelRange={levelRange}
            notInTerrariumOnly={notInTerrariumOnly}
            readyToAscendOnly={readyToAscendOnly}
            readyToEvolveOnly={readyToEvolveOnly}
            resetFilters={resetFilters}
            selectedClasses={selectedClasses}
            selectedCollections={selectedCollections}
            setAnyCollectibleOnly={setAnyCollectibleOnly}
            setBreedRange={setBreedRange}
            setEvolvedRange={setEvolvedRange}
            setInTerrariumOnly={setInTerrariumOnly}
            setLevelRange={setLevelRange}
            setNotInTerrariumOnly={setNotInTerrariumOnly}
            setReadyToAscendOnly={setReadyToAscendOnly}
            setReadyToEvolveOnly={setReadyToEvolveOnly}
            setSelectedClasses={setSelectedClasses}
            setSelectedCollections={setSelectedCollections}
          />
        </section>

        <div className={classes.sectionTitleRow}>
          <div>
            <h2 className={classes.sectionTitle}>{filteredAxies.length.toLocaleString()} Axies</h2>
            <div className={classes.statusText}>
              {loading ? "Loading saved collection..." : lastUpdated ? `Snapshot ${lastUpdated}` : "Saved snapshot"}
            </div>
          </div>
        </div>

        {loading && !axies.length ? (
          <div className={classes.empty}>Loading saved Axie collection...</div>
        ) : filteredAxies.length ? (
          <section className={classes.grid} aria-label="Available Axies">
            {filteredAxies.map(axie => (
              <AxieCard key={axie.id} axie={axie} classes={classes} requestPostUrl={requestPostUrl} />
            ))}
          </section>
        ) : (
          <div className={classes.empty}>
            No available Axies match the current filters. Clear search or adjust the filters to check again.
          </div>
        )}
      </div>
    </main>
  );
};

export default AxieCollection;
