import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    minHeight: 300,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#070817',
    borderBottom: '4px solid #30205f',
    [theme.breakpoints.down('sm')]: {
      minHeight: 250,
    },
  },
  image: {
    position: 'absolute',
    inset: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    objectPosition: 'center center',
  },
  compactImage: {
    minHeight: 'auto',
  },
  overlay: {
    position: 'absolute',
    inset: 0,
    background: [
      'linear-gradient(90deg, rgba(5, 8, 20, 0.9) 0%, rgba(11, 11, 34, 0.72) 44%, rgba(12, 11, 34, 0.2) 100%)',
      'linear-gradient(180deg, rgba(15, 11, 40, 0.15) 0%, rgba(6, 7, 18, 0.72) 100%)',
    ].join(', '),
  },
  pixelsLabel: {
    display: 'inline-flex',
    alignItems: 'center',
    width: 'fit-content',
    marginBottom: theme.spacing(1.5),
    padding: theme.spacing(0.75, 1.25),
    border: '2px solid rgba(255, 224, 122, 0.85)',
    background: 'rgba(42, 31, 103, 0.88)',
    color: '#ffe073',
    fontFamily: '"Smallest Pixel", monospace',
    fontSize: 17,
    lineHeight: 1,
    textTransform: 'uppercase',
    textShadow: '2px 2px 0 #251247',
    boxShadow: '0 4px 0 rgba(0, 0, 0, 0.4)',
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
  textWhite: {
    color: '#fff8d6',
  },
  title: {
    fontFamily: '"Smallest Pixel", monospace',
    fontWeight: 400,
    letterSpacing: 0,
    textShadow: '3px 3px 0 #1c113f, 0 0 18px rgba(121, 84, 255, 0.55)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '1.9rem',
      lineHeight: 1.1,
    },
  },
  subtitle: {
    maxWidth: 720,
    color: '#d8dcff',
    fontWeight: 700,
    textShadow: '0 2px 8px rgba(0, 0, 0, 0.78)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.95rem',
      lineHeight: 1.45,
    },
  },
  section: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    minHeight: 300,
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      minHeight: 250,
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
  },
}));

const Hero = props => {
  const {
    className,
    title = 'Fresco Land Inventory ',
    subtitle = '',
    label = 'Pixels Online',
    compact = false,
    ...rest
  } = props;
  const classes = useStyles();
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Image
        src="/assets/hero-pixels-3.png"
        srcSet="/assets/hero-pixels-3.png 2x"
        alt="Pixels Online"
        className={clsx(classes.image, compact && classes.compactImage)}
        lazyProps={{
          width: '100%',
          height: '100%',
        }}
      />
      <div className={classes.overlay} />
      <Section className={classes.section}>
        <div>
          <div className={classes.pixelsLabel}>{label}</div>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="left"
          data-aos="fade-up"
          disableGutter
          titleProps={{
            className: clsx(classes.title, classes.textWhite),
            variant: 'h3',
          }}
          subtitleProps={{
            className: classes.subtitle,
          }}
        />
        </div>
      </Section>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  label: PropTypes.string,
  compact: PropTypes.bool,
};

export default Hero;
