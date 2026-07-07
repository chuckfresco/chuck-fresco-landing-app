import React, { useEffect, useMemo, useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  InputAdornment,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { Helmet } from 'react-helmet';

const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY;
const youtubeChannelHandle =
  process.env.REACT_APP_YOUTUBE_CHANNEL_HANDLE || '@chuckfresco';
const youtubeChannelId =
  process.env.REACT_APP_YOUTUBE_CHANNEL_ID || 'UCW5Dxv1g4G3Zvgg9K4a0xOA';
const youtubeApiBase =
  process.env.NODE_ENV === 'development'
    ? '/youtube-api/v3'
    : 'https://www.googleapis.com/youtube/v3';

const videoCategories = [
  'Axie Infinity',
  'Sunflower Land',
  'Pixels',
  'Moku',
  'Forgotten Runiverse',
];

const gameMatchers = [
  {
    label: 'Axie Infinity',
    patterns: ['axie', 'atia', "atia's legacy", 'atias legacy', 'terrarium'],
  },
  { label: 'Moku', patterns: ['moku', 'grand arena'] },
  { label: 'Pixels', patterns: ['pixels', 'pixel'] },
  { label: 'Forgotten Runiverse', patterns: ['runiverse', 'forgotten'] },
  { label: 'Sunflower Land', patterns: ['sunflower', 'sfl'] },
  { label: 'Apeiron', patterns: ['apeiron'] },
  { label: 'The Machines Arena', patterns: ['machines arena', 'tma'] },
  { label: 'Ronin', patterns: ['ronin'] },
];

const maxVideos = 30;
const maxCandidateVideos = 50;
const maxSearchPages = 3;
const shortsMaxDurationSeconds = 60;

const useStyles = makeStyles(theme => ({
  page: {
    background:
      theme.palette.type === 'dark'
        ? theme.palette.background.default
        : '#f7f9fc',
    minHeight: '100vh',
  },
  hero: {
    background: '#121826',
    color: '#fff',
    padding: theme.spacing(8, 0, 6),
  },
  heroInner: {
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  youtubeIcon: {
    color: '#ff0202',
    marginRight: theme.spacing(1),
    verticalAlign: 'middle',
  },
  searchWrap: {
    width: '100%',
    maxWidth: 920,
    marginTop: theme.spacing(4),
  },
  searchInput: {
    '& .MuiOutlinedInput-root': {
      background: '#fff',
      borderRadius: 8,
      fontSize: 18,
      color: '#111827',
    },
    '& .MuiOutlinedInput-input': {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
      color: '#111827',
      '&::placeholder': {
        color: '#5b6473',
        opacity: 1,
      },
    },
    '& .MuiInputAdornment-root svg': {
      color: '#4b5563',
    },
  },
  categoryFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  categoryButton: {
    borderColor: 'rgba(255, 255, 255, 0.42)',
    color: '#fff',
    borderRadius: 6,
    fontWeight: 800,
    textTransform: 'none',
    background: 'rgba(255, 255, 255, 0.08)',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.16)',
      borderColor: 'rgba(255, 255, 255, 0.72)',
    },
  },
  categoryButtonActive: {
    background: '#fff',
    borderColor: '#fff',
    color: '#121826',
    '&:hover': {
      background: '#fff',
      borderColor: '#fff',
    },
  },
  content: {
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    padding: theme.spacing(5, 2, 8),
  },
  status: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(8, 0),
  },
  videoCard: {
    height: '100%',
    overflow: 'hidden',
    borderRadius: 8,
    boxShadow: '0 10px 24px rgba(15, 23, 42, 0.08)',
  },
  thumbnailLink: {
    display: 'block',
    position: 'relative',
    aspectRatio: '16 / 9',
    background: '#111827',
    overflow: 'hidden',
  },
  thumbnail: {
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 180ms ease',
    '$thumbnailLink:hover &': {
      transform: 'scale(1.04)',
    },
  },
  playBadge: {
    position: 'absolute',
    left: theme.spacing(1.5),
    bottom: theme.spacing(1.5),
    display: 'inline-flex',
    alignItems: 'center',
    background: 'rgba(0, 0, 0, 0.72)',
    color: '#fff',
    borderRadius: 4,
    padding: theme.spacing(0.5, 1),
    fontSize: 13,
    fontWeight: 700,
  },
  cardBody: {
    padding: theme.spacing(2),
  },
  game: {
    display: 'inline-block',
    background: '#e9f8ef',
    color: '#176b3a',
    borderRadius: 4,
    padding: theme.spacing(0.5, 1),
    marginBottom: theme.spacing(1.25),
    fontSize: 12,
    fontWeight: 800,
    textTransform: 'uppercase',
    letterSpacing: 0,
  },
  title: {
    color: theme.palette.text.primary,
    fontWeight: 800,
    lineHeight: 1.25,
  },
  meta: {
    color: theme.palette.text.secondary,
    marginTop: theme.spacing(1),
  },
  empty: {
    textAlign: 'center',
    maxWidth: 640,
    margin: '0 auto',
    padding: theme.spacing(8, 2),
  },
}));

