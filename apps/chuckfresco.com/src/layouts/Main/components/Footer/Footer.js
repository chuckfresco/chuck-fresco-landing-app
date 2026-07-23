import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import { Image } from 'components/atoms';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: theme.palette.background.footer,
  },
  footerContainer: {
    maxWidth: theme.layout.contentWidth,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 8),
    },
  },
  logoContainerItem: {
    paddingTop: 0,
  },
  logoContainer: {
    width: 195,
    height: 52,
  },
  logoImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'grid',
    gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
    },
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
    },
  },
  menuItem: {
    padding: theme.spacing(0, 2, 3),
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    '&:last-child': {
      paddingBottom: 0,
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
}));

const Footer = props => {
  const { pages, className, ...rest } = props;

  const classes = useStyles();

//  const landings = pages.landings;
  const supportedPages = pages.pages;

  const MenuGroup = props => {
    const { item } = props;
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Typography
              variant="body2"
              component={'a'}
              href={page.href}
              className={clsx(classes.navLink, 'submenu-item')}
            >
              {page.title}
            </Typography>
          </ListItem>
        ))}
      </List>
    );
  };

/*  const LandingPages = () => {
    const { services, apps, web } = landings.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={services} />
          <MenuGroup item={apps} />
        </div>
        <div>
          <MenuGroup item={web} />
        </div>
      </div>
    );
  };
*/
  const SupportedPages = () => {
    const {
      axieInfinity,
      pixelsOnline,
      sunflowerLand,
      contact,
    } = supportedPages.children;

    const footerGroups = [
      axieInfinity,
      pixelsOnline,
      sunflowerLand,
      contact,
    ];

    return (
      <div className={classes.menu}>
        {footerGroups.map(item => (
          <MenuGroup key={item.groupTitle} item={item} />
        ))}
      </div>
    );
  };

/*   const AccountPages = () => {
    const { settings, signup, signin, password, error } = account.children;
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={settings} />
          <MenuGroup item={signup} />
        </div>
        <div>
          <MenuGroup item={signin} />
          <MenuGroup item={password} />
          <MenuGroup item={error} />
        </div>
      </div>
    );
  }; */

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={2}>
            <List disablePadding>
              <ListItem disableGutters className={classes.logoContainerItem}>
                <div className={classes.logoContainer}>
                  <a href="/" title="Chuck Fresco">
                    <Image
                      className={classes.logoImage}
                      src="/assets/logo/chuck-fresco/chuck-fresco-logo-poke.webp"
                      alt="Chuck Fresco"
                      lazy={false}
                    />
                  </a>
                </div>
              </ListItem>
              <ListItem disableGutters>
                <IconButton
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.facebook.com/chuckfrescoofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chuck Fresco on Facebook"
                >
                  <FacebookIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.socialIcon}
                  component="a"
                  href="https://www.instagram.com/chuckfresco"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chuck Fresco on Instagram"
                >
                  <InstagramIcon className={classes.icon} />
                </IconButton>
                <IconButton
                  className={classes.socialIcon}
                  component="a"
                  href="https://x.com/chuckfresco"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chuck Fresco on X"
                >
                  <TwitterIcon className={classes.icon} />
                </IconButton>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} md={10} className={classes.menuListContainer}>
            <Grid container spacing={0}>

              <Grid item>
                <SupportedPages />
              </Grid>
{/*               <Grid item>
                <AccountPages />
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.object.isRequired,
};

export default Footer;
