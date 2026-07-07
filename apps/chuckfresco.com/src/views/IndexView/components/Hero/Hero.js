import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { SectionHeader, TypedText } from 'components/molecules';
import { HeroShaped } from 'components/organisms';
import WbSunnyOutlinedIcon from '@material-ui/icons/WbSunnyOutlined';


const useStyles = makeStyles(theme => ({
  fontWeight900: {
    fontWeight: 900,
  },
  leftSideContent: {
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:last-child': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    }
  },
  heroShaped: {
    '& .hero-shaped__image': {
      backgroundColor: theme.palette.alternate.main,
    },
    [theme.breakpoints.down('sm')]: {
      '& .hero-shaped__image': {
        position: 'relative',
      },
      '& .hero-shaped__wrapper': {
        flexDirection: 'column',
      },
    },
  },
  imageAnimation: {
    background: `url("/assets/axie-games.jpg")`,
    backgroundRepeat: 'repeat',
    backgroundAttachment: 'scroll',
    backgroundSize: '400px auto',
    animation: `$slideshow 50s linear infinite`,
    width: '600%',
    height: '600%',
    backgroundColor: theme.palette.alternate.dark,
    top: '-25%',
    left: '-100%',
    position: 'absolute',
    [theme.breakpoints.up('sm')]: {
      backgroundSize: '800px auto',
    }
  },
  imageAnimationDark: {
    background: `url("/assets/axie-games.jpg")`,
  },
  buttonIcon: {
    width: 24,
    height: 24,
    objectFit: 'contain',
    marginLeft: theme.spacing(0.5),
    imageRendering: 'pixelated',
    transition: 'transform 140ms ease',
  },
  sunflowerButton: {
    border: '3px solid #101018',
    borderRadius: 8,
    background: '#f4c08a',
    color: '#20192b',
    boxShadow: 'inset 0 0 0 3px #fff8d6, 4px 4px 0 #101018',
    fontFamily: "SmallestPixel7, 'Courier New', monospace",
    fontSize: 22,
    fontWeight: 900,
    lineHeight: 1,
    letterSpacing: 0,
    minHeight: 48,
    padding: theme.spacing(1.25, 2),
    textTransform: 'none',
    textShadow: '1px 1px 0 rgba(255, 255, 255, 0.45)',
    transition: 'transform 120ms ease, box-shadow 120ms ease, filter 120ms ease',
    '&:hover': {
      background: '#ffd37b',
      color: '#20192b',
      filter: 'brightness(1.03)',
      transform: 'translate(2px, 2px)',
      boxShadow: 'inset 0 0 0 3px #fff8d6, 2px 2px 0 #101018',
      textDecoration: 'none',
      '& $buttonIcon': {
        transform: 'rotate(8deg) scale(1.08)',
      },
    },
    '&:active': {
      transform: 'translate(4px, 4px)',
      boxShadow: 'inset 0 0 0 3px #fff8d6, 0 0 0 #101018',
    },
  },
  '@keyframes slideshow': {
    '0%': {
      transform: 'rotate(-13deg) translateY(-25%)',
    },
    '100%': {
      transform: 'rotate(-13deg) translateY(-80%)',
    },
  },
}));

const Hero = ({ themeMode = 'light', className, ...rest }) => {
  const classes = useStyles();

  const title = (
    <Typography variant="h2" component="span" className={classes.fontWeight900}>
      Your go to place for everything
      <br />
      <TypedText
        component="span"
        variant="h2"
        color="secondary"
        className={classes.fontWeight900}
        typedProps={{
          strings: [
            'Axie Infinity',
            'Ronin',
            'Pixels Online',
            'Sunflower Land',
            'NFTs',
            'and much more...',
          ],
          typeSpeed: 50,
          loop: true,
        }}
      />
    </Typography>
  );

  const subtitle = 'Weekly Ronin Content and Giveaways'

  const docsButton = (
    <Button
      size="large"
      component="a"
      href="/sunflower-land/helpers"
      className={classes.sunflowerButton}
      disabled={false}
    >
      Sunflower Land
      <img
        src="/assets/sunflower-land/fishing/imgi_45_Sunflower.png"
        alt=""
        aria-hidden="true"
        className={classes.buttonIcon}
      />
    </Button>
  );

  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="https://app.axieinfinity.com/games/?slug=atiaslegacy"
      target="_blank"
      rel="noopener noreferrer"
    >
      Atia's Legacy{" "}
      <WbSunnyOutlinedIcon style={{ marginLeft: 4, fontSize: 20 }} />
    </Button>
  );

  const leftSideContent = (
    <SectionHeader
      title={title}
      subtitle={subtitle}
      align="left"
      titleProps={{
        variant: 'h2',
        color: 'textPrimary',
      }}
      ctaGroup={[buyButton, docsButton]}
      data-aos="fade-right"
      disableGutter
      className={classes.leftSideContent}
    />
  );
  return (
    <div className={className} {...rest}>
      <HeroShaped
        className={classes.heroShaped}
        leftSide={leftSideContent}
        rightSide={(
          <div
            className={clsx(
              classes.imageAnimation,
              themeMode === 'dark' ? classes.imageAnimationDark: '',
            )}
          />
        )}
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Theme mode
   */
  themeMode: PropTypes.string,
};

export default Hero;
