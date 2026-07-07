import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid , Button} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  promoLogo: {
    maxWidth: 120,
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
         <Grid container item xs={12} spacing={2} style={{ marginTop: 20 }} >
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
