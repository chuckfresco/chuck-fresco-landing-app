import React, { useMemo, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Helmet } from "react-helmet";
import {
  Box,
  CssBaseline,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  ThemeProvider,
  Typography,
  createTheme
} from "@material-ui/core";
import { Breadcrumb, PixelCode } from "components/molecules";
import { Section, SectionAlternate } from "components/organisms";
import { pixelsBreadcrumb } from "components/molecules/Breadcrumb/data";
import Hero from "views/PixelsLandInventory/components/Hero";
import "../pixels-theme.css";

const animalAssetPath = "/assets/pixels/land/animals/";

const stageLabels = ["Adult", "Baby I", "Baby II", "Baby III", "Baby IV"];

const makeBasicDrops = (itemNames, levelMap, mix, adultQty, babyQtyA, babyQtyB) => ({
  adult: itemNames.slice(0, 4).map(name => ({
    name,
    level: levelMap[name],
    mix,
    quantity: adultQty
  })),
  baby1: itemNames.slice(0, 3).map(name => ({
    name,
    level: levelMap[name],
    mix,
    quantity: babyQtyA
  })),
  baby2: [
    ...itemNames.slice(0, 3).map(name => ({
      name,
      level: levelMap[name],
      mix,
      quantity: babyQtyB
    })),
    itemNames[4]
  ].filter(Boolean).map(item =>
    typeof item === "string"
      ? { name: item, level: levelMap[item], mix, quantity: babyQtyB }
      : item
  ),
  baby3: [
    ...itemNames.slice(0, 3).map(name => ({
      name,
      level: levelMap[name],
      mix,
      quantity: babyQtyB
    })),
    itemNames[5]
  ].filter(Boolean).map(item =>
    typeof item === "string"
      ? { name: item, level: levelMap[item], mix, quantity: babyQtyB }
      : item
  ),
  baby4: [
    ...itemNames.slice(0, 3).map(name => ({
      name,
      level: levelMap[name],
      mix,
      quantity: babyQtyB + 1
    })),
    itemNames[4],
    itemNames[5],
    itemNames[6]
  ].filter(Boolean).map(item =>
    typeof item === "string"
      ? { name: item, level: levelMap[item], mix, quantity: babyQtyB + 1 }
      : item
  )
});

