import { makeStyles } from "@material-ui/core/styles";
const searchIcon = "/assets/sunflower-land/icons/search.png";
const useStyles = makeStyles(theme => ({
  payoutNotice: {
    margin: "12px 0",
    padding: "12px 14px",
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "#fff2a8",
    border: "3px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #f5b51b, 4px 4px 0 rgba(0,0,0,.2)",
    color: "#332235",
    lineHeight: 1.4,
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start"
    }
  },
  payoutNoticeLogo: {
    width: 50,
    height: 50,
    flex: "0 0 50px",
    objectFit: "contain",
    borderRadius: 12,
    boxShadow: "2px 2px 0 rgba(16,16,24,.28)",
    [theme.breakpoints.down("xs")]: {
      width: 42,
      height: 42,
      flexBasis: 42,
      borderRadius: 10
    }
  },
  payoutNoticeTitle: { display: "block", marginBottom: 3, color: "#9f2d20", fontSize: 16, letterSpacing: 0.4, textTransform: "uppercase" },
  giveawayLayout: {
    display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", alignItems: "stretch", gap: 16, margin: "20px 0",
    [theme.breakpoints.down("sm")]: { gridTemplateColumns: "minmax(0, 1fr)" }
  },
  giveawayPanel: {
    display: "flex", flexDirection: "column", minWidth: 0, padding: 14,
    background: "#000", color: "#fff", border: "3px solid #101018", borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #343a40, 6px 6px 0 rgba(0,0,0,0.22)",
    fontFamily: "'Courier New', monospace", fontWeight: 700
  },
  giveawayTitle: { margin: "0 0 8px", color: "#fff", fontFamily: "inherit", fontSize: 20, fontWeight: 900 },
  giveawayEmbed: { width: "100%", flex: "1 1 auto", minHeight: 440, border: "3px solid #343a40", borderRadius: 8, background: "#15202b", boxSizing: "border-box" },
  giveawayLink: { color: "#fff", marginTop: 10, textDecoration: "underline", "&:hover": { color: "#fff" } },
  giveawayEmpty: { display: "grid", placeItems: "center", flex: 1, minHeight: 260, fontSize: 20, textAlign: "center" },
  infoPanel: {
    margin: 0,
    padding: "20px 22px",
    background: "#fff8d6",
    border: "3px solid #e8ad76",
    borderRadius: 8,
    boxShadow: "0 4px 0 rgba(16,16,24,0.25)",
    color: "#332235",
    fontFamily: "'Courier New', monospace",
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 1.65,
    "& p": { margin: "14px 0" },
    "& a": { color: "#075ec4", textDecoration: "underline", textUnderlineOffset: 3 },
    "& h2": { marginBottom: 16, lineHeight: 1.3 },
    [theme.breakpoints.down("xs")]: { padding: "16px 12px", fontSize: 14 }
  },
  infoCallout: {
    margin: "16px 0",
    padding: "14px 18px",
    background: "#fff2a8",
    border: "3px solid #292331",
    borderRadius: 9,
    boxShadow: "inset 0 0 0 3px #ffc529, 4px 4px 0 rgba(16,16,24,0.2)",
    "& p": { margin: "6px 0 0" }
  },
  calloutTitle: {
    margin: "0 0 8px",
    color: "#a63317",
    fontFamily: "inherit",
    fontSize: 16,
    fontWeight: 900,
    textTransform: "uppercase",
    letterSpacing: 0.4
  },
  entrySteps: {
    margin: 0,
    paddingLeft: 24,
    "& li": { paddingLeft: 5, margin: "9px 0" },
    "& li::marker": { fontWeight: 900, color: "#a63317" }
  },
  infoActions: { display: "flex", flexWrap: "wrap", gap: 12, margin: "20px 0" },
  infoButton: {
    display: "inline-flex",
    alignItems: "center",
    minHeight: 42,
    padding: "7px 14px",
    background: "#2876d5",
    border: "3px solid #292331",
    borderRadius: 7,
    boxShadow: "inset 0 0 0 2px #8bcfff, 2px 3px 0 rgba(16,16,24,0.22)",
    fontFamily: "inherit",
    fontWeight: 900,
    "&&": { color: "#fff", textDecoration: "none" },
    "&:hover": { filter: "brightness(1.12)" },
    "&:focus-visible": { outline: "3px solid #075ec4", outlineOffset: 3 }
  },
  helpLandButton: {
    gap: 8,
    padding: "4px 12px 4px 5px",
    background: "#d8def2",
    border: "3px solid #2a2540",
    borderRadius: 2,
    boxShadow: "inset 0 0 0 2px #f5f3ef, 3px 3px 0 #101018",
    fontFamily: "SmallestPixel7, monospace",
    fontSize: 16,
    lineHeight: 1,
    textTransform: "uppercase",
    "&&": { color: "#2a2540", textDecoration: "none" }
  },
  xButton: { background: "#101018", boxShadow: "inset 0 0 0 2px #999, 2px 3px 0 rgba(16,16,24,0.22)" },
  infoFootnote: {
    borderTop: "2px solid #c7b992",
    paddingTop: 12,
    fontSize: 13,
    lineHeight: 1.55,
    fontStyle: "italic"
  },
  monthControl: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 12,
    margin: "16px 0"
  },
  monthSelect: {
    maxWidth: "100%",
    minHeight: 42,
    padding: "7px 34px 7px 12px",
    border: "3px solid #292331",
    borderRadius: 7,
    background: "#fffdf0",
    color: "#332235",
    font: "inherit",
    cursor: "pointer"
  },
  dateRange: { fontWeight: 900, fontSize: 16 },

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
      "linear-gradient(90deg, rgba(39,54,76,0.98) 0%, rgba(61,92,82,0.88) 50%, rgba(232,173,118,0.74) 100%), #27364c",
    borderBottom: "5px solid #101018",
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    position: "relative",
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
    maxWidth: 690,
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
    maxWidth: 600,
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
    padding: "3px 16px 5px",
    backgroundColor: "#b95791",
    borderTop: "3px solid #1d1730",
    borderRight: "4px solid #4c2b67",
    borderBottom: "4px solid #4c2b67",
    borderLeft: "3px solid #fb6f8c",
    boxShadow: "inset 0 2px 0 #f78ab2, inset 0 -2px 0 #f16383",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      padding: "3px 12px 5px",
      gap: 8
    }
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
    minHeight: 25,
    padding: "2px 10px",
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
layout: {
    display: "grid",
    gridTemplateColumns: "minmax(0, 740px) minmax(340px, 1fr)",
    gap: 20,
    alignItems: "stretch",
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: "1fr",
      alignItems: "start"
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
headerActions: {
    display: "flex",
    alignItems: "flex-end",
    flexDirection: "column",
    gap: 6,
    [theme.breakpoints.down("xs")]: {
      alignItems: "flex-start"
    }
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
    cursor: "pointer",
    fontFamily: "inherit",
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
farmTagCopied: {
    background: "#d8f5c4",
    color: "#245c20",
    borderColor: "#34752c",
    boxShadow: "inset 0 0 0 3px #a5d88b"
  },
farmTagLabel: {
    display: "grid",
    "& > span": {
      gridArea: "1 / 1"
    }
  },
farmSearchIcon: {
    width: 32,
    height: 32,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
updateMeta: {
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1.35,
    color: "#4a2b36",
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
      textAlign: "left"
    }
  },
tabs: {
    display: "flex",
    gap: 14,
    padding: "12px 16px 8px",
    overflowX: "auto"
  },
tab: {
    appearance: "none",
    border: 0,
    background: "transparent",
    color: "#20192b",
    cursor: "pointer",
    font: "inherit",
    fontSize: 20,
    fontWeight: 900,
    padding: "5px 8px",
    whiteSpace: "nowrap",
    display: "inline-flex",
    alignItems: "center",
    gap: 6
  },
activeTab: {
    outline: "4px solid #c95839",
    background: "#f4c08a",
    borderRadius: 6
  },
tabIcon: {
    width: 24,
    height: 24,
    imageRendering: "pixelated"
  },
stats: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 8,
    padding: "0 16px 12px",
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
panelTitle: {
    margin: 0,
    fontSize: 22,
    fontWeight: 900,
    lineHeight: 1.1
  },
board: {
    padding: 16,
    position: "sticky",
    top: 16,
    [theme.breakpoints.down("sm")]: {
      position: "static"
    }
  },
boardHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    marginBottom: 12
  },
boardMeta: {
    margin: "0 0 12px",
    fontWeight: 900,
    lineHeight: 1.35
  },
boardParticipantCount: {
    margin: "-4px 0 14px",
    fontWeight: 900,
    lineHeight: 1.35
  },
boardParticipantNumber: {
    color: "#1f5da8",
    marginRight: 6
  },
leaderboardSearch: {
    width: "100%",
    height: 40,
    margin: "0 0 12px",
    padding: "7px 10px 7px 38px",
    boxSizing: "border-box",
    background: `#fff8d6 url(${searchIcon}) no-repeat 9px center / 24px 24px`,
    border: "3px solid #101018",
    borderRadius: 8,
    boxShadow: "inset 0 0 0 2px #f4c08a",
    color: "#332235",
    font: "inherit",
    fontSize: 15,
    fontWeight: 900,
    outline: 0,
    "&::placeholder": {
      color: "#765568",
      opacity: 1
    },
    "&:focus": {
      borderColor: "#1f5da8",
      boxShadow: "inset 0 0 0 2px #55b6ff, 0 0 0 2px #101018"
    }
  },
rulesList: {
    display: "grid",
    gap: 8,
    margin: "0 0 14px",
    paddingLeft: 24,
    fontWeight: 900,
    lineHeight: 1.35
  },
leaderboardList: {
    display: "grid",
    gap: 8,
    margin: 0,
    padding: 0,
    listStyle: "none"
  },
leaderboardRow: {
    display: "grid",
    gridTemplateColumns: "48px minmax(0, 1fr)",
    gap: 10,
    alignItems: "center",
    background: "#2876d5",
    border: "3px solid #111827",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 2px #55b6ff",
    color: "#fff",
    padding: "8px 10px"
  },
topRankRow: {
    color: "#1f1721",
    textShadow: "1px 1px 0 rgba(255,255,255,0.35)",
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.38), 4px 4px 0 rgba(0,0,0,0.2)"
  },
