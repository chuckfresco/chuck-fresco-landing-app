// pages/StatusEffects.js
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Section } from 'components/organisms';
import {
  Hero,
  Products,
} from './components';

import {
  featuredProducts,
} from './data';

import BuffsDebuffsTable from './BuffsDebuffsTable';

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  featuresSection: {
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat center',
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: '#0c133e',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  aboutSection: {
    background: '#0c133e',
  },

  halfWidthSection: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10, 
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
    },
  },

  imagesSection: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 10, 
    paddingBottom: 0, 
    margin: 0,
    width: '100%',
    maxWidth: '190%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
    },
  },
}));

const StatusEffects = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Forgotten Runiverse | Status Effects Guide</title>
        <meta name="description" content="Explore every buff and debuff in the Forgotten Runiverse. Learn what they do and how long they last." />
        <meta property="og:title" content="Forgotten Runiverse | Status Effects Guide" />
        <meta property="og:description" content="Full guide to buffs and debuffs in the Forgotten Runiverse with visuals and searchable effects." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/social-runiverse.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/runiverse/status-effects" />
      </Helmet>

      <Hero />

      <Section className={classes.imagesSection}>
        <Products data={featuredProducts} />
      </Section>

      <Section id="status-effects-table" className={classes.halfWidthSection}>
        <BuffsDebuffsTable />
      </Section>
    </div>
  );
};

export default StatusEffects;
