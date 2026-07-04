import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Box,
  Chip,
  Grid,
  LinearProgress,
  Typography,
} from '@material-ui/core';
import {
  FaAws,
  FaTrophy,
  FaTwitter,
} from 'react-icons/fa';
import { Section } from 'components/organisms';

const activeGiveaways = [
  {
    game: 'X',
    theme: 'x',
    logo: '/assets/logo/logo-white.png',
    logoOnDark: true,
    xPostId: '1847204492819058874',
    prompt: 'Reply with your best clip, guide, or build from this week.',
    participants: 1286,
    goal: 1500,
    endsAt: '2026-07-10T23:59:00-07:00',
    prize: '$100 weekly community spotlight',
  },
  {
    game: 'Pixels',
    theme: 'pixels',
    logo: '/assets/logo/pixels-online-logo.svg',
    xPostId: '1848310453312001120',
    prompt: 'Share a Pixels route, rare find, farm build, or helpful community tip.',
    participants: 642,
    goal: 1000,
    endsAt: '2026-07-12T20:00:00-07:00',
    prize: 'Pixels resources bundle',
  },
  {
    game: 'Axie Infinity',
    theme: 'axie',
    logo: '/assets/logo/axie-infinity-logo.png',
    xPostId: '1849124830032119022',
    prompt: 'Post your strongest clip, build idea, or beginner-friendly Axie breakdown.',
    participants: 384,
    goal: 750,
    endsAt: '2026-07-14T18:00:00-07:00',
    prize: 'Axie starter reward',
  },
  {
    game: 'Sunflower Land',
    theme: 'sunflower',
    logo: '/assets/logo/sunflower-land-logo.png',
    xPostId: '1849934500291145720',
    prompt: 'Reply with a quest checklist, farm layout, timing tip, or community guide.',
    participants: 508,
    goal: 900,
    endsAt: '2026-07-15T19:30:00-07:00',
    prize: 'Sunflower Land care package',
  },
];

const getCountdownParts = (endsAt, now) => {
  const difference = Math.max(new Date(endsAt).getTime() - now.getTime(), 0);
  const totalMinutes = Math.floor(difference / 60000);
  const days = Math.floor(totalMinutes / 1440);
  const hours = Math.floor((totalMinutes % 1440) / 60);
  const minutes = totalMinutes % 60;
  const seconds = Math.floor((difference % 60000) / 1000);

  return { days, hours, minutes, seconds, ended: difference === 0 };
};

