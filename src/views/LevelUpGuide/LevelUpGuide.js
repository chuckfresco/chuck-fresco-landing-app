import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb } from 'components/molecules';
import { breadcrumb } from 'components/molecules/Breadcrumb/data';
import { Typography, Box, Grid, Collapse, IconButton, Dialog, DialogContent } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { levelSections, sideQuests } from './LevelUpGuideData';
import { guideSpells, guideEquipment } from './data/spellData';
import { idDescriptors, idAffix } from './data/spellData';

import {
  Hero,
} from './components';


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
    paddingLeft: 20,
    paddingRight: 20,
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
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
    maxWidth: '100%',
    width: '100%',
  },
  monsterCard: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(1),
    border: '1px solid #333',
    borderRadius: 6,
    gap: theme.spacing(1),
    width: '100%',
  },
  monsterImage: {
    width: 80,
    height: 'auto',
    objectFit: 'contain',
  },
  monsterDetails: {
    display: 'flex',
    flexDirection: 'column',
  },
  spellImage: {
    width: 60,
    height: 60,
    objectFit: 'contain',
  },
  materialIcon: {
    width: 20,
    height: 20,
    marginRight: 6,
    verticalAlign: 'middle',
  },
}));

const regionLinks = {
  "Southern Thicket": "https://runiverse-map.vercel.app/?lat=-168.74998731687137&lng=99.44922895837182&zoom=8",
  "Northern Thicket": "https://runiverse-map.vercel.app/?lat=-165.91796875&lng=99.10546875&zoom=8",
  "The Wild": "https://runiverse-map.vercel.app/?lat=-160.7734375&lng=103&zoom=7",
  "Azure Expanse": "https://runiverse-map.vercel.app/?lat=-154.07421875&lng=112.2265625&zoom=8",
  "Moon Wood": "https://runiverse-map.vercel.app/?lat=-167.37109375&lng=105.32421875&zoom=8",
};

const CollapsibleQuest = ({ title, steps, reward, mapImage }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <Box className={classes.questBox}>
      <Box display="flex" justifyContent="space-between" alignItems="center" onClick={() => setOpen(!open)} style={{ cursor: 'pointer' }}>
        <Typography variant="h6" style={{ color: '#ffd700' }}>{title}</Typography>
        <IconButton size="small">
          <ExpandMoreIcon style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.3s' }} />
        </IconButton>
      </Box>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} style={{ paddingLeft: 16 }}>
            <ol>
            {steps.map((step, i) =>
              step.trim() === "" ? (
                <Box key={`break-${i}`} mt={2} />
              ) : (
                <li key={i}>
                  <Typography variant="body2">{step}</Typography>
                </li>
              )
            )}
            </ol>
            <Typography variant="subtitle2" color="secondary">🎁 Reward: {reward}</Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img
              src={mapImage || '/assets/guide/placeholder-map.png'}
              alt="Quest Map"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: 8,
                cursor: 'pointer',
              }}
              onClick={() => setDialogOpen(true)}
            />
          </Grid>
        </Grid>
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} maxWidth="md">
          <DialogContent style={{ padding: 0 }}>
            <img
              src={mapImage || '/assets/guide/placeholder-map.png'}
              alt="Quest Map Full"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </DialogContent>
        </Dialog>
      </Collapse>
    </Box>
  );
};

