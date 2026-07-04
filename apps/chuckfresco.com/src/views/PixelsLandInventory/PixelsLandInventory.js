import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet'; 
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb, PixelCode } from 'components/molecules'
import { pixelsBreadcrumb } from 'components/molecules/Breadcrumb/data'

import {
  Hero,
  Products
} from './components';



import {
  featuredProducts,
} from './data';


import LandInventoryTable from './LandInventoryTable';

const landInventoryMetaUrl = "/assets/pixels/land/landInventoryMeta.json";

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
      maxWidth: '760px !important',
      paddingTop: '8px !important',
      paddingBottom: '8px !important',
    },
  },
  snapshotMetaRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 8,
    paddingRight: 4,
    color: '#aeb7d7',
    fontSize: 13,
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'flex-start',
      paddingLeft: 4,
    },
  },
}));

const PixelsLandInventory = ({ dataSource = "api" }) => {
  const classes = useStyles();
  const [snapshotLastUpdated, setSnapshotLastUpdated] = useState("");

  useEffect(() => {
    if (dataSource === "api") {
      setSnapshotLastUpdated("");
      return;
    }

    let isMounted = true;

    const loadSnapshotMeta = async () => {
      try {
        const response = await fetch(landInventoryMetaUrl, { cache: "no-cache" });
        if (!response.ok) return;

        const meta = await response.json();
        if (isMounted) {
          setSnapshotLastUpdated(meta.lastSyncedAtLabel || "");
        }
      } catch (error) {
        if (isMounted) {
          setSnapshotLastUpdated("");
        }
      }
    };

    loadSnapshotMeta();

    return () => {
      isMounted = false;
    };
  }, [dataSource]);

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

      <Hero compact />
      <PixelCode />

      <SectionAlternate className={classes.sectionBreadcrumb}>
          <Breadcrumb data={pixelsBreadcrumb} />
      </SectionAlternate>
{/* 
      <Section className={classes.imagesSection}>
          <Products data={featuredProducts} />
        </Section> */}



      <Section className={classes.halfWidthSection}>
        {dataSource !== "api" && snapshotLastUpdated && (
          <div className={classes.snapshotMetaRow}>
            Last updated: {snapshotLastUpdated}
          </div>
        )}

        <div style={{ width: '100%', overflowX: 'auto' }}>

          <LandInventoryTable dataSource={dataSource} />
        </div>
      </Section>

      
    </div>
  );
};

export default PixelsLandInventory;
