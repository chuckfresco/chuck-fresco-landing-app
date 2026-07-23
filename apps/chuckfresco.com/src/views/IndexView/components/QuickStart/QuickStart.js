import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme, NoSsr, Grid, Button, useMediaQuery, Typography } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import { Image } from 'components/atoms';
import { trackEvent } from 'utils/analytics';

const useStyles = makeStyles(theme => ({
  quickStartSection: {
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
  fontWeightBold: {
    fontWeight: '900',
  },
  editor: {
    paddingLeft: `${theme.spacing(2)}px !important`,
    paddingRight: `${theme.spacing(2)}px !important`,
    borderRadius: theme.spacing(1/2),
    width: '100%',
  },
  logoImg: {
    maxWidth: 100,
  },
}));

const QuickStart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const docsButton = (
    <Button size="large" variant="contained" color="primary" component="a" href="https://x.com/search?q=from%3A%40ChuckFresco%20%23FrescoGiveaways%20%20-filter%3Areplies&src=typed_query&f=live" onClick={() => trackEvent('view_giveaways', { link_location: 'home', platform: 'x' })}>
      Giveaways
    </Button>

  );

 /*  const buyFrescoButton = (

    <Button size="large" variant="contained"  component="a" href="https://app.roninchain.com/swap?outputCurrency=0x08efAE2069fA21F94Af50D9DdBaa268FA514006F&inputCurrency=RON#/swap">
    Buy $FRESCO
  </Button>

  );



  const buyButton = (
    <Button
      size="large"
      variant="contained"
      color="primary"
      component="a"
      href="/home"
    >
      Get Started
    </Button>
  );
 */
  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={2}>
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
            <Grid item xs={12} md={5} data-aos={'fade-right'}>
              <SectionHeader
                id="Giveaway"
                title="Giveaways"
                subtitle="The Giveaway is hosted monthly to give back to the community for the support. We select a winner from our X. Check in regularly on X for more chances to win! #frescogiveaway"
                ctaGroup={[docsButton]}
                align={isMd ? 'left' : 'center'}
                disableGutter
                titleVariant="h3"
                titleProps={{ className: classes.fontWeightBold }}
                className={classes.quickStartSection}
              />
            </Grid>
            <Grid item container alignItems="center"  justifyContent="center" xs={12} md={7} data-aos={'fade-left'}>

            <Image
            src="/assets/landing-page/chuck-giveaway.webp"
            alt="Chuck Fresco Giveaway"
            className={classes.image}
          />


            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

QuickStart.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default QuickStart;