const winners = [
  {
    game: 'X',
    theme: 'x',
    logo: '/assets/logo/logo-white.png',
    logoOnDark: true,
    week: 'Week of July 1',
    date: '2026-07-01',
    username: '@ThreadSmith',
    displayName: 'Thread Smith',
    comment:
      'Dropped a clean launch thread with the best entries, timestamps, and a simple recap for anyone who missed the live post.',
    participants: 1286,
    prize: 'Premium shoutout + $100',
    source: 's3://chuckfresco-giveaways/x/2026-07-01.json',
  },
  {
    game: 'Pixels',
    theme: 'pixels',
    logo: '/assets/logo/pixels-online-logo.svg',
    week: 'Week of June 24',
    date: '2026-06-24',
    username: '@PixelChef',
    displayName: 'Pixel Chef',
    comment:
      'Built a full farm route that saves 18 minutes per day and helped my guild copy it without extra tools.',
    participants: 1142,
    prize: 'Pixels resources bundle',
    source: 's3://chuckfresco-giveaways/pixels/2026-06-24.json',
  },
  {
    game: 'Axie Infinity',
    theme: 'axie',
    logo: '/assets/logo/axie-infinity-logo.png',
    week: 'Week of June 17',
    date: '2026-06-17',
    username: '@RuneTrainer',
    displayName: 'Rune Trainer',
    comment:
      'Shared a battle clip with a turn-by-turn breakdown, then posted the build notes so newer players could copy the idea.',
    participants: 987,
    prize: 'Axie starter reward',
    source: 's3://chuckfresco-giveaways/axie-infinity/2026-06-17.json',
  },
  {
    game: 'Sunflower Land',
    theme: 'sunflower',
    logo: '/assets/logo/sunflower-land-logo.png',
    week: 'Week of June 10',
    date: '2026-06-10',
    username: '@CraftedByMina',
    displayName: 'Mina',
    comment:
      'Turned the seasonal quest into a beginner-friendly checklist with screenshots, crop timing, and a simple profit tracker.',
    participants: 842,
    prize: 'Sunflower Land care package',
    source: 's3://chuckfresco-giveaways/sunflower-land/2026-06-10.json',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    background:
      'linear-gradient(180deg, rgba(9, 13, 22, 0.98) 0%, rgba(16, 20, 30, 1) 48%, rgba(10, 16, 18, 1) 100%)',
    color: theme.palette.common.white,
    minHeight: '100vh',
  },
  hero: {
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(14),
      paddingBottom: theme.spacing(5),
    },
  },
  eyebrow: {
    alignItems: 'center',
    color: '#88d8ff',
    display: 'inline-flex',
    fontWeight: 700,
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
  },
  heroTitle: {
    fontWeight: 800,
    lineHeight: 1.05,
    marginBottom: theme.spacing(2),
  },
  heroCopy: {
    color: 'rgba(255, 255, 255, 0.72)',
    fontSize: 18,
    lineHeight: 1.7,
    maxWidth: 680,
  },
  muted: {
    color: 'rgba(255, 255, 255, 0.64)',
  },
  chip: {
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#111827',
    fontWeight: 700,
  },
  sourceRow: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    marginTop: theme.spacing(2),
  },
  progress: {
    background: 'rgba(255, 255, 255, 0.12)',
    borderRadius: 999,
    height: 8,
    marginTop: theme.spacing(1.5),
    '& .MuiLinearProgress-barColorPrimary': {
      background: 'linear-gradient(90deg, #60d394, #88d8ff)',
    },
  },
  activeCard: {
    minHeight: 0,
  },
  activeTop: {
    alignItems: 'center',
    display: 'flex',
    gap: theme.spacing(1.5),
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1.5),
  },
  activeCopy: {
    color: 'rgba(255, 255, 255, 0.88)',
    lineHeight: 1.45,
    marginTop: theme.spacing(1),
  },
  countdownGrid: {
    display: 'grid',
    gap: theme.spacing(1),
    gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    marginTop: theme.spacing(1.5),
  },
  countdownUnit: {
    background: 'rgba(0, 0, 0, 0.2)',
    border: '1px solid rgba(255, 255, 255, 0.14)',
    borderRadius: 6,
    padding: theme.spacing(0.75, 1),
    textAlign: 'center',
  },
  countdownNumber: {
    fontWeight: 800,
    lineHeight: 1.1,
  },
  countdownLabel: {
    color: 'rgba(255, 255, 255, 0.66)',
    fontSize: 11,
    textTransform: 'uppercase',
  },
  sectionHeading: {
    fontWeight: 800,
    marginBottom: theme.spacing(1),
  },
  winnerCard: {
    border: '1px solid rgba(255, 255, 255, 0.16)',
    borderRadius: 8,
    overflow: 'hidden',
    padding: theme.spacing(2.25),
    position: 'relative',
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2.5, 3),
    },
    '&:before': {
      bottom: 0,
      content: '""',
      opacity: 0.3,
      position: 'absolute',
      right: 0,
      top: 0,
      width: '34%',
    },
  },
  winnerX: {
    background: 'linear-gradient(135deg, #050505 0%, #101114 62%, #272b31 100%)',
    borderColor: 'rgba(255, 255, 255, 0.24)',
    '&:before': {
      background:
        'repeating-linear-gradient(135deg, rgba(255,255,255,0.18) 0, rgba(255,255,255,0.18) 1px, transparent 1px, transparent 12px)',
    },
  },
  winnerPixels: {
    background: 'linear-gradient(135deg, #21331a 0%, #3d7c2c 48%, #ffe06a 100%)',
    borderColor: '#9bd64b',
    borderRadius: 4,
    boxShadow:
      '4px 4px 0 rgba(0, 0, 0, 0.28), inset 0 0 0 2px rgba(255, 255, 255, 0.12)',
    '&:before': {
      background:
        'linear-gradient(90deg, rgba(255,255,255,0.18) 50%, transparent 50%), linear-gradient(0deg, rgba(255,255,255,0.14) 50%, transparent 50%)',
      backgroundSize: '18px 18px',
    },
  },
  winnerAxie: {
    background: 'linear-gradient(135deg, #0b2d63 0%, #1684db 54%, #ffb74a 100%)',
    borderColor: 'rgba(129, 207, 255, 0.72)',
    '&:before': {
      background:
        'radial-gradient(circle at 30% 35%, rgba(255,255,255,0.30) 0, rgba(255,255,255,0.30) 7%, transparent 8%), radial-gradient(circle at 72% 64%, rgba(255,221,130,0.30) 0, rgba(255,221,130,0.30) 7%, transparent 8%)',
    },
  },
  winnerSunflower: {
    background: 'linear-gradient(135deg, #214b25 0%, #6fa33a 52%, #f6c34f 100%)',
    borderColor: 'rgba(255, 213, 84, 0.75)',
    '&:before': {
      background:
        'radial-gradient(circle, rgba(255,232,116,0.42) 0, rgba(255,232,116,0.42) 14%, transparent 15%)',
      backgroundSize: 36,
    },
  },
  winnerContent: {
    position: 'relative',
    zIndex: 1,
  },
  logoWell: {
    alignItems: 'center',
    display: 'flex',
    height: 52,
    justifyContent: 'center',
    minWidth: 92,
    width: 128,
    [theme.breakpoints.down('xs')]: {
      height: 42,
      minWidth: 72,
      width: 88,
    },
  },
  logoWellDark: {
    background: '#050505',
    borderRadius: 8,
    boxShadow: '0 14px 28px rgba(0, 0, 0, 0.28)',
    height: 52,
    minWidth: 52,
    padding: theme.spacing(1),
    width: 52,
    [theme.breakpoints.down('xs')]: {
      height: 42,
      minWidth: 42,
      padding: theme.spacing(0.75),
      width: 42,
    },
  },
  logoImage: {
    maxHeight: '100%',
    maxWidth: '100%',
    objectFit: 'contain',
    filter: 'drop-shadow(0 12px 18px rgba(0, 0, 0, 0.28))',
  },
  winnerTop: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1.5),
    justifyContent: 'space-between',
    marginBottom: theme.spacing(1.25),
  },
  winnerIdentity: {
    alignItems: 'center',
    display: 'flex',
    gap: theme.spacing(1.5),
  },
  avatar: {
    background: 'rgba(255, 255, 255, 0.9)',
    color: '#081016',
    fontWeight: 800,
    height: 38,
    width: 38,
  },
  quote: {
    background: 'rgba(0, 0, 0, 0.18)',
    borderLeft: '3px solid rgba(255, 255, 255, 0.72)',
    borderRadius: 6,
    color: 'rgba(255, 255, 255, 0.9)',
    lineHeight: 1.45,
    margin: theme.spacing(1.5, 0),
    padding: theme.spacing(1.25, 1.5),
  },
  winnerMeta: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1.25),
    '& .MuiTypography-root': {
      color: 'rgba(255, 255, 255, 0.82)',
      fontSize: 14,
    },
  },
  sourceText: {
    color: 'rgba(255, 255, 255, 0.64)',
    marginTop: theme.spacing(2),
    overflowWrap: 'anywhere',
  },
  ctaButton: {
    borderColor: 'rgba(255, 255, 255, 0.38)',
    color: theme.palette.common.white,
    marginTop: theme.spacing(3),
  },
}));

