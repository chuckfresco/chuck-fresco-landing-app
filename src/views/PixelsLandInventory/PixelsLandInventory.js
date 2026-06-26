import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet'; 
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

const PixelsLandInventory = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Pixels Land Inventory | Pixels Online Guide</title>
        <meta
          name="description"
          content="Browse the complete Pixels Land Inventory, including land IDs, house sizes, NFT traits, boosts, industries, and other key details for every land."
        />
        <meta
          property="og:title"
          content="Pixels Land Inventory | Pixels Online Guide"
        />
        <meta
          property="og:description"
          content="Explore the complete Pixels Land Inventory with searchable land IDs, NFT traits, house sizes, boosts, industries, and more."
        />
        <meta
          property="og:image"
          content="%PUBLIC_URL%/assets/social/social-land-inventory.webp"
        />
        <meta
          property="og:url"
          content="https://chuckfresco.com/pixels/land/inventory"
        />
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
        <div style={{ width: '100%', overflowX: 'auto' }}>

          <MonsterDropsTable />
        </div>
      </Section>

      
    </div>
  );
};

export default PixelsLandInventory;
