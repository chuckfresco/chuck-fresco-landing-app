import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb } from 'components/molecules';
import { breadcrumb } from 'components/molecules/Breadcrumb/data';
import { Typography, Box, Grid, Dialog, DialogContent, Button } from '@material-ui/core';
import { Hero } from './components';
import { IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChatIcon from '@material-ui/icons/Chat'; // Use Discord icon if available
import YouTubeIcon from '@material-ui/icons/YouTube';




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

const DiscordIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 245 240"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
  >
    <path d="M104.4 104.5c-5.7 0-10.2 5-10.2 11.2 0 6.2 4.6 11.2 10.2 11.2s10.3-5 10.2-11.2c0-6.2-4.6-11.2-10.2-11.2Zm36.2 0c-5.7 0-10.2 5-10.2 11.2 0 6.2 4.6 11.2 10.2 11.2s10.3-5 10.2-11.2c0-6.2-4.6-11.2-10.2-11.2Z" />
    <path d="M189.5 20H55.5C44.1 20 35 29.3 35 40.9v151.2c0 11.6 9.1 20.9 20.5 20.9h113.5l-5.3-18.5 12.8 11.8 12.1 11.1 21.5 18.8V40.9c0-11.6-9.1-20.9-20.6-20.9ZM162.6 158s-5-6-9.1-11.3c18-5.1 24.8-16.3 24.8-16.3-5.6 3.7-10.9 6.4-15.7 8.2-6.8 2.9-13.4 4.8-19.9 5.9-13.2 2.4-25.3 1.7-35.8-0.1-7.9-1.5-14.7-3.7-20.4-5.9-3.2-1.2-6.6-2.8-10-4.8-0.4-0.2-0.7-0.4-1.1-0.6-0.2-0.1-0.3-0.2-0.5-0.3-2.2-1.2-3.4-2-3.4-2s6.6 11 24.1 16.2c-4.1 5.3-9.2 11.5-9.2 11.5-30.4-0.9-41.9-21-41.9-21 0-44.5 19.9-80.6 19.9-80.6 19.9-14.9 38.9-14.5 38.9-14.5l1.4 1.7c-25 7.2-36.5 18.2-36.5 18.2s3 0 8 1.1c14.5 2.6 26.1 9.3 33.1 14.1 1.5 1 2.8 2 4.1 3 11.1-3.1 23.2-4.1 36.2-1.4 6.7 1.3 14 4.7 21.4 10.5 0 0-11.1-10.6-35.1-17.8l2-2.3s19-0.4 38.9 14.5c0 0 19.9 36.1 19.9 80.6 0 0-11.7 20.1-42.1 21Z" />
  </svg>
);

const TwitchIcon = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    width="32"
    height="32"
    fill="currentColor"
  >
    <path d="M80 0L32 96v352h128v64h64l64-64h96l128-128V0H80zm384 288l-64 64h-96l-64 64v-64H128V64h336v224z" />
    <path d="M320 128h-32v96h32v-96zm64 0h-32v96h32v-96z" />
  </svg>
);



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
        <Typography variant="h5" className={classes.title}>Follow Me on Socials</Typography>
        <Box display="flex" justifyContent="center" alignItems="center" mt={2} gap={3}>
          <IconButton
            aria-label="Twitter"
            href="https://twitter.com/chuckfresco"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
          <TwitterIcon fontSize="large" />
          </IconButton>

          <IconButton
            aria-label="YouTube"
            href="https://www.youtube.com/@chuckfresco"
            target="_blank"
            rel="noopener noreferrer"
            color="primary"
          >
            <YouTubeIcon fontSize="large" />
          </IconButton>

          <IconButton
          aria-label="Twitch"
          href="https://www.twitch.tv/chuckfresco"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <TwitchIcon />
        </IconButton>

        <IconButton
          aria-label="Discord"
          href="https://discord.gg/NH3Yu95YVV"
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <ChatIcon fontSize="large" />
        </IconButton>


        </Box>
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
