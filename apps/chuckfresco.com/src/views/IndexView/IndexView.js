import React from 'react';
import { makeStyles, Divider } from '@material-ui/core';
import { Section, SectionAlternate } from 'components/organisms';
import { GetStarted, Features, Reviews, QuickStart, Services, Hero, VideoSection, TwitchSection, Community, Story, Partners } from './components';
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
}));

const IndexView = ({ themeMode }) => {
  const classes = useStyles();

  return (
    <div>
      <Hero themeMode={themeMode} />
   {/*    <Services /> */}

      <Section>
 {/*        <Story /> */}

        <Partners data={tournaments} />
   
      </Section>

      <SectionAlternate>
        <TwitchSection data={partners} />
      </SectionAlternate>

      <Section>
        <VideoSection data={partners} />
      </Section>

 

      <SectionAlternate>
        <QuickStart />
      </SectionAlternate>

      <Section narrow>
        <Community data={gallery} />
      </Section>

      
   





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
