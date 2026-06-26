// FRESCO EquipmentTable.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  ThemeProvider, createTheme,
  CssBaseline,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Avatar, Box, TextField, Button
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
//import { idAffix, idDescriptors } from './data/spellData';
import { Link as RouterLink } from 'react-router-dom'

import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Tooltip from '@material-ui/core/Tooltip';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';




import { idAffix, idDescriptors, buffs, debuffs } from 'components/molecules/data'


const useStyles = makeStyles(() => ({
  hoverRow: {
    backgroundColor: '#2b2b2b',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#3a3a3a',
    },
  },
}));


const darkTheme = createTheme({
  palette: { type: 'dark' },
  overrides: {
    MuiTableCell: {
      root: { padding: '6px 10px', fontSize: '0.85rem', whiteSpace: 'nowrap' },
      head: { backgroundColor: '#333', color: '#fff', fontWeight: 'bold' }
    }
  }
});

const pastelColors = {
  Red: { bg: '#ffcccc', text: '#990000' },
  Green: { bg: '#ccffcc', text: '#006600' },
  Blue: { bg: '#cce6ff', text: '#004080' },
  Yellow: { bg: '#fff5cc', text: '#996600' }
};

const descriptorMap = idDescriptors.flatMap(group => group).reduce((acc, item) => {
  acc[item._id] = item.name;
  return acc;
}, {});

const forgeMap = {
  '68100378bf5528ac42a0f8ae': 'Red',
  '680b1fe93c7150ab1f5134f6': 'Green',
  '680b20aab8b5759c0eef397f': 'Blue',
  '681003a0bf5528ac42a0f8f1': 'Yellow'
};

const postBodies = [
  { id: "68100378bf5528ac42a0f8ae", requester_id: "CFC4DA6D24CA928D", excluded_items: [], character_id: "5AC9BD3F729CD59C" },
  { id: "680b1fe93c7150ab1f5134f6", requester_id: "CFC4DA6D24CA928D", excluded_items: ["679d1dd288ed77a53047399f", "679d275788ed77a5304829b2"], character_id: "5AC9BD3F729CD59C" },
  { id: "680b20aab8b5759c0eef397f", requester_id: "CFC4DA6D24CA928D", excluded_items: ["64e6821fe8ec8d469b25f199"], character_id: "5AC9BD3F729CD59C" },
  { id: "681003a0bf5528ac42a0f8f1", requester_id: "CFC4DA6D24CA928D", excluded_items: ["679d246c88ed77a53048057d"], character_id: "5AC9BD3F729CD59C" }
];

const statDescriptions = {
  Strength: `**Might** - Determines the Power of your Physical Spells.`,
  Dexterity: `**Speed** - Determines how fast you act.<br />**Agility** - Determines your chance to dodge attacks.`,
  Constitution: `**Mettle** - Determines the power of your shields.<br />**Durability** - Determines your resistance to Physical Attacks.<br />**Toughness** - Determines how much HP you have.`,
  Intelligence: `**Brilliance** - Determines the Power of your Magical Spells.`,
  Luck: `**Crit Chance** - Determines your chance to deal critical damage.<br />**Crit Damage** - Determines the power of your critical hits.`,
  Wisdom: `**Grace** - Determines the power of your heals.<br />**Insight** - Determines your resistance to Magical Attacks.<br />**Resilience** - Determines your resistance to status effects.`,

  Might: `**Might** - Determines the Power of your Physical Spells.`,
  Speed: `**Speed** - Determines how fast you act.`,
  Agility: `**Agility** - Determines your chance to dodge attacks.`,
  Mettle: `**Mettle** - Determines the power of your shields.`,
  Durability: `**Durability** - Determines your resistance to Physical Attacks.`,
  Toughness: `**Toughness** - Determines how much HP you have.`,
  Brilliance: `**Brilliance** - Determines the Power of your Magical Spells.`,
  "Critical Chance": `**Crit Chance** - Determines your chance to deal critical damage.`,
  "Critical DMG": `**Crit Damage** - Determines the power of your critical hits.`,
  Grace: `**Grace** - Determines the power of your heals.`,
  Insight: `**Insight** - Determines your resistance to Magical Attacks.`,
  Resilience: `**Resilience** - Determines your resistance to status effects.`,
    // Aliases
  STR: `**Might** - Determines the Power of your Physical Spells.`,
  DEX: `**Speed** - Determines how fast you act.<br />**Agility** - Determines your chance to dodge attacks.`,
  CON: `**Mettle** - Determines the power of your shields.<br />**Durability** - Determines your resistance to Physical Attacks.<br />**Toughness** - Determines how much HP you have.`,
  INT: `**Brilliance** - Determines the Power of your Magical Spells.`,
  WIS: `**Grace** - Determines the power of your heals.<br />**Insight** - Determines your resistance to Magical Attacks.<br />**Resilience** - Determines your resistance to status effects.`,
  LCK: `**Crit Chance** - Determines your chance to deal critical damage.<br />**Crit Damage** - Determines the power of your critical hits.`,
  "Crit DMG": `**Crit Damage** - Determines the power of your critical hits.`,

};