const getThumbnail = thumbnails => {
  if (!thumbnails) {
    return '';
  }

  return (
    (thumbnails.maxres && thumbnails.maxres.url) ||
    (thumbnails.high && thumbnails.high.url) ||
    (thumbnails.medium && thumbnails.medium.url) ||
    (thumbnails.default && thumbnails.default.url) ||
    ''
  );
};

const decodeHtmlEntities = value => {
  if (!value) {
    return '';
  }

  const parser = document.createElement('textarea');
  parser.innerHTML = value;
  return parser.value;
};

const getVideoUrl = videoId => `https://www.youtube.com/watch?v=${videoId}`;

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

const formatDate = value => {
  if (!value) {
    return '';
  }

  return new Intl.DateTimeFormat('en', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(value));
};

const getGame = video => {
  const haystack = `${video.title} ${video.description}`.toLowerCase();
  const match = gameMatchers.find(game =>
    game.patterns.some(pattern => haystack.includes(pattern)),
  );

  return match ? match.label : 'Gaming';
};

const normalizeVideo = item => {
  const videoId = item.id && item.id.videoId;
  const snippet = item.snippet || {};

  return {
    id: videoId,
    title: decodeHtmlEntities(snippet.title || 'Untitled video'),
    description: decodeHtmlEntities(snippet.description || ''),
    publishedAt: snippet.publishedAt,
    thumbnail: getThumbnail(snippet.thumbnails),
    url: getVideoUrl(videoId),
    liveBroadcastContent: snippet.liveBroadcastContent || 'none',
  };
};

const isStandardUpload = video => {
  const durationSeconds = parseYoutubeDuration(video.duration);
  const title = video.title.toLowerCase();

  return (
    video.liveBroadcastContent === 'none' &&
    !video.hasLiveStreamingDetails &&
    durationSeconds > shortsMaxDurationSeconds &&
    !title.includes('#shorts') &&
    !title.includes('shorts')
  );
};

const getChannelId = async () => {
  if (youtubeChannelId) {
    return youtubeChannelId;
  }

  if (!youtubeChannelHandle) {
    return '';
  }

  const channelParams = new URLSearchParams({
    part: 'id',
    forHandle: youtubeChannelHandle,
    key: youtubeApiKey,
  });
  const channelResponse = await fetch(
    `${youtubeApiBase}/channels?${channelParams.toString()}`,
  );

  if (!channelResponse.ok) {
    throw new Error('Unable to find YouTube channel.');
  }

  const channelPayload = await channelResponse.json();
  return (
    channelPayload.items &&
    channelPayload.items[0] &&
    channelPayload.items[0].id
  );
};

const hydrateVideoDetails = async videos => {
  if (!videos.length) {
    return [];
  }

  const detailsParams = new URLSearchParams({
    part: 'contentDetails,liveStreamingDetails',
    id: videos.map(video => video.id).join(','),
    key: youtubeApiKey,
  });
  const detailsResponse = await fetch(
    `${youtubeApiBase}/videos?${detailsParams.toString()}`,
  );

  if (!detailsResponse.ok) {
    throw new Error(
      `Unable to load YouTube video details (${detailsResponse.status}).`,
    );
  }

  const detailsPayload = await detailsResponse.json();
  const detailMap = (detailsPayload.items || []).reduce((accumulator, item) => {
    accumulator[item.id] = item;
    return accumulator;
  }, {});

  return videos.map(video => {
    const details = detailMap[video.id] || {};
    const contentDetails = details.contentDetails || {};

    return {
      ...video,
      duration: contentDetails.duration,
      hasLiveStreamingDetails: Boolean(details.liveStreamingDetails),
    };
  });
};

const getLatestVideos = async () => {
  if (!youtubeApiKey) {
    throw new Error('Missing REACT_APP_YOUTUBE_API_KEY.');
  }

  const channelId = await getChannelId();

  if (!channelId) {
    throw new Error('Missing YouTube channel ID.');
  }

  let nextPageToken = '';
  let uploadedVideos = [];

  for (let page = 0; page < maxSearchPages; page += 1) {
    const videoParams = new URLSearchParams({
      part: 'snippet',
      channelId,
      maxResults: String(maxCandidateVideos),
      order: 'date',
      type: 'video',
      key: youtubeApiKey,
    });

    if (nextPageToken) {
      videoParams.set('pageToken', nextPageToken);
    }

    const videoResponse = await fetch(
      `${youtubeApiBase}/search?${videoParams.toString()}`,
    );

    if (!videoResponse.ok) {
      throw new Error(
        `Unable to load latest YouTube videos (${videoResponse.status}).`,
      );
    }

    const videoPayload = await videoResponse.json();
    const candidateVideos = (videoPayload.items || [])
      .map(normalizeVideo)
      .filter(video => video.id);
    const hydratedVideos = await hydrateVideoDetails(candidateVideos);

    uploadedVideos = uploadedVideos.concat(
      hydratedVideos.filter(isStandardUpload),
    );

    if (uploadedVideos.length >= maxVideos || !videoPayload.nextPageToken) {
      break;
    }

    nextPageToken = videoPayload.nextPageToken;
  }

  return uploadedVideos.slice(0, maxVideos).map(video => ({
    ...video,
    game: getGame(video),
  }));
};

