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

const listFields = [
  "nftTraits",
  "boosts",
  "resources",
  "craftingStations",
  "animals"
];

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
  return boostName
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
      Sluggery: "sluggery",
      Turkey: "turkey"
    },
    priority: {
      "Hunkin' Heifer": 1,
      Apiary: 2,
      Dragon: 3,
      Goat: 4,
      Turkey: 5,
      "Lil Bo Sheep": 6,
      Chicken: 7,
      Sluggery: 8
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
    Woodworking: 3
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
          if (item.name === "Windmill") return 0;
          if (getTierNumber(item.name)) return 1;
          if (item.name === "Pond" || item.name === "Ponds") return 2;
          if (item.name === "Yield Generator" || item.name === "Yield Stone Generator") return 3;
          return 4;
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
    "Golden Snake Sculpture": 2,
    "Leprechaun Sculpture": 2,
    "Scarecrow Sculpture": 2,

    // Ice boosts
    "Animal Care Ice": 3,
    "Cooking Ice": 3,
    "Farming Ice": 3,
    "Forestry Ice": 3,
    "Metalworking Ice Sculpture": 3,
    "Mining Ice": 3,
    "Stoneshaping Ice": 3,
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

const LandInventoryTable = () => {
  const [rows, setRows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrafting, setSelectedCrafting] = useState("");
  const [selectedResource, setSelectedResource] = useState("");
  const [selectedBoost, setSelectedBoost] = useState("");
  const [selectedLandType, setSelectedLandType] = useState("");
  const [selectedNftTraits, setSelectedNftTraits] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

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
        const nextRows = Array.isArray(data) ? data : data.rows;

        if (!Array.isArray(nextRows)) {
          throw new Error("Inventory JSON must be an array or { rows: [] }");
        }

        if (isMounted) {
          setRows(nextRows.map(normalizeInventoryRow));
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
  }, []);

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

  const boostOptions = useMemo(
    () => getUniqueOptions(rows, "boosts"),
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

  const filteredData = useMemo(() => {
    return rows.filter(row => {
      const search = searchTerm.toLowerCase();

      const matchesSearch = Object.values(row).some(value =>
        getSearchableValue(value)
          .toLowerCase()
          .includes(search)
      );

      const matchesCrafting =
        !selectedCrafting ||
        getCraftingIndustries(row)
          .map(item => cleanDropdownValue(item))
          .includes(selectedCrafting);

      const matchesResource =
        !selectedResource ||
        toList(row.resources)
          .map(item => cleanDropdownValue(item))
          .includes(selectedResource);

      const matchesBoost =
        !selectedBoost ||
        toList(row.boosts)
          .map(item => cleanDropdownValue(item))
          .includes(selectedBoost);

      const matchesLandType =
        !selectedLandType || row.landType === selectedLandType;

      const matchesNftTraits =
        selectedNftTraits.length === 0 ||
        selectedNftTraits.every(trait => toList(row.nftTraits).includes(trait));

      return (
        matchesSearch &&
        matchesCrafting &&
        matchesResource &&
        matchesBoost &&
        matchesLandType &&
        matchesNftTraits
      );
    });
  }, [
    searchTerm,
    selectedCrafting,
    selectedResource,
    selectedBoost,
    selectedLandType,
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
    setSelectedCrafting("");
    setSelectedResource("");
    setSelectedBoost("");
    setSelectedLandType("");
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
              displayEmpty
              value={selectedLandType}
              onChange={e => setSelectedLandType(e.target.value)}
              renderValue={selected => selected || "Land Types"}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 220 }}
            >
              <MenuItem value="" style={compactMenuItemStyle}>
                Land Types
              </MenuItem>
              {landTypeOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
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
              displayEmpty
              value={selectedResource}
              onChange={e => setSelectedResource(e.target.value)}
              renderValue={selected => selected || "Resources"}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 260 }}
            >
              <MenuItem value="" style={compactMenuItemStyle}>
                Resources
              </MenuItem>
              {resourceOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
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
              displayEmpty
              value={selectedCrafting}
              onChange={e => setSelectedCrafting(e.target.value)}
              renderValue={selected => selected || "Crafting"}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 260 }}
            >
              <MenuItem value="" style={compactMenuItemStyle}>
                Crafting
              </MenuItem>
              {craftingOptions.map(option => (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
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
              displayEmpty
              value={selectedBoost}
              onChange={e => setSelectedBoost(e.target.value)}
              renderValue={selected => selected || "Boosts"}
              variant="outlined"
              style={{ ...compactSelectStyle, width: 260 }}
            >
            <MenuItem value="" style={compactMenuItemStyle}>
              Boosts
            </MenuItem>
            {boostOptions.map(option => {
              const boost = parseBoost(option);

              return (
                <MenuItem key={option} value={option} style={compactMenuItemStyle}>
                  <Box display="flex" alignItems="center">
                    <img
                      src={boost.icon}
                      alt={option}
                      style={{
                        width: 22,
                        height: 22,
                        objectFit: "contain",
                        marginRight: 8
                      }}
                      onError={e => {
                        e.currentTarget.src = defaultBoostIcon;
                      }}
                    />

                    {option}
                  </Box>
                </MenuItem>
              );
            })}
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
                    backgroundColor: index % 2 === 0 ? "#2b2b2b" : "#1f1f1f"
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
