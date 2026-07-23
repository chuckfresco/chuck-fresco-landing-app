import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Box,
} from '@material-ui/core';

import { FaEnvelope, FaDiscord } from 'react-icons/fa';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';
import { trackEvent } from 'utils/analytics';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
  },
  wrapper: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
      alignItems: 'center',
    },
  },
  cover: {
    position: 'relative',
    order: 2,
    width: '100%',
    height: 260,
    overflow: 'hidden',
    backgroundColor: theme.palette.alternate.dark,
    [theme.breakpoints.up('sm')]: {
      height: 360,
    },
    [theme.breakpoints.up('md')]: {
      order: 1,
      height: 'min(68vh, 620px)',
      minHeight: 460,
    },
  },
  image: {
    width: '100%',
    height: '100%',
    display: 'block',
    objectFit: 'cover',
    objectPosition: 'center',
  },
  content: {
    display: 'flex',
    alignItems: 'flex-start',
    order: 1,
    width: '100%',
    padding: theme.spacing(5, 2, 4),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(7, 8, 6),
    },
    [theme.breakpoints.up('md')]: {
      order: 2,
      padding: theme.spacing(8, 8),
    },
  },
  contentInner: {
    width: '100%',
    maxWidth: 560,
  },
  description: {
    color: theme.palette.text.primary,
  },
  contactLink: {
    color: theme.palette.text.primary,
    textDecoration: 'underline',
    overflowWrap: 'anywhere',
  },
  divider: {
    marginBottom: 0,
  },
  iconBox: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
  },
}));

const ContactPageCover = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Section className={classes.section} fullWidth disablePadding>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="/assets/contact-page.jpg"
              alt="Contact"
              className={classes.image}
              lazy={false}
            />
          </div>
          <div className={classes.content}>
            <div className={classes.contentInner}>
              <SectionHeader
                title="Contact Us"
                data-aos="fade-up"
                align="left"
              />

              <Typography variant="subtitle1" className={classes.description}>
                Connect with Chuck Fresco to explore his projects, collaborations, and more. Feel free to reach out for inquiries, opportunities, or just to say hello!
              </Typography>

              <div style={{ paddingTop: '20px' }}>
                <List>
                  <ListItem disableGutters data-aos="fade-up">
                    <ListItemAvatar>
                      <Box className={classes.iconBox}>
                        <FaEnvelope size={24} color="#7289da" />
                      </Box>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Email"
                      secondary={
                        <a
                          href="mailto:chuckfrescoofficial@gmail.com"
                          onClick={() => trackEvent('click_contact_email', { link_location: 'contact' })}
                          className={classes.contactLink}
                        >
                          chuckfrescoofficial@gmail.com
                        </a>
                      }
                      primaryTypographyProps={{
                        variant: 'subtitle1',
                        color: 'textSecondary',
                      }}
                      secondaryTypographyProps={{
                        variant: 'subtitle1',
                        color: 'textPrimary',
                      }}
                    />
                  </ListItem>

                  <ListItem disableGutters data-aos="fade-up">
                    <ListItemAvatar>
                      <Box className={classes.iconBox}>
                        <FaDiscord size={24} color="#7289da" />
                      </Box>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Discord"
                      secondary={
                        <a
                          href="/discord"
                          onClick={() => trackEvent('join_community', { platform: 'discord', link_location: 'contact' })}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={classes.contactLink}
                        >
                          https://chuckfresco.com/discord
                        </a>
                      }
                      primaryTypographyProps={{
                        variant: 'subtitle1',
                        color: 'textSecondary',
                      }}
                      secondaryTypographyProps={{
                        variant: 'subtitle1',
                        color: 'textPrimary',
                      }}
                    />
                  </ListItem>
                </List>
              </div>
            </div>
          </div>
        </div>
      </Section>
      <Divider className={classes.divider} />
    </div>
  );
};

export default ContactPageCover;