const animalGroups = [
  {
    name: "Chickens",
    slug: "chicken",
    adultIcon: "chicken.png",
    babyIconBase: "ent_baby_chicken",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Egg",
        "Seltsam Egg",
        "Chicken Offspring",
        "Eggsplosive",
        "Golden Egg",
        "Space Egg"
      ],
      {
        "Animal Turd": 0,
        Egg: 0,
        "Seltsam Egg": 8,
        "Chicken Offspring": 15,
        Eggsplosive: 12,
        "Golden Egg": 15,
        "Space Egg": 20
      },
      "Farmamix",
      1,
      1,
      2
    )
  },
  {
    name: "Slugs",
    slug: "slug",
    adultIcon: "sluggery.png",
    babyIconBase: "ent_baby_slug",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Silk Fiber",
        "Silk Slug Slime",
        "Slug Offspring",
        "Silk Slug Spider",
        "Shimmer Slime",
        "Queen Spider"
      ],
      {
        "Animal Turd": 0,
        "Silk Fiber": 0,
        "Silk Slug Slime": 6,
        "Slug Offspring": 20,
        "Silk Slug Spider": 18,
        "Shimmer Slime": 20,
        "Queen Spider": 32
      },
      "Apimix",
      1,
      1,
      2
    )
  },
  {
    name: "Bee",
    slug: "bee",
    adultIcon: "apiary.png",
    babyIconBase: "ent_baby_bee",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Honey",
        "Bees Wax",
        "Bee Offspring",
        "Royal Jelly",
        "Pollen",
        "Baby Bee Wings"
      ],
      {
        "Animal Turd": 0,
        Honey: 0,
        "Bees Wax": 8,
        "Bee Offspring": 25,
        "Royal Jelly": 23,
        Pollen: 28,
        "Baby Bee Wings": 38
      },
      "Apimix",
      2,
      2,
      4
    )
  },
  {
    name: "Cow",
    slug: "cow",
    adultIcon: "cow.png",
    babyIconBase: "ent_baby_cow",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Milk",
        "Dairy Fat",
        "Cow Offspring",
        "Buttermilk",
        "Cheese Clump",
        "Chewed Grass Clump"
      ],
      {
        "Animal Turd": 0,
        Milk: 5,
        "Dairy Fat": 10,
        "Cow Offspring": 25,
        Buttermilk: 25,
        "Cheese Clump": 32,
        "Chewed Grass Clump": 38
      },
      "Farmamix",
      1,
      1,
      2
    )
  },
  {
    name: "Sheep",
    slug: "sheep",
    adultIcon: "sheep.png",
    babyIconBase: "ent_baby_sheep",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Wool Wad",
        "Lanolin Oil",
        "Sheep Offspring",
        "Fine Baby Wool Puff",
        "Knotted Wool",
        "Mini Hoof Dust"
      ],
      {
        "Animal Turd": 0,
        "Wool Wad": 8,
        "Lanolin Oil": 15,
        "Sheep Offspring": 30,
        "Fine Baby Wool Puff": 32,
        "Knotted Wool": 40,
        "Mini Hoof Dust": 50
      },
      "Choco Sauce",
      1,
      1,
      2
    )
  },
  {
    name: "Turkey",
    slug: "turkey",
    adultIcon: "turkey.png",
    babyIconBase: "ent_baby_turkey",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Turkey Egg",
        "Turkey Feather",
        "Turkey Offspring",
        "Blue Feather",
        "Colorful Feather",
        "Rainbow Turkey Bristles"
      ],
      {
        "Animal Turd": 0,
        "Turkey Egg": 3,
        "Turkey Feather": 18,
        "Turkey Offspring": 40,
        "Blue Feather": 45,
        "Colorful Feather": 52,
        "Rainbow Turkey Bristles": 60
      },
      "Farmamix",
      2,
      2,
      4
    )
  },
  {
    name: "Pig",
    slug: "pig",
    adultIcon: "ent_legacy_pig.png",
    babyIconBase: "ent_baby_pig",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Truffles",
        "Pig Milk",
        "Pig Offspring",
        "Baby Pig Wings",
        "Veggie Bacon",
        "Mud Cast"
      ],
      {
        "Animal Turd": 18,
        Truffles: 18,
        "Pig Milk": 22,
        "Pig Offspring": 34,
        "Baby Pig Wings": 34,
        "Veggie Bacon": 36,
        "Mud Cast": 42
      },
      "Choco Sauce",
      2,
      2,
      4
    )
  },
  {
    name: "Goat",
    slug: "goat",
    adultIcon: "goat.png",
    babyIconBase: "ent_baby_goat",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Shedded Goat Fur",
        "Goat Milk",
        "Goat Offspring",
        "Tiny Horn Flakes",
        "Goat Mohair",
        "Sunbaked Horn Tip"
      ],
      {
        "Animal Turd": 25,
        "Shedded Goat Fur": 25,
        "Goat Milk": 30,
        "Goat Offspring": 50,
        "Tiny Horn Flakes": 48,
        "Goat Mohair": 55,
        "Sunbaked Horn Tip": 70
      },
      "Farmamix",
      2,
      2,
      4
    )
  },
  {
    name: "Duck",
    slug: "duck",
    adultIcon: "ent_legacy_duck.png",
    babyIconBase: "ent_baby_duck",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Duck Egg",
        "Duck Feather",
        "Duck Offspring",
        "Pond Slime",
        "Waterweed",
        "Lucky Feather"
      ],
      {
        "Animal Turd": 40,
        "Duck Egg": 40,
        "Duck Feather": 45,
        "Duck Offspring": 60,
        "Pond Slime": 56,
        Waterweed: 68,
        "Lucky Feather": 80
      },
      "Algamix",
      1,
      1,
      2
    )
  },
  {
    name: "Dragon",
    slug: "dragon",
    adultIcon: "dragon.png",
    babyIconBase: "ent_baby_dragon",
    stages: makeBasicDrops(
      [
        "Animal Turd",
        "Dragon Scale",
        "Draconic Essence",
        "Dragon Offspring",
        "Ember Shard",
        "Aether Thread",
        "Prismatic Core"
      ],
      {
        "Animal Turd": 70,
        "Dragon Scale": 70,
        "Draconic Essence": 75,
        "Dragon Offspring": 82,
        "Ember Shard": 82,
        "Aether Thread": 85,
        "Prismatic Core": 90
      },
      "Mystic Mix",
      1,
      1,
      2
    )
  }
];