const UpgradeSpellsSection = ({ spellName }) => {
  const classes = useStyles();

  const getMaterialNameById = (id) => {
    const flatList = idDescriptors.flat();
    const match = flatList.find(item => item._id === id);
    return match ? match.name : 'Unknown';
  };

  const spell = guideSpells.flat().find(s => s.name === spellName);
  if (!spell) return null;

  const materials = spell.materials || [];
  const splitMaterials = materials.length > 3
    ? [materials.slice(0, 3), materials.slice(3)]
    : [materials];

  return (
    <Box mt={2} border="1px solid #444" borderRadius={6} p={2} bgcolor="#1a1a1a">
        <Grid container spacing={2} alignItems="flex-start">

        <Grid item xs={6} sm={2}>
          <img src={spell.properties_crystal?.ability_properties?.icon} alt={spell.name} className={classes.spellImage} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body1">{spell.name}</Typography>
          <Typography variant="caption" color="textSecondary">
            {spell.properties_crystal?.ability_properties?.description || "No description"}
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography variant="body2" color="textSecondary">💰 {spell.currencies.gold} Gold</Typography>
          <Grid container spacing={3}>
            {splitMaterials.map((matGroup, groupIdx) => (
              <Grid item xs={6} key={groupIdx}>
                {matGroup.map((mat, idx) => (
                  <Box display="flex" alignItems="center" key={idx} mb={0.5}>
                    <img src={mat.icon} alt="material" className={classes.materialIcon} />
                    <Typography variant="caption">
                      {mat.amount}× {getMaterialNameById(mat.material)}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid item xs={12} sm={2}>
          <Typography variant="subtitle2">Where to Craft?</Typography>
          <a
            href="/runiverse/support"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fc3f7", textDecoration: "underline" }}
          >
            Fresco Manor Village
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

const EquipmentSection = ({ equipment }) => {
  const classes = useStyles();

  const getMaterialNameById = (id) => {
    const flatList = idDescriptors.flat();
    const match = flatList.find(item => item._id === id);
    return match ? match.name : 'Unknown';
  };



  const splitMaterials = equipment.materials.length > 3
    ? [equipment.materials.slice(0, 3), equipment.materials.slice(3)]
    : [equipment.materials];

  const staticAffixes = equipment.properties_forge.affixes.filter(a => a.affix !== "Random");
  const randomAffixes = equipment.properties_forge.affixes.filter(a => a.affix === "Random");

  return (
    <Box mt={2} border="1px solid #444" borderRadius={6} p={2} bgcolor="#1a1a1a">
      <Grid container spacing={2} alignItems="flex-start">

        <Grid item xs={6} sm={2}>
          <img src={equipment.image} alt={equipment.name} className={classes.spellImage} />
        </Grid>

        <Grid item xs={12} sm={4}>
          <Typography variant="body1" style={{ marginBottom: 4 }}>{equipment.name}</Typography>
          {[...staticAffixes, ...randomAffixes].map((affix, idx) => (
            <Box display="flex" alignItems="center" key={idx} mb={0.5}>
              
            <Typography variant="caption">
              {affix.affix === "Random"
                ? `+${affix.type} - Random`
                : idAffix[String(affix.affix)] || affix.affix}
            </Typography>


            </Box>
          ))}
        </Grid>



        <Grid item xs={12} sm={4}>
          <Typography variant="body2" color="textSecondary">💰 {equipment.currencies.gold} Gold</Typography>
          <Grid container spacing={3}>
            {splitMaterials.map((matGroup, groupIdx) => (
              <Grid item xs={6} key={groupIdx}>
                {matGroup.map((mat, idx) => (
                  <Box display="flex" alignItems="center" key={idx} mb={0.5}>
                    <img src={mat.icon} alt="material" className={classes.materialIcon} />
                    <Typography variant="caption">
                      {mat.amount}× {getMaterialNameById(mat.material)}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Typography variant="subtitle2">Where to Craft?</Typography>
          <a
            href="/runiverse/support"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#4fc3f7", textDecoration: "underline" }}
          >
            Green City Forges
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};


const LevelSection = ({ levelRange, description, monsters, upgradeSpells, equipmentList = [], sideQuests = [] }) => {
  const classes = useStyles();

      const flatEquipments = guideEquipment.flat();
    const matchedEquipment = equipmentList.map(name =>
      flatEquipments.find(eq => eq.name === name)
    ).filter(Boolean);


  const renderLocation = (location) => {
    if (!location) return null;
    const parts = location.split(" / ").map((part, index) => {
      const trimmed = part.trim();
      const url = regionLinks[trimmed];
      return url ? (
        <a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "#4fc3f7", textDecoration: "underline" }}
        >
          {trimmed}
        </a>
      ) : (
        <span key={index}>{trimmed}</span>
      );
    });
    return parts.reduce((prev, curr, i) => i === 0 ? [curr] : [...prev, " / ", curr], []);
  };

  return (
    <Box mb={2} p={1} border="1px solid #444" borderRadius={6}>
      <Typography variant="subtitle1" gutterBottom>Level {levelRange}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Grid container spacing={1} justifyContent="flex-start">
        {monsters.map(monster => (
          <Grid item xs={12} sm={4} md={4} key={monster.name}>
            <Box className={classes.monsterCard}>
              <img src={monster.image} alt={monster.name} className={classes.monsterImage} />
              <Box className={classes.monsterDetails}>
                <Typography variant="body2">{monster.name}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {renderLocation(monster.location)}
                </Typography>
                {monster.keyDrops && (
                  <Typography variant="caption" style={{ color: '#ffcc00', fontWeight: 500 }}>
                    🎒 Key Drops: {monster.keyDrops}
                  </Typography>
                )}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
        {sideQuests.map((quest, idx) => (
          <Box key={idx} mt={2}>
            <CollapsibleQuest {...quest} />
          </Box>
        ))}

        {upgradeSpells && upgradeSpells.map((spell, i) => (
          <Box key={i} mt={2}>
            <UpgradeSpellsSection spellName={spell} />
          </Box>
        ))}

        {matchedEquipment.map((eq, i) => (
          <Box key={i} mt={2}>
            <EquipmentSection equipment={eq} />
          </Box>
        ))}


    </Box>
  );
};

const LevelUpGuide = () => {
  const classes = useStyles();
  const questLevelMap = sideQuests.reduce((map, quest) => {
    if (!quest.levelRange) return map;
    if (!map[quest.levelRange]) map[quest.levelRange] = [];
    map[quest.levelRange].push(quest);
    return map;
  }, {});

  return (
    <div>
      <Helmet>
        <title>Level Up Guide | Forgotten Runiverse</title>
        <meta name="description" content="Leveling up guide for monsters, equipment, and quests in Runiverse." />
        <meta property="og:title" content="Level Up Guide | Forgotten Runiverse" />
        <meta property="og:description" content="Efficient level progression and monster farming strategy." />
        <meta property="og:image" content="%PUBLIC_URL%/assets/social-runiverse.jpg" />
        <meta property="og:url" content="https://chuckfresco.com/runiverse/level-up-guide" />
      </Helmet>
<Hero></Hero>
      <SectionAlternate className={classes.sectionBreadcrumb}>
        <Breadcrumb data={breadcrumb} />
      </SectionAlternate>

      <Section className={classes.halfWidthSection}>
        {levelSections.map((section, index) => (
          <LevelSection
            key={index}
            levelRange={section.levelRange}
            description={section.description}
            monsters={section.monsters}
            sideQuests={questLevelMap[section.levelRange] || []}
            upgradeSpells={section.upgradeSpells}
            equipmentList={section.equipmentList}

          />
        ))}
      </Section>
    </div>
  );
};

export default LevelUpGuide;
