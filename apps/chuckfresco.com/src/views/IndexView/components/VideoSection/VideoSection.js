import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button } from '@material-ui/core';
import YouTubeIcon from '@material-ui/icons/YouTube';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import { SectionHeader } from 'components/molecules';

const fallbackVideoId = 'saCNw0C0iiQ';
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtubeChannelHandle =
  process.env.REACT_APP_YOUTUBE_CHANNEL_HANDLE || '@chuckfresco';
const youtubeChannelId =
  process.env.REACT_APP_YOUTUBE_CHANNEL_ID || 'UCW5Dxv1g4G3Zvgg9K4a0xOA';
const youtubeApiBase =
  process.env.NODE_ENV === 'development'
    ? '/youtube-api/v3'
    : 'https://www.googleapis.com/youtube/v3';
const maxCandidateVideos = 25;
const shortsMaxDurationSeconds = 60;

const getEmbedUrl = videoId => `https://www.youtube.com/embed/${videoId}`;

const parseYoutubeDuration = duration => {
  const match = /^PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?$/.exec(duration || '');

  if (!match) {
    return 0;
  }

  return (
    Number(match[1] || 0) * 3600 +
    Number(match[2] || 0) * 60 +
    Number(match[3] || 0)
  );
};

const isUploadedVideo = video => {
  const snippet = video.snippet || {};
  const contentDetails = video.contentDetails || {};
  const title = (snippet.title || '').toLowerCase();
  const description = (snippet.description || '').toLowerCase();
  const durationSeconds = parseYoutubeDuration(contentDetails.duration);

  return (
    snippet.liveBroadcastContent === 'none' &&
    !video.liveStreamingDetails &&
    durationSeconds > shortsMaxDurationSeconds &&
    !title.includes('#shorts') &&
    !title.includes('shorts') &&
    !description.includes('#shorts')
  );
};

const getLatestVideoId = async () => {
  if (!youtubeApiKey) {
    return fallbackVideoId;
  }

  let channelId = youtubeChannelId;

  if (!channelId && youtubeChannelHandle) {
    const channelParams = new URLSearchParams({
      part: 'id',
      forHandle: youtubeChannelHandle,
      key: youtubeApiKey,
    });
    const channelResponse = await fetch(
      `${youtubeApiBase}/channels?${channelParams.toString()}`,
    );

    if (!channelResponse.ok) {
      throw new Error('Unable to find YouTube channel');
    }

    const channelPayload = await channelResponse.json();
    channelId =
      channelPayload.items &&
      channelPayload.items[0] &&
      channelPayload.items[0].id;
  }

  if (!channelId) {
    return fallbackVideoId;
  }

  const videoParams = new URLSearchParams({
    part: 'snippet',
    channelId,
    maxResults: String(maxCandidateVideos),
    order: 'date',
    type: 'video',
    key: youtubeApiKey,
  });
  const videoResponse = await fetch(
    `${youtubeApiBase}/search?${videoParams.toString()}`,
  );

  if (!videoResponse.ok) {
    throw new Error('Unable to find latest YouTube video');
  }

  const videoPayload = await videoResponse.json();
  const videoIds = (videoPayload.items || [])
    .map(item => item.id && item.id.videoId)
    .filter(Boolean);

  if (!videoIds.length) {
    return fallbackVideoId;
  }

  const detailsParams = new URLSearchParams({
    part: 'snippet,contentDetails,liveStreamingDetails',
    id: videoIds.join(','),
    key: youtubeApiKey,
  });
  const detailsResponse = await fetch(
    `${youtubeApiBase}/videos?${detailsParams.toString()}`,
  );

  if (!detailsResponse.ok) {
    throw new Error('Unable to load latest YouTube video details');
  }

  const detailsPayload = await detailsResponse.json();
  const latestUploadedVideo = (detailsPayload.items || []).find(isUploadedVideo);

  return (latestUploadedVideo && latestUploadedVideo.id) || fallbackVideoId;
};

const useStyles = makeStyles(theme => ({
  videoIframe: {
    boxShadow: `0 5px 12px 0 ${theme.palette.cardShadow}`,
    borderRadius: theme.spacing(1),
    maxWidth: '100%',
  },
  listGrid: {
    overflow: 'hidden',
  },
  partnerImage: {
    maxWidth: 120,
  },
}));

const VideoSection = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();
  const [videoId, setVideoId] = useState(fallbackVideoId);

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  useEffect(() => {
    let isMounted = true;

    getLatestVideoId()
      .then(latestVideoId => {
        if (isMounted) {
          setVideoId(latestVideoId);
        }
      })
      .catch(error => {
        // Keep the page stable if the API key is missing, blocked, or quota-limited.
        console.warn('Unable to load latest YouTube video:', error.message);
        if (isMounted) {
          setVideoId(fallbackVideoId);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        className={classes.listGrid}
      >
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container spacing={2} alignItems="flex-start">
            <Grid item xs={12}>
              <SectionHeader
                title="Latest Video"
                subtitle="Check out the latest Ronin Content and Guides on our YouTube Channel."
                ctaGroup={[
                  <Button
                    variant="contained"
                    //color="FF0202" 9347FF
                    style={{ background: '#FF0202', color: '#FFFFFF' }}
                    size={isMd ? 'large' : 'medium'}
                    href="https://www.youtube.com/chuckfresco"
                  >
                    YouTube  <YouTubeIcon style={{ marginLeft: 5 }}></YouTubeIcon>
                  </Button>,
                  <Button
                    variant="outlined"
                    color="primary"
                    size={isMd ? 'large' : 'medium'}
                    href="/videos"
                  >
                    Video Library <VideoLibraryIcon style={{ marginLeft: 5 }} />
                  </Button>,

                ]}
                align={isMd ? 'left' : 'center'}
                disableGutter
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <Grid container justify="center">
            <iframe
              className={classes.videoIframe}
              width="560"
              height="315"
              src={getEmbedUrl(videoId)}
              title="Latest YouTube video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

VideoSection.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default VideoSection;