goldRow: {
    background: "linear-gradient(90deg, #f5b51b 0%, #ffe889 52%, #b76f13 100%)"
  },
silverRow: {
    background: "linear-gradient(90deg, #aeb9c6 0%, #f7fbff 52%, #7d8794 100%)"
  },
bronzeRow: {
    background: "linear-gradient(90deg, #a65f2e 0%, #e4a260 52%, #6d3820 100%)",
    color: "#fff8e8",
    textShadow: "2px 2px 0 rgba(47,23,13,0.42)"
  },
rankBadge: {
    width: 40,
    height: 40,
    border: "3px solid #101018",
    borderRadius: "50%",
    color: "#20192b",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1,
    textShadow: "1px 1px 0 rgba(255,255,255,0.45)",
    boxShadow: "inset 0 0 0 3px rgba(255,255,255,0.35), 3px 3px 0 rgba(0,0,0,0.24)"
  },
goldRank: {
    background: "linear-gradient(180deg, #fff2a8 0%, #f6c53d 54%, #b76f13 100%)"
  },
silverRank: {
    background: "linear-gradient(180deg, #ffffff 0%, #cfd8e3 54%, #7d8794 100%)"
  },
bronzeRank: {
    background: "linear-gradient(180deg, #ffd2a1 0%, #c9833f 54%, #7b3f22 100%)"
  },
