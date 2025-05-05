import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { Helmet } from 'react-helmet';
import {
  Contact,
  Features,
  Hero,
  Partners,
  Process,
  Reviews,
  Work,
} from './components';

import { partners, services, process, work, reviews } from './data';

const useStyles = makeStyles(theme => ({
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const Runiverse = () => {
  const classes = useStyles();

  return (
    <div>
        <Helmet>
        <title>Forgotten Runiverse Tools | Chuck Fresco</title>
        <meta name="description" content="Explore tools, spells, equipment, and more for Forgotten Runiverse. Created by Chuck Fresco." />
        <meta property="og:title" content="Forgotten Runiverse Tools" />
        <meta property="og:description" content="Explore the full suite of Forgotten Runiverse tools made for players and creators." />
        <meta property="og:image" content="https://chuckfresco.com/assets/images/runiverse-banner.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/runiverse" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Hero />
 {/*      <Partners data={partners} /> */}
      <Section>
        <Features data={services} />
      </Section>
      <Divider />
{/*       <Section narrow>
        <Process data={process} />
      </Section>
      <Divider />
      <Section>
        <Work data={work} />
      </Section>
      <Divider />
      <Section>
        <Reviews data={reviews} />
      </Section>
      <Divider />
      <SectionAlternate className={classes.sectionAlternate}>
        <Contact />
      </SectionAlternate> */}
    </div>
  );
};

export default Runiverse;