const darkTheme = createTheme({
  palette: {
    type: "dark",
    background: {
      paper: "#29255d",
      default: "#12112f"
    }
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: "#29255d",
        borderColor: "#7770af"
      }
    },
    MuiTableRow: {
      root: {
        backgroundColor: "#29255d",
        "&:nth-of-type(even)": {
          backgroundColor: "#211e50"
        },
        "&$hover:hover": {
          backgroundColor: "#39317d"
        }
      }
    },
    MuiTableCell: {
      root: {
        padding: "8px 10px",
        fontSize: "0.82rem",
        verticalAlign: "top",
        color: "#fffce8",
        borderBottom: "1px solid rgba(155, 123, 255, 0.3)"
      },
      head: {
        backgroundColor: "#642cff",
        color: "#fff",
        fontWeight: "bold",
        whiteSpace: "nowrap",
        borderBottom: "3px solid #37159c",
        textShadow: "2px 2px 0 #27106e"
      }
    }
  }
});

const useStyles = makeStyles(theme => ({
  halfWidthSection: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    margin: 0,
    width: "100%",
    maxWidth: "100%",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: 5,
      paddingRight: 5,
      paddingTop: 5
    }
  },
  sectionBreadcrumb: {
    "& > *": {
      maxWidth: "760px !important",
      paddingTop: "8px !important",
      paddingBottom: "8px !important"
    }
  },
  controls: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    alignItems: "flex-start",
    marginBottom: 12
  },
  searchRow: {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%"
  },
  search: {
    width: 460,
    marginRight: 16,
    marginBottom: 12,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  clearButton: {
    backgroundColor: "#444",
    border: "1px solid #777",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: 4,
    cursor: "pointer",
    height: 40,
    marginBottom: 12,
    font: "inherit",
    "&:hover": {
      backgroundColor: "#555"
    }
  },
  select: {
    width: 260,
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  tableContainer: {
    width: "100%",
    background: "#29255d",
    border: "2px solid #7770af",
    borderRadius: 8,
    overflowX: "auto"
  },
  stageCell: {
    minWidth: 310,
    maxWidth: 360
  },
  stageHeader: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8
  },
  imageBox: {
    border: "1px solid #3b2b85",
    backgroundColor: "#171034",
    borderRadius: 10,
    width: 42,
    height: 42,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    flex: "0 0 auto"
  },
  animalImage: {
    width: "85%",
    height: "85%",
    objectFit: "contain"
  },
  adultFallback: {
    width: 42,
    height: 42,
    borderRadius: 10,
    background: "#312e81",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 17,
    fontWeight: 900,
    border: "1px solid #4c3fb0"
  },
  tierBadge: {
    position: "absolute",
    top: 2,
    left: 3,
    color: "#fff",
    fontSize: "0.58rem",
    fontWeight: "bold",
    lineHeight: 1,
    textShadow: "0 1px 2px #000, 0 0 2px #000",
    pointerEvents: "none"
  },
  stageLabel: {
    color: "#e6e7ff",
    fontSize: 13,
    fontWeight: 800
  },
  dropList: {
    display: "grid",
    gridTemplateRows: "repeat(3, auto)",
    gridAutoFlow: "column",
    gridAutoColumns: 142,
    gap: 5,
    alignItems: "start"
  },
  dropItem: {
    border: "1px solid #625ba0",
    borderRadius: 6,
    background: "#17143d",
    padding: "5px 7px"
  },
  dropName: {
    color: "#aebfff",
    fontFamily: 'Lato, Arial, sans-serif !important',
    fontSize: 13,
    fontWeight: 800,
    letterSpacing: "0.01em",
    lineHeight: 1.3,
    whiteSpace: "normal"
  },
  dropMeta: {
    color: "#c7c9d4",
    display: "flex",
    flexWrap: "wrap",
    gap: 5,
    fontFamily: 'Lato, Arial, sans-serif !important',
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.01em",
    lineHeight: 1.35,
    marginTop: 2
  },
  dot: {
    color: "#7f8495"
  },
  emptyState: {
    padding: 28,
    color: "#c7c9d4",
    textAlign: "center"
  }
}));

