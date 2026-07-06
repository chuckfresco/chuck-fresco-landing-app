import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    background:
      'radial-gradient(circle at 18% 20%, rgba(114, 137, 218, 0.22), transparent 30%), linear-gradient(135deg, #07121f 0%, #132035 45%, #182b26 100%)',
    '& .hero-shaped': {
      borderBottom: 0,
    },
    '& .hero-shaped__wrapper': {
      [theme.breakpoints.up('md')]: {
        minHeight: `calc(100vh - ${theme.mixins.toolbar['@media (min-width:600px)'].minHeight}px)`,
      },
    },
    '& .hero-shaped__left-side': {
      display: 'flex',
      alignItems: 'center',
    },
    '& .hero-shaped__image': {
      backgroundColor: '#07121f',
    },
    '& .section-header__cta-container': {
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        alignItems: 'stretch',
        '& .section-header__cta-item-wrapper': {
          width: '100%',
          '&:not(:first-child)': {
            marginLeft: 0,
            marginTop: theme.spacing(1),
          },
          '& .MuiButtonBase-root': {
            width: '100%',
          },
        },
      },
    },
  },
  formContainer: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#ffffff',
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
      margin: `0 auto`,
    },
  },
  kicker: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    padding: theme.spacing(0.75, 1.5),
    marginBottom: theme.spacing(2),
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: 999,
    color: '#d8ff8f',
    fontWeight: 700,
    letterSpacing: 0,
    textTransform: 'uppercase',
    background: 'rgba(7, 18, 31, 0.58)',
  },
  title: {
    color: '#ffffff',
    fontWeight: 900,
  },
  subtitle: {
    color: 'rgba(255, 255, 255, 0.76)',
  },
  image: {
    objectFit: 'cover',
    objectPosition: 'center',
    filter: 'saturate(1.06) contrast(1.03)',
  },
  imageWrap: {
    position: 'relative',
    width: '100%',
    height: '100%',
    '&:before': {
      content: '""',
      position: 'absolute',
      zIndex: 1,
      inset: 0,
      background:
        'linear-gradient(90deg, rgba(7, 18, 31, 0.7) 0%, rgba(7, 18, 31, 0.18) 35%, rgba(7, 18, 31, 0.08) 100%)',
      pointerEvents: 'none',
    },
    '&:after': {
      content: '"404"',
      position: 'absolute',
      right: theme.spacing(4),
      bottom: theme.spacing(3),
      zIndex: 2,
      color: 'rgba(255, 255, 255, 0.72)',
      fontSize: 88,
      fontWeight: 900,
      lineHeight: 1,
      textShadow: '0 12px 28px rgba(0, 0, 0, 0.36)',
      [theme.breakpoints.down('sm')]: {
        fontSize: 56,
        right: theme.spacing(2),
        bottom: theme.spacing(2),
      },
    },
  },
  label: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  secondaryButton: {
    borderColor: 'rgba(255, 255, 255, 0.28)',
    color: '#ffffff',
    '&:hover': {
      borderColor: 'rgba(255, 255, 255, 0.56)',
      background: 'rgba(255, 255, 255, 0.08)',
    },
  },
}));

const NotFoundCover = () => {
  const classes = useStyles();

  const handleClick = () => {
    window.history.back();
  };

  return (
    <div className={classes.root}>
      <HeroShaped
        leftSide={
          <div className={classes.formContainer}>
            <Typography variant="overline" className={classes.kicker}>
              Lost in Lunacia
            </Typography>
            <SectionHeader
              label="404"
              title="This link wandered off."
              subtitle="The page you were chasing is not here anymore. Head back, return home, or message Chuck if you think a guide or giveaway link needs fixing."
              titleProps={{
                variant: 'h3',
                className: classes.title,
              }}
              subtitleProps={{ className: classes.subtitle }}
              labelProps={{
                color: 'secondary',
                className: classes.label,
                variant: 'h5',
              }}
              ctaGroup={[
                <Button
                  size="large"
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                  startIcon={<ArrowBackIcon />}
                >
                  Go Back
                </Button>,
                <Button
                  size="large"
                  variant="outlined"
                  component="a"
                  href="/"
                  className={classes.secondaryButton}
                  startIcon={<HomeOutlinedIcon />}
                >
                  Home
                </Button>,
                <Button
                  size="large"
                  variant="outlined"
                  component="a"
                  href="/contact"
                  className={classes.secondaryButton}
                  startIcon={<MailOutlineIcon />}
                >
                  Contact
                </Button>,
              ]}
              disableGutter
            />
          </div>
        }
        rightSide={
          <div className={classes.imageWrap}>
            <Image
              src="/assets/contact-page.jpg"
              alt="Chuck Fresco Axie artwork"
              className={classes.image}
              lazy={false}
            />
          </div>
        }
      />
    </div>
  );
};

export default NotFoundCover;
