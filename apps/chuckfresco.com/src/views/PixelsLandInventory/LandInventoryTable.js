import React, { useState, useMemo, useEffect } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  Checkbox,
  ListItemText
} from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CancelIcon from "@material-ui/icons/Cancel";
import VisibilityIcon from "@material-ui/icons/Visibility";

const landInventoryUrl =
  process.env.REACT_APP_LAND_INVENTORY_URL ||
  "/assets/pixels/land/landInventory.json";
const landEntityApiUrlTemplate =
  process.env.REACT_APP_PIXELS_LAND_API_URL_TEMPLATE ||
  "/v1/infiniportal/farm_details/pixelsNFTFarm-{landNumber}";

const landIcons = {
  Space: "/assets/pixels/land/space-land-purple.png",
  Water: "/assets/pixels/land/water-land-blue.png",
  Grass: "/assets/pixels/land/grass-land-green.png"
};

const defaultIcon = "/assets/lands/default-land.png";
const boostIconPath = "/assets/pixels/land/boosts/";
const defaultBoostIcon = "/assets/pixels/land/boosts/default-boost.png";

const darkTheme = createTheme({
  palette: { type: "dark" },
  overrides: {
    MuiTableCell: {
      root: {
        padding: "8px 10px",
        fontSize: "0.85rem",
        whiteSpace: "nowrap",
        verticalAlign: "top"
      },
      head: {
        backgroundColor: "#333",
        color: "#fff",
        fontWeight: "bold"
      }
    }
  }
});

