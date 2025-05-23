import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography, Button } from '@material-ui/core';
import LiveTvIcon from '@material-ui/icons/LiveTv';

import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  videoIframe: {
    boxShadow: `0 5px 12px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
  },
  listGrid: {
    overflow: 'hidden',
  },
  partnerImage: {
    maxWidth: 120,
  },
}));

const TwitchSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        className={classes.listGrid}
      >

        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container justify="center">
            <iframe
              className={classes.videoIframe}
              title="video"
              width="100%"
              height="315"
              src="https://player.twitch.tv/?autoplay=false&channel=chuckfresco&muted=true&parent=chuckfresco.com&parent=www.chuckfresco.com"
              frameBorder="0"
              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
            />
          </Grid>

        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title="Follow Me On Twitch"
                subtitle="Follow my stream to learn more about Web3 and a chance to win Ronin Giveaways"
                ctaGroup={[
                  <Button
                    variant="contained"
                  //  color="primary"
                    style={{ background: '#9347FF', color: '#FFFFFF' }}
                    size={isMd ? 'large' : 'medium'}
                    href="https://www.twitch.tv/chuckfresco"
                  >
                  Twitch  <LiveTvIcon style={{ marginLeft: 5 }}></LiveTvIcon>
                  </Button>,

                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
{/*             <Grid item xs={12}>
              <Grid container spacing={2} data-aos="fade-up">
                <Grid item xs={12}>
                  <Typography
                    variant="h6"
                    color="primary"
                    align={isMd ? 'left' : 'center'}
                  >
                    Our sponsors and partners
                  </Typography>
                </Grid>
                <Grid item container justify="space-between" xs={12}>
                  {data.map((partner, index) => (
                    <Grid
                      item
                      container
                      justify="center"
                      xs={6}
                      sm={2}
                      key={index}
                    >
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        className={classes.partnerImage}
                        lazy={false}
                      />
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid> */}
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};

TwitchSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default TwitchSection;