const stageKeyByIndex = ["adult", "baby1", "baby2", "baby3", "baby4"];
const tierByIndex = [null, "I", "II", "III", "IV"];
const allStageIndexes = stageLabels.map((stage, index) => index);
const singularAnimalNames = {
  Chickens: "Chicken",
  Slugs: "Slug"
};

const getDropSearchText = drop =>
  `${drop.name} lv ${drop.level} ${drop.mix} x${drop.quantity}`.toLowerCase();

const stageMatchesSearch = (animal, stageIndex, search) => {
  if (!search) return true;

  return animal.stages[stageKeyByIndex[stageIndex]]
    .some(drop => getDropSearchText(drop).includes(search));
};

const AnimalImage = ({ animal, stageIndex, classes }) => {
  const [failed, setFailed] = React.useState(false);
  const isAdult = stageIndex === 0;
  const imageName = isAdult
    ? animal.adultIcon
    : `${animal.babyIconBase}_${stageIndex}.png`;
  const src = `${animalAssetPath}${imageName}`;

  if (failed) {
    return <div className={classes.adultFallback}>{animal.name.charAt(0)}</div>;
  }

  return (
    <div className={classes.imageBox}>
      {!isAdult && <span className={classes.tierBadge}>{tierByIndex[stageIndex]}</span>}
      <img
        className={classes.animalImage}
        src={src}
        alt={`${animal.name} ${stageLabels[stageIndex]}`}
        onError={() => setFailed(true)}
      />
    </div>
  );
};

const DropItem = ({ drop, classes }) => (
  <div className={classes.dropItem}>
    <div className={classes.dropName}>{drop.name}</div>
    <div className={classes.dropMeta}>
      <span>Lv {drop.level}</span>
      <span className={classes.dot}>·</span>
      <span>{drop.mix} x{drop.quantity}</span>
    </div>
  </div>
);

const StageCell = ({ animal, stageIndex, classes }) => {
  const drops = animal.stages[stageKeyByIndex[stageIndex]];
  const animalName = singularAnimalNames[animal.name] || animal.name;
  const label = stageIndex === 0
    ? `Adult ${animalName}`
    : stageLabels[stageIndex];

  return (
    <Box>
      <div className={classes.stageHeader}>
        <AnimalImage animal={animal} stageIndex={stageIndex} classes={classes} />
        <span className={classes.stageLabel}>{label}</span>
      </div>
      <div className={classes.dropList}>
        {drops.map(drop => (
          <DropItem key={`${drop.name}-${drop.quantity}`} drop={drop} classes={classes} />
        ))}
      </div>
    </Box>
  );
};

