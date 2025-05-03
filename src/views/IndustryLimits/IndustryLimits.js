import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Helmet } from 'react-helmet';
import {
  About,
  AboutBottom,
  Features,
  Hero,
  Integrations,
  Jobs,
  News,
  Pricings,
  Reviews,
  Search,
  Team,
  Trucking,
  Video,
} from './components';

import {
  trucking,
  features,
  team,
  integrations,
  reviews,
  jobs,
  news,
  pricings,
} from './data';

import IndustryTables from './IndustryTables';

const useStyles = makeStyles(theme => ({
  sectionTrucking: {
    maxWidth: '100%',
    paddingRight: 0,
    paddingLeft: 0,
  },
  featuresSection: {
    background: 'url(https://assets.maccarianagency.com/the-front/illustrations/patterns-bg.svg) no-repeat center',
    backgroundSize: 'contain',
  },
  integrationsSection: {
    background: '#0c133e',
  },
  sectionNoPaddingTop: {
    paddingTop: 0,
  },
  reviewSection: {
    background: theme.palette.primary.dark,
  },
  aboutSection: {
    background: '#0c133e',
  },
}));

const IndustryLimits = () => {
  const classes = useStyles();

  return (
    <div>
        <Helmet>
        <title>Industry Limits | Pixels Online Guide</title>
        <meta name="description" content="Check your daily output limits for farming, crafting, and cooking industries in Runiverse based on building size." />
        <meta property="og:title" content="Industry Limits | Pixels Online Guide" />
        <meta property="og:description" content="Speck, Small, and Large building production percentages for each industry. Plan your resources efficiently!" />
        <meta property="og:image" content="%PUBLIC_URL%/assets/social-pixels.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/pixels/industry-limits" />
      </Helmet>

      <Hero />
      <IndustryTables />
      
{/*       <Section className={classes.sectionTrucking}>
        <Trucking data={trucking} />
      </Section>
      <SectionAlternate className={classes.aboutSection}>
        <About />
      </SectionAlternate>
      <div className={classes.featuresSection}>
        <Section>
          <Features data={features} />
        </Section>
      </div>
      <SectionAlternate>
        <News data={news} />
      </SectionAlternate>
      <Section>
        <Team data={team} />
      </Section>
      <Video />
      <SectionAlternate className={classes.integrationsSection}>
        <Integrations data={integrations} />
      </SectionAlternate>
      <Section>
        <Pricings data={pricings} />
      </Section>
      <SectionAlternate innerNarrowed>
        <Jobs data={jobs} />
      </SectionAlternate>
      <Section>
        <Search />
      </Section>
      <Section className={classes.sectionNoPaddingTop}>
        <AboutBottom />
      </Section>
      <SectionAlternate className={classes.reviewSection}>
        <Reviews data={reviews} />
      </SectionAlternate>  */}
    </div>
  );
};

export default IndustryLimits;

const tables = {
  outside: [
    {
      title: "Producer Items",
      data: [
        ["T1/T2 Soil", "1.5%", "1.1%", "0.8%"],
        ["T3/T4 Soil", "N/A", "1.1%", "0.8%"],
        ["T1 Tree", "3%", "2.2%", "1.5%"],
        ["T2 Tree", "3.5%", "2.6%", "1.8%"],
        ["T3 Tree", "N/A", "3%", "2%"],
        ["T4 Tree", "N/A", "3.3%", "2.3%"],
      ],
      headers: ["Item", "Speck (%)", "Small Size (%)", "Large Size (%)"],
    },
    {
      title: "Crafting Items",
      data: [
        ["T1 WW/MW/SS", "12%", "7.5%", "5%"],
        ["T2 WW/MW/SS", "16%", "10%", "6.7%"],
        ["T3 WW/MW/SS", "N/A", "12.5%", "8.3%"],
        ["T4 WW/MW/SS", "N/A", "15%", "10%"],
        ["BarnBQ Grill", "2%", "1.3%", "0.8%"],
        ["Textiler", "10%", "6.3%", "4.2%"],
      ],
      headers: ["Item", "Speck (%)", "Small Size (%)", "Large Size (%)"],
    },
  ],
  inside: [
    {
      title: "Stove Items",
      data: [
        ["T1 Stove", "6.7%", "6.7%", "5%"],
        ["T2 Stove", "10%", "10%", "7.5%"],
        ["T3 Stove", "N/A", "13.3%", "10%"],
        ["T4 Stove", "N/A", "16.7%", "12.5%"],
      ],
      headers: ["Item", "Speck (%)", "Small House (%)", "Large House (%)"],
    },
  ],
};
