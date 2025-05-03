import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import ChatIcon from '@material-ui/icons/Chat'; // Placeholder for Discord
import YouTubeIcon from '@material-ui/icons/YouTube';
import { HeroBackground } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  hero: {
    padding: theme.spacing(3, 2, 10, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(3, 6, 10, 6),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(5, 8, 10, 8),
    },
  },
  noPadding: {
    padding: 0,
  },
  logoWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(6),
  },
  logo: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    marginBottom: theme.spacing(4), // Increased space below logo
  },
  socialIcons: {
    display: 'flex',
    gap: theme.spacing(3), // More spacing between icons
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <HeroBackground
        backgroundImg="/assets/bg-runiverse-1.jpg"
        backgroundColor="black"
        backgroundPosition="bottom center"
        contentSectionClassName={classes.noPadding}
        className={classes.hero}
        disbaleCoverOpacity
      >
        <Box className={classes.logoWrapper}>
          <img src="/assets/logo-large.png" alt="Runiverse Logo" className={classes.logo} />
          <Box className={classes.socialIcons}>
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
              aria-label="Discord"
              href="https://discord.gg/NH3Yu95YVV"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <ChatIcon fontSize="large" />
            </IconButton>
            <IconButton
              aria-label="YouTube"
              href="https://www.youtube.com/chuckfresco"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
            >
              <YouTubeIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </HeroBackground>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