normalRank: {
    background: "linear-gradient(180deg, #f7fbff 0%, #d8def2 62%, #9fb2d8 100%)"
  },
leaderboardName: {
    minWidth: 0,
    fontSize: 16,
    fontWeight: 900,
    lineHeight: 1.1,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  },
leaderboardNameLink: {
    display: "block",
    color: "inherit",
    textDecoration: "underline",
    textDecorationThickness: "2px",
    textUnderlineOffset: "2px",
    cursor: "pointer",
    "&:hover": {
      color: "inherit",
      opacity: 0.82
    },
    "&:focus-visible": {
      outline: "3px solid currentColor",
      outlineOffset: 2,
      borderRadius: 2
    }
  },
leaderboardDetails: { minWidth: 0 },
leaderboardFarmId: {
    flexShrink: 0,
    fontSize: 11,
    fontWeight: 700,
    lineHeight: 1.1,
    color: "inherit",
    whiteSpace: "nowrap",
    textDecoration: "underline",
    textUnderlineOffset: 2,
    "&:hover": { color: "inherit", opacity: 0.82 },
    "&:focus-visible": { outline: "2px solid currentColor", outlineOffset: 2 }
  },
leaderboardNameRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 8
  },
leaderboardStats: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 8,
    marginTop: 5,
    color: "#fff8d6",
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1
  },
