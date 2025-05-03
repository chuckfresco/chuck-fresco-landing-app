import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
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

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  section: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: 0,
    },
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    [theme.breakpoints.up('md')]: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  },
  cover: {
    marginLeft: theme.spacing(-2),
    marginRight: theme.spacing(-2),
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(-8),
      marginRight: theme.spacing(-8),
    },
    [theme.breakpoints.up('md')]: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '47vw',
      maxWidth: 740,
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },
  image: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    [theme.breakpoints.up('md')]: {
      maxWidth: '100%',
    },
  },
  content: {
    flex: '0 0 100%',
    maxWidth: '100%',
    [theme.breakpoints.up('md')]: {
      flex: '0 0 50%',
      maxWidth: '50%',
    },
  },
  divider: {
    marginTop: 'auto',
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
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={classes.root}>
      <Section className={classes.section}>
        <div className={classes.wrapper}>
          <div className={classes.cover}>
            <Image
              src="/assets/contact-page.jpg"
              alt="Contact"
              className={classes.image}
              lazyProps={{ width: '100%' }}
            />
          </div>
          <div className={classes.content}>
            <SectionHeader
              title="Contact Us"
              subtitle=""
              data-aos="fade-up"
              align="center"
            />

            <div className="MuiTypography-root MuiListItemText-secondary MuiTypography-subtitle1 MuiTypography-colorTextPrimary MuiTypography-displayBlock">
              Connect with Chuck Fresco to explore his projects, collaborations, and more. Feel free to reach out for inquiries, opportunities, or just to say hello!
            </div>

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
                        href="mailto:contact@chuckfresco.com"
                        style={{ color: '#ffffff', textDecoration: 'underline' }}
                      >
                        contact@chuckfresco.com
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
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#ffffff', textDecoration: 'underline' }}
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
      </Section>
      <Divider className={classes.divider} />
    </div>
  );
};

export default ContactPageCover;
