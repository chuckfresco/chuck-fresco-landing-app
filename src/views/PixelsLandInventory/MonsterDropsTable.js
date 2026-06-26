import React, { useState, useMemo } from "react";
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
  MenuItem
} from "@material-ui/core";
import { rows } from "./data/landInventory";

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
  borderRadius: 8,
  width: 46,
  height: 46,
  overflow: "hidden",
  display: "flex",
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

const formatText = value => {
  if (!value) return "";
  return String(value)
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));
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
    const value = row[key];
    if (!value) return;

    String(value)
      .split("\n")
      .map(item => cleanDropdownValue(item))
      .filter(Boolean)
      .forEach(item => options.add(item));
  });

  return ["All", ...Array.from(options).sort()];
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

const BoostIcons = ({ boosts }) => {
  if (!boosts) return "";

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

  const boostList = String(boosts)
    .split("\n")
    .map(item => item.trim())
    .filter(Boolean)
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
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCrafting, setSelectedCrafting] = useState("All");
  const [selectedResource, setSelectedResource] = useState("All");
  const [selectedBoost, setSelectedBoost] = useState("All");
  const [selectedLandType, setSelectedLandType] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const craftingOptions = useMemo(
    () => getUniqueOptions(rows, "craftingStations"),
    []
  );

  const resourceOptions = useMemo(
    () => getUniqueOptions(rows, "resources"),
    []
  );

  const boostOptions = useMemo(
    () => getUniqueOptions(rows, "boosts"),
    []
  );

  const landTypeOptions = useMemo(
    () => ["All", ...Array.from(new Set(rows.map(row => row.landType))).sort()],
    []
  );

  const statusOptions = useMemo(
    () => ["All", ...Array.from(new Set(rows.map(row => row.status))).sort()],
    []
  );

  const filteredData = useMemo(() => {
    return rows.filter(row => {
      const search = searchTerm.toLowerCase();

      const matchesSearch = Object.values(row).some(value =>
        String(value || "").toLowerCase().includes(search)
      );

      const matchesCrafting =
        selectedCrafting === "All" ||
        String(row.craftingStations || "")
          .split("\n")
          .map(item => cleanDropdownValue(item))
          .includes(selectedCrafting);

      const matchesResource =
        selectedResource === "All" ||
        String(row.resources || "")
          .split("\n")
          .map(item => cleanDropdownValue(item))
          .includes(selectedResource);

      const matchesBoost =
        selectedBoost === "All" ||
        String(row.boosts || "")
          .split("\n")
          .map(item => cleanDropdownValue(item))
          .includes(selectedBoost);

      const matchesLandType =
        selectedLandType === "All" || row.landType === selectedLandType;

      const matchesStatus =
        selectedStatus === "All" || row.status === selectedStatus;

      return (
        matchesSearch &&
        matchesCrafting &&
        matchesResource &&
        matchesBoost &&
        matchesLandType &&
        matchesStatus
      );
    });
  }, [
    searchTerm,
    selectedCrafting,
    selectedResource,
    selectedBoost,
    selectedLandType,
    selectedStatus
  ]);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCrafting("All");
    setSelectedResource("All");
    setSelectedBoost("All");
    setSelectedLandType("All");
    setSelectedStatus("All");
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Box p={2}>
        <Typography variant="h5" gutterBottom>
          Pixels Land Inventory
        </Typography>

        <Box mb={2}>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            <TextField
              label="Search land number, traits, boosts, resources, animals..."
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
              value={selectedLandType}
              onChange={e => setSelectedLandType(e.target.value)}
              variant="outlined"
              style={{ width: 220 }}
            >
              {landTypeOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option === "All" ? "All Land Types" : option}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={selectedCrafting}
              onChange={e => setSelectedCrafting(e.target.value)}
              variant="outlined"
              style={{ width: 260 }}
            >
              {craftingOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option === "All" ? "All Crafting Industries" : option}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={selectedResource}
              onChange={e => setSelectedResource(e.target.value)}
              variant="outlined"
              style={{ width: 260 }}
            >
              {resourceOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option === "All" ? "All Resource Industries" : option}
                </MenuItem>
              ))}
            </Select>

            <Select
              value={selectedBoost}
              onChange={e => setSelectedBoost(e.target.value)}
              variant="outlined"
              style={{ width: 260 }}
            >
            {boostOptions.map(option => {
              const boost = option === "All" ? null : parseBoost(option);

              return (
                <MenuItem key={option} value={option}>
                  <Box display="flex" alignItems="center">
                    {boost && (
                      <img
                        src={boost.icon}
                        alt={option}
                        style={{
                          width: 24,
                          height: 24,
                          objectFit: "contain",
                          marginRight: 8
                        }}
                        onError={e => {
                          e.currentTarget.src = defaultBoostIcon;
                        }}
                      />
                    )}

                    {option === "All" ? "All Boosts" : option}
                  </Box>
                </MenuItem>
              );
            })}
            </Select>

            <Select
              value={selectedStatus}
              onChange={e => setSelectedStatus(e.target.value)}
              variant="outlined"
              style={{ width: 180 }}
            >
              {statusOptions.map(option => (
                <MenuItem key={option} value={option}>
                  {option === "All" ? "All Statuses" : option}
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
                <TableCell>Type</TableCell>
                <TableCell>Land #</TableCell>
                <TableCell>NFT Traits</TableCell>
                <TableCell>Boosts</TableCell>
                <TableCell>Resources</TableCell>
                <TableCell>Crafting Industries</TableCell>
                <TableCell>Animals</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow
                  key={row.landNumber}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#2b2b2b" : "#1f1f1f"
                  }}
                >
                  <TableCell>
                    <div style={iconBox}>
                      <img
                        src={landIcons[row.landType] || defaultIcon}
                        alt={`${row.landType} land`}
                        style={{
                          width: "75%",
                          height: "75%",
                          objectFit: "contain"
                        }}
                        onError={e => {
                          e.currentTarget.src = defaultIcon;
                        }}
                      />
                    </div>
                  </TableCell>

                  <TableCell>{row.landNumber}</TableCell>
                  <TableCell>{formatText(row.nftTraits)}</TableCell>
                  <TableCell>
                    <BoostIcons boosts={row.boosts} />
                  </TableCell>
                  <TableCell>{formatText(row.resources)}</TableCell>
                  <TableCell>{formatText(row.craftingStations)}</TableCell>
                  <TableCell>{formatText(row.animals)}</TableCell>
                  <TableCell>{row.status}</TableCell>
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