const statusDescriptions = {};

[...buffs, ...debuffs].forEach(({ name, description, duration }) => {
  statusDescriptions[name.toLowerCase()] = `**${name}** - ${description}<br />*${duration}*`;
});


const addStatTooltips = (text) => {
  const allTerms = {
    ...statDescriptions,
    ...Object.fromEntries(buffs.map(b => [b.name, `**${b.name}** - ${b.description} (${b.duration})`])), 
    ...Object.fromEntries(debuffs.map(d => [d.name, `**${d.name}** - ${d.description} (${d.duration})`])),
  };

  const iconMap = {
    ...Object.fromEntries(buffs.map(b => [b.name.toLowerCase(), b.icon])),
    ...Object.fromEntries(debuffs.map(d => [d.name.toLowerCase(), d.icon])),
  };

  const regex = new RegExp(`\\b(${Object.keys(allTerms).join("|")})\\b`, "gi");
  const parts = text.split(regex);

  return parts.map((part, i) => {
    const key = Object.keys(allTerms).find(k => k.toLowerCase() === part.toLowerCase());
    if (!key) return part;

    const isStatus = iconMap[key.toLowerCase()];
    const description = allTerms[key];
    const icon = iconMap[key.toLowerCase()];

    return (
    <Tooltip
      key={i}
      arrow
      title={
        <Box display="flex" flexDirection="column" alignItems="start" gap={1}>
          {icon && <img src={icon} alt={key} style={{ width: 24, height: 24, marginBottom: 5 }} />}
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            components={{
              br: () => <><br /></>,
              strong: ({ children }) => <span style={{ color: 'gold', fontWeight: 'bold' }}>{children}</span>
            }}
          >
            {description}
          </ReactMarkdown>
        </Box>
      }
    >
      <span style={{ borderBottom: "1px dotted #90caf9", color: "#90caf9" }}>
        {part}
      </span>
    </Tooltip>

    );
  });
};




const fetchWithRetry = async (body, retries = 5, delay = 2000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const res = await axios.post('https://api.prod.runiverseservers.com/GetStationRecipeItems', body);
      return res.data.map(item => ({
        ...item,
        forge: forgeMap[body.id],
        station_id: body.id,
      }));
    } catch (err) {
      if (!err.response) {
        console.error(`Network error (no response) on attempt ${attempt}:`, err.message);
      //  throw err; // Don't retry CORS or DNS issues
      }

      if (attempt < retries) {
        console.warn(`Retry ${attempt} for forge ${forgeMap[body.id]}...`);
        await new Promise(res => setTimeout(res, delay));
      } else {
        console.error(`Failed after ${retries} retries for forge ${forgeMap[body.id]}`);
        throw err;
      }
    }
  }
};


const fetchAndMergeData = async () => {
  const responses = await Promise.all(
    postBodies.map(body => fetchWithRetry(body)) // Each retries individually until it works or fails after limit
  );

  const combined = responses.flat().filter(item => !item.one_time_use);
  const map = new Map();

  for (const item of combined) {
    const key = item._id;
    const current = map.get(key);
    const countInscriptions = item.properties_forge?.affixes?.length || 0;
    const existingCount = current?.properties_forge?.affixes?.length || Infinity;
    if (!current || countInscriptions < existingCount) {
      map.set(key, item);
    }
  }

  return Array.from(map.values());
};

