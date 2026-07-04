import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Helmet } from 'react-helmet';
import { Section, SectionAlternate } from 'components/organisms';
import { Breadcrumb, PixelCode } from 'components/molecules';
import { Hero } from './components';
import { pixelsBreadcrumb } from 'components/molecules/Breadcrumb/data';

const useStyles = makeStyles(theme => ({
sectionBreadcrumb: {
  '& > *': {
    maxWidth: '760px !important',
    paddingTop: '8px !important',
    paddingBottom: '8px !important',
  },
},
riddleSection: {
  padding: '40px 20px 0px 20px', // top/right/bottom/left
  background: '#0c133e',
  color: '#ffffff',
  fontFamily: 'monospace',

  // Remove padding from inner div if SectionAlternate applies extra padding
  '& .section-alternate__content': {
    paddingBottom: '0px !important',
  },
},

  riddleBlock: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    marginBottom: 20,
    border: '1px solid #555',
    borderRadius: 12,
    padding: 20,
    backgroundColor: '#1b2349',
  },
  riddleTextBlock: {
    flex: '1 1 60%',
    marginRight: 20,
  },
  solutionBlock: {
    flex: '1 1 35%',
    backgroundColor: '#111933',
    padding: 15,
    borderRadius: 8,
    border: '1px solid #333',
  },
  riddleHeader: {
    fontSize: 22,
    marginBottom: 10,
    color: '#FFD700',
  },
  riddleText: {
    fontSize: 16,
    marginBottom: 8,
  },
  solution: {
    color: '#90ee90',
    fontWeight: 'bold',
    fontSize: 16,
  },
  why: {
    fontSize: 14,
    color: '#add8e6',
    marginTop: 5,
  },
  rewardSection: {
  padding: '0 !important',
  margin: '0 !important',
  background: '#0c133e !important',
},
}));

const riddles = [
  {
    title: 'Riddle 1',
    riddle: `I hide where fortune's favor lies,
A verdant anomaly beneath sunny skies.
Though fields of kin may stretch afar,
My fourth leaf whispers of a lucky star`,
    solution: '4 Leaf Clover',
    image: '/assets/pixels/quests/alchemist-concoction/4-leaf-clover.png',
    why: '"Verdant anomaly" and "fourth leaf" point to the rare clover associated with luck.'
  },
  {
    title: 'Riddle 2',
    riddle: `From a proud bird, with plumage grand,
A quill so light, held in your hand.
Though flight it aids, its journey's done,
A single plume, beneath the sun.`,
    solution: 'Turkey Feather',
    image: '/assets/pixels/quests/alchemist-concoction/turkey-feather.png',
    why: '"Proud bird" and "quill" clearly describe a feather from a turkey used for writing.'
  },
  {
    title: 'Riddle 3',
    riddle: `From bursting spheres, a sweet delight I rise,
Baked in a crust that crumbles with surprise.
A taste of joy, a festive hue,
What baked confection am I, fresh for you?`,
    solution: 'Popberry Pie',
    image: '/assets/pixels/quests/alchemist-concoction/popberry-pie.png',
    why: '"Sweet delight," "bursting spheres," and "baked in a crust" describe a berry pie.'
  },
  {
    title: 'Riddle 4',
    riddle: `From wounded bark, a sticky tear I flow,
A lifeblood essence, slow and low.
Though trees may weep their amber stain,
I hold the promise of growth again.`,
    solution: 'Sap',
    image: '/assets/pixels/quests/alchemist-concoction/sap.png',
    why: '"Sticky tear," "lifeblood," and "amber stain" refer to the substance trees release when injured.'
  },
  {
    title: 'Riddle 5',
    riddle: `The carpenter's whisper, fine and light,
A fragrant residue of day and night.
From shaping wood, I softly fall,
A testament to craft, embracing all.`,
    solution: 'Sawdust',
    image: '/assets/pixels/quests/alchemist-concoction/sawdust.png',
    why: '"Carpenter’s whisper" and "from shaping wood" describe the fine dust made during woodworking.'
  },
  {
    title: 'Riddle 6',
    riddle: `Unlike its kin, a curious prize,
With markings strange before your eyes.
Perhaps it hums a silent tune,
Hatching wonders beneath the moon.`,
    solution: 'Seltsam Egg',
    image: '/assets/pixels/quests/alchemist-concoction/seltsam-egg.png',
    why: '"Strange markings" and "hatching wonders" suggest a magical or rare egg.'
  },
  {
    title: 'Riddle 7',
    riddle: `Forged in fire, strong and keen,
To bind the structures in between.
Of reddish hue, I hold my might,
Fastening futures, day and night.`,
    solution: 'Copperite Nail',
    image: '/assets/pixels/quests/alchemist-concoction/copperite-nail.png',
    why: '"Forged in fire," "reddish hue," and "fastening" all describe a metal nail.'
  },
  {
    title: 'Riddle 8',
    riddle: `Deep in the veins, where pickaxes swing,
A crystalline structure, rarely we bring.
Its purpose veiled, its power untold,
A miner's find, more precious than gold.`,
    solution: 'Ochrux Matrix',
    image: '/assets/pixels/quests/alchemist-concoction/ochrux-matrix.png',
    why: '"Crystalline structure" and "miner’s find" describe a rare gem from underground.'
  },
  {
    title: 'Riddle 9',
    riddle: `Within their walls of hexagonal art,
A golden treasure, set far apart.
By tireless dancers, a sweet reward,
From floral whispers, carefully stored.`,
    solution: 'Honey',
    image: '/assets/pixels/quests/alchemist-concoction/honey.png',
    why: '"Hexagonal art" and "sweet reward" refer to bees making honey in a hive.'
  },
  {
    title: 'Riddle 10',
    riddle: `Ground from earth, a silken dust,
That takes on form, when given trust.
From shapeless mass, new visions bloom,
Released by water, from earthy tomb.`,
    solution: 'Clayum Powder',
    image: '/assets/pixels/quests/alchemist-concoction/clayum-powder.png',
    why: '"Silken dust" and "released by water" point to clay that becomes moldable.'
  }
];

