import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet'; // 👈 Add Helmet
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb } from 'components/molecules'
import { breadcrumb } from 'components/molecules/Breadcrumb/data'

import {
  Hero,
  Products
} from './components';

import {
  featuredProducts,
} from './data';


import MonsterDropsTable from './MonsterDropsTable';

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
  sectionBreadcrumb: {
    '& > *': {
      paddingTop: '15px !important',
      paddingBottom: '15px !important',
    },
  },
}));

const MonsterDrops = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Monster Drop Table | Forgotten Runiverse Guide</title>
        <meta name="description" content="Browse all monster drops and loot in Runiverse, including materials and skills dropped by creatures across all regions." />
        <meta property="og:title" content="Monster Drops Guide | Forgotten Runiverse" />
        <meta property="og:description" content="Get full details on monster drops, materials, and skills to enhance your adventure in the Runiverse." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/social-monster-drops.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/runiverse/monster-drops" />
      </Helmet>

      <Hero />

      <SectionAlternate className={classes.sectionBreadcrumb}>
          <Breadcrumb data={breadcrumb} />
      </SectionAlternate>
{/* 
      <Section className={classes.imagesSection}>
          <Products data={featuredProducts} />
        </Section> */}



      <Section className={classes.halfWidthSection}>
        <div style={{ width: '100%', maxWidth: '90%' }}>
          <MonsterDropsTable />
        </div>
      </Section>

      
    </div>
  );
};

export default MonsterDrops;
