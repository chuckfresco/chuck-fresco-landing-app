import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import YakkamonReferral from "./YakkamonReferral";

const sunflowerLogo = "/assets/sunflower-land/logo/logo_v2.png";
const lightningIcon = "/assets/sunflower-land/icons/lightning.png";
const referralUrl = "https://sunflower-land.com/play/?ref=ChuckFresco";
const pages = [
  ["helpers", "Leaderboard"],
  ["fishing", "Fishing"],
  ["fish-market", "Fish Market"],
  ["crops", "Crops"],
  ["flowers", "Flowers"]
];
const useStyles = makeStyles(theme => ({
  hero: {
    width: "calc(100% + 24px)",
    minHeight: 288,
    margin: "0 -12px",
    padding: "34px 12px 30px",
    background:
      "linear-gradient(90deg,rgba(39,54,76,.98),rgba(77,104,66,.9) 48%,rgba(201,88,57,.66)),#27364c",
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
    boxShadow:
      "inset 0 3px 0 rgba(255,255,255,0.08), inset 0 -2px 0 rgba(16,16,24,0.35)",
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
  }
}));

export default function SunflowerPageHeader({ title, description, active }) {
  const classes = useStyles();
  return (
    <>
      <header className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.heroCopy}>
            <h1 className={classes.heroTitle}>{title}</h1>
            <p className={classes.heroSubtitle}>{description}</p>
          </div>
          <div className={classes.heroLogoPanel}>
            <img
              src={sunflowerLogo}
              alt="Sunflower Land"
              className={classes.heroLogo}
            />
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
          <OpenInNewIcon
            className={classes.referralLinkIcon}
            aria-hidden="true"
          />
        </a>
      </div>

      <YakkamonReferral />

      <nav className={classes.sunflowerNav} aria-label="Sunflower Land pages">
        {pages.map(([path, label]) => (
          <Link
            key={path}
            to={`/sfl/${path}`}
            aria-current={active === path ? "page" : undefined}
            className={`${classes.sunflowerNavLink} ${
              active === path ? classes.activeSunflowerNavLink : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>
    </>
  );
}
