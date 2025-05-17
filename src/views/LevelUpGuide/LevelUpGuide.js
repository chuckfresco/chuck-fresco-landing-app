import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb } from 'components/molecules';
import { breadcrumb } from 'components/molecules/Breadcrumb/data';
import { Typography, Box, Grid } from '@material-ui/core';

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
  halfWidthSection: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    margin: 0,
    width: '100%',
    maxWidth: '100%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5,
    },
  },
  imagesSection: {
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 30,
    paddingBottom: 0,
    margin: 0,
    width: '100%',
    maxWidth: '190%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 10,
      paddingRight: 10,
      paddingTop: 5,
    },
  },
  sectionBreadcrumb: {
    '& > *': {
      paddingTop: '15px !important',
      paddingBottom: '15px !important',
    },
  },
  questBox: {
    border: '2px dashed #ffcc00',
    backgroundColor: '#1a1a1a',
    borderRadius: 10,
    padding: theme.spacing(3),
    marginTop: theme.spacing(4),
  },
  monsterCard: {
    textAlign: 'center',
    padding: theme.spacing(1),
    border: '1px solid #333',
    borderRadius: 6,
  },
}));

const LevelSection = ({ levelRange, description, monsters }) => {
  const classes = useStyles();
  return (
    <Box mb={4} p={2} border="1px solid #444" borderRadius={8}>
      <Typography variant="h5" gutterBottom>Level {levelRange}</Typography>
      <Typography paragraph>{description}</Typography>
      <Grid container spacing={2}>
        {monsters.map(monster => (
          <Grid item xs={12} sm={6} md={4} key={monster.name}>
            <Box className={classes.monsterCard}>
              <img src={monster.image} alt={monster.name} style={{ width: '100%', maxWidth: 120 }} />
              <Typography variant="subtitle1">{monster.name}</Typography>
              <Typography variant="body2" color="textSecondary">{monster.location}</Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const SideQuestBox = ({ title, steps, reward }) => {
  const classes = useStyles();
  return (
    <Box className={classes.questBox}>
      <Typography variant="h6" style={{ color: '#ffd700' }}>{title}</Typography>
      <ol>
        {steps.map((step, i) => (
          <li key={i}><Typography variant="body2">{step}</Typography></li>
        ))}
      </ol>
      <Typography variant="subtitle2" color="secondary">🎁 Reward: {reward}</Typography>
    </Box>
  );
};

const LevelUpGuide = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
        <title>Forgotten Runiverse | Level Up Guide</title>
        <meta name="description" content="Leveling up guide for monsters, equipment, and quests in Runiverse." />
        <meta property="og:title" content="Level Up Guide | Forgotten Runiverse" />
        <meta property="og:description" content="Efficient level progression and monster farming strategy." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/social-runiverse.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/runiverse/level-up-guide" />
      </Helmet>

      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>

      <Section className={classes.halfWidthSection}>

        <LevelSection levelRange="1-3" description="Farm Rats and Grey Wolves in Southern Thicket." monsters={[{ name: "Rat", image: "/assets/monsters/rat.png", location: "Southern Thicket" }, { name: "Grey Wolf", image: "/assets/monsters/grey-wolf.png", location: "Southern Thicket" }]} /><LevelSection levelRange="4" description="Move to Brown Wolf in Southern Thicket." monsters={[{ name: "Brown Wolf", image: "/assets/monsters/brown-wolf.png", location: "Southern Thicket" }]} />

        <LevelSection levelRange="5" description="Farm Brown Bear in Southern Thicket." monsters={[{ name: "Brown Bear", image: "/assets/monsters/brown-bear.png", location: "Southern Thicket" }]} />

        <LevelSection levelRange="6-11" description="Farm Green Goblin With Chain in Northern Thicket." monsters={[{ name: "Green Goblin With Chain", image: "/assets/monsters/green-goblin.png", location: "Northern Thicket" }]} />

        <LevelSection levelRange="10-12" description="Add Grey Rat and Gigas Hornet in Northern Thicket (near Hollow Wood)." monsters={[{ name: "Grey Rat", image: "/assets/monsters/grey-rat.png", location: "Northern Thicket" }, { name: "Gigas Hornet", image: "/assets/monsters/gigas-hornet.png", location: "Northern Thicket / Hollow Wood" }]} />

        <LevelSection levelRange="12" description="Farm Grey Rat in The Wild and upgrade Volatile Gambit." monsters={[{ name: "Grey Rat", image: "/assets/monsters/grey-rat.png", location: "The Wild" }]} />

        <LevelSection levelRange="13" description="Farm Dino, Grey Goo, and Tiger." monsters={[{ name: "Dino", image: "/assets/monsters/dino.png", location: "Unknown" }, { name: "Grey Goo", image: "/assets/monsters/grey-goo.png", location: "Unknown" }, { name: "Tiger", image: "/assets/monsters/tiger.png", location: "Unknown" }]} />

        <LevelSection levelRange="14" description="Farm Yellow Firefly in Azure and Rat for Fireball II." monsters={[{ name: "Yellow Firefly", image: "/assets/monsters/yellow-firefly.png", location: "Azure Expanse" }, { name: "Rat", image: "/assets/monsters/rat.png", location: "Unknown" }]} />

        <LevelSection levelRange="15-16" description="Still too weak for Blue Djinn. Farm Green Slime for Demon Armor and upgrade Halting Staff." monsters={[{ name: "Green Slime", image: "/assets/monsters/green-slime.png", location: "Unknown" }]} />

        <LevelSection levelRange="17" description="Farm Demon Helm using Genie and Green Slime materials." monsters={[{ name: "Blue Genie", image: "/assets/monsters/blue-genie.png", location: "Unknown" }]} />

        <LevelSection levelRange="18" description="Farm Genie consistently after Demon Armor + Halting Staff equipped." monsters={[{ name: "Genie", image: "/assets/monsters/genie.png", location: "Unknown" }]} />

        <SideQuestBox title="Quest #9: Follow the White Rabbit" steps={["Talk to the White Rabbit outside the cave near Blue Bastion.", "Fight the creature in the cave.", "Ensure you have the correct relic equipped.", "Defeat the creature.", "Return to the Rabbit to complete the quest."]} reward="Devouring Scythe Recipe (One Time)" />

        <LevelSection levelRange="19" description="Farm Owls." monsters={[{ name: "Owl", image: "/assets/monsters/owl.png", location: "Unknown" }]} />

        <LevelSection levelRange="20-22" description="Farm Scientist in Moon Wood for Cunning Shard II and upgrade Volatile Gambit / Heat Wave II." monsters={[{ name: "Scientist", image: "/assets/monsters/scientist.png", location: "Moon Wood" }]} />

        <LevelSection levelRange="23" description="Farm Green Spider and Seventh Devout." monsters={[{ name: "Green Spider", image: "/assets/monsters/green-spider.png", location: "Unknown" }, { name: "Seventh Devout", image: "/assets/monsters/seventh-devout.png", location: "Unknown" }]} />

        <LevelSection levelRange="24" description="Farm Red Enforcer in Moon Wood." monsters={[{ name: "Red Enforcer", image: "/assets/monsters/red-enforcer.png", location: "Moon Wood" }]} />

        <LevelSection levelRange="25" description="Level 25 Complete!" monsters={[]} />
      </Section>
    </div>
  );
};

export default LevelUpGuide;
