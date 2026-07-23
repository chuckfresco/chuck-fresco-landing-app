import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid , Button} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxWidth: 88,
    maxHeight: 88,
    objectFit: 'contain',
  },
  image: {
    width: '100%',
    maxWidth: 410,
    maxHeight: 340,
    objectFit: 'cover',
    objectPosition: 'center 28%',
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
  },
  xButton: {
    background: '#000000',
    color: '#FFFFFF',
    '&:hover': {
      background: '#1A1A1A',
    },
  },
  xIcon: {
    width: 20,
    height: 20,
    marginLeft: theme.spacing(0.75),
    objectFit: 'contain',
  },
  toolsSection: {
    marginTop: theme.spacing(3),
  },
  toolsTitle: {
    margin: theme.spacing(0, 0, 1.5),
    fontSize: 15,
    fontWeight: 800,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  toolsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    gap: theme.spacing(1),
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
  toolButton: {
    minHeight: 62,
    display: 'flex',
    alignItems: 'center',
    gap: theme.spacing(1.25),
    padding: theme.spacing(1, 1.5),
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 8,
    color: 'inherit',
    background: theme.palette.background.paper,
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 800,
    transition: 'transform 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
    '&:hover': {
      color: theme.palette.primary.dark,
      borderColor: theme.palette.primary.main,
      boxShadow: '0 8px 20px rgba(0,0,0,.1)',
      textDecoration: 'none',
      transform: 'translateY(-2px)',
    },
  },
  toolLogo: {
    width: 42,
    height: 42,
    flex: '0 0 42px',
    objectFit: 'contain',
  },
  externalMark: {
    marginLeft: 'auto',
    fontSize: 15,
    opacity: .55,
  },
}));

const Partners = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} >
          <SectionHeader
            title="Who is Chuck Fresco?"
            subtitle="Chuck Fresco, the American Axie Infinity player who embarked on his journey in February 2018. Since then, he has not only clinched multiple championships and awards but has also dedicated himself to creating valuable content and tools for the Ronin community. A true visionary in the Web3 realm, Chuck Fresco continues to lead and inspire."
            fadeUp
            disableGutter

            ctaGroup={[
              <Button
                variant="contained"
                //color="FF0202" 9347FF
                color="primary"
               // style={{ background: 'primary', color: '#FFFFFF' }}
                size={isMd ? 'large' : 'medium'}
                href="https://youtu.be/ldZDTVvT5EI"
              >
                First Stream
              </Button>,
                    <Button
                    variant="contained"
                    //color="FF0202" 9347FF
                   // color="secondary"
                    className={classes.xButton}
                    size={isMd ? 'large' : 'medium'}
                    href="https://x.com/ChuckFresco"
                  >
                    Follow On
                    <img
                      src="/assets/logo/logo-white.png"
                      alt=""
                      aria-hidden="true"
                      className={classes.xIcon}
                    />
                  </Button>

            ]}

            align={isMd ? 'left' : 'center'}
            titleProps={{
              className: classes.title,
            }}
          />
         <Grid container item xs={12} spacing={2} style={{ marginTop: 12 }} >
        {data.map((partner, index) => (
            <Grid
              item
              container
              justify="center"
              alignItems="center"
              xs={4}
              
              key={index}
              data-aos="fade-up"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                className={classes.promoLogo}
                lazy={false}
              />
            </Grid>
          ))}

  </Grid>

        </Grid>
        <Grid item container xs={12} md={6}>
 
          <Grid
            item
            container
            justify={isMd ? 'flex-end' : 'flex-start'}
            alignItems="center"
            xs={12}
            md={12}
            data-aos={'fade-up'}
          >
            <Image
              src="/assets/chuck-fresco-landing.jpg"
              alt="Our story"
              className={classes.image}
            />
          </Grid>
         


        </Grid>
      </Grid>
    </div>
  );
};

Partners.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Partners;