const PixelsQuestAlinaRecipe = () => {
  const classes = useStyles();

  return (
    <div>
      <Helmet>
  <title> The Alchemist’s Concoction Quest | Pixels</title>
  <meta name="description" content="Solve the riddles of Alina's lost recipe in Pixels Online. Discover each clue, its solution, and the reason behind it." />
  <meta property="og:title" content="Pixels Quest - Alina's Recipe Riddles" />
  <meta property="og:description" content="A stylish breakdown of each riddle and answer from the Ancient Elixir quest in Pixels." />
</Helmet>

<Hero />
<PixelCode />

<SectionAlternate className={classes.sectionBreadcrumb}>
  <Breadcrumb data={pixelsBreadcrumb} />
</SectionAlternate>

<Section style={{ paddingTop: 0, paddingBottom: 0 }}>
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/O6a4TCZIHnM"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    ></iframe>
  </div>
</Section>

      <SectionAlternate className={classes.riddleSection} style={{ paddingTop: 0 }}>
        {riddles.map((item, idx) => (
          <div className={classes.riddleBlock} key={idx}>
            <div className={classes.riddleTextBlock}>
              <div className={classes.riddleHeader}>🧩 {item.title}</div>
              <div className={classes.riddleText}><strong>Riddle:</strong> <br />{item.riddle}</div>
            </div>
            <div className={classes.solutionBlock}>
              <div className={classes.solution}>
  Solution: {item.solution}<br />
  <img src={item.image} width="48" alt={item.solution} />
</div>
              <div className={classes.why}>Why: {item.why}</div>
            </div>
          </div>
        ))}

        <div className={classes.riddleBlock} style={{ marginBottom: 0 }}>
        <div className={classes.riddleTextBlock}>
          <div className={classes.riddleHeader}>🧩 Riddle 11 – Order of Recipes</div>
            <div className={classes.riddleText}><strong>Riddle:</strong><br />A sturdy mystery sneaks its way in, to the softest plume, a whispered dream...<br />A sturdy mystery sneaks its way in, to the softest plume, a whispered dream.<br />From woven art, a golden secret glows, before the sweetest blush, where summer softly glows.<br />A shiny tear that binds the dust, softly, silently, a future cast.<br />First from the soil, a verdant hope, a strange design, a wonder to unfold.<br />Where work’s fine dust upon the breeze does glide, and deepest stone, where unseen powers hide.<br />Find their true place, and magic then will bloom. To lift the shadows from the Aetherbloom.</div>
          </div>
          <div className={classes.solutionBlock}>
  <div className={classes.solution}>Solution Order:</div>
  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '10px' }}>
    {[
      { name: 'Copperite Nail', image: '/assets/pixels/quests/alchemist-concoction/copperite-nail.png' },
      { name: 'Turkey Feather', image: '/assets/pixels/quests/alchemist-concoction/turkey-feather.png' },
      { name: 'Honey', image: '/assets/pixels/quests/alchemist-concoction/honey.png' },
      { name: 'Popberry Pie', image: '/assets/pixels/quests/alchemist-concoction/popberry-pie.png' },
      { name: 'Sap', image: '/assets/pixels/quests/alchemist-concoction/sap.png' },
      { name: 'Clayum Powder', image: '/assets/pixels/quests/alchemist-concoction/clayum-powder.png' },
      { name: '4 Leaf Clover', image: '/assets/pixels/quests/alchemist-concoction/4-leaf-clover.png' },
      { name: 'Seltsam Egg', image: '/assets/pixels/quests/alchemist-concoction/seltsam-egg.png' },
      { name: 'Sawdust', image: '/assets/pixels/quests/alchemist-concoction/sawdust.png' },
      { name: 'Ochrux Matrix', image: '/assets/pixels/quests/alchemist-concoction/ochrux-matrix.png' }
    ].map((item, index) => (
      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ width: '20px' }}>{index + 1}.</span>
        <img src={item.image} width="40" alt={item.name} />
        <span>{item.name}</span>
      </div>
    ))}
  </div>