const PixelsAnimalDrops = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAnimal, setSelectedAnimal] = useState("all");

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedAnimal("all");
  };

  const filteredRows = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return animalGroups.map(animal => {
      if (selectedAnimal !== "all" && animal.slug !== selectedAnimal) {
        return null;
      }

      const visibleStageIndexes = search
        ? allStageIndexes.filter(stageIndex => stageMatchesSearch(animal, stageIndex, search))
        : allStageIndexes;

      if (!visibleStageIndexes.length) return null;

      return { animal, visibleStageIndexes };
    }).filter(Boolean);
  }, [searchTerm, selectedAnimal]);

  const visibleStageIndexes = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();
    if (!search) return allStageIndexes;

    const stageIndexes = new Set();
    filteredRows.forEach(row => {
      row.visibleStageIndexes.forEach(stageIndex => stageIndexes.add(stageIndex));
    });

    return allStageIndexes.filter(stageIndex => stageIndexes.has(stageIndex));
  }, [filteredRows, searchTerm]);

  return (
    <div className="pixels-page">
      <Helmet>
        <title>Pixels Animal Drops | Pixels Online Guide</title>
        <meta
          name="description"
          content="Browse Pixels animal drops for adult animals and Baby I through Baby IV tiers."
        />
        <meta property="og:title" content="Pixels Animal Drops" />
        <meta
          property="og:description"
          content="Adult and baby animal drop tables for Pixels Online."
        />
      </Helmet>

      <Hero
        title="Pixels Animal Drops"
        compact
      />
      <PixelCode />

      <SectionAlternate className={`${classes.sectionBreadcrumb} pixels-page__crumbs`}>
        <Breadcrumb data={pixelsBreadcrumb} variant="pixels" />
      </SectionAlternate>

      <Section className={`${classes.halfWidthSection} pixels-page__content`}>
        <div style={{ width: "100%", overflowX: "auto" }}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />

            <Box p={2}>
              <Typography className="pixels-section-title" variant="h5" gutterBottom>
                Pixels Animal Drops
              </Typography>

              <div className={classes.controls}>
              <div className={classes.searchRow}>
                <TextField
                  className={classes.search}
                  label="Search drops"
                  variant="outlined"
                  value={searchTerm}
                  onChange={event => setSearchTerm(event.target.value)}
                />
                <button
                  type="button"
                  className={classes.clearButton}
                  onClick={clearFilters}
                >
                  Clear
                </button>
              </div>
              <Select
                className={classes.select}
                displayEmpty
                variant="outlined"
                value={selectedAnimal}
                onChange={event => setSelectedAnimal(event.target.value)}
                renderValue={selected => (
                  selected === "all"
                    ? "All animals"
                    : animalGroups.find(animal => animal.slug === selected).name
                )}
              >
                <MenuItem value="all">All animals</MenuItem>
                {animalGroups.map(animal => (
                  <MenuItem key={animal.slug} value={animal.slug}>
                    {animal.name}
                  </MenuItem>
                ))}
              </Select>
              </div>

              <TableContainer component={Paper} className={classes.tableContainer}>
                <Table stickyHeader size="small" aria-label="Pixels animal drops table">
                <TableHead>
                  <TableRow>
                    {visibleStageIndexes.map(stageIndex => (
                      <TableCell key={stageLabels[stageIndex]} className={classes.stageCell}>
                        {stageLabels[stageIndex]}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map(({ animal, visibleStageIndexes: rowStageIndexes }) => (
                    <TableRow key={animal.slug} hover>
                      {visibleStageIndexes.map(stageIndex => (
                        <TableCell key={`${animal.slug}-${stageLabels[stageIndex]}`} className={classes.stageCell}>
                          {rowStageIndexes.includes(stageIndex) && (
                            <StageCell
                              animal={animal}
                              stageIndex={stageIndex}
                              classes={classes}
                            />
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                  {!filteredRows.length && (
                    <TableRow>
                      <TableCell colSpan={visibleStageIndexes.length || 1}>
                        <div className={classes.emptyState}>No animal drops match that filter.</div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
              </TableContainer>
            </Box>
          </ThemeProvider>
        </div>
      </Section>
    </div>
  );
};

export default PixelsAnimalDrops;
