import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import VolumeOffIcon from "@material-ui/icons/VolumeOff";
import VolumeUpIcon from "@material-ui/icons/VolumeUp";

const FARM_ID = "7089202106478272";
const snapshotUrls = [
  { type: "cheer", url: "/assets/sunflower-land/helperCheers.json" },
  { type: "help", url: "/assets/sunflower-land/helperHelps.json" }
];

const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const helpIcon = "/assets/sunflower-land/icons/help.png";
const cheerIcon = "/assets/sunflower-land/icons/cheer.png";
const searchIcon = "/assets/sunflower-land/icons/search.png";
const lightningIcon = "/assets/sunflower-land/icons/lightning.png";
const cheeringSound = "/assets/sunflower-land/sounds/fnaf-cheering.mp3";
const farmVisitUrl = `https://sunflower-land.com/play/#/visit/${FARM_ID}`;
const referralUrl = "https://sunflower-land.com/play/?ref=ChuckFresco";
const WEEK_MS = 7 * 24 * 60 * 60 * 1000;
const LEADERBOARD_PAGE_SIZE = 10;
const WHEEL_SIZE = 12;
const ROLL_DURATION_MS = 3600;
const WHEEL_POINTER_OFFSET = -90;
const wheelColors = ["#c95839", "#2876d5", "#f4c08a", "#b95791", "#3d5c52", "#f08a55"];

const getWheelEntries = (entries, winningIndex = -1) => {
  if (!entries.length) return [];
  if (entries.length <= WHEEL_SIZE) {
    return entries.map((name, index) => ({
      entry: index + 1,
      name
    }));
  }

  const centerIndex = winningIndex >= 0 ? winningIndex : 0;
  const halfWindow = Math.floor(WHEEL_SIZE / 2);
  const startIndex = centerIndex - halfWindow;

  return Array.from({ length: WHEEL_SIZE }, (_, index) => {
    const nextIndex = (startIndex + index + entries.length) % entries.length;
    return {
      entry: nextIndex + 1,
      name: entries[nextIndex]
    };
  });
};

const getAllWheelEntries = entries => (
  entries.map((name, index) => ({
    entry: index + 1,
    name
  }))
);

const getWheelBackground = count => {
  if (!count) return "#fff8d6";

  const slice = 100 / count;
  const stops = Array.from({ length: count }, (_, index) => {
    const color = wheelColors[index % wheelColors.length];
    return `${color} ${index * slice}% ${(index + 1) * slice}%`;
  });

  return `conic-gradient(from ${WHEEL_POINTER_OFFSET}deg, ${stops.join(", ")})`;
};

const getWheelSegmentCenter = (index, count) => {
  if (!count) return 0;
  const segmentAngle = 360 / count;
  return (segmentAngle * index) + (segmentAngle / 2);
};

const getWheelLabelRotation = (index, count) => (
  WHEEL_POINTER_OFFSET + getWheelSegmentCenter(index, count)
);

const getAudioContext = () => {
  if (typeof window === "undefined") return null;

  const AudioContext = window.AudioContext || window.webkitAudioContext;
  return AudioContext ? new AudioContext() : null;
};

