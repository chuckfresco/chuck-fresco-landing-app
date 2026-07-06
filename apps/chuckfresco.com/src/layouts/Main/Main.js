import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Divider } from '@material-ui/core';
import { Topbar, Footer, Sidebar } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = ({ children, themeToggler, themeMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const pages = {
    pages: {
      title: 'Tools',
      id: 'supported-pages',
      children: {
        career: {
          groupTitle: 'Chuck\'s Picks',
          pages: [
            {
              title: 'Axie Origins',
              href: 'hhttps://app.axieinfinity.com/games/?slug=origins',
            },
            {
              title: 'PvP LeaderBoard (Live)',
              href: 'https://axie.top',
            },
            {
              title: 'Axie Classic',
              href: 'https://app.axieinfinity.com/games/?slug=classic',
            },
            {
              title: 'Axie: Den of Mysteries',
              href: 'https://app.axieinfinity.com/games/?slug=axie-dom',
            },
          ],
        },
        pixelsOnline: {
          groupTitle: 'Pixels Online',
          pages: [
            {
              title: 'Land Inventory ',
              href: '/pixels/land/inventory',
            },
            {
              title: 'Animal Drops',
              href: '/pixels/animal/drops',
            },
            {
              title: 'Industry Limits',
              href: '/pixels/industry-limits',
            },
            {
              title: 'Alchemist Concoction',
              href: '/pixels/quest/alchemist-concoction',
            },
          ],
        },
        forgottenRuniverse: {
          groupTitle: 'Forgotten Runiverse',
          pages: [
            {
              title: 'Mage Spells',
              href: '/runiverse',
            },
            {
              title: 'Mage Equipment',
              href: '/runiverse/equipment',
            },
            {
              title: 'Monster Drops',
              href: '/runiverse/monster-drops',
            },
            {
              title: 'Resources',
              href: '/runiverse/resources',
            },  
                     
            {
              title: 'Status Effects',
              href: '/runiverse/status-effects',
            },
          ],
        },
        sunflowerLand: {
          groupTitle: 'Sunflower Land',
          pages: [
            {
              title: 'Sunflower Helpers',
              href: '/sunflower-land/helpers',
            },
            {
              title: 'Fishing Tools',
              href: '/sunflower-land/tools/fishing',
            },
          ],
        },

        helpCenter: {
          groupTitle: 'Help center',
          pages: [
            {
              title: 'Overview',
              href: '/help-center',
            },
            {
              title: 'Article',
              href: '/help-center-article',
            },
          ],
        },
        company: {
          groupTitle: 'Company',
          pages: [
            {
              title: 'About',
              href: '/about',
            },
            {
              title: 'About (Cover)',
              href: '/about-side-cover',
            },
            {
              title: 'Pricing',
              href: '/pricing',
            },
            {
              title: 'Terms',
              href: '/company-terms',
            },
          ],
        },
        contact: {
          groupTitle: 'About',
          pages: [
            {
              title: 'Contact',
              href: '/contact',
            },
          ],
        },
        blog: {
          groupTitle: 'Blog',
          pages: [
            {
              title: 'Newsroom',
              href: '/blog-newsroom',
            },
            {
              title: 'Reach View',
              href: '/blog-reach-view',
            },
            {
              title: 'Search',
              href: '/blog-search',
            },
            {
              title: 'Article',
              href: '/blog-article',
            },
          ],
        },
        portfolio: {
          groupTitle: 'Portfolio',
          pages: [
            {
              title: 'Basic',
              href: '/portfolio-page',
            },
            {
              title: 'Masonry',
              href: '/portfolio-masonry',
            },
            {
              title: 'Grid View',
              href: '/portfolio-grid',
            },
            {
              title: 'Parallax Effect',
              href: '/agency',
            },
          ],
        },
      },
    },
  };

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Topbar onSidebarOpen={handleSidebarOpen} pages={pages} themeMode={themeMode} themeToggler={themeToggler} />
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      <main>
        <Divider />
        {children}
      </main>
      <Footer pages={pages} />
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  themeToggler: PropTypes.func.isRequired,
  themeMode: PropTypes.string.isRequired,
};

export default Main;
