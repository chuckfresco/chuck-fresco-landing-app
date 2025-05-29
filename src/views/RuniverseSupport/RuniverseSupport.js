import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb } from 'components/molecules';
import { breadcrumb } from 'components/molecules/Breadcrumb/data';
import { Typography, Box, Grid, Dialog, DialogContent } from '@material-ui/core';
import { Hero } from './components';


const useStyles = makeStyles(theme => ({
  section: {
    padding: theme.spacing(4),
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '100%',
    height: 'auto',
    cursor: 'pointer',
    borderRadius: 8,
    marginBottom: theme.spacing(2),
  },
  title: {
    color: '#ffd700',
    marginBottom: theme.spacing(1),
  },
  text: {
    color: '#ccc',
  },
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
    paddingLeft: 20,
    paddingRight: 20,
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
  sectionBreadcrumb: {
    '& > *': {
      paddingTop: '15px !important',
      paddingBottom: '15px !important',
    },
  },
  questBox: {
    border: '2px dashed #ffcc00',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxWidth: '100%',
    width: '100%',
  },
  monsterCard: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    border: '1px solid #333',
    borderRadius: 6,
    gap: theme.spacing(1),
    width: '100%',
  },
  monsterImage: {
    width: 80,
    height: 'auto',
    objectFit: 'contain',
  },
  monsterDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  spellImage: {
    width: 60,
    height: 60,
    objectFit: 'contain',
  },
  materialIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
    verticalAlign: 'middle',
  },
}));

const RuniverseSupport = () => {
  const classes = useStyles();
  const [dialogImg, setDialogImg] = useState(null);

  const openDialog = (imgSrc) => setDialogImg(imgSrc);
  const closeDialog = () => setDialogImg(null);

  return (
    <div>
      <Helmet>
        <title>Support Chuck Fresco | Forgotten Runiverse</title>
        <meta name="description" content="Support Chuck Fresco in the Runiverse by using referral links, crafting spells and equipment." />
      </Helmet>

      <Hero />

      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>

      <Section className={classes.section}>
        <img src="/assets/Pop_Up_Placeholder.png" style={{ maxWidth: 500 }} alt="Referral" className={classes.image} onClick={() => openDialog('/assets/support/referral.png')} />
        <Typography variant="h5" className={classes.title}>Use My Referral Link</Typography>
        <Typography variant="body1" className={classes.text}>
          If you're new to the Runiverse, support me by signing up with my referral link:<br />
          <a href="https://game.runiverse.world/?ref=CFC4DA6D24CA928D" target="_blank" rel="noopener noreferrer" style={{ color: '#4fc3f7' }}>
            https://game.runiverse.world/?ref=CFC4DA6D24CA928D
          </a>
        </Typography>
      </Section>

      <Section className={classes.section}>
        <Typography variant="h5" className={classes.title}>Craft Runiverse Spells</Typography>
        <Typography variant="body1" className={classes.text}>
          Want to support me? Head over to my Fresco Manor Village and inscribe, craft, or offer. Some of the best 5-star spells are ready to go!
        </Typography>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: 16 }}>
          {["/assets/fresco-manor-location.jpg", "/assets/fresco-manor-map.jpg"].map((src, i) => (
            <Grid item key={i} xs={12} sm={6} md={6}>
              <img src={src} alt={`Spell ${i}`} className={classes.image} onClick={() => openDialog(src)} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Section className={classes.section}>
        <Typography variant="h5" className={classes.title}>Craft Runiverse Equipment</Typography>
        <Typography variant="body1" className={classes.text}>
          If you want to help out, please craft, inscribe, or offer equipment at my Green City Forges. Tons of useful recipes await!
        </Typography>
        <Grid container spacing={4} justifyContent="center" style={{ marginTop: 16 }}>
          {["/assets/green-village-location.jpg", "/assets/green-city-map.jpg"].map((src, i) => (
            <Grid item key={i} xs={12} sm={6} md={6}>
              <img src={src} alt={`Equipment ${i}`} className={classes.image} onClick={() => openDialog(src)} />
            </Grid>
          ))}
        </Grid>
      </Section>

      <Dialog open={!!dialogImg} onClose={closeDialog} maxWidth="md">
        <DialogContent style={{ padding: 0 }}>
          <img src={dialogImg} alt="Expanded" style={{ width: '100%', display: 'block' }} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default RuniverseSupport;