const playTone = (audioContext, frequency, duration, volume = 0.08, type = "square") => {
  if (!audioContext) return;

  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const now = audioContext.currentTime;

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, now);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(volume, now + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);
  oscillator.connect(gain);
  gain.connect(audioContext.destination);
  oscillator.start(now);
  oscillator.stop(now + duration + 0.02);
};

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
    gridTemplateColumns: "minmax(0, 740px) minmax(340px, 1fr)",
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
  giveawayPanel: {
    marginTop: 20,
    padding: 16
  },
  copyButton: {
    appearance: "none",
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#2876d5",
    color: "#fff",
    cursor: "pointer",
    font: "inherit",
    fontSize: 14,
    fontWeight: 900,
    padding: "7px 10px",
    boxShadow: "inset 0 0 0 3px #55b6ff",
    whiteSpace: "nowrap",
    "&:hover": {
      filter: "brightness(1.05)"
    }
  },
  winnerList: {
    width: "100%",
    minHeight: 220,
    resize: "vertical",
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    color: "#332235",
    font: "inherit",
    fontSize: 16,
    fontWeight: 900,
    lineHeight: 1.35,
    padding: 12,
    boxSizing: "border-box"
  },
  rollSection: {
    marginTop: 16,
    paddingTop: 14,
    borderTop: "4px solid rgba(51,34,53,0.25)"
  },
  wheelStage: {
    marginBottom: 14,
    padding: "12px 10px 14px",
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 12,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    overflow: "hidden"
  },
  wheelWrap: {
    width: "min(282px, 76vw)",
    height: "min(282px, 76vw)",
    margin: "0 auto",
    position: "relative"
  },
  wheelPointer: {
    width: 0,
    height: 0,
    borderLeft: "16px solid transparent",
    borderRight: "16px solid transparent",
    borderTop: "30px solid #fff2a8",
    filter: "drop-shadow(0 4px 0 #101018)",
    position: "absolute",
    top: -2,
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 3
  },
  wheel: {
    width: "100%",
    height: "100%",
    border: "5px solid #101018",
    borderRadius: "50%",
    boxShadow: "inset 0 0 0 5px rgba(255,248,214,0.38), 6px 6px 0 rgba(0,0,0,0.22)",
    position: "relative",
    overflow: "hidden",
    transition: `transform ${ROLL_DURATION_MS}ms cubic-bezier(0.12, 0.8, 0.18, 1)`,
    willChange: "transform",
    "&::after": {
      content: '""',
      width: "38%",
      height: "38%",
      background: "#e8ad76",
      border: "4px solid #101018",
      borderRadius: "50%",
      boxShadow: "inset 0 0 0 4px #f8d29b",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 2
    }
  },
  idleWheel: {
    animation: "$idleWheelSpin 24s linear infinite"
  },
  "@keyframes idleWheelSpin": {
    from: {
      transform: "rotate(0deg)"
    },
    to: {
      transform: "rotate(360deg)"
    }
  },
  wheelLabel: {
    width: "50%",
    height: 22,
    position: "absolute",
    top: "calc(50% - 11px)",
    left: "50%",
    color: "#fff8d6",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 18,
    lineHeight: "22px",
    fontWeight: 900,
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    textAlign: "right",
    paddingRight: "34%",
    boxSizing: "border-box",
    textShadow: "2px 2px 0 rgba(16,16,24,0.55)",
    transformOrigin: "0 50%",
    zIndex: 1,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15
    }
  },
  wheelCenter: {
    width: "38%",
    minHeight: "32%",
    borderRadius: "50%",
    color: "#332235",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 17,
    fontWeight: 900,
    lineHeight: 1,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    boxSizing: "border-box",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 4,
    whiteSpace: "nowrap"
  },
  rollModalBackdrop: {
    position: "fixed",
    inset: 0,
    zIndex: 1400,
    background: "rgba(16,16,24,0.76)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 18
  },
  rollModal: {
    width: "min(920px, 96vw)",
    maxHeight: "94vh",
    overflowY: "auto",
    background: "#e8ad76",
    border: "5px solid #101018",
    borderRadius: 14,
    boxShadow: "inset 0 0 0 5px #f8d29b, 12px 12px 0 rgba(0,0,0,0.35)",
    color: "#332235",
    fontFamily: "'Courier New', monospace",
    padding: 18,
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      padding: 12
    }
  },
  rollModalHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 12,
    marginBottom: 12
  },
  rollModalActions: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: 8,
    flexWrap: "wrap"
  },
  rollModalTitle: {
    margin: 0,
    color: "#332235",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 32,
    lineHeight: 1,
    fontWeight: 900,
    [theme.breakpoints.down("xs")]: {
      fontSize: 24
    }
  },
  modalCloseButton: {
    appearance: "none",
    border: "3px solid #101018",
    borderRadius: 8,
    background: "#2876d5",
    color: "#fff",
    cursor: "pointer",
    font: "inherit",
    fontSize: 14,
    fontWeight: 900,
    padding: "7px 10px",
    boxShadow: "inset 0 0 0 3px #55b6ff",
    whiteSpace: "nowrap",
    "&:hover": {
      filter: "brightness(1.05)"
    }
  },
  modalIconButton: {
    width: 38,
    minWidth: 38,
    height: 38,
    padding: 0
  },
  modalSoundIcon: {
    width: 21,
    height: 21
  },
  modalWheelStage: {
    background: "#fff8d6",
    border: "4px solid #101018",
    borderRadius: 12,
    boxShadow: "inset 0 0 0 3px #f4c08a",
    padding: "18px 12px 16px",
    overflow: "hidden"
  },
  modalWheelWrap: {
    width: "min(620px, 82vw, 70vh)",
    height: "min(620px, 82vw, 70vh)",
    margin: "0 auto",
    position: "relative"
  },
  modalWheel: {
    boxShadow: "inset 0 0 0 7px rgba(255,248,214,0.42), 9px 9px 0 rgba(0,0,0,0.26)"
  },
  modalWheelCenter: {
    width: "30%",
    minHeight: "24%",
    fontSize: 24,
    appearance: "none",
    border: 0,
    cursor: "pointer",
    boxShadow: "0 0 0 0 rgba(255,242,168,0)",
    transition: "filter 120ms ease, box-shadow 120ms ease",
    "&:hover": {
      filter: "brightness(1.04)",
      boxShadow: "0 0 0 5px rgba(255,242,168,0.35)"
    },
    "&:disabled": {
      cursor: "default",
      filter: "none",
      boxShadow: "none"
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    }
  },
  modalRollHint: {
    margin: "14px 0 0",
    color: "#4a2b36",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 22,
    fontWeight: 900,
    lineHeight: 1.1,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18
    }
  },
  modalWinnerInfo: {
    width: "fit-content",
    maxWidth: "100%",
    margin: "12px auto 0",
    padding: "9px 12px",
    background: "#2876d5",
    color: "#fff",
    border: "4px solid #111827",
    borderRadius: 10,
    boxShadow: "inset 0 0 0 3px #55b6ff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    flexWrap: "wrap",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1,
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: 15
    }
  },
  modalWinnerIcon: {
    width: 28,
    height: 28,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  rollHint: {
    margin: "10px 0 0",
    color: "#4a2b36",
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 17,
    fontWeight: 900,
    lineHeight: 1.1,
    textAlign: "center"
  },
  rollButton: {
    width: "100%",
    appearance: "none",
    border: "4px solid #101018",
    borderRadius: 10,
    background: "#c95839",
    color: "#fff8d6",
    cursor: "pointer",
    font: "inherit",
    fontSize: 18,
    fontWeight: 900,
    padding: "11px 12px",
    boxShadow: "inset 0 0 0 3px #f08a55, 4px 4px 0 rgba(0,0,0,0.22)",
    "&:disabled": {
      cursor: "not-allowed",
      filter: "grayscale(0.5)",
      opacity: 0.7
    }
  },
  winnerCard: {
    marginTop: 12,
    background: "#2876d5",
    color: "#fff",
    border: "4px solid #111827",
    borderRadius: 12,
    boxShadow: "inset 0 0 0 3px #55b6ff",
    padding: 12,
    fontWeight: 900
  },
  winnerName: {
    display: "block",
    color: "#fff2a8",
    fontSize: 24,
    lineHeight: 1.1,
    marginTop: 4
  },
  winnerMeta: {
    display: "grid",
    gap: 4,
    marginTop: 10,
    paddingTop: 10,
    borderTop: "3px solid rgba(255,255,255,0.24)",
    color: "#eaf4ff",
    fontSize: 14,
    lineHeight: 1.25
  },
  winnerAction: {
    display: "inline-flex",
    alignItems: "center",
    gap: 7
  },
  winnerActionIcon: {
    width: 24,
    height: 24,
    imageRendering: "pixelated",
    flex: "0 0 auto"
  },
  feed: {
    maxHeight: "68vh",
    overflowY: "auto",
    padding: "0 12px 14px"
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

const normalizeFeed = data => {
  const feed = Array.isArray(data)
    ? data
    : data && Array.isArray(data.feed)
      ? data.feed
      : data && data.data && Array.isArray(data.data.feed)
        ? data.data.feed
        : [];

  return feed.filter(item => (
    item.recipient &&
    String(item.recipient.id) === FARM_ID &&
    (item.type === "help" || item.type === "cheer")
  ));
};

const relativeTime = timestamp => {
  const diff = Date.now() - timestamp;
  const absDiff = Math.abs(diff);
  const units = [
    ["day", 86400000],
    ["hour", 3600000],
    ["minute", 60000]
  ];
  const unit = units.find(([, value]) => absDiff >= value) || ["minute", 60000];
  const amount = Math.max(1, Math.round(absDiff / unit[1]));
  const suffix = diff >= 0 ? "ago" : "from now";

  return `${amount} ${unit[0]}${amount === 1 ? "" : "s"} ${suffix}`;
};

const getInitial = username => (username || "?").trim().charAt(0).toUpperCase();
const getEntryName = item => (item.sender && item.sender.username) || "Unknown";
const getEntryActionLabel = type => (type === "cheer" ? "Cheered the farm" : "Helped the farm");
const getOrdinal = rank => {
  if (rank === 1) return "1st";
  if (rank === 2) return "2nd";
  if (rank === 3) return "3rd";
  return `${rank}`;
};
const getSnapshotTime = payload => {
  if (payload && payload.snapshotAt) return payload.snapshotAt;
  return "";
};
const formatDateTime = value => {
  if (!value) return "unknown";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "unknown";

  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    timeZone: "America/Los_Angeles",
    timeZoneName: "short"
  });
};