const normalizeTier = (text) => text?.trim().toUpperCase() || '';
const tierOrder = { 'TIER II': 0, 'TIER I': 1 };

const groupAffixes = (affixPool = []) => {
  const romanOrder = ['I','II','III','IV','V','VI','VII','VIII','IX','X'];

  const grouped = affixPool.reduce((acc, affix) => {
    const match = affix.name.match(/^(.*?)(?:\s+(I|II|III|IV|V|VI|VII|VIII|IX|X))?$/);
    if (!match) return acc;

    const [, base, levelRaw] = match;
    const baseName = base.trim();
    const level = levelRaw || 'I'; // Treat missing numeral as "I"
    const key = `${affix.type}||${baseName}`;

    if (!acc[key]) acc[key] = { type: affix.type, base: baseName, levels: new Set(), affix };
    acc[key].levels.add(level);
    return acc;
  }, {});

  return Object.values(grouped).map(({ type, base, levels, affix }) => {
    const sortedLevels = Array.from(levels).sort(
      (a, b) => romanOrder.indexOf(a) - romanOrder.indexOf(b)
    );

    const label = sortedLevels.length === 1
      ? `${base} ${sortedLevels[0]}`
      : `${base} ${sortedLevels[0]}–${sortedLevels[sortedLevels.length - 1]}`;

    const description = idAffix[0]?.[affix.affix] || 'No description available';
    return { type, name: label, description };
  }).reduce((acc, affix) => {
    if (!acc[affix.type]) acc[affix.type] = [];
    acc[affix.type].push(affix);
    return acc;
  }, {});
};



const EquipmentTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');
  const [showTopDialog, setShowTopDialog] = useState(false);
  const [filterForge, setFilterForge] = useState('All');
  const [tierFilters, setTierFilters] = useState({
    High: false,
    Uncommon: false,
    Common: false,
  });

  const classes = useStyles();

  useEffect(() => {
    fetchAndMergeData().then(items => {
      if (items === null) {
        setData([]); // fallback to empty state
        setLoading(false);
        return;
      }

      const sorted = [...items].sort((a, b) => {
        const nameA = a.name || '';
        const nameB = b.name || '';
      
        const isTopTier = (name) => /Druid|Amber Guard|Moth|Lunar/.test(name);
        const isSecondTier = (name) =>
          /^Corrupt|^Golden|^Dark|^Toxic|^Yellow/.test(name) || name.includes("Fold");

      
        const tierRank = (name) =>
          isTopTier(name) ? 0 :
          isSecondTier(name) ? 1 :
          2;
      
        const rankA = tierRank(nameA);
        const rankB = tierRank(nameB);
        if (rankA !== rankB) return rankA - rankB;
      
        const tierA = tierOrder[normalizeTier(a.tier_text)] ?? 99;
        const tierB = tierOrder[normalizeTier(b.tier_text)] ?? 99;
        if (tierA !== tierB) return tierA - tierB;
      
        const starsA = a.station_data?.level ?? 0;
        const starsB = b.station_data?.level ?? 0;
        if (starsB !== starsA) return starsB - starsA;
      
        const insA = a.station_data?.total_inscriptions ?? 0;
        const insB = b.station_data?.total_inscriptions ?? 0;
        return insB - insA;
      });
      
      sorted.forEach(item => {
        item.materials = item.materials?.map(mat => ({
          ...mat,
          type: descriptorMap[mat.material] || mat.type,
          isHighlighted: /Lunar|Golden|Timeless/.test(descriptorMap[mat.material] || '')
        })) || [];
        item.isHighlighted = item.materials.some(m => m.isHighlighted);
      });
      setData(sorted);
      setLoading(false);
    });
  }, []);


  const toggleRow = id => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(row => row !== id) : [...prev, id]
    );
  };

  const affixDescriptions = idAffix[0];

  const filteredData = data.filter(item => {
    const matchesType = filterType === 'All' || item.type === filterType;
    const matchesForge = filterForge === 'All' || item.forge === filterForge;

    const tierMap = {
      "TIER I": "Common",
      "TIER II": "Uncommon",
      "TIER III": "High",
    };
    const tierLabel = tierMap[item.tier_text?.trim()] || "";

    const anyTierChecked = Object.values(tierFilters).some(val => val);
    const matchesTier = !anyTierChecked || tierFilters[tierLabel];

    const affixText = item.properties_forge?.affixes?.map(a => affixDescriptions[a.affix] || '').join(' ') || '';
    const affixPoolText = item.properties_forge?.affixes_pool?.map(a => a.name.toLowerCase()).join(' ') || '';
    const materialText = item.materials?.map(m => m.type).join(' ') || '';
    const forgeText = item.forge?.toLowerCase() || '';
    const fullText = `${item.name} ${affixText} ${affixPoolText} ${materialText} ${forgeText}`.toLowerCase();

    return matchesType && matchesForge && matchesTier &&
      search.toLowerCase().split(',').every(term => fullText.includes(term.trim()));
  });



  

  const renderStars = (level = 0) => {
    return "★".repeat(level) + "☆".repeat(5 - level);
  };

  const getRemainingToNextLevel = (total = 0, level = 0) => {
    const thresholds = [0, 25, 75, 325, 1575];
    if (level >= 5) return 0;
    return thresholds[level] - total;
  };

  const getForgeTag = (forge) => {
    const color = pastelColors[forge];
    return (
      <Box px={1.5} py={0.5} style={{ borderRadius: 6, fontWeight: 'bold', fontSize: '0.75rem', backgroundColor: color?.bg, color: color?.text, border: '1px solid rgba(255,255,255,0.2)', textTransform: 'uppercase' }}>{forge}</Box>
    );
  };




  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box p={2}>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography variant="h5" gutterBottom>Fresco Forge Equipment</Typography>
          <Button component={RouterLink} to="/runiverse/equipment/all" variant="contained" color="primary">Full Equipment List</Button>
        </Box>
  
        {loading && (
          <Box display="flex" justifyContent="center" alignItems="center" my={2}>
            <img src="/assets/loading-runiverse.gif" alt="Loading..." style={{ width: '80px', height: '80px' }} />
          </Box>
        )}
  
        {!loading && data.length === 0 && (
          <Typography variant="h6" style={{ color: '#ccc', textAlign: 'center', marginTop: 40 }}>
            The server is currently unreachable. Please check back later.
          </Typography>
        )}
  
        {!loading && (
          <>
            <Box display="flex" flexWrap="wrap" gap={3} mb={2}>
              {['Red', 'Green', 'Blue', 'Yellow'].map(forge => (
                <Button
                  key={forge}
                  onClick={() => setFilterForge(forge)}
                  variant={filterForge === forge ? 'contained' : 'outlined'}
                  style={{
                    backgroundColor: pastelColors[forge].bg,
                    color: pastelColors[forge].text,
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}
                >
                  {forge} Forge
                </Button>
              ))}
              <Button
                style={{ marginLeft: 10 }}
                variant="outlined"
                onClick={() => {
                  setFilterForge('All');
                  setFilterType('All');
                  setSearch('');
                  setExpandedRows([]);
                  setTierFilters({ High: false, Uncommon: false, Common: false });
                }}


              >
                Clear Filters
              </Button>
            </Box>
  
            <Box mb={1} display="flex" flexWrap="wrap" gap={1}>
              {['All', 'Weapon', 'Headgear', 'Suits'].map(type => (
                <Button
                  key={type}
                  variant={filterType === type ? 'contained' : 'outlined'}
                  onClick={() => setFilterType(type)}
                >
                  {type === 'Weapon' ? 'Relics' : type}
                </Button>
              ))}
            </Box>
  
            <Box mb={2}>
              <TextField
                variant="outlined"
                size="small"
                placeholder="Search..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{ width: 500 }}
              />
            </Box>

            <Box display="flex" flexDirection="row" mt={1} mb={2}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tierFilters.High}
                    onChange={(e) =>
                      setTierFilters({ ...tierFilters, High: e.target.checked })
                    }
                  />
                }
                label="High"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tierFilters.Uncommon}
                    onChange={(e) =>
                      setTierFilters({ ...tierFilters, Uncommon: e.target.checked })
                    }
                  />
                }
                label="Uncommon"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={tierFilters.Common}
                    onChange={(e) =>
                      setTierFilters({ ...tierFilters, Common: e.target.checked })
                    }
                  />
                }
                label="Common"
              />
            </Box>
          </>
        )}
  
        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell /> 
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Stars</TableCell>
                <TableCell>Inscriptions</TableCell>
                <TableCell>Affixes</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Materials</TableCell>
                <TableCell>Forge</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map(item => (
                <React.Fragment key={item._id}>
                  <TableRow className={classes.hoverRow} onClick={() => toggleRow(item._id)}>
                  <TableCell padding="checkbox">
                    {expandedRows.includes(item._id) ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                  </TableCell>
                    
                    
                    <TableCell>
                      <Box component="img" src={item.image} alt={item.name} sx={{ width: 40, height: 40, objectFit: 'contain', p: 0.5, border: item.isHighlighted
      ? '2px solid gold'
      : /^Corrupt|^Golden|^Dark|^Toxic|^Yellow/.test(item.name) || item.name.includes("Fold")
      ? '2px solid silver'
      : 'none' }} />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{renderStars(item.station_data?.level ?? 0)}</TableCell>
                    <TableCell>
                      {(item.station_data?.level ?? 0) === 5
                        ? 'COMPLETE'
                        : `Next LVL: ${getRemainingToNextLevel(item.station_data?.total_inscriptions ?? 0, item.station_data?.level ?? 0)}`}
                    </TableCell>

                    <TableCell>
                      <Box display="flex" flexDirection="column" gap={0.5}>
                        {item.properties_forge?.affixes?.filter(a => a.affix !== 'Random')
                          .concat(item.properties_forge?.affixes?.filter(a => a.affix === 'Random') || [])
                          .map((affix, i) => {
                            const affixText = affix.affix === 'Random'
                              ? `+${affix.type} - Random`
                              : (affixDescriptions[affix.affix] || `${affix.type} - ${affix.affix}`);

                            return (
                              <Typography key={i} variant="body2">
                                {addStatTooltips(affixText)}
                              </Typography>
                            );
                          })}
                      </Box>
                    </TableCell>

                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <img src="/assets/gold-runiverse.png" alt="gold" style={{ width: 16, height: 16 }} />
                        <span>{item.currencies?.gold ?? 0} Gold</span>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap={2}>
                        {Array.from({ length: Math.ceil(item.materials.length / 3) }).map((_, colIndex) => (
                          <Box key={colIndex} display="flex" flexDirection="column" gap={1}>
                            {item.materials.slice(colIndex * 3, colIndex * 3 + 3).map((mat, i) => (
                              <Box key={i} display="flex" alignItems="center" gap={1}>
                                <Avatar src={mat.icon} alt={mat.type} style={{ width: 20, height: 20 }} />
                                <span>{mat.amount}x {mat.type}</span>
                              </Box>
                            ))}
                          </Box>
                        ))}
                      </Box>
                    </TableCell>
                    <TableCell>{getForgeTag(item.forge)}</TableCell>
                  </TableRow>
                  {expandedRows.includes(item._id) && (
                    <TableRow>
                      <TableCell colSpan={8} style={{ backgroundColor: '#1a1a1a' }}>
                        <Typography variant="subtitle2" gutterBottom style={{ color: '#fff', marginBottom: 8 }}>
                          Random Affix Pool:
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={4}>
                          {Object.entries(groupAffixes(item.properties_forge?.affixes_pool)).map(([type, affixes]) => (
                            <Box key={type} sx={{ minWidth: 150, mr: 4 }}>
                              <Typography variant="subtitle2" style={{ color: '#90caf9', marginBottom: 4 }}>{type}</Typography>
                              <Box display="flex" flexDirection="column" gap={1}>
                                {affixes.map((affix, index) => (
                                  <Tooltip
                                    key={index}
                                    arrow
                                    title={
                                      <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                                        {affix.description}
                                      </ReactMarkdown>
                                    }
                                  >
                                    <Typography variant="body2" style={{ color: '#ffffff', cursor: 'help' }}>
                                      {affix.name}
                                    </Typography>
                                  </Tooltip>
                                ))}
                              </Box>
                            </Box>
                          ))}

                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
  
        <Box mt={2} display="flex" justifyContent="flex-end">
          <Button variant="contained" size="small" onClick={() => setShowTopDialog(true)}>
            <CameraAltIcon />
          </Button>
        </Box>

  
        <Dialog open={showTopDialog} onClose={() => setShowTopDialog(false)} maxWidth="xl" fullWidth>
          <DialogTitle style={{ color: '#fff' }}>
            Top Visual Equipment
            <IconButton aria-label="close" onClick={() => setShowTopDialog(false)} style={{ position: 'absolute', right: 8, top: 8, color: '#aaa' }}>
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers style={{ backgroundColor: '#0b4b54' }}>
            <Typography style={{ color: '#00fddb', fontFamily: 'SmallestPixel7', fontSize: '3em', textAlign: 'center', marginBottom: 16 }} gutterBottom>
              Fresco Forge Equipment
            </Typography>
            <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
              {[...filteredData]
                .filter(eq =>
                  eq.station_data?.level > 1 ||
                  /Amber Guard|Moth|Druid|Lunar/.test(eq.name) ||
                  eq.tier_text === 'TIER II'
                )

                .sort((a, b) => {
                  const isTopTier = (name) => /Druid|Amber Guard|Moth|Lunar/.test(name);
                  const isSecondTier = (name) =>
                    /^Corrupt|^Golden|^Dark|^Toxic|^Yellow/.test(name) || name.includes("Fold");

                  
                  const tierRank = (name) =>
                    isTopTier(name) ? 0 :
                    isSecondTier(name) ? 1 :
                    2;
                
                  const rankA = tierRank(a.name);
                  const rankB = tierRank(b.name);
                  if (rankA !== rankB) return rankA - rankB;
                
                  const normalizeTier = (text) => text?.trim().toUpperCase() || '';
                  const tierOrder = { 'TIER II': 0, 'TIER I': 1 };
                  const tierA = tierOrder[normalizeTier(a.tier_text)] ?? 99;
                  const tierB = tierOrder[normalizeTier(b.tier_text)] ?? 99;
                  if (tierA !== tierB) return tierA - tierB;
                
                  const starsA = a.station_data?.level ?? 0;
                  const starsB = b.station_data?.level ?? 0;
                  return starsB - starsA;
                })
                
                
                .slice(0, 12)
                .map((item, index) => (
                  <Box key={index} width={240} height={260} textAlign="center" p={2} borderRadius={4} style={{ backgroundImage: 'url(/assets/bg-workshop.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <Box display="flex" justifyContent="center" alignItems="center" height={100}>
                      <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width={60}
                        height={60}
                        style={{
                          backgroundColor: '#1e1e1e',
                          boxShadow: item.isHighlighted
                          ? '0 0 12px 3px gold'
                          : /^Corrupt|^Golden|^Dark|^Toxic|^Yellow/.test(item.name) || item.name.includes("Fold")
                          ? '0 0 12px 3px silver'
                          : 'none',
                          borderRadius: 4,
                          overflow: 'hidden'
                        }}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          style={{ width: item.type === 'Suits' || item.type === 'Headgear' ? '40px' : '100%', height: item.type === 'Suits' || item.type === 'Headgear' ? '70px' : '100%', objectFit: 'contain' }}
                        />
                      </Box>
                    </Box>
                    <Typography variant="subtitle1" className="smallest-pixel-text" style={{ marginTop: 8, color: '#8dec82', fontFamily: 'SmallestPixel7' }}>
                      {item.name}
                    </Typography>
                    <Box display="flex" justifyContent="center" gap={0.5} mt={1}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <img key={i} src={i < (item.station_data?.level ?? 0) ? "/assets/star-filled.png" : "/assets/star-unfilled.png"} alt="star" style={{ width: 20, height: 20, marginRight: 4 }} />
                      ))}
                    </Box>
                  </Box>
                ))}
            </Box>
          </DialogContent>
        </Dialog>
      </Box>
    </ThemeProvider>
  );
  
  

};

export default EquipmentTable;