const Giveaways = () => {
  const classes = useStyles();
  const [now, setNow] = useState(new Date());
  const cardClassByTheme = {
    x: classes.winnerX,
    pixels: classes.winnerPixels,
    axie: classes.winnerAxie,
    sunflower: classes.winnerSunflower,
  };

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={classes.root}>
      <Helmet>
        <title>Giveaways | Chuck Fresco</title>
        <meta
          name="description"
          content="Weekly Chuck Fresco giveaway winners, participant counts, and showcased X replies."
        />
      </Helmet>

      <Section className={classes.hero}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <Box className={classes.eyebrow}>
              <FaTrophy style={{ marginRight: 8 }} />
              Weekly giveaway tracker
            </Box>
            <Typography variant="h1" className={classes.heroTitle}>
              Chuck Fresco Giveaways
            </Typography>
            <Typography className={classes.heroCopy}>
              A concept page for pulling replies from a specific X post, counting eligible
              participants, and publishing the weekly winner from S3 with the post date,
              comment, and username.
            </Typography>
            <Box className={classes.sourceRow}>
              <Chip icon={<FaTwitter />} label="X reply-powered entries" />
              <Chip icon={<FaAws />} label="Winner JSON from S3" />
            </Box>
          </Grid>
        </Grid>
      </Section>

      <Section>
        <Typography variant="h3" className={classes.sectionHeading}>
          Active Giveaways
        </Typography>
        <Typography className={classes.muted}>
          Each giveaway stores its own end time. The countdown reads from that
          `endsAt` value when a new giveaway is created.
        </Typography>
        <Grid container spacing={2} style={{ marginTop: 8 }}>
          {activeGiveaways.map(giveaway => {
            const countdown = getCountdownParts(giveaway.endsAt, now);
            const progress = Math.round((giveaway.participants / giveaway.goal) * 100);

            return (
              <Grid item xs={12} md={6} key={`${giveaway.game}-${giveaway.xPostId}`}>
                <Box
                  className={`${classes.winnerCard} ${classes.activeCard} ${
                    cardClassByTheme[giveaway.theme]
                  }`}
                >
                  <Box className={classes.winnerContent}>
                    <Box className={classes.activeTop}>
                      <Box>
                        <Typography variant="h6">{giveaway.game}</Typography>
                        <Typography className={classes.muted}>Post ID {giveaway.xPostId}</Typography>
                      </Box>
                      <Box
                        className={`${classes.logoWell} ${
                          giveaway.logoOnDark ? classes.logoWellDark : ''
                        }`}
                      >
                        <img
                          className={classes.logoImage}
                          src={giveaway.logo}
                          alt={`${giveaway.game} logo`}
                        />
                      </Box>
                    </Box>
                    <Typography className={classes.activeCopy}>{giveaway.prompt}</Typography>
                    <LinearProgress
                      className={classes.progress}
                      variant="determinate"
                      value={Math.min(progress, 100)}
                    />
                    <Box className={classes.winnerMeta} style={{ marginTop: 10 }}>
                      <Chip className={classes.chip} label={giveaway.prize} />
                      <Typography>{giveaway.participants.toLocaleString()} participants</Typography>
                      <Typography>Goal {giveaway.goal.toLocaleString()}</Typography>
                    </Box>
                    <Box className={classes.countdownGrid}>
                      {[
                        { label: 'Days', value: countdown.days },
                        { label: 'Hours', value: countdown.hours },
                        { label: 'Minutes', value: countdown.minutes },
                        { label: 'Seconds', value: countdown.seconds },
                      ].map(unit => (
                        <Box className={classes.countdownUnit} key={unit.label}>
                          <Typography className={classes.countdownNumber} variant="h5">
                            {countdown.ended ? '0' : unit.value}
                          </Typography>
                          <Typography className={classes.countdownLabel}>{unit.label}</Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Section>

      <Section>
        <Typography variant="h3" className={classes.sectionHeading}>
          Winning posts
        </Typography>
        <Typography className={classes.muted}>
          Placeholder winner records matching the future S3 payload.
        </Typography>
        <Grid container spacing={3} style={{ marginTop: 8 }}>
          {winners.map(winner => (
            <Grid item xs={12} key={`${winner.game}-${winner.date}`}>
              <Box className={`${classes.winnerCard} ${cardClassByTheme[winner.theme]}`}>
                <Box className={classes.winnerContent}>
                  <Box className={classes.winnerTop}>
                    <Box className={classes.winnerIdentity}>
                      <Avatar className={classes.avatar}>{winner.displayName.charAt(0)}</Avatar>
                      <Box>
                        <Typography variant="h6">{winner.displayName}</Typography>
                        <Typography className={classes.muted}>{winner.username}</Typography>
                      </Box>
                    </Box>
                    <Box
                      className={`${classes.logoWell} ${
                        winner.logoOnDark ? classes.logoWellDark : ''
                      }`}
                    >
                      <img
                        className={classes.logoImage}
                        src={winner.logo}
                        alt={`${winner.game} logo`}
                      />
                    </Box>
                  </Box>
                  <Typography className={classes.quote}>{winner.comment}</Typography>
                  <Box className={classes.winnerMeta}>
                    <Chip className={classes.chip} label={winner.game} />
                    <Chip className={classes.chip} label={winner.week} />
                    <Typography>{winner.participants.toLocaleString()} participants</Typography>
                    <Typography>{winner.date}</Typography>
                    <Typography>{winner.prize}</Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Section>
    </div>
  );
};

export default Giveaways;