const iconBox = {
  border: "1px solid #555",
  backgroundColor: "#1a1a1a",
  borderRadius: 10,
  width: 42,
  height: 42,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const statusIconStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const compactColumnStyle = {
  width: 64,
  minWidth: 64,
  maxWidth: 64,
  textAlign: "center",
  paddingLeft: 6,
  paddingRight: 6
};

const typeColumnStyle = {
  width: 56,
  minWidth: 56,
  maxWidth: 56,
  paddingLeft: 6,
  paddingRight: 6
};

const landNumberColumnStyle = {
  width: 76,
  minWidth: 76,
  maxWidth: 76,
  paddingLeft: 6,
  paddingRight: 6
};

const iconColumnStyle = {
  width: 200,
  minWidth: 180,
  maxWidth: 220
};

const previewLinkStyle = {
  color: "#b8a7ff",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center"
};

const boostIconBox = {
  position: "relative",
  border: "1px solid #3b2b85",
  backgroundColor: "#171034",
  borderRadius: 10,
  width: 42,
  height: 42,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
  marginBottom: 6
};

const boostCountBubble = {
  position: "absolute",
  right: -6,
  bottom: -6,
  backgroundColor: "#6d35ff",
  color: "#fff",
  borderRadius: "50%",
  width: 22,
  height: 22,
  fontSize: "0.8rem",
  fontWeight: "bold",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  lineHeight: 1
};

const tierBadge = {
  position: "absolute",
  top: 2,
  left: 3,
  color: "#fff",
  fontSize: "0.58rem",
  fontWeight: "bold",
  lineHeight: 1,
  textShadow: "0 1px 2px #000, 0 0 2px #000",
  pointerEvents: "none"
};

const iconTextFallback = {
  border: "1px solid #3b2b85",
  backgroundColor: "#171034",
  borderRadius: 10,
  color: "#fff",
  display: "inline-flex",
  alignItems: "center",
  minHeight: 42,
  padding: "0 10px",
  marginRight: 8,
  marginBottom: 6
};

const compactSelectStyle = {
  minWidth: 220
};

const compactMenuItemStyle = {
  minHeight: 48
};

const getRowBackgroundColor = (row, index) => {
  const isPrivate = String((row && row.status) || "").toLowerCase() !== "public";

  if (isPrivate) {
    return index % 2 === 0 ? "rgba(120, 28, 28, 0.52)" : "rgba(94, 22, 22, 0.52)";
  }

  return index % 2 === 0 ? "#2b2b2b" : "#1f1f1f";
};

const listFields = [
  "nftTraits",
  "boosts",
  "resources",
  "craftingStations",
  "animals"
];

const apiEntityGroups = {
  ent_sluggery: { field: "animals", label: "Sluggeries" },
  ent_bstA01: { field: "boosts", label: "Farming Tiki" },
  ent_bstA02: { field: "boosts", label: "Forestry Tiki" },
  ent_bstA03: { field: "boosts", label: "Mining Tiki" },
  ent_bstA07: { field: "boosts", label: "Animal Care Tiki" },
  ent_bstB01: { field: "boosts", label: "Farming Ice Sculpture" },
  ent_bstB02: { field: "boosts", label: "Windmill Ice" },
  ent_bstB03: { field: "boosts", label: "Mining Ice" },
  ent_bstB07: { field: "boosts", label: "Woodworking Ice" },
  ent_bstB09: { field: "boosts", label: "Woodworking Ice" },
  ent_bstB10: { field: "boosts", label: "Stoneshaping Ice Sculpture" },
  ent_bstB11: { field: "boosts", label: "Metalworking Ice" },
  ent_bstB15: { field: "boosts", label: "Golden Snake Sculpture" },
  ent_cloverbst1: { field: "boosts", label: "Leprechaun Sculpture 1" },
  ent_cloverbst2: { field: "boosts", label: "Leprechaun Sculpture 2" },
  ent_scarecrowbst1: { field: "boosts", label: "Scarecrow Sculpture" },
  ent_apiary: { field: "animals", label: "Apiary" },
  ent_coop: { field: "animals", label: "Chicken" },
  ent_cow_pickup: { field: "animals", label: "Hunkin' Heifer" },
  ent_legacy_goat: { field: "animals", label: "Goat" },
  ent_legacy_dragon: { field: "animals", label: "Dragon" },
  ent_baby_bee_1: { field: "animals", label: "Baby Bee T1" },
  ent_baby_bee_2: { field: "animals", label: "Baby Bee T2" },
  ent_baby_bee_3: { field: "animals", label: "Baby Bee T3" },
  ent_baby_bee_4: { field: "animals", label: "Baby Bee T4" },
  ent_baby_chicken_1: { field: "animals", label: "Baby Chicken T1" },
  ent_baby_chicken_2: { field: "animals", label: "Baby Chicken T2" },
  ent_baby_chicken_3: { field: "animals", label: "Baby Chicken T3" },
  ent_baby_chicken_4: { field: "animals", label: "Baby Chicken T4" },
  ent_baby_cow_1: { field: "animals", label: "Baby Cow T1" },
  ent_baby_cow_2: { field: "animals", label: "Baby Cow T2" },
  ent_baby_cow_3: { field: "animals", label: "Baby Cow T3" },
  ent_baby_cow_4: { field: "animals", label: "Baby Cow T4" },
  ent_baby_duck_1: { field: "animals", label: "Baby Duck T1" },
  ent_baby_duck_2: { field: "animals", label: "Baby Duck T2" },
  ent_baby_duck_3: { field: "animals", label: "Baby Duck T3" },
  ent_baby_duck_4: { field: "animals", label: "Baby Duck T4" },
  ent_baby_goat_1: { field: "animals", label: "Baby Goat T1" },
  ent_baby_goat_2: { field: "animals", label: "Baby Goat T2" },
  ent_baby_goat_3: { field: "animals", label: "Baby Goat T3" },
  ent_baby_goat_4: { field: "animals", label: "Baby Goat T4" },
  ent_baby_sheep_1: { field: "animals", label: "Baby Sheep T1" },
  ent_baby_sheep_2: { field: "animals", label: "Baby Sheep T2" },
  ent_baby_sheep_3: { field: "animals", label: "Baby Sheep T3" },
  ent_baby_sheep_4: { field: "animals", label: "Baby Sheep T4" },
  ent_baby_slug_1: { field: "animals", label: "Baby Slug T1" },
  ent_baby_slug_2: { field: "animals", label: "Baby Slug T2" },
  ent_baby_slug_3: { field: "animals", label: "Baby Slug T3" },
  ent_baby_slug_4: { field: "animals", label: "Baby Slug T4" },
  ent_baby_turkey_1: { field: "animals", label: "Baby Turkey T1" },
  ent_baby_turkey_2: { field: "animals", label: "Baby Turkey T2" },
  ent_baby_turkey_3: { field: "animals", label: "Baby Turkey T3" },
  ent_baby_turkey_4: { field: "animals", label: "Baby Turkey T4" },
  ent_sheep_01: { field: "animals", label: "Lil Bo Sheep" },
  ent_turkey: { field: "animals", label: "Turkey" },
  ent_mine_04: { field: "resources", label: "T4 Mines" },
  ent_mine_05: { field: "resources", label: "T5 Mines" },
  ent_allcrops_5: { field: "resources", label: "T5 Soils" },
  ent_metalworking_02: { field: "craftingStations", label: "T2 Metalworking" },
  ent_metalworking_04: { field: "craftingStations", label: "T4 Metalworking" },
  ent_woodwork_02: { field: "craftingStations", label: "T2 Woodworking" },
  ent_woodwork_04: { field: "craftingStations", label: "T4 Woodworking" },
  ent_kiln_04: { field: "craftingStations", label: "T4 Kiln" },
  ent_winery: { field: "craftingStations", label: "T4 Winery" },
  ent_winery_01: { field: "craftingStations", label: "T1 Winery" },
  ent_winery_03: { field: "craftingStations", label: "T3 Winery" },
  ent_sushi_kit_02: { field: "craftingStations", label: "T2 Sushi Station" },
  ent_sushi_kit_04: { field: "craftingStations", label: "T4 Sushi Station" },
  ent_spacebbq: { field: "craftingStations", label: "Galactic Grill" },
  ent_waterbbq: { field: "craftingStations", label: "Submarine Sizzler" },
  ent_fishing_grass: { field: "resources", label: "Ponds" },
  ent_fishing_space: { field: "resources", label: "Ponds" },
  ent_fishing_water: { field: "resources", label: "Ponds" },
  ent_yieldgenerator: { field: "craftingStations", label: "Yield Stone Generator" }
};

const countItemsByLabel = (
  items,
  { showSingleCount = false, showSingleCountLabels = [] } = {}
) => {
  const counts = new Map();
  const singleCountLabelSet = new Set(showSingleCountLabels);

  items.forEach(item => {
    counts.set(item, (counts.get(item) || 0) + 1);
  });

  return Array.from(counts.entries()).map(([label, count]) =>
    count > 1 || showSingleCount || singleCountLabelSet.has(label)
      ? `${count}x ${label}`
      : label
  );
};

const getLandEntityApiUrl = landNumber => {
  if (!landEntityApiUrlTemplate || !landNumber) return "";

  if (landEntityApiUrlTemplate.includes("{landNumber}")) {
    return landEntityApiUrlTemplate.replace(/\{landNumber\}/g, landNumber);
  }

  if (landEntityApiUrlTemplate.includes(":landNumber")) {
    return landEntityApiUrlTemplate.replace(/:landNumber/g, landNumber);
  }

  return `${landEntityApiUrlTemplate.replace(/\/$/, "")}/${landNumber}`;
};

const getBaseResourcesByFamily = (baseRow, family) => {
  const familyPattern = new RegExp(`\\b${family}\\b`, "i");

  return toList(baseRow && baseRow.resources).filter(resource =>
    familyPattern.test(cleanDropdownValue(resource))
  );
};

const transformLandApiResponse = (baseRow, apiData) => {
  const grouped = {
    boosts: [],
    resources: [],
    craftingStations: [],
    animals: []
  };

  const entities = Array.isArray(apiData && apiData.entities)
    ? apiData.entities
    : [];

  entities.forEach(entityRow => {
    const entityId = entityRow.entity || entityRow.id;
    const mapping = apiEntityGroups[entityId];

    if (mapping) {
      grouped[mapping.field].push(mapping.label);
    }
  });

  const resources = countItemsByLabel(grouped.resources);

  if (apiData && apiData.treeCount > 0) {
    resources.unshift(...getBaseResourcesByFamily(baseRow, "Trees"));
  }

  if (apiData && apiData.soilCount > 0) {
    resources.unshift(`${apiData.soilCount}x T4 Soils`);
  }

  return normalizeInventoryRow({
    ...baseRow,
    boosts: countItemsByLabel(grouped.boosts, {
      showSingleCountLabels: [
        "Leprechaun Sculpture 1",
        "Leprechaun Sculpture 2"
      ]
    }),
    resources,
    craftingStations: countItemsByLabel(grouped.craftingStations),
    animals: countItemsByLabel(grouped.animals, { showSingleCount: true }),
    apiLastUpdated: apiData && apiData.lastUpdated
  });
};

const toList = value => {
  if (!value) return [];

  if (Array.isArray(value)) {
    return value
      .map(item => String(item || "").trim())
      .filter(Boolean);
  }

  return String(value)
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean);
};

