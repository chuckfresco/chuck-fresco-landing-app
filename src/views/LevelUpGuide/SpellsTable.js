// Full SpellsTable with Cost, Materials, and Workshop columns restored
import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Tooltip from '@material-ui/core/Tooltip';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


import {

  materialFilterMap,
  pastelColors,
  starThresholds,
  workshops,
  idDescriptors,
  buffs,
  debuffs
} from './data/spellData';

const darkTheme = createTheme({
  palette: { type: "dark" },
  overrides: {
    MuiTableCell: {
      root: { padding: "6px 10px", fontSize: "0.85rem", whiteSpace: "nowrap" },
      head: { backgroundColor: "#333", color: "#fff", fontWeight: "bold" }
    }
  }
});

const statDescriptions = {
  Strength: `**Might** - Determines the Power of your Physical Spells.`,
  Dexterity: `**Speed** - Determines how fast you act.<br />**Agility** - Determines your chance to dodge attacks.`,
  Constitution: `**Mettle** - Determines the power of your shields.<br />**Durability** - Determines your resistance to Physical Attacks.<br />**Toughness** - Determines how much HP you have.`,
  Intelligence: `**Brilliance** - Determines the Power of your Magical Spells.`,
  Luck: `**Crit. Ch.** - Determines your Chance to deal critical damage.<br />**Crit. Dmg.** - Determines the power of your critical hits.`,
  Wisdom: `**Grace** - Determines the power of your heals.<br />**Insight** - Determines your resistance to Magical Attacks.<br />**Resilience** - Determines your resistance to status effects.`
};


const addStatTooltips = (text) => {
  const key = Object.keys(statDescriptions).find(
    stat => stat.toLowerCase() === text.toLowerCase()
  );

  if (!key) return text;

  return (
    <Tooltip
      title={
        <ReactMarkdown rehypePlugins={[rehypeRaw]} components={{
          strong: ({ children }) => <strong style={{ color: '#ffd700' }}>{children}</strong>
        }}>
          {statDescriptions[key]}
        </ReactMarkdown>
      }
      arrow
    >
      <span style={{ borderBottom: "1px dotted #90caf9", cursor: "help", color: "#90caf9" }}>
        {key}
      </span>
    </Tooltip>
  );
};

const statusMap = [...buffs, ...debuffs].reduce((acc, status) => {
  const key = status.name.toLowerCase();
  acc[key] = status;

  // Aliases
  if (key === "regen") acc["regenerate"] = status;

  return acc;
}, {});


const addStatusTooltips = (text) => {
  const words = text.split(/\b/); // Split by word boundaries

  return words.map((word, i) => {
    const key = word.toLowerCase();
    const status = statusMap[key];

    if (!status) return word;

    return (
      <Tooltip
        key={i}
        arrow
        title={
          <Box display="flex" alignItems="center" flexDirection="column">
            <Avatar
              src={status.icon}
              alt={status.name}
              variant="square"
              style={{ width: 40, height: 40, marginBottom: 8 }}
            />
            <Typography variant="body2" style={{ fontWeight: 'bold', color: '#ffd700' }}>
              {status.name}
            </Typography>
            <Typography variant="body2" style={{ color: '#ccc' }}>
              {status.description}
            </Typography>
            <Typography variant="caption" style={{ color: '#999' }}>
              {status.duration}
            </Typography>
          </Box>
        }
      >
        <span style={{ borderBottom: '1px dotted #90caf9', cursor: 'help', color: '#90caf9' }}>
          {word}
        </span>
      </Tooltip>
    );
  });
};


