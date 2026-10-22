import React from "react";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { makeStyles } from "@material-ui/core/styles";

const yakkamonUrl = "https://yakkamon.com/?code=JBSGHY";

const useStyles = makeStyles(theme => ({
  banner: {
    width: "calc(100% + 24px)",
    margin: "0 -12px",
    padding: "3px 16px 5px",
    backgroundColor: "#64c94e",
    backgroundImage:
      "radial-gradient(circle at 12% 25%, rgba(181,238,82,.48) 0 2px, transparent 3px), radial-gradient(circle at 78% 68%, rgba(31,156,87,.42) 0 2px, transparent 3px)",
    borderTop: "3px solid #d8f36a",
    borderRight: "4px solid #063048",
    borderBottom: "4px solid #063048",
    borderLeft: "3px solid #9be65a",
    boxShadow: "inset 0 2px 0 rgba(172,237,89,.5), inset 0 -2px 0 rgba(31,156,87,.35)",
    position: "relative",
    zIndex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 9,
    flexWrap: "wrap",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "flex-start",
      padding: "3px 12px 5px",
      gap: 7
    }
  },
  mark: {
    color: "#c8ee43",
    fontFamily: "SmallestPixel7, monospace",
    fontSize: 22,
    fontWeight: 900,
    lineHeight: 1,
    textShadow: "2px 2px 0 #063048",
    transform: "rotate(-8deg)"
  },
  text: {
    color: "#06283c",
    fontFamily: "SmallestPixel7, monospace",
    fontSize: 18,
    fontWeight: 900,
    lineHeight: 1,
    textAlign: "center",
    textShadow: "1px 1px 0 rgba(239,255,144,.72)",
    [theme.breakpoints.down("xs")]: {
      flex: "1 1 210px",
      fontSize: 16,
      textAlign: "left"
    }
  },
  action: {
    minHeight: 27,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    padding: "3px 8px",
    color: "#fff8df",
    backgroundColor: "#087a91",
    border: "3px solid #06283c",
    boxShadow: "3px 3px 0 #d7f1a8, 0 4px 0 #06283c",
    fontFamily: "SmallestPixel7, monospace",
    fontSize: 17,
    fontWeight: 900,
    lineHeight: 1,
    textDecoration: "none",
    whiteSpace: "nowrap",
    cursor: "pointer",
    transition: "transform 120ms ease, box-shadow 120ms ease",
    "&:hover": {
      color: "#fff8df",
      textDecoration: "none",
      transform: "translate(2px, 2px)",
      boxShadow: "1px 1px 0 #d7f1a8, 0 2px 0 #06283c"
    },
    "&:focus-visible": {
      outline: "3px solid #fff8df",
      outlineOffset: 2
    }
  },
  actionIcon: {
    width: 15,
    height: 15
  }
}));

const YakkamonReferral = () => {
  const classes = useStyles();

  return (
    <aside className={classes.banner} aria-label="Yakkamon referral">
      <span className={classes.mark} aria-hidden="true">Y</span>
      <span className={classes.text}>If you'd like to try Yakkamon, use my referral link:</span>
      <a className={classes.action} href={yakkamonUrl} target="_blank" rel="noopener noreferrer">
        Yakkamon.com
        <OpenInNewIcon className={classes.actionIcon} aria-hidden="true" />
      </a>
    </aside>
  );
};

export default YakkamonReferral;