</div>
<div className={classes.solutionBlock}>
  <div className={classes.why}>
              <strong>Why:</strong><br />
1. <b>Copperite Nail</b> – "Sturdy mystery" and "binds the dust" describe a strong, solid object used to fasten, matching a nail forged in fire.<br />
2. <b>Turkey Feather</b> – "Softest plume" and "whispered dream" evoke something delicate and airy like a feather from a proud bird.<br />
3. <b>Honey</b> – "Woven art" refers to a honeycomb’s hexagonal shape; "golden secret" alludes to the precious honey within.<br />
4. <b>Popberry Pie</b> – "Sweetest blush" and "summer softly glows" conjure the image of a warm, colorful pie made from berries.<br />
5. <b>Sap</b> – "Shiny tear that binds the dust" suggests the golden, sticky essence that seeps from trees and hardens over time.<br />
6. <b>Clayum Powder</b> – "Future cast" and "released by water" describe the transformation clay undergoes when forming new objects.<br />
7. <b>4 Leaf Clover</b> – "First from the soil" and "verdant hope" point to a rare green plant associated with luck and new growth.<br />
8. <b>Seltsam Egg</b> – "Strange design" and "wonder to unfold" imply mystery and hidden potential waiting to hatch.<br />
9. <b>Sawdust</b> – "Work’s fine dust" and "breeze does glide" fit the byproduct of woodworking that floats through air.<br />
10. <b>Ochrux Matrix</b> – "Deepest stone" and "unseen powers" suggest a mystical crystal mined from the earth, brimming with magic.
            </div>
          </div>
        </div>
      </SectionAlternate>

    <SectionAlternate className={classes.rewardSection}>
      <div
        style={{
          maxWidth: 1200, // match SectionAlternate’s content width
          margin: '0 auto',
          padding: '10px 20px',
          background: '#1b2349',
          borderRadius: 12,
          border: '1px solid #555',
          color: '#fff',
          fontFamily: 'monospace'
        }}
      >
        <div style={{ fontSize: 22, marginBottom: 10, color: '#FFD700' }}>🎁 Quest Rewards</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
          <img src="/assets/pixels/quests/alchemist-concoction/aether-tree-export.png" width="48" alt="Aether Tree" />
          <span>1x Aether Tree</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img src="/assets/pixels/quests/alchemist-concoction/clover-fruit-barrel-recipe-export.png" width="48" alt="Clover Fruit Barrel Recipe" />
          <span>1x Clover Fruit Barrel Recipe</span>
        </div>
      </div>
    </SectionAlternate>
</div>
);
};

export default PixelsQuestAlinaRecipe;