const SunflowerLandHelpers = () => {
  const classes = useStyles();
  const [feed, setFeed] = useState([]);
  const [snapshotMeta, setSnapshotMeta] = useState([]);
  const [activeFilter, setActiveFilter] = useState("all");
  const [loadError, setLoadError] = useState("");
  const [copyStatus, setCopyStatus] = useState("");
  const [winner, setWinner] = useState(null);
  const [isRolling, setIsRolling] = useState(false);
  const [isRollModalOpen, setIsRollModalOpen] = useState(false);
  const [isCheeringMuted, setIsCheeringMuted] = useState(false);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [wheelEntries, setWheelEntries] = useState([]);
  const [rollWheelEntries, setRollWheelEntries] = useState([]);
  const [leaderboardPage, setLeaderboardPage] = useState(0);
  const rollTimeoutRef = useRef(null);
  const rollFrameRef = useRef(null);
  const audioContextRef = useRef(null);
  const cheeringAudioRef = useRef(null);
  const tickIntervalRef = useRef(null);

  useEffect(() => {
    let isMounted = true;

    const loadFeed = async () => {
      try {
        const snapshots = await Promise.all(snapshotUrls.map(async snapshot => {
          const response = await fetch(snapshot.url, { cache: "no-cache" });
          if (!response.ok) throw new Error(`Feed request failed: ${response.status}`);

          const payload = await response.json();

          return {
            ...snapshot,
            payload
          };
        }));

        const nextFeed = snapshots
          .flatMap(snapshot => normalizeFeed(snapshot.payload))
          .sort((a, b) => b.createdAt - a.createdAt);
        if (isMounted) {
          setFeed(nextFeed);
          setSnapshotMeta(snapshots.map(snapshot => ({
            type: snapshot.type,
            updatedAt: getSnapshotTime(snapshot.payload)
          })));
          setLoadError("");
        }
      } catch (error) {
        if (isMounted) {
          setLoadError("Saved helper snapshots are unavailable. Check the public Sunflower Land JSON files.");
        }
      }
    };

    loadFeed();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => () => {
    if (rollTimeoutRef.current) {
      window.clearTimeout(rollTimeoutRef.current);
    }
    if (rollFrameRef.current) {
      window.cancelAnimationFrame(rollFrameRef.current);
    }
    if (tickIntervalRef.current) {
      window.clearInterval(tickIntervalRef.current);
    }
    if (cheeringAudioRef.current) {
      cheeringAudioRef.current.pause();
    }
  }, []);

  const weeklyFeed = useMemo(() => {
    const cutoff = Date.now() - WEEK_MS;

    return feed
      .filter(item => Number(item.createdAt) >= cutoff)
      .sort((a, b) => b.createdAt - a.createdAt);
  }, [feed]);

  const stats = useMemo(() => ({
    all: weeklyFeed.length,
    help: weeklyFeed.filter(item => item.type === "help").length,
    cheer: weeklyFeed.filter(item => item.type === "cheer").length
  }), [weeklyFeed]);

  const visibleFeed = useMemo(() => (
    activeFilter === "all" ? weeklyFeed : weeklyFeed.filter(item => item.type === activeFilter)
  ), [activeFilter, weeklyFeed]);

  const leaderboard = useMemo(() => {
    const players = new Map();

    weeklyFeed
      .slice()
      .sort((a, b) => Number(a.createdAt) - Number(b.createdAt))
      .forEach(item => {
        const senderId = item.sender && item.sender.id
          ? String(item.sender.id)
          : getEntryName(item);
        const current = players.get(senderId) || {
          id: senderId,
          name: getEntryName(item),
          cheers: 0,
          helps: 0,
          total: 0,
          reachedTotalAt: Number(item.createdAt)
        };

        if (item.type === "cheer") {
          current.cheers += 1;
        } else if (item.type === "help") {
          current.helps += 1;
        }

        current.name = getEntryName(item);
        current.total = current.cheers + current.helps;
        current.reachedTotalAt = Number(item.createdAt);
        players.set(senderId, current);
      });

    return Array.from(players.values())
      .sort((a, b) => (
        b.total - a.total ||
        a.reachedTotalAt - b.reachedTotalAt ||
        a.name.localeCompare(b.name)
      ));
  }, [weeklyFeed]);

  const leaderboardPageCount = Math.max(1, Math.ceil(leaderboard.length / LEADERBOARD_PAGE_SIZE));
  const safeLeaderboardPage = Math.min(leaderboardPage, leaderboardPageCount - 1);
  const leaderboardPageStart = safeLeaderboardPage * LEADERBOARD_PAGE_SIZE;
  const leaderboardPageEnd = Math.min(leaderboardPageStart + LEADERBOARD_PAGE_SIZE, leaderboard.length);
  const pagedLeaderboard = leaderboard.slice(
    leaderboardPageStart,
    leaderboardPageEnd
  );

  useEffect(() => {
    setLeaderboardPage(currentPage => Math.min(currentPage, leaderboardPageCount - 1));
  }, [leaderboardPageCount]);

  const eligibleEntries = useMemo(() => (
    weeklyFeed.map(getEntryName)
  ), [weeklyFeed]);

  const eligibleList = eligibleEntries.join("\n");
  const uniqueEligibleCount = useMemo(() => (
    new Set(eligibleEntries).size
  ), [eligibleEntries]);
  const visibleWheelEntries = wheelEntries.length ? wheelEntries : getWheelEntries(eligibleEntries);
  const wheelBackground = getWheelBackground(visibleWheelEntries.length);
  const visibleRollWheelEntries = rollWheelEntries.length ? rollWheelEntries : getAllWheelEntries(eligibleEntries);
  const rollWheelBackground = getWheelBackground(visibleRollWheelEntries.length);

  const copyEligibleList = async () => {
    if (!eligibleList) return;

    try {
      await navigator.clipboard.writeText(eligibleList);
      setCopyStatus("Copied");
    } catch (error) {
      setCopyStatus("Select the list to copy");
    }
  };

  const stopRollSound = () => {
    if (tickIntervalRef.current) {
      window.clearInterval(tickIntervalRef.current);
      tickIntervalRef.current = null;
    }
  };

  const playCheeringSound = () => {
    if (typeof window === "undefined" || isCheeringMuted) return;

    if (!cheeringAudioRef.current) {
      cheeringAudioRef.current = new Audio(cheeringSound);
      cheeringAudioRef.current.volume = 0.24;
    }

    cheeringAudioRef.current.currentTime = 0;
    cheeringAudioRef.current.play().catch(() => {});
  };

  const toggleCheeringMute = () => {
    setIsCheeringMuted(nextMuted => {
      const shouldMute = !nextMuted;

      if (shouldMute && cheeringAudioRef.current) {
        cheeringAudioRef.current.pause();
        cheeringAudioRef.current.currentTime = 0;
      }

      return shouldMute;
    });
  };

  const startRollSound = () => {
    if (!audioContextRef.current) {
      audioContextRef.current = getAudioContext();
    }

    const audioContext = audioContextRef.current;
    if (!audioContext) return;

    if (audioContext.state === "suspended") {
      audioContext.resume();
    }

    stopRollSound();
    if (cheeringAudioRef.current) {
      cheeringAudioRef.current.pause();
      cheeringAudioRef.current.currentTime = 0;
    }

    let tick = 0;
    playTone(audioContext, 420, 0.045, 0.055);
    tickIntervalRef.current = window.setInterval(() => {
      const progress = tick / 18;
      const frequency = 520 + (tick % 4) * 55 - progress * 120;
      playTone(audioContext, Math.max(260, frequency), 0.035, 0.045);
      tick += 1;
    }, 170);
  };

  const playWinnerSound = () => {
    const audioContext = audioContextRef.current;
    if (!audioContext) return;

    stopRollSound();
    [523, 659, 784, 1046, 1318].forEach((frequency, index) => {
      window.setTimeout(() => {
        playTone(audioContext, frequency, 0.13, 0.085, "triangle");
      }, index * 80);
    });
    [1568, 1760, 2093].forEach((frequency, index) => {
      window.setTimeout(() => {
        playTone(audioContext, frequency, 0.09, 0.045, "sine");
      }, 230 + (index * 45));
    });
    window.setTimeout(() => {
      playCheeringSound();
    }, 360);
  };

  const rollWinner = () => {
    if (!eligibleEntries.length || isRolling) return;

    const winningIndex = Math.floor(Math.random() * eligibleEntries.length);
    const nextWheelEntries = getWheelEntries(eligibleEntries, winningIndex);
    const nextRollWheelEntries = getAllWheelEntries(eligibleEntries);
    const nextRotation = wheelRotation + (360 * 5) + Math.random() * 360;

    if (rollTimeoutRef.current) {
      window.clearTimeout(rollTimeoutRef.current);
    }
    if (rollFrameRef.current) {
      window.cancelAnimationFrame(rollFrameRef.current);
    }

    setWheelEntries(nextWheelEntries);
    setRollWheelEntries(nextRollWheelEntries);
    setWinner(null);
    setIsRolling(true);
    setIsRollModalOpen(true);
    rollFrameRef.current = window.requestAnimationFrame(() => {
      rollFrameRef.current = window.requestAnimationFrame(() => {
        setWheelRotation(nextRotation);
        rollFrameRef.current = null;
      });
    });
    startRollSound();

    rollTimeoutRef.current = window.setTimeout(() => {
      const winningEntry = weeklyFeed[winningIndex];

      setWinner({
        name: eligibleEntries[winningIndex],
        entry: winningIndex + 1,
        total: eligibleEntries.length,
        type: winningEntry && winningEntry.type,
        action: getEntryActionLabel(winningEntry && winningEntry.type),
        createdAt: winningEntry && winningEntry.createdAt
      });
      setIsRolling(false);
      playWinnerSound();
    }, ROLL_DURATION_MS + 180);
  };

  const wheelCenterText = isRolling
    ? "Rolling"
    : winner
      ? "Winner"
      : "Ready";

  const closeRollModal = () => {
    if (!isRolling) {
      setIsRollModalOpen(false);
    }
  };

  const tabs = [
    { id: "all", label: "All", count: stats.all },
    { id: "help", label: "Helped", count: stats.help, icon: helpIcon },
    { id: "cheer", label: "Cheered", count: stats.cheer, icon: cheerIcon }
  ];
  const latestSnapshotUpdate = useMemo(() => {
    const latestTime = snapshotMeta
      .map(snapshot => new Date(snapshot.updatedAt).getTime())
      .filter(Number.isFinite)
      .sort((a, b) => b - a)[0];

    return latestTime ? new Date(latestTime).toISOString() : "";
  }, [snapshotMeta]);

  return (
    <div className={classes.page}>
      <Helmet>
        <title>Sunflower Land Helpers | Chuck Fresco</title>
        <meta
          name="description"
          content="Track Sunflower Land helpers and cheerers for ChuckFresco's farm."
        />
      </Helmet>

      <header className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.heroCopy}>
            <h1 className={classes.heroTitle}>Sunflower Land Helpers</h1>
            <p className={classes.heroSubtitle}>
              Track helpers, cheerers, weekly entries, and random winner rolls for Chuck Fresco's farm.
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
          className={`${classes.sunflowerNavLink} ${classes.activeSunflowerNavLink}`}
          to="/sunflower-land/helpers"
        >
          Leaderboard
        </Link>
        <Link
          className={classes.sunflowerNavLink}
          to="/sunflower-land/tools/fishing"
        >
          Fishing
        </Link>
      </nav>

      {isRollModalOpen && (
        <div
          className={classes.rollModalBackdrop}
          role="presentation"
          onClick={closeRollModal}
        >
          <div
            className={classes.rollModal}
            role="dialog"
            aria-modal="true"
            aria-label="Random roll wheel"
            onClick={event => event.stopPropagation()}
          >
            <div className={classes.rollModalHeader}>
              <h2 className={classes.rollModalTitle}>Random Roll</h2>
              <div className={classes.rollModalActions}>
                <button
                  type="button"
                  className={`${classes.modalCloseButton} ${classes.modalIconButton}`}
                  onClick={toggleCheeringMute}
                  aria-pressed={isCheeringMuted}
                  aria-label={isCheeringMuted ? "Unmute cheering sound" : "Mute cheering sound"}
                >
                  {isCheeringMuted ? (
                    <VolumeOffIcon className={classes.modalSoundIcon} aria-hidden="true" />
                  ) : (
                    <VolumeUpIcon className={classes.modalSoundIcon} aria-hidden="true" />
                  )}
                </button>
                <button
                  type="button"
                  className={classes.modalCloseButton}
                  onClick={closeRollModal}
                  disabled={isRolling}
                >
                  Close
                </button>
              </div>
            </div>

            <div className={classes.modalWheelStage} aria-live="polite">
              <div className={classes.modalWheelWrap}>
                <div className={classes.wheelPointer} aria-hidden="true" />
                <div
                  className={`${classes.wheel} ${classes.modalWheel}`}
                  style={{
                    background: rollWheelBackground,
                    transform: `rotate(${wheelRotation}deg)`
                  }}
                />
                <button
                  type="button"
                  className={`${classes.wheelCenter} ${classes.modalWheelCenter}`}
                  onClick={rollWinner}
                  disabled={!eligibleEntries.length || isRolling}
                  aria-label={winner ? "Reroll winner" : "Roll winner"}
                >
                  {wheelCenterText}
                </button>
              </div>
              <p className={classes.modalRollHint}>
                {isRolling
                  ? "Spinning the wheel..."
                  : winner
                    ? `${winner.name} is entry #${winner.entry}.`
                    : "Ready to roll a random winner."}
              </p>
              {winner && !isRolling && (
                <div className={classes.modalWinnerInfo}>
                  <img
                    src={winner.type === "cheer" ? cheerIcon : helpIcon}
                    alt=""
                    className={classes.modalWinnerIcon}
                  />
                  <span>Entry #{winner.entry}</span>
                  <span>{winner.action}</span>
                  <span>{formatDateTime(winner.createdAt)}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <main className={classes.shell}>
        <div className={classes.layout}>
          <section className={classes.panel}>
            <div className={classes.header}>
              <div className={classes.brand}>
                <img src={sunflowerLogo} alt="Sunflower Land" className={classes.logo} />
                <h1 className={classes.title}>Helpers</h1>
              </div>
              <div className={classes.headerActions}>
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
                <div className={classes.updateMeta}>
                  Last updated: {formatDateTime(latestSnapshotUpdate)}
                </div>
              </div>
            </div>

            <nav className={classes.tabs} aria-label="Sunflower Land helper filters">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  className={`${classes.tab} ${activeFilter === tab.id ? classes.activeTab : ""}`}
                  onClick={() => setActiveFilter(tab.id)}
                >
                  {tab.icon && (
                    <img src={tab.icon} alt="" className={classes.tabIcon} />
                  )}
                  {tab.label} {tab.count}
                </button>
              ))}
            </nav>

            <div className={classes.stats}>
              <div className={classes.stat}>Helpers: {stats.help}</div>
              <div className={classes.stat}>Cheerers: {stats.cheer}</div>
              <div className={classes.stat}>Total: {stats.all}</div>
            </div>

            {loadError && <div className={classes.error}>{loadError}</div>}

            <div className={classes.feed}>
              {visibleFeed.map((item, index) => {
                const isHelp = item.type === "help";
                const didToday = item.helpedThemToday || item.cheeredThemToday;

                return (
                  <article
                    className={classes.row}
                    key={`${item.sender.id}-${item.createdAt}-${index}`}
                  >
                    <div className={classes.avatar}>{getInitial(item.sender.username)}</div>
                    <div>
                      <div className={classes.nameLine}>
                        {item.sender.username} - {relativeTime(item.createdAt)}
                        {didToday && <span className={classes.statusPill}>today</span>}
                      </div>
                      <div className={classes.message}>{item.message}</div>
                    </div>
                    <img
                      src={isHelp ? helpIcon : cheerIcon}
                      alt={isHelp ? "Helped" : "Cheered"}
                      className={classes.actionIcon}
                    />
                  </article>
                );
              })}

              {!visibleFeed.length && (
                <div className={classes.empty}>No helpers or cheerers found for this filter.</div>
              )}
            </div>
          </section>

          <aside className={`${classes.panel} ${classes.board}`}>
            <div className={classes.boardHeader}>
              <h2 className={classes.panelTitle}>Top Helpers This Week</h2>
            </div>
            <p className={classes.boardMeta}>
              Rankings use cheers + helps from the last 7 days. Ties go to whoever reached the total first.
            </p>
            <ol className={classes.leaderboardList}>
              {pagedLeaderboard.map((player, index) => {
                const rank = leaderboardPageStart + index + 1;
                const rankClass = rank === 1
                  ? classes.goldRank
                  : rank === 2
                    ? classes.silverRank
                    : rank === 3
                      ? classes.bronzeRank
                      : classes.normalRank;
                const rowClass = rank === 1
                  ? classes.goldRow
                  : rank === 2
                    ? classes.silverRow
                    : rank === 3
                      ? classes.bronzeRow
                      : "";
                const statsClass = rank === 3
                  ? classes.bronzeRankStats
                  : rank <= 2
                    ? classes.topRankStats
                    : "";
                const totalClass = rank === 3
                  ? classes.bronzeRankTotal
                  : rank <= 2
                    ? classes.topRankTotal
                    : "";

                return (
                  <li
                    className={`${classes.leaderboardRow} ${rank <= 3 ? classes.topRankRow : ""} ${rowClass}`}
                    key={player.id}
                  >
                    <span className={`${classes.rankBadge} ${rankClass}`}>
                      {getOrdinal(rank)}
                    </span>
                    <div>
                      <div className={classes.leaderboardName}>{player.name}</div>
                      <div className={`${classes.leaderboardStats} ${statsClass}`}>
                        <span className={classes.leaderboardStat}>
                          <img src={cheerIcon} alt="" className={classes.leaderboardIcon} />
                          {player.cheers}
                        </span>
                        <span className={classes.leaderboardStat}>
                          <img src={helpIcon} alt="" className={classes.leaderboardIcon} />
                          {player.helps}
                        </span>
                        <span className={`${classes.leaderboardTotal} ${totalClass}`}>Total {player.total}</span>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>

            {!leaderboard.length && (
              <div className={classes.empty}>No weekly helpers yet.</div>
            )}

            {leaderboard.length > LEADERBOARD_PAGE_SIZE && (
              <div className={classes.leaderboardPagination}>
                <button
                  type="button"
                  className={classes.leaderboardPageButton}
                  onClick={() => setLeaderboardPage(page => Math.max(0, page - 1))}
                  disabled={safeLeaderboardPage === 0}
                  aria-label="Show previous leaderboard page"
                >
                  <ChevronLeftIcon className={classes.leaderboardPageIcon} aria-hidden="true" />
                </button>
                <div className={classes.leaderboardPageMeta}>
                  Page {safeLeaderboardPage + 1} of {leaderboardPageCount} - showing {leaderboardPageStart + 1}-{leaderboardPageEnd} of {leaderboard.length}
                </div>
                <button
                  type="button"
                  className={classes.leaderboardPageButton}
                  onClick={() => setLeaderboardPage(page => Math.min(leaderboardPageCount - 1, page + 1))}
                  disabled={safeLeaderboardPage >= leaderboardPageCount - 1}
                  aria-label="Show next leaderboard page"
                >
                  <ChevronRightIcon className={classes.leaderboardPageIcon} aria-hidden="true" />
                </button>
              </div>
            )}
          </aside>
        </div>

        <section className={`${classes.panel} ${classes.giveawayPanel}`}>
          <div className={classes.boardHeader}>
            <h2 className={classes.panelTitle}>Eligible Winners</h2>
            <button
              type="button"
              className={classes.copyButton}
              onClick={copyEligibleList}
              disabled={!eligibleEntries.length}
            >
              Copy
            </button>
          </div>
          <p className={classes.boardMeta}>
            Last 7 days: {eligibleEntries.length} entries from {uniqueEligibleCount} players.
          </p>
          <textarea
            className={classes.winnerList}
            readOnly
            value={eligibleList}
            aria-label="Eligible winner entries"
            placeholder="No eligible entries this week."
          />
          {copyStatus && <p className={classes.boardMeta}>{copyStatus}</p>}

          <div className={classes.rollSection}>
            <div className={classes.wheelStage} aria-live="polite">
              <div className={classes.wheelWrap}>
                <div className={classes.wheelPointer} aria-hidden="true" />
                <div
                  className={`${classes.wheel} ${!isRolling ? classes.idleWheel : ""}`}
                  style={{
                    background: wheelBackground,
                    transform: isRolling ? `rotate(${wheelRotation}deg)` : undefined
                  }}
                >
                  {visibleWheelEntries.map((entry, index) => {
                    return (
                      <span
                        className={classes.wheelLabel}
                        key={`${entry.entry}-${entry.name}-${index}`}
                        style={{
                          transform: `rotate(${getWheelLabelRotation(index, visibleWheelEntries.length)}deg)`
                        }}
                      >
                        #{entry.entry} {entry.name}
                      </span>
                    );
                  })}
                </div>
                <div className={classes.wheelCenter}>{wheelCenterText}</div>
              </div>
              <p className={classes.rollHint}>
                {isRolling
                  ? "Picking a winner..."
                  : winner
                    ? `${winner.name} landed on the wheel.`
                    : "Spin the wheel to roll a weekly winner."}
              </p>
            </div>
            <button
              type="button"
              className={classes.rollButton}
              onClick={rollWinner}
              disabled={!eligibleEntries.length || isRolling}
            >
              {isRolling ? "Rolling..." : "Random Roll"}
            </button>
            {winner && (
              <div className={classes.winnerCard}>
                Winner
                <span className={classes.winnerName}>{winner.name}</span>
                Entry {winner.entry} of {winner.total}
                <div className={classes.winnerMeta}>
                  <span className={classes.winnerAction}>
                    <img
                      src={winner.type === "cheer" ? cheerIcon : helpIcon}
                      alt=""
                      className={classes.winnerActionIcon}
                    />
                    {winner.action}
                  </span>
                  <span>Entry time: {formatDateTime(winner.createdAt)}</span>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SunflowerLandHelpers;