topRankStats: {
    color: "#2a1d24",
    textShadow: "1px 1px 0 rgba(255,255,255,0.3)"
  },
bronzeRankStats: {
    color: "#fff8e8",
    textShadow: "2px 2px 0 rgba(47,23,13,0.42)"
  },
leaderboardStat: {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    whiteSpace: "nowrap"
  },
leaderboardIcon: {
    width: 20,
    height: 20,
    imageRendering: "pixelated"
  },
leaderboardTotal: {
    color: "#fff2a8",
    fontSize: 15
  },
topRankTotal: {
    color: "#25151d"
  },
bronzeRankTotal: {
    color: "#fff2a8"
  },
leaderboardPagination: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    marginTop: 12,
    flexWrap: "wrap"
  },
leaderboardPageButton: {
    appearance: "none",
    minWidth: 42,
    height: 38,
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#2876d5",
    color: "#fff",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    font: "inherit",
    fontWeight: 900,
    lineHeight: 1,
    padding: 0,
    boxShadow: "inset 0 0 0 3px #55b6ff",
    "&:hover": {
      filter: "brightness(1.05)"
    },
    "&:disabled": {
      cursor: "not-allowed",
      opacity: 0.45,
      filter: "grayscale(0.25)"
    }
  },
leaderboardPageIcon: {
    width: 28,
    height: 28
  },
leaderboardPageMeta: {
    flex: "1 1 auto",
    color: "#4a2b36",
    fontSize: 13,
    fontWeight: 900,
    lineHeight: 1.25,
    textAlign: "center"
  },
feed: {
    maxHeight: "68vh",
    overflowY: "auto",
    padding: "0 12px 8px"
  },
row: {
    display: "grid",
    gridTemplateColumns: "42px 1fr auto",
    gap: 8,
    alignItems: "center",
    background: "#2876d5",
    color: "#fff",
    border: "3px solid #111827",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 2px #55b6ff",
    padding: "8px 10px",
    marginBottom: 8,
    "&:last-child": {
      marginBottom: 0
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: "34px 1fr",
      padding: "7px 8px"
    }
  },
avatar: {
    width: 32,
    height: 32,
    border: "2px solid #16213a",
    borderRadius: 8,
    background: "#f6d365",
    color: "#172033",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 900,
    boxShadow: "2px 2px 0 rgba(0,0,0,0.25)"
  },
nameLine: {
    fontSize: 14,
    fontWeight: 900,
    lineHeight: 1.15
  },
message: {
    fontSize: 16,
    fontWeight: 900,
    marginTop: 2,
    lineHeight: 1.15
  },
actionIcon: {
    width: 26,
    height: 26,
    imageRendering: "pixelated",
    [theme.breakpoints.down("xs")]: {
      gridColumn: "2",
      justifySelf: "end"
    }
  },
statusPill: {
    display: "inline-block",
    marginLeft: 6,
    color: "#fff2a8",
    fontSize: 10
  },
empty: {
    padding: "24px 16px",
    textAlign: "center",
    fontWeight: 900
  },
error: {
    color: "#6b1d1d",
    padding: "0 16px 12px",
    fontWeight: 900
  }
}));
export default useStyles;
