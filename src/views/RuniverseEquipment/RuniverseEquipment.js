import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet'; // 👈 Add this line
import { Section } from 'components/organisms';
import {
  Hero,
  Products,
} from './components';

import {
  featuredProducts,
} from './data';

import EquipmentTable from "./EquipmentTable";

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

const RuniverseEquipment = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Forgotten Runiverse | Best Equipment Guide</title>
        <meta name="description" content="Explore top-tier equipment including relics, headgear, and suits found throughout the Forgotten Runiverse." />
        <meta property="og:title" content="Forgotten Runiverse | Ultimate Equipment Guide" />
        <meta property="og:description" content="Master your journey with powerful gear – discover the best equipment, materials, and crafting workshops in the Runiverse!" />
        <meta property="og:image" content="%PUBLIC_URL%/assets/social-runiverse.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/runiverse/equipment" />
      </Helmet>
      <Hero />

      <Section className={classes.imagesSection}>
        <Products data={featuredProducts} />
      </Section>

      <Section id="spells-table" className={classes.halfWidthSection}>
        <EquipmentTable />
      </Section>
    </div>
  );
};

export default RuniverseEquipment;
