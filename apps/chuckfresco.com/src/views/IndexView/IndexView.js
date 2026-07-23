import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { GetStarted, Features, Reviews, QuickStart, Services, Hero, VideoSection, TwitchSection, Community, Story, Partners, GameTools } from './components';
import { HashLink as Link } from 'react-router-hash-link';

import {
  partners,
  gallery,
  tournaments,
} from './data';

const useStyles = makeStyles(() => ({
  sectionAlternateNoPaddingTop: {
    '& .section-alternate__content': {
      paddingBottom: 0,
    },
  },
  dividerSection: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  compactSection: {
    paddingTop: 48,
    paddingBottom: 48,
    '@media (max-width: 599px)': {
      paddingTop: 36,
      paddingBottom: 36,
    },
  },
  compactAlternate: {
    '& .section-alternate__content': {
      paddingTop: 48,
      paddingBottom: 48,
      '@media (max-width: 599px)': {
        paddingTop: 36,
        paddingBottom: 36,
      },
    },
  },
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
   {/*    <Services /> */}

      <Section className={classes.compactSection}>
 {/*        <Story /> */}

        <Partners data={tournaments} />
   
      </Section>

      <SectionAlternate className={classes.compactAlternate}>
        <GameTools />
      </SectionAlternate>

      <Section className={classes.compactSection}>
        <TwitchSection data={partners} />
      </Section>

      <SectionAlternate className={classes.compactAlternate}>
        <VideoSection data={partners} />
      </SectionAlternate>

 

      <Section className={classes.compactSection}>
        <QuickStart />
      </Section>

      <SectionAlternate className={classes.compactAlternate}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
        <Community data={gallery} />
        </div>
      </SectionAlternate>

      
   





{/*       <SectionAlternate>
        <Features />
      </SectionAlternate>
      <Section>
        <Reviews />
      </Section>
      <Section className={classes.dividerSection}>
        <Divider />
      </Section>
      <Section narrow>
        <GetStarted />
      </Section> */}
    </div>
  );
};

export default IndexView;