const Videos = () => {
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('');
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let isMounted = true;

    getLatestVideos()
      .then(latestVideos => {
        if (isMounted) {
          setVideos(latestVideos);
          setError('');
        }
      })
      .catch(loadError => {
        if (isMounted) {
          setError(loadError.message);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredVideos = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return videos.filter(video =>
      (!activeCategory || video.game === activeCategory) &&
      (!normalizedQuery ||
        video.title.toLowerCase().includes(normalizedQuery)),
    );
  }, [activeCategory, query, videos]);

  return (
    <div className={classes.page}>
      <Helmet>
        <title>Videos | Chuck Fresco</title>
        <meta
          name="description"
          content="Search Chuck Fresco's latest YouTube videos by title, thumbnail, and game."
        />
        <meta property="og:title" content="Chuck Fresco Videos" />
        <meta
          property="og:description"
          content="Browse and search the latest Chuck Fresco YouTube videos."
        />
        <meta property="og:url" content="https://chuckfresco.com/videos" />
      </Helmet>

      <Box className={classes.hero}>
        <Box className={classes.heroInner}>
          <Typography variant="overline">
            <YouTubeIcon className={classes.youtubeIcon} />
            YouTube Library
          </Typography>
          <Typography variant="h2" component="h1">
            Videos
          </Typography>
          <Typography variant="h6">
            Search the latest Chuck Fresco uploaded videos by title,
            then use categories to narrow by game.
          </Typography>
          <Box className={classes.searchWrap}>
            <TextField
              className={classes.searchInput}
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Search videos, games, guides..."
              variant="outlined"
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>
          <Box className={classes.categoryFilters}>
            <Button
              className={`${classes.categoryButton} ${
                !activeCategory ? classes.categoryButtonActive : ''
              }`}
              variant="outlined"
              onClick={() => setActiveCategory('')}
            >
              All
            </Button>
            {videoCategories.map(category => (
              <Button
                className={`${classes.categoryButton} ${
                  activeCategory === category
                    ? classes.categoryButtonActive
                    : ''
                }`}
                key={category}
                variant="outlined"
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </Box>
        </Box>
      </Box>

      <Box className={classes.content}>
        {isLoading && (
          <Box className={classes.status}>
            <CircularProgress />
          </Box>
        )}

        {!isLoading && error && (
          <Box className={classes.empty}>
            <Typography variant="h5" gutterBottom>
              Videos are unavailable right now.
            </Typography>
            <Typography color="textSecondary" paragraph>
              {error}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="https://www.youtube.com/@chuckfresco"
              target="_blank"
              rel="noopener noreferrer"
              endIcon={<OpenInNewIcon />}
            >
              Open YouTube Channel
            </Button>
          </Box>
        )}

        {!isLoading && !error && (
          <React.Fragment>
            <Box mb={3}>
              <Typography variant="body2" color="textSecondary">
                Showing {filteredVideos.length} of {videos.length} uploaded
                videos{activeCategory ? ` in ${activeCategory}` : ''}
              </Typography>
            </Box>
            {filteredVideos.length > 0 ? (
              <Grid container spacing={3}>
                {filteredVideos.map(video => (
                  <Grid item xs={12} sm={6} md={4} key={video.id}>
                    <Paper className={classes.videoCard}>
                      <a
                        className={classes.thumbnailLink}
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${video.title} on YouTube`}
                      >
                        <img
                          className={classes.thumbnail}
                          src={video.thumbnail}
                          alt={video.title}
                        />
                        <span className={classes.playBadge}>
                          <YouTubeIcon fontSize="small" />
                          &nbsp;Watch
                        </span>
                      </a>
                      <Box className={classes.cardBody}>
                        <span className={classes.game}>{video.game}</span>
                        <Typography
                          className={classes.title}
                          variant="subtitle1"
                          component="h2"
                        >
                          {video.title}
                        </Typography>
                        <Typography className={classes.meta} variant="body2">
                          {formatDate(video.publishedAt)}
                        </Typography>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            ) : (
              <Box className={classes.empty}>
                <Typography variant="h5" gutterBottom>
                  No videos found.
                </Typography>
                <Typography color="textSecondary">
                  Try another title, game, or guide keyword.
                </Typography>
              </Box>
            )}
          </React.Fragment>
        )}
      </Box>
    </div>
  );
};

export default Videos;
