import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  grid: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    gap: theme.spacing(2),
    marginTop: theme.spacing(4),
  },
  card: {
    width: 175,
    height: 175,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing(2),
    padding: theme.spacing(3),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 10,
    color: '#FFFFFF',
    boxShadow: 'inset 0 -18px 35px rgba(0,0,0,.16)',
    textAlign: 'center',
    textDecoration: 'none',
    transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
    '&:hover': {
      color: '#FFFFFF',
      filter: 'brightness(1.12)',
      boxShadow: '0 12px 28px rgba(0,0,0,.22), inset 0 -18px 35px rgba(0,0,0,.12)',
      textDecoration: 'none',
      transform: 'translateY(-4px)',
    },
    [theme.breakpoints.down('xs')]: {
      width: 138,
      height: 138,
      padding: theme.spacing(2),
    },
  },
  logo: {
    width: 82,
    height: 82,
    objectFit: 'contain',
    [theme.breakpoints.down('xs')]: {
      width: 62,
      height: 62,
    },
  },
  name: {
    fontSize: 17,
    fontWeight: 800,
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
    },
  },
  external: {
    position: 'absolute',
    right: 12,
    top: 10,
    fontSize: 16,
    opacity: .55,
  },
}));

const gameTools = [
  {
    name: 'Axie Infinity',
    href: 'https://app.axieinfinity.com/profile/0x673e3fac7aae4f9f8e53cdcfddcee63616b4aa0e/axies',
    logo: '/assets/logo/axie-infinity-logo.png',
    external: true,
    background: 'linear-gradient(145deg, #173768, #0a1838)',
    border: '#3db6e9',
  },
  {
    name: 'Axie DOM',
    href: '/axie-dom/strategy',
    logo: '/assets/axie/axie-dom/axie-dom-logo.webp',
    background: 'linear-gradient(145deg, #512617, #241109)',
    border: '#e69a2f',
  },
  {
    name: 'Sunflower Land',
    href: '/sfl/helpers',
    logo: '/assets/logo/sunflower-land-logo.png',
    background: 'linear-gradient(145deg, #2f7041, #173723)',
    border: '#87c84c',
  },
  {
    name: 'Pixels',
    href: '/pixels/land-inventory',
    logo: '/assets/logo/pixels-online-logo.svg',
    background: 'linear-gradient(145deg, #5b2cab, #281056)',
    border: '#a77cff',
  },
  {
    name: 'Runiverse',
    href: '/runiverse',
    logo: '/assets/forgotten-runiverse/forgotten-runiverse-logo.png',
    background: 'linear-gradient(145deg, #18394d, #0c1b28)',
    border: '#d4a94e',
  },
];

const GameTools = () => {
  const classes = useStyles();

  return (
    <div>
      <SectionHeader
        title="Game Tools"
        subtitle="Guides, collections, and tools for the games I play."
        align="center"
        fadeUp
      />
      <div className={classes.grid}>
        {gameTools.map(tool => (
          <a
            className={classes.card}
            href={tool.href}
            key={tool.name}
            target={tool.external ? '_blank' : undefined}
            rel={tool.external ? 'noopener noreferrer' : undefined}
            data-aos="fade-up"
            style={{ background: tool.background, borderColor: tool.border }}
          >
            {tool.external && <span className={classes.external} aria-label="Opens in a new tab">↗</span>}
            <img className={classes.logo} src={tool.logo} alt="" aria-hidden="true" />
            <span className={classes.name}>{tool.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GameTools;