const normalizeInventoryRow = row => {
  return listFields.reduce(
    (normalizedRow, field) => ({
      ...normalizedRow,
      [field]: toList(row[field])
    }),
    row
  );
};

const getCraftingIndustries = row => {
  const craftingIndustries = toList(row.craftingStations);

  if (toList(row.nftTraits).includes("Windmill")) {
    craftingIndustries.push("Windmill");
  }

  return Array.from(new Set(craftingIndustries));
};

const cleanDropdownValue = value => {
  if (!value) return "";

  return String(value)
    .replace(/\b\d+x\s*/gi, "")
    .replace(/\b\d+\s*x\s*/gi, "")
    .trim();
};

const getUniqueOptions = (data, key) => {
  const options = new Set();

  data.forEach(row => {
    toList(row[key])
      .map(item => cleanDropdownValue(item))
      .filter(Boolean)
      .forEach(item => options.add(item));
  });

  return Array.from(options).sort();
};

const getBoostFileName = boostName => {
  const boostIconAliases = {
    "Farming Ice Sculpture": "Farming Ice",
    "Leprechaun Sculpture 1": "Leprechaun Sculpture",
    "Leprechaun Sculpture 2": "Leprechaun Sculpture 2",
    "Stoneshaping Ice Sculpture": "Stoneshaping Ice"
  };
  const normalizedBoostName = boostIconAliases[boostName] || boostName;

  return normalizedBoostName
    .toLowerCase()
    .replace(/'/g, "")
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

const parseBoost = boost => {
  const text = String(boost || "").trim();

  const countMatch = text.match(/^(\d+)\s*x\s+/i);
  const count = countMatch ? countMatch[1] : null;
  const name = text.replace(/^(\d+)\s*x\s+/i, "").trim();

  return {
    name,
    count,
    icon: `${boostIconPath}${getBoostFileName(name)}.png`
  };
};

const parseCountedItem = item => {
  const text = String(item || "").trim();
  const countMatch = text.match(/^(\d+)\s*x\s+/i);
  const count = countMatch ? countMatch[1] : null;
  const name = text.replace(/^(\d+)\s*x\s+/i, "").trim();

  return { name, count };
};

const tierOverrides = {
  "Galactic Grill": 4,
  "Submarine Sizzler": 3
};

const getTierNumber = name => {
  if (tierOverrides[name]) return tierOverrides[name];

  const tierMatch = String(name || "").match(/\bT([1-5])\b/i);
  if (!tierMatch) return null;

  return Number(tierMatch[1]);
};

const getTierRoman = name => {
  const tierNumber = getTierNumber(name);
  if (!tierNumber) return null;

  return {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V"
  }[tierNumber];
};

const getCraftingFamily = name => {
  const familyOverrides = {
    "Galactic Grill": "Cooking",
    "Submarine Sizzler": "Cooking"
  };

  if (familyOverrides[name]) return familyOverrides[name];

  return String(name || "")
    .replace(/\bT[1-5]\b\s*/i, "")
    .replace(/\s+Station$/i, "")
    .trim();
};

const getResourceFamily = name => {
  return String(name || "")
    .replace(/\bT[1-5]\b\s*/i, "")
    .trim();
};

const inventoryIconConfig = {
  animals: {
    path: "/assets/pixels/land/animals/",
    aliases: {
      Apiary: "apiary",
      Chicken: "chicken",
      Dragon: "dragon",
      Goat: "goat",
      "Hunkin' Heifer": "cow",
      "Lil Bo Sheep": "sheep",
      "Baby Bee T1": "ent_baby_bee_1",
      "Baby Bee T2": "ent_baby_bee_2",
      "Baby Bee T3": "ent_baby_bee_3",
      "Baby Bee T4": "ent_baby_bee_4",
      "Baby Chicken T1": "ent_baby_chicken_1",
      "Baby Chicken T2": "ent_baby_chicken_2",
      "Baby Chicken T3": "ent_baby_chicken_3",
      "Baby Chicken T4": "ent_baby_chicken_4",
      "Baby Cow T1": "ent_baby_cow_1",
      "Baby Cow T2": "ent_baby_cow_2",
      "Baby Cow T3": "ent_baby_cow_3",
      "Baby Cow T4": "ent_baby_cow_4",
      "Baby Duck T1": "ent_baby_duck_1",
      "Baby Duck T2": "ent_baby_duck_2",
      "Baby Duck T3": "ent_baby_duck_3",
      "Baby Duck T4": "ent_baby_duck_4",
      "Baby Goat T1": "ent_baby_goat_1",
      "Baby Goat T2": "ent_baby_goat_2",
      "Baby Goat T3": "ent_baby_goat_3",
      "Baby Goat T4": "ent_baby_goat_4",
      "Baby Sheep T1": "ent_baby_sheep_1",
      "Baby Sheep T2": "ent_baby_sheep_2",
      "Baby Sheep T3": "ent_baby_sheep_3",
      "Baby Sheep T4": "ent_baby_sheep_4",
      "Baby Slug T1": "ent_baby_slug_1",
      "Baby Slug T2": "ent_baby_slug_2",
      "Baby Slug T3": "ent_baby_slug_3",
      "Baby Slug T4": "ent_baby_slug_4",
      "Baby Turkey T1": "ent_baby_turkey_1",
      "Baby Turkey T2": "ent_baby_turkey_2",
      "Baby Turkey T3": "ent_baby_turkey_3",
      "Baby Turkey T4": "ent_baby_turkey_4",
      Sluggery: "sluggery",
      Sluggeries: "sluggery",
      Turkey: "turkey"
    },
    priority: {
      "Hunkin' Heifer": 1,
      "Baby Cow T4": 2,
      "Baby Cow T3": 2.1,
      "Baby Cow T2": 2.2,
      "Baby Cow T1": 2.3,
      Apiary: 3,
      "Baby Bee T4": 3.1,
      "Baby Bee T3": 3.2,
      "Baby Bee T2": 3.3,
      "Baby Bee T1": 3.4,
      Dragon: 4,
      Goat: 5,
      "Baby Goat T4": 6,
      "Baby Goat T3": 6.1,
      "Baby Goat T2": 6.2,
      "Baby Goat T1": 6.3,
      "Baby Slug T4": 8,
      "Baby Slug T3": 8.1,
      "Baby Slug T2": 8.2,
      "Baby Slug T1": 8.3,
      "Baby Duck T4": 9,
      "Baby Duck T3": 9.1,
      "Baby Duck T2": 9.2,
      "Baby Duck T1": 9.3,
      Turkey: 10,
      "Baby Turkey T4": 10.1,
      "Baby Turkey T3": 10.2,
      "Baby Turkey T2": 10.3,
      "Baby Turkey T1": 10.4,
      "Lil Bo Sheep": 11,
      "Baby Sheep T4": 11.1,
      "Baby Sheep T3": 11.2,
      "Baby Sheep T2": 11.3,
      "Baby Sheep T1": 11.4,
      Chicken: 13,
      "Baby Chicken T4": 13.1,
      "Baby Chicken T3": 13.2,
      "Baby Chicken T2": 13.3,
      "Baby Chicken T1": 13.4,
      Sluggery: 14,
      Sluggeries: 14
    }
  },
  resources: {
    path: "/assets/pixels/land/resources/",
    aliases: {
      "T4 Mines": "mine-t4",
      "T5 Mines": "mine-t5",
      Pond: "pond",
      Ponds: "pond",
      "T2 Trees": "tree-t2",
      "T3 Trees": "tree-t3",
      "T4 Soils": "soil-t4",
      "T5 Soils": "soil-t5",
      "T4 Trees": "tree-t4",
      "T5 Trees": "tree-t5"
    }
  },
  crafting: {
    path: "/assets/pixels/land/crafting-stations/",
    aliases: {
      "Galactic Grill": "galactic-grill",
      "T4 Kiln": "kiln-t4",
      "T2 Metalworking": "metalworking-t2",
      "T4 Metalworking": "metalworking-t4",
      "Potion Table": "potion-table",
      "Submarine Sizzler": "submarine-sizzler",
      "T2 Sushi Station": "sushi-station-t2",
      "T3 Sushi Station": "sushi-station-t3",
      "T4 Sushi Station": "sushi-sushi-t4",
      Windmill: "windmill",
      "T1 Winery": "winery-t1",
      "T2 Winery": "winery-t2",
      "T3 Winery": "winery-t3",
      "T4 Winery": "winery-t4",
      "T1 Woodworking Station": "woodworking-t2",
      "T2 Woodworking": "woodworking-t2",
      "T4 Woodworking": "woodworking-t4",
      "Yield Generator": "yield-generator",
      "Yield Stone Generator": "yield-generator"
    }
  }
};

const getInventoryIcon = (name, type) => {
  const config = inventoryIconConfig[type];
  const iconName = config && config.aliases[name];

  if (!config || !iconName) return null;

  return `${config.path}${iconName}.png`;
};

const sortCraftingOptions = (a, b) => {
  const familyA = getCraftingFamily(a);
  const familyB = getCraftingFamily(b);
  const familyPriority = {
    Kiln: 1,
    Metalworking: 2,
    Woodworking: 3,
    Winery: 4,
    Windmill: 5
  };
  const priorityA = familyPriority[familyA] || 99;
  const priorityB = familyPriority[familyB] || 99;

  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  if (familyA !== familyB) {
    return familyA.localeCompare(familyB);
  }

  const tierA = getTierNumber(a) || 0;
  const tierB = getTierNumber(b) || 0;

  if (tierA !== tierB) {
    return tierB - tierA;
  }

  return a.localeCompare(b);
};

const sortResourceOptions = (a, b) => {
  const familyA = getResourceFamily(a);
  const familyB = getResourceFamily(b);
  const familyPriority = {
    Mines: 1,
    Soils: 2,
    Trees: 3,
    Pond: 99,
    Ponds: 99
  };
  const priorityA = familyPriority[familyA] || 50;
  const priorityB = familyPriority[familyB] || 50;

  if (priorityA !== priorityB) {
    return priorityA - priorityB;
  }

  if (familyA !== familyB) {
    return familyA.localeCompare(familyB);
  }

  const tierA = getTierNumber(a) || 0;
  const tierB = getTierNumber(b) || 0;

  if (tierA !== tierB) {
    return tierB - tierA;
  }

  return a.localeCompare(b);
};

const InventoryIcons = ({ items, type }) => {
  const itemList = toList(items);
  if (!itemList.length) return "";

  const config = inventoryIconConfig[type];
  const sortedItems = itemList
    .map((item, index) => ({
      item,
      index,
      parsedItem: parseCountedItem(item)
    }))
    .sort((a, b) => {
      if (type === "resources") {
        const tierA = getTierNumber(a.parsedItem.name) || 0;
        const tierB = getTierNumber(b.parsedItem.name) || 0;

        if (tierA !== tierB) {
          return tierB - tierA;
        }
      }

      if (type === "crafting") {
        const getCraftingSortGroup = item => {
          if (getCraftingFamily(item.name) === "Winery") return 0;
          if (item.name === "Windmill") return 1;
          if (getTierNumber(item.name)) return 2;
          if (item.name === "Pond" || item.name === "Ponds") return 3;
          if (item.name === "Yield Generator" || item.name === "Yield Stone Generator") return 4;
          return 5;
        };

        const groupA = getCraftingSortGroup(a.parsedItem);
        const groupB = getCraftingSortGroup(b.parsedItem);

        if (groupA !== groupB) {
          return groupA - groupB;
        }

        const tierA = getTierNumber(a.parsedItem.name) || 0;
        const tierB = getTierNumber(b.parsedItem.name) || 0;

        if (tierA !== tierB) {
          return tierB - tierA;
        }
      }

      const priorityA = (config && config.priority && config.priority[a.parsedItem.name]) || 99;
      const priorityB = (config && config.priority && config.priority[b.parsedItem.name]) || 99;

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      return a.index - b.index;
    });

  return (
    <Box display="flex" flexWrap="wrap" alignItems="center">
      {sortedItems.map(({ item, index, parsedItem }) => {
        const icon = getInventoryIcon(parsedItem.name, type);
        const tier = type === "resources" || type === "crafting"
          ? getTierRoman(parsedItem.name)
          : null;

        if (!icon) {
          return (
            <Box key={`${parsedItem.name}-${index}`} style={iconTextFallback}>
              {item}
            </Box>
          );
        }

        return (
          <Box key={`${parsedItem.name}-${index}`} style={boostIconBox} title={parsedItem.name}>
            <img
              src={icon}
              alt={parsedItem.name}
              style={{
                width: "85%",
                height: "85%",
                objectFit: "contain"
              }}
            />

            {tier && <span style={tierBadge}>{tier}</span>}
            {parsedItem.count && <span style={boostCountBubble}>{parsedItem.count}</span>}
          </Box>
        );
      })}
    </Box>
  );
};

const PublicStatusIcon = ({ status }) => {
  const isPublic = String(status || "").toLowerCase() === "public";

  return (
    <Box style={statusIconStyle} title={isPublic ? "Public" : "Private"}>
      {isPublic ? (
        <CheckCircleIcon style={{ color: "#4caf50", fontSize: 28 }} />
      ) : (
        <CancelIcon style={{ color: "#f44336", fontSize: 28 }} />
      )}
    </Box>
  );
};

const PreviewLink = ({ landNumber }) => (
  <a
    href={`https://play.pixels.xyz/pixels/share/${landNumber}`}
    target="_blank"
    rel="noopener noreferrer"
    style={previewLinkStyle}
    title={`Preview land ${landNumber}`}
    aria-label={`Preview land ${landNumber}`}
  >
    <VisibilityIcon fontSize="small" />
  </a>
);

const toFilterSlug = value => {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
};

const findOptionBySlugOrValue = (value, options) => {
  if (!value) return "";

  const optionList = options || [];
  const decodedValue = String(value).trim();
  const valueSlug = toFilterSlug(decodedValue);

  return (
    optionList.find(option => option === decodedValue) ||
    optionList.find(option => toFilterSlug(option) === valueSlug) ||
    decodedValue
  );
};

const findOptionsBySlugOrValue = (values, options) => {
  return values
    .map(value => findOptionBySlugOrValue(value, options))
    .filter(Boolean);
};

const getInitialInventoryUrlState = () => {
  if (typeof window === "undefined") {
    return {
      searchTerm: "",
      selectedCrafting: [],
      selectedResources: [],
      selectedAnimals: [],
      selectedLandTypes: [],
      selectedNftTraits: [],
      sortConfig: { key: null, direction: "asc" }
    };
  }

  const params = new URLSearchParams(window.location.search);
  const traits = params.get("traits") || params.get("nftTraits") || "";
  const sortKey = params.get("sort");

  return {
    searchTerm: params.get("search") || "",
    selectedCrafting: (params.get("crafting") || "")
      .split(",")
      .map(crafting => crafting.trim())
      .filter(Boolean),
    selectedResources: (params.get("resource") || "")
      .split(",")
      .map(resource => resource.trim())
      .filter(Boolean),
    selectedAnimals: (params.get("animals") || "")
      .split(",")
      .map(animal => animal.trim())
      .filter(Boolean),
    selectedLandTypes: (params.get("landType") || "")
      .split(",")
      .map(landType => landType.trim())
      .filter(Boolean),
    selectedNftTraits: traits
      .split(",")
      .map(trait => trait.trim())
      .filter(Boolean),
    sortConfig: {
      key: sortKey === "landNumber" || sortKey === "status" ? sortKey : null,
      direction: params.get("dir") === "desc" ? "desc" : "asc"
    }
  };
};

const getSearchableValue = value => {
  if (!Array.isArray(value)) {
    return String(value || "");
  }

  const aliasTerms = value
    .map(item => {
      const itemName = parseCountedItem(item).name;

      return Object.values(inventoryIconConfig)
        .map(config => config.aliases[itemName])
        .filter(Boolean);
    })
    .flat();

  return [...value, ...aliasTerms].join(" ");
};

const BoostIcons = ({ boosts }) => {
  const boostItems = toList(boosts);
  if (!boostItems.length) return "";

  // Priority order
  const boostPriority = {
    // Tikis
    "Animal Care Tiki": 1,
    "Cooking Tiki": 1,
    "Farming Tiki": 1,
    "Forestry Tiki": 1,
    "Mining Tiki": 1,
    "Metalworking Tiki": 1,
    "Stoneshaping Tiki": 1,
    "Textile Tiki": 1,
    "Woodworking Tiki": 1,

    // Sculptures
    "Leprechaun Sculpture": 2,
    "Leprechaun Sculpture 1": 2,
    "Leprechaun Sculpture 2": 2.1,
    "Golden Snake Sculpture": 2.2,
    "Scarecrow Sculpture": 2.3,

    // Ice boosts
    "Animal Care Ice": 3,
    "Cooking Ice": 3,
    "Farming Ice": 3,
    "Farming Ice Sculpture": 3,
    "Forestry Ice": 3,
    "Metalworking Ice Sculpture": 3,
    "Mining Ice": 3,
    "Stoneshaping Ice": 3,
    "Stoneshaping Ice Sculpture": 3,
    "Textile Ice": 3,
    "Windmill Ice": 3,
    "Woodworking Ice": 3
  };

  const boostList = boostItems
    .map(parseBoost)
    .sort((a, b) => {
      const priorityA = boostPriority[a.name] || 99;
      const priorityB = boostPriority[b.name] || 99;

      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      return a.name.localeCompare(b.name);
    });


  return (
    <Box display="flex" flexWrap="wrap" alignItems="center">
      {boostList.map((boost, index) => (
        <Box key={`${boost.name}-${index}`} style={boostIconBox} title={boost.name}>
          <img
            src={boost.icon}
            alt={boost.name}
            style={{
              width: "85%",
              height: "85%",
              objectFit: "contain"
            }}
            onError={e => {
              e.currentTarget.src = defaultBoostIcon;
            }}
          />

          {boost.count && <span style={boostCountBubble}>{boost.count}</span>}
        </Box>
      ))}
    </Box>
  );
};

const LandInventoryTable = ({ dataSource = "api" }) => {
  const initialUrlState = useMemo(getInitialInventoryUrlState, []);
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [searchTerm, setSearchTerm] = useState(initialUrlState.searchTerm);
  const [selectedCrafting, setSelectedCrafting] = useState(initialUrlState.selectedCrafting);
  const [selectedResources, setSelectedResources] = useState(initialUrlState.selectedResources);
  const [selectedAnimals, setSelectedAnimals] = useState(initialUrlState.selectedAnimals);
  const [selectedLandTypes, setSelectedLandTypes] = useState(initialUrlState.selectedLandTypes);
  const [selectedNftTraits, setSelectedNftTraits] = useState(initialUrlState.selectedNftTraits);
  const [sortConfig, setSortConfig] = useState(initialUrlState.sortConfig);

  useEffect(() => {
    let isMounted = true;

    const loadInventory = async () => {
      try {
        setIsLoading(true);
        setLoadError("");

        const response = await fetch(landInventoryUrl, { cache: "no-cache" });

        if (!response.ok) {
          throw new Error(`Inventory request failed with ${response.status}`);
        }

        const data = await response.json();
        const staticRows = Array.isArray(data) ? data : data.rows;

        if (!Array.isArray(staticRows)) {
          throw new Error("Inventory JSON must be an array or { rows: [] }");
        }

        let nextRows = staticRows.map(normalizeInventoryRow);

        if (dataSource === "api") {
          if (!landEntityApiUrlTemplate) {
            setLoadError("");
          } else {
            const failedLandNumbers = [];
            const liveRows = await Promise.all(
              staticRows.map(async row => {
                try {
                  const apiUrl = getLandEntityApiUrl(row.landNumber);
                  const apiResponse = await fetch(apiUrl, { cache: "no-cache" });

                  if (!apiResponse.ok) {
                    throw new Error(String(apiResponse.status));
                  }

                  const apiData = await apiResponse.json();
                  return transformLandApiResponse(row, apiData);
                } catch (error) {
                  failedLandNumbers.push(row.landNumber);
                  return normalizeInventoryRow(row);
                }
              })
            );

            nextRows = liveRows;

            if (failedLandNumbers.length) {
              setLoadError(
                `Live API failed for land ${failedLandNumbers.join(", ")}; showing hard-coded data for those lands`
              );
            } else {
              setLoadError("");
            }
          }
        }

        if (isMounted) {
          setRows(nextRows);
        }
      } catch (error) {
        if (isMounted) {
          setLoadError(error.message || "Unable to load inventory data");
          setRows([]);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadInventory();

    return () => {
      isMounted = false;
    };
  }, [dataSource]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const params = new URLSearchParams(window.location.search);

    const setOrDeleteParam = (key, value) => {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    };

    setOrDeleteParam("search", searchTerm.trim());
    setOrDeleteParam("crafting", selectedCrafting.map(toFilterSlug).join(","));
    setOrDeleteParam("resource", selectedResources.map(toFilterSlug).join(","));
    setOrDeleteParam("animals", selectedAnimals.map(toFilterSlug).join(","));
    params.delete("boost");
    setOrDeleteParam("landType", selectedLandTypes.map(toFilterSlug).join(","));
    setOrDeleteParam("traits", selectedNftTraits.map(toFilterSlug).join(","));
    params.delete("nftTraits");

    if (sortConfig.key) {
      params.set("sort", sortConfig.key);
      params.set("dir", sortConfig.direction);
    } else {
      params.delete("sort");
      params.delete("dir");
    }

    const nextSearch = params.toString();
    const nextUrl = `${window.location.pathname}${nextSearch ? `?${nextSearch}` : ""}${window.location.hash}`;
    const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

    if (nextUrl !== currentUrl) {
      window.history.replaceState(null, "", nextUrl);
    }
  }, [
    searchTerm,
    selectedCrafting,
    selectedResources,
    selectedAnimals,
    selectedLandTypes,
    selectedNftTraits,
    sortConfig
  ]);

  const craftingOptions = useMemo(
    () => {
      const options = new Set();

      rows.forEach(row => {
        getCraftingIndustries(row)
          .map(item => cleanDropdownValue(item))
          .filter(Boolean)
          .forEach(item => options.add(item));
      });

      return Array.from(options).sort(sortCraftingOptions);
    },
    [rows]
  );

  const resourceOptions = useMemo(
    () => getUniqueOptions(rows, "resources").sort(sortResourceOptions),
    [rows]
  );

  const animalOptions = useMemo(
    () => {
      const animalPriority = inventoryIconConfig.animals.priority || {};

      return getUniqueOptions(rows, "animals").sort((a, b) => {
        const priorityA = animalPriority[a] || 99;
        const priorityB = animalPriority[b] || 99;

        if (priorityA !== priorityB) {
          return priorityA - priorityB;
        }

        return a.localeCompare(b);
      });
    },
    [rows]
  );

  const landTypeOptions = useMemo(
    () => Array.from(new Set(rows.map(row => row.landType))).filter(Boolean).sort(),
    [rows]
  );

  const nftTraitOptions = useMemo(
    () => getUniqueOptions(rows, "nftTraits"),
    [rows]
  );

  useEffect(() => {
    if (selectedCrafting.length && craftingOptions.length) {
      const nextCrafting = findOptionsBySlugOrValue(selectedCrafting, craftingOptions);

      if (nextCrafting.join("|") !== selectedCrafting.join("|")) {
        setSelectedCrafting(nextCrafting);
      }
    }

    if (selectedResources.length && resourceOptions.length) {
      const nextResources = findOptionsBySlugOrValue(selectedResources, resourceOptions);

      if (nextResources.join("|") !== selectedResources.join("|")) {
        setSelectedResources(nextResources);
      }
    }

    if (selectedAnimals.length && animalOptions.length) {
      const nextAnimals = findOptionsBySlugOrValue(selectedAnimals, animalOptions);

      if (nextAnimals.join("|") !== selectedAnimals.join("|")) {
        setSelectedAnimals(nextAnimals);
      }
    }

    if (selectedLandTypes.length && landTypeOptions.length) {
      const nextLandTypes = findOptionsBySlugOrValue(selectedLandTypes, landTypeOptions);

      if (nextLandTypes.join("|") !== selectedLandTypes.join("|")) {
        setSelectedLandTypes(nextLandTypes);
      }
    }

    if (selectedNftTraits.length && nftTraitOptions.length) {
      const nextTraits = selectedNftTraits
        .map(trait => findOptionBySlugOrValue(trait, nftTraitOptions))
        .filter(Boolean);

      if (nextTraits.join("|") !== selectedNftTraits.join("|")) {
        setSelectedNftTraits(nextTraits);
      }
    }
  }, [
    selectedCrafting,
    selectedResources,
    selectedAnimals,
    selectedLandTypes,
    selectedNftTraits,
    craftingOptions,
    resourceOptions,
    animalOptions,
    landTypeOptions,
    nftTraitOptions
  ]);

  const filteredData = useMemo(() => {
    return rows.filter(row => {
      const search = searchTerm.toLowerCase();

      const matchesSearch = Object.values(row).some(value =>
        getSearchableValue(value)
          .toLowerCase()
          .includes(search)
      );

      const matchesCrafting =
        selectedCrafting.length === 0 ||
        getCraftingIndustries(row)
          .map(item => cleanDropdownValue(item))
          .some(crafting => selectedCrafting.includes(crafting));

      const matchesResource =
        selectedResources.length === 0 ||
        toList(row.resources)
          .map(item => cleanDropdownValue(item))
          .some(resource => selectedResources.includes(resource));

      const rowAnimals = toList(row.animals)
        .map(item => cleanDropdownValue(item));

      const matchesAnimals =
        selectedAnimals.length === 0 ||
        selectedAnimals.some(animal => rowAnimals.includes(animal));

      const matchesLandType =
        selectedLandTypes.length === 0 || selectedLandTypes.includes(row.landType);

      const matchesNftTraits =
        selectedNftTraits.length === 0 ||
        selectedNftTraits.every(trait => toList(row.nftTraits).includes(trait));

      return (
        matchesSearch &&
        matchesCrafting &&
        matchesResource &&
        matchesAnimals &&
        matchesLandType &&
        matchesNftTraits
      );
    });
  }, [
    searchTerm,
    selectedCrafting,
    selectedResources,
    selectedAnimals,
    selectedLandTypes,
    selectedNftTraits,
    rows
  ]);

  const sortedData = useMemo(() => {
    if (!sortConfig.key) return filteredData;

    return [...filteredData].sort((a, b) => {
      let valueA = a[sortConfig.key];
      let valueB = b[sortConfig.key];

      if (sortConfig.key === "landNumber") {
        valueA = Number(valueA) || 0;
        valueB = Number(valueB) || 0;

        return sortConfig.direction === "asc"
          ? valueA - valueB
          : valueB - valueA;
      }

      valueA = String(valueA || "");
      valueB = String(valueB || "");

      return sortConfig.direction === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    });
  }, [filteredData, sortConfig]);

  const handleSort = key => {
    setSortConfig(currentSort => ({
      key,
      direction:
        currentSort.key === key && currentSort.direction === "asc" ? "desc" : "asc"
    }));
  };

  const getSortLabel = key => {
    if (sortConfig.key !== key) return "";
    return sortConfig.direction === "asc" ? " ▲" : " ▼";
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCrafting([]);
    setSelectedResources([]);
    setSelectedAnimals([]);
    setSelectedLandTypes([]);
    setSelectedNftTraits([]);
    setSortConfig({ key: null, direction: "asc" });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box p={2}>
        <Typography variant="h5" gutterBottom>
          Pixels Land Inventory
        </Typography>

        {isLoading && (
          <Typography variant="body2" style={{ color: "#bbb", marginBottom: 12 }}>
            Loading land inventory...
          </Typography>
        )}

        {loadError && (
          <Typography variant="body2" style={{ color: "#ff8a80", marginBottom: 12 }}>
            {loadError}
          </Typography>
        )}

        <Box mb={2}>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <TextField
              label="Search lands..."
              variant="outlined"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              style={{ width: 460, marginRight: 16, marginBottom: 12 }}
            />

            <button
              onClick={clearFilters}
              style={{
                backgroundColor: "#444",
                border: "1px solid #777",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: 4,
                cursor: "pointer",
                height: 40,
                marginBottom: 12
              }}
            >
              Clear
            </button>
          </Box>

          <Box display="flex" flexWrap="wrap" style={{ gap: 12 }}>
            <Select
              multiple
              displayEmpty
              value={selectedLandTypes}
              onChange={e => setSelectedLandTypes(e.target.value.filter(Boolean))}
              renderValue={selected => (
                selected.length ? selected.join(", ") : "Land Types"
              )}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 220 }}
            >
              <MenuItem value="" style={compactMenuItemStyle} onClick={() => setSelectedLandTypes([])}>
                Land Types
              </MenuItem>
              {landTypeOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
                  <Checkbox
                    checked={selectedLandTypes.indexOf(option) > -1}
                    style={{ padding: 4, marginRight: 4 }}
                  />
                  <Box display="flex" alignItems="center">
                    <img
                      src={landIcons[option] || defaultIcon}
                      alt={`${option} land`}
                      style={{
                        width: 22,
                        height: 22,
                        objectFit: "contain",
                        marginRight: 8
                      }}
                      onError={e => {
                        e.currentTarget.src = defaultIcon;
                      }}
                    />

                    {option}
                  </Box>
                </MenuItem>
              ))}
            </Select>

            <Select
              multiple
              displayEmpty
              value={selectedNftTraits}
              onChange={e => setSelectedNftTraits(e.target.value.filter(Boolean))}
              renderValue={selected => (
                selected.length ? selected.join(", ") : "NFT Traits"
              )}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 260 }}
            >
              <MenuItem value="" style={compactMenuItemStyle} onClick={() => setSelectedNftTraits([])}>
                NFT Traits
              </MenuItem>
              {nftTraitOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
                  <Checkbox
                    checked={selectedNftTraits.indexOf(option) > -1}
                    style={{ padding: 4, marginRight: 4 }}
                  />
                  <ListItemText primary={option} />
                </MenuItem>
              ))}
            </Select>

            <Select
              multiple
              displayEmpty
              value={selectedResources}
              onChange={e => setSelectedResources(e.target.value.filter(Boolean))}
              renderValue={selected => (
                selected.length ? selected.join(", ") : "Resources"
              )}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 260 }}
            >
              <MenuItem value="" style={compactMenuItemStyle} onClick={() => setSelectedResources([])}>
                Resources
              </MenuItem>
              {resourceOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
                  <Checkbox
                    checked={selectedResources.indexOf(option) > -1}
                    style={{ padding: 4, marginRight: 4 }}
                  />
                  <Box display="flex" alignItems="center">
                    {getInventoryIcon(option, "resources") && (
                      <img
                        src={getInventoryIcon(option, "resources")}
                        alt={option}
                        style={{
                          width: 22,
                          height: 22,
                          objectFit: "contain",
                          marginRight: 8
                        }}
                      />
                    )}

                    {option}
                  </Box>
                </MenuItem>
              ))}
            </Select>

            <Select
              multiple
              displayEmpty
              value={selectedCrafting}
              onChange={e => setSelectedCrafting(e.target.value.filter(Boolean))}
              renderValue={selected => (
                selected.length ? selected.join(", ") : "Crafting"
              )}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 260 }}
            >
              <MenuItem value="" style={compactMenuItemStyle} onClick={() => setSelectedCrafting([])}>
                Crafting
              </MenuItem>
              {craftingOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
                  <Checkbox
                    checked={selectedCrafting.indexOf(option) > -1}
                    style={{ padding: 4, marginRight: 4 }}
                  />
                  <Box display="flex" alignItems="center">
                    {getInventoryIcon(option, "crafting") && (
                      <img
                        src={getInventoryIcon(option, "crafting")}
                        alt={option}
                        style={{
                          width: 22,
                          height: 22,
                          objectFit: "contain",
                          marginRight: 8
                        }}
                      />
                    )}

                    {option}
                  </Box>
                </MenuItem>
              ))}
            </Select>

            <Select
              multiple
              displayEmpty
              value={selectedAnimals}
              onChange={e => setSelectedAnimals(e.target.value.filter(Boolean))}
              renderValue={selected => (
                selected.length ? selected.join(", ") : "Animals"
              )}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 280 }}
            >
              <MenuItem value="" style={compactMenuItemStyle} onClick={() => setSelectedAnimals([])}>
                Animals
              </MenuItem>
              {animalOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
                  <Checkbox
                    checked={selectedAnimals.indexOf(option) > -1}
                    style={{ padding: 4, marginRight: 4 }}
                  />
                  <Box display="flex" alignItems="center">
                    {getInventoryIcon(option, "animals") && (
                      <img
                        src={getInventoryIcon(option, "animals")}
                        alt={option}
                        style={{
                          width: 22,
                          height: 22,
                          objectFit: "contain",
                          marginRight: 8
                        }}
                      />
                    )}

                    <ListItemText primary={option} />
                  </Box>
                </MenuItem>
              ))}
            </Select>

          </Box>
        </Box>

        <Typography variant="body2" style={{ color: "#bbb", marginBottom: 12 }}>
          Showing {filteredData.length} of {rows.length} lands
        </Typography>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell style={typeColumnStyle}>Type</TableCell>
                <TableCell
                  onClick={() => handleSort("landNumber")}
                  style={{ ...landNumberColumnStyle, cursor: "pointer", userSelect: "none" }}
                >
                  Land #{getSortLabel("landNumber")}
                </TableCell>
                <TableCell style={iconColumnStyle}>Boosts</TableCell>
                <TableCell style={iconColumnStyle}>Resources</TableCell>
                <TableCell style={iconColumnStyle}>Crafting Industries</TableCell>
                <TableCell style={iconColumnStyle}>Animals</TableCell>
                <TableCell
                  onClick={() => handleSort("status")}
                  style={{ ...compactColumnStyle, cursor: "pointer", userSelect: "none" }}
                >
                  Public?{getSortLabel("status")}
                </TableCell>
                <TableCell style={compactColumnStyle}>Preview</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {sortedData.map((row, index) => (
                <TableRow
                  key={row.landNumber}
                  style={{
                    backgroundColor: getRowBackgroundColor(row, index)
                  }}
                >
                  <TableCell style={typeColumnStyle}>
                    <div style={iconBox}>
                      <img
                        src={landIcons[row.landType] || defaultIcon}
                        alt={`${row.landType} land`}
                        style={{
                          width: "85%",
                          height: "85%",
                          objectFit: "contain"
                        }}
                        onError={e => {
                          e.currentTarget.src = defaultIcon;
                        }}
                      />
                    </div>
                  </TableCell>

                  <TableCell style={landNumberColumnStyle}>{row.landNumber}</TableCell>
                  <TableCell style={iconColumnStyle}>
                    <BoostIcons boosts={row.boosts} />
                  </TableCell>
                  <TableCell style={iconColumnStyle}>
                    <InventoryIcons items={row.resources} type="resources" />
                  </TableCell>
                  <TableCell style={iconColumnStyle}>
                    <InventoryIcons items={getCraftingIndustries(row)} type="crafting" />
                  </TableCell>
                  <TableCell style={iconColumnStyle}>
                    <InventoryIcons items={row.animals} type="animals" />
                  </TableCell>
                  <TableCell style={compactColumnStyle}>
                    <PublicStatusIcon status={row.status} />
                  </TableCell>
                  <TableCell style={compactColumnStyle}>
                    <PreviewLink landNumber={row.landNumber} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default LandInventoryTable;