const SpellsTable = () => {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [statFilters, setStatFilters] = useState([]);
  const [activeColor, setActiveColor] = useState("All");
  const [expandedRows, setExpandedRows] = useState([]);
  const [showImageGrid, setShowImageGrid] = useState(false);
  const [showHigh, setShowHigh] = useState(false);
  const [showUncommon, setShowUncommon] = useState(false);
  const [workshopFilter, setWorkshopFilter] = useState("All");


  

  const getRemainingToNextLevel = (total) => {
    if (total == null) return Infinity;
    for (let i = 1; i < starThresholds.length; i++) {
      if (total < starThresholds[i]) {
        return starThresholds[i] - total;
      }
    }
    return Infinity;
  };

  const renderStars = (count = 0) => {
    const max = 5;
    return <span style={{ fontSize: "14px" }}>{"★".repeat(count)}{"☆".repeat(max - count)}</span>;
  };

  const applyFilters = (recipesList, term = searchTerm, stats = statFilters, color = activeColor, high = showHigh,
    uncommon = showUncommon,  workshop = workshopFilter) => {
    let filtered = [...recipesList];

      // High/Uncommon logic
  if (high && !uncommon) {
    filtered = filtered.filter(spell =>
      ["High", "HighCantrip"].includes(spell.type)
    );
  } else if (uncommon && !high) {
    filtered = filtered.filter(spell =>
      !["High", "HighCantrip"].includes(spell.type)
    );
    // If both are selected, show all (do nothing)
  }
  
    if (color !== "All") {
      const materialId = materialFilterMap[color];
      filtered = filtered.filter(item =>
        item.materials.some(mat => mat.material === materialId)
      );
    }
  
    if (term.trim()) {
      const terms = term.toLowerCase().split(",").map(t => t.trim()).filter(t => t);
      filtered = filtered.filter(item => {
      const itemText = [
        item.name,
        item.properties_crystal?.ability_properties?.description,
        ...item.materials.map(mat => mat.resolvedName || ''),
        item.type  // 👈 Add this line
      ].join(" ").toLowerCase();

        return terms.every(t => itemText.includes(t));
      });
    }

    if (workshop !== "All") {
      filtered = filtered.filter(item => item.location === workshop);
    }
  
    if (stats.length > 0) {
      filtered = filtered.filter(item =>
        stats.every(s => (item.properties_crystal?.stats?.[s] ?? 0) > 0)
      );
  
      const primary = stats[0];
      filtered.sort((a, b) => {
        const aStat = a.properties_crystal?.stats?.[primary] ?? 0;
        const bStat = b.properties_crystal?.stats?.[primary] ?? 0;
        if (bStat === aStat) {
          const aCooldown = a.properties_crystal?.ability_properties?.cooldown ?? 0;
          const bCooldown = b.properties_crystal?.ability_properties?.cooldown ?? 0;
          return bCooldown - aCooldown;
        }
        return bStat - aStat;
      });
    } else {
      // 👇 Custom sort logic based on color
      if (color === "All") {
        filtered.sort((a, b) => {
          const tierOrder = { "TIER II": 0, "TIER I": 1 };
          const tierA = tierOrder[a.tier_text] ?? 99;
          const tierB = tierOrder[b.tier_text] ?? 99;
          if (tierA !== tierB) return tierA - tierB;
      
          const isHighA = ["High", "HighCantrip"].includes(a.type);
          const isHighB = ["High", "HighCantrip"].includes(b.type);
          if (isHighA && !isHighB) return -1;
          if (!isHighA && isHighB) return 1;
      
          const starsA = a.station_data?.level ?? 0;
          const starsB = b.station_data?.level ?? 0;
          if (starsB !== starsA) return starsB - starsA;
      
          const remainingA = getRemainingToNextLevel(a.station_data?.total_inscriptions);
          const remainingB = getRemainingToNextLevel(b.station_data?.total_inscriptions);
          return remainingA - remainingB;
        });
      }
      else {

        filtered.sort((a, b) => {
          // Sort by tier first
          const tierOrder = { "TIER II": 0, "TIER I": 1 };
          const tierA = tierOrder[a.tier_text] ?? 99;
          const tierB = tierOrder[b.tier_text] ?? 99;
          if (tierA !== tierB) return tierA - tierB;
        
          // Sort by type (High/HighCantrip first)
          const isHighA = ["High", "HighCantrip"].includes(a.type);
          const isHighB = ["High", "HighCantrip"].includes(b.type);
        
          if (isHighA && !isHighB) return -1;
          if (!isHighA && isHighB) return 1;
        
          // Sort by stars, then by remaining inscriptions
          const starsA = a.station_data?.level ?? 0;
          const starsB = b.station_data?.level ?? 0;
          if (starsB !== starsA) return starsB - starsA;
        
          const remainingA = getRemainingToNextLevel(a.station_data?.total_inscriptions);
          const remainingB = getRemainingToNextLevel(b.station_data?.total_inscriptions);
          return remainingA - remainingB;
        });
        
      }
    }
  
    setFilteredRecipes(filtered);
  };


  const getWorkshopTag = (location) => {
    const colorKey = Object.keys(pastelColors).find(key => location.startsWith(key));
    const color = pastelColors[colorKey];
    return (
      <Box px={1.5} py={0.5} style={{ borderRadius: 6, fontWeight: "bold", fontSize: "0.75rem", backgroundColor: color?.bg, color: color?.text, border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{colorKey}</Box>
    );
  };

  useEffect(() => {
    const flattenIdDescriptors = idDescriptors.flat();
    const idDescriptorMap = flattenIdDescriptors.reduce((acc, item) => {
      acc[item._id] = item.name;
      return acc;
    }, {});
  
    const fetchAllWorkshops = async () => {
      const combinedMap = {};
      const requests = workshops.map(async (workshop) => {
        const res = await fetch("https://api.prod.runiverseservers.com/GetStationRecipeItems", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: workshop.id,
            requester_id: "42F016120A68386E",
            excluded_items: [],
            character_id: "A20ADB28F178CB58"
          })
        });
        const data = await res.json();
        return data.map(item => ({ ...item, location: workshop.name }));
      });
  
      const results = await Promise.all(requests);
      const allItems = results.flat();
  
      for (const item of allItems) {
        const name = item.name;
        const level = item.station_data?.level ?? 0;
        if (!combinedMap[name] || level > (combinedMap[name].station_data?.level ?? 0)) {
          combinedMap[name] = item;
        }
      }
      const enrichedItems = Object.values(combinedMap).map(item => ({
        ...item,
        materials: item.materials.map(mat => {
          const descriptor = flattenIdDescriptors.find(d => d._id === mat.material);
          return {
            ...mat,
            resolvedName: descriptor?.name || 'Unknown',
            resolvedType: descriptor?.type || '',
          };
        })        

      }));

      enrichedItems.sort((a, b) => {
        const levelDiff = (b.station_data?.level ?? 0) - (a.station_data?.level ?? 0);
        if (levelDiff !== 0) return levelDiff;
        const aNext = getRemainingToNextLevel(a.station_data?.total_inscriptions);
        const bNext = getRemainingToNextLevel(b.station_data?.total_inscriptions);
        return aNext - bNext;
      });
  
      setRecipes(enrichedItems);
      applyFilters(enrichedItems);
      setLoading(false);
    };
  
    fetchAllWorkshops();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box>
        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="80vh">
            <img
              src="/assets/loading-runiverse.gif"
              alt="Loading..."
              style={{ width: '80px', height: '80px' }}
            />
          </Box>
        ) : (
          <Box p={2}>
            <Typography variant="h5" gutterBottom>
              Fresco Manor Spells
            </Typography>
  
            <Box display="flex" flexWrap="wrap" gap={2} mb={2}>
              <Button
                onClick={() => {
                  setWorkshopFilter("All");
                  applyFilters(recipes, searchTerm, statFilters, activeColor, showHigh, showUncommon, "All");
                }}
                variant={workshopFilter === "All" ? 'contained' : 'outlined'}
                style={{
                  fontWeight: 'bold',
                  border: '1px solid #ccc',
                  marginRight: 7,
                }}
              >
                All Forges
              </Button>
              {["Red Workshop", "Green Workshop", "Blue Workshop", "Yellow Workshop"].map((workshop) => (
                <Button
                  key={workshop}
                  onClick={() => {
                    setWorkshopFilter(workshop);
                    applyFilters(recipes, searchTerm, statFilters, activeColor, showHigh, showUncommon, workshop);
                  }}
                  variant={workshopFilter === workshop ? 'contained' : 'outlined'}
                  style={{
                    fontWeight: 'bold',
                    border: '1px solid #ccc',
                    marginRight: 7,
                  }}
                >
                  {workshop}
                </Button>
              ))}
            </Box>
  
            <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
              {Object.keys(pastelColors).map((color) => (
                <Button
                  key={color}
                  onClick={() => {
                    setActiveColor(color);
                    applyFilters(recipes, searchTerm, statFilters, color, showHigh, showUncommon, workshopFilter);
                  }}
                  variant={activeColor === color ? 'contained' : 'outlined'}
                  style={{
                    backgroundColor: pastelColors[color].bg,
                    color: pastelColors[color].text,
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}
                >
                  {color}
                </Button>
              ))}
              <Button
                style={{ marginLeft: 10 }}
                variant="outlined"
                onClick={() => {
                  setSearchTerm('');
                  setStatFilters([]);
                  setActiveColor('All');
                  setWorkshopFilter('All');
                  setExpandedRows([]);
                  setShowHigh(false);
                  setShowUncommon(false);
                  applyFilters(recipes, '', [], 'All', false, false, 'All');
                }}
              >
                Clear Filters
              </Button>
            </Box>
  
            <Box mb={2} display="flex" flexWrap="wrap" gap={2}>
              <TextField
                label="Search"
                variant="outlined"
                fullWidth
                value={searchTerm}
                onChange={(e) => {
                  const val = e.target.value;
                  setSearchTerm(val);
                  applyFilters(recipes, val, statFilters, activeColor, showHigh, showUncommon, workshopFilter);
                }}
                style={{ marginBottom: 0, maxWidth: 600 }}
              />
            </Box>
  
            <Box mb={2} display="flex" flexWrap="wrap" gap={2}>
              {['strength', 'constitution', 'dexterity', 'intelligence', 'wisdom'].map((stat) => (
                <FormControlLabel
                  key={stat}
                  style={{ marginBottom: 8 }}
                  control={
                    <Checkbox
                      checked={statFilters.includes(stat)}
                      onChange={(e) => {
                        const updated = e.target.checked
                          ? [...statFilters, stat]
                          : statFilters.filter((s) => s !== stat);
                        setStatFilters(updated);
                        applyFilters(recipes, searchTerm, updated, activeColor, showHigh, showUncommon, workshopFilter);
                      }}
                      color="primary"
                    />
                  }
                  label={stat.charAt(0).toUpperCase() + stat.slice(1)}
                />
              ))}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showHigh}
                    onChange={(e) => {
                      const val = e.target.checked;
                      setShowHigh(val);
                      applyFilters(recipes, searchTerm, statFilters, activeColor, val, showUncommon, workshopFilter);
                    }}
                    color="primary"
                  />
                }
                label="High Spells"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={showUncommon}
                    onChange={(e) => {
                      const val = e.target.checked;
                      setShowUncommon(val);
                      applyFilters(recipes, searchTerm, statFilters, activeColor, showHigh, val, workshopFilter);
                    }}
                    color="primary"
                  />
                }
                label="Uncommon Spells"
              />
            </Box>
  
            <TableContainer component={Paper} style={{ marginTop: 16 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                        <TableCell /> 
                    <TableCell>Icon</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Stars</TableCell>
                    <TableCell>Inscriptions</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Cost</TableCell>
                    <TableCell>Materials</TableCell>
                    <TableCell>Workshop</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {[...filteredRecipes].map((item, idx) => {
                    const isExpanded = expandedRows.includes(idx);
                    const isHigh = ['High', 'HighCantrip'].includes(item.type);
                    return (
                      <React.Fragment key={idx}>
                        <TableRow
                          onClick={() =>
                            setExpandedRows((prev) =>
                              isExpanded ? prev.filter((i) => i !== idx) : [...prev, idx]
                            )
                          }
                          style={{
                            backgroundColor: idx % 2 === 0 ? '#2b2b2b' : '#1f1f1f',
                            cursor: 'pointer',
                            transition: 'background-color 0.2s ease',
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#3a3a3a')}
                          onMouseLeave={(e) =>
                            (e.currentTarget.style.backgroundColor =
                              idx % 2 === 0 ? '#2b2b2b' : '#1f1f1f')
                          }
                        >
                         <TableCell padding="checkbox">
                          {isExpanded ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </TableCell>
                          <TableCell>
                            <Avatar
                              src={item.properties_crystal?.ability_properties?.icon}
                              alt={item.name}
                              variant="square"
                              style={isHigh ? { border: '2px solid gold', boxShadow: '0 0 6px gold' } : {}}
                            />
                          </TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{renderStars(item.station_data?.level ?? 0)}</TableCell>
                          <TableCell>
                            {item.station_data?.level === 5
                              ? 'COMPLETE'
                              : `Next LVL: ${getRemainingToNextLevel(item.station_data?.total_inscriptions ?? 0)}`}
                          </TableCell>
                          <TableCell style={{ whiteSpace: 'normal', maxWidth: 300 }}>
                            {addStatusTooltips(item.properties_crystal?.ability_properties?.description || '—')}
                          </TableCell>

                          <TableCell>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                              <img
                                src="/assets/gold-runiverse.png"
                                alt="gold"
                                style={{ width: '16px', height: '16px' }}
                              />
                              <span>{item.currencies?.gold ?? 0} Gold</span>
                            </div>
                          </TableCell>
                          <TableCell>
                            {item.materials.map((mat, i) => (
                              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                <Avatar src={mat.icon} alt={mat.type} style={{ width: 20, height: 20 }} />
                                <span>
                                  {mat.amount}x {mat.resolvedName}
                                </span>
                              </div>
                            ))}
                          </TableCell>
                          <TableCell>{getWorkshopTag(item.location)}</TableCell>
                        </TableRow>
  
                        {isExpanded && (
                          <TableRow>
                            <TableCell colSpan={8} style={{ backgroundColor: '#1a1a1a' }}>
                              <Box display="grid" gridTemplateColumns="1fr 1fr 1fr 1fr" gap={4} p={2}>
                                <Box>
                                  {[...(item.properties_crystal?.stats ? Object.entries(item.properties_crystal.stats) : [])]
                                    .filter(([, value]) => value > 0)
                                    .sort((a, b) => b[1] - a[1])
                                    .map(([key, value]) => (
                                      <Box key={key} display="flex" alignItems="center" mb={1}>
                                        <Typography variant="body2" style={{ minWidth: 100 }}>
                                          {addStatTooltips(key)}
                                        </Typography>
                                        <Box display="flex" gap={0.5} alignItems="center">
                                          {Array.from({ length: value }).map((_, i) => (
                                            <span
                                              key={i}
                                              style={{ fontSize: 14, color: '#fff' }}
                                            >
                                              ★
                                            </span>
                                          ))}
                                        </Box>
                                      </Box>
                                    ))}
                                </Box>
                                <Box>
                                  <Typography variant="body2" style={{ color: '#ccc' }}>
                                    <strong>Target:</strong> {item.properties_crystal?.ability_properties?.target_type || '—'}
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography variant="body2" style={{ color: '#ccc' }}>
                                    <strong>Cooldown:</strong> {item.properties_crystal?.ability_properties?.cooldown ?? '—'}
                                  </Typography>
                                </Box>
                                <Box>
                                  <Typography variant="body2" style={{ color: '#ccc' }}>
                                    <strong>Type:</strong> {item.type || '—'}
                                  </Typography>
                                </Box>
                              </Box>
                            </TableCell>
                          </TableRow>
                        )}
                      </React.Fragment>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
  
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button variant="contained" size="small" onClick={() => setShowImageGrid(true)}>
                <CameraAltIcon />
              </Button>
            </Box>
  
            <Dialog
              open={showImageGrid}
              onClose={() => setShowImageGrid(false)}
              maxWidth="xl"
              fullWidth
            >
              <DialogTitle style={{ color: '#fff' }}>
                Top Visual Spells
                <IconButton
                  aria-label="close"
                  onClick={() => setShowImageGrid(false)}
                  style={{ position: 'absolute', right: 8, top: 8, color: '#aaa' }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent dividers style={{ backgroundColor: '#0b4b54' }}>
                <Typography
                  style={{
                    color: '#00fddb',
                    fontFamily: 'SmallestPixel7',
                    fontSize: '3em',
                    textAlign: 'center',
                    marginBottom: 16
                  }}
                  gutterBottom
                >
                  Fresco Manor Spells
                </Typography>
                <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
                  {[...filteredRecipes]
                    .filter((spell) => spell.tier_text !== 'TIER I')
                    .sort((a, b) => {
                      const isHighA = ['High', 'HighCantrip'].includes(a.type);
                      const isHighB = ['High', 'HighCantrip'].includes(b.type);
                      const levelA = a.station_data?.level ?? 0;
                      const levelB = b.station_data?.level ?? 0;
                      if (isHighA && !isHighB) return -1;
                      if (!isHighA && isHighB) return 1;
                      return levelB - levelA;
                    })
                    .slice(0, 12)
                    .map((spell, index) => {
                      const isHigh = ['High', 'HighCantrip'].includes(spell.type);
                      const filled = spell.station_data?.level ?? 0;
                      return (
                        <Box
                          key={index}
                          width={240}
                          textAlign="center"
                          p={2}
                          borderRadius={4}
                          style={{
                            backgroundImage: 'url(/assets/bg-workshop.png)',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                          }}
                        >
                          <Avatar
                            src={spell.properties_crystal?.ability_properties?.icon}
                            variant="square"
                            style={{
                              width: 72,
                              height: 72,
                              margin: '0 auto',
                              border: isHigh ? '2px solid gold' : 'none',
                              boxShadow: isHigh ? '0 0 10px gold' : 'none',
                            }}
                          />
                          <Typography
                            variant="subtitle1"
                            className="smallest-pixel-text"
                            style={{
                              marginTop: 8,
                              color: '#8dec82',
                              fontFamily: 'SmallestPixel7',
                            }}
                          >
                            {spell.name}
                          </Typography>
                          <Box display="flex" justifyContent="center" gap={0.5} mt={1}>
                            {Array.from({ length: 5 }).map((_, i) => (
                              <img
                                key={i}
                                src={i < filled ? "/assets/star-filled.png" : "/assets/star-unfilled.png"}
                                alt="star"
                                style={{ width: 20, height: 20, marginRight: 4 }}
                              />
                            ))}
                          </Box>
                        </Box>
                      );
                    })}
                </Box>
              </DialogContent>
            </Dialog>
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
  
  
};

export default SpellsTable;
