// EquipmentTable.js
import React, { useEffect, useState } from 'react';
import {
  ThemeProvider, createTheme,
  CssBaseline,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Avatar, Box, Grid, TextField, Button
} from '@material-ui/core';
import { idAffix, idDescriptors, equipmentTable } from './data/spellData';

const darkTheme = createTheme({
  palette: { type: 'dark' },
  overrides: {
    MuiTableCell: {
      root: { padding: '6px 10px', fontSize: '0.85rem', whiteSpace: 'nowrap' },
      head: { backgroundColor: '#333', color: '#fff', fontWeight: 'bold' }
    }
  }
});

const descriptorMap = idDescriptors.flatMap(group => group).reduce((acc, item) => {
  acc[item._id] = item.name;
  return acc;
}, {});

const EquipmentTable = () => {
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  useEffect(() => {
    const sorted = [...equipmentTable].sort((a, b) => {
      const tierOrder = { 'TIER II': 0, 'TIER I': 1 };
      const tierA = tierOrder[a.tier_text] ?? 99;
      const tierB = tierOrder[b.tier_text] ?? 99;
    
      const specialGroupA = /Druid|Amber Guard|Moth|Lunar/.test(a.name) ? -1 : 0;
      const specialGroupB = /Druid|Amber Guard|Moth|Lunar/.test(b.name) ? -1 : 0;
    
      const goldA = a.currencies?.gold ?? 0;
      const goldB = b.currencies?.gold ?? 0;
    
      if (specialGroupA !== specialGroupB) return specialGroupA - specialGroupB;
      if (tierA !== tierB) return tierA - tierB;
      if (goldA !== goldB) return goldB - goldA;
    
      return a.name.localeCompare(b.name);
    });
    
    const filtered = sorted.filter(item => !item.one_time_use);

    filtered.forEach(item => {
      item.materials = item.materials?.map(mat => ({
        ...mat,
        type: descriptorMap[mat.material] || mat.type,
        isHighlighted: /Lunar|Golden|Timeless/.test(descriptorMap[mat.material] || '')
      })) || [];

      item.isHighlighted = item.materials.some(m => m.isHighlighted);
    });

    setData(filtered);
  }, []);

  const toggleRow = (id) => {
    setExpandedRows(prev =>
      prev.includes(id) ? prev.filter(row => row !== id) : [...prev, id]
    );
  };

  const affixDescriptions = idAffix[0];

  const filteredData = data.filter(item => {
    const matchesType = filterType === 'All' || item.type === filterType;
  
    const affixText = item.properties_forge?.affixes?.map(affix =>
      affixDescriptions[affix.affix]?.toLowerCase() || ''
    ).join(' ') || '';
  
    const materialText = item.materials?.map(mat => mat.type.toLowerCase()).join(' ') || '';
    const affixPoolText = item.properties_forge?.affixes_pool?.map(a => a.name.toLowerCase()).join(' ') || '';
  
    const fullText = `${item.name.toLowerCase()} ${affixText} ${materialText} ${affixPoolText}`;
  
    if (!matchesType) return false;
  
    const searchTerms = search.toLowerCase().split(',').map(s => s.trim()).filter(Boolean);
  
    return searchTerms.every(term => fullText.includes(term));
  });
  

  const highlightedFirst = [...filteredData].sort((a, b) => {
    return (b.isHighlighted ? 1 : 0) - (a.isHighlighted ? 1 : 0);
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box p={2}>
        <Typography variant="h5" gutterBottom>Fresco Forge Equipment</Typography>

        <Box mb={1} display="flex" flexWrap="wrap" gap={1}>
          <Button variant={filterType === 'All' ? 'contained' : 'outlined'} onClick={() => setFilterType('All')}>All</Button>
          <Button variant={filterType === 'Relic' ? 'contained' : 'outlined'} onClick={() => setFilterType('Weapon')}>Relics</Button>
          <Button variant={filterType === 'Headgear' ? 'contained' : 'outlined'} onClick={() => setFilterType('Headgear')}>Headgear</Button>
          <Button variant={filterType === 'Suit' ? 'contained' : 'outlined'} onClick={() => setFilterType('Suits')}>Suits</Button>
          <Button variant="outlined" onClick={() => { setFilterType('All'); setSearch(''); }}>Clear</Button>
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

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Affixes</TableCell>
                <TableCell>Cost</TableCell>
                <TableCell>Materials</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {highlightedFirst.map((item) => (
                <React.Fragment key={item._id}>
                  <TableRow
                    style={{ backgroundColor: '#2b2b2b', cursor: 'pointer' }}
                    onClick={() => toggleRow(item._id)}
                  >
                    <TableCell>
                      <Box
                        component="img"
                        src={item.image}
                        alt={item.name}
                        sx={{
                          width: 32,
                          height: 32,
                          objectFit: 'contain',
                          backgroundColor: 'transparent',
                          p: 0.5,
                          boxSizing: 'border-box',
                          border: item.isHighlighted ? '2px solid gold' : 'none'
                        }}
                      />
                    </TableCell>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>
                      <Box display="flex" flexDirection="column" gap={0.5}>
                        {item.properties_forge?.affixes?.filter(affix => affix.affix !== 'Random')
                          .concat(item.properties_forge?.affixes?.filter(affix => affix.affix === 'Random') || [])
                          .map((affix, i) => (
                            <span key={i}>
                              {affix.affix === 'Random'
                                ? `+${affix.type} - Random`
                                : (affixDescriptions[affix.affix] || `${affix.type} - ${affix.affix}`)}
                            </span>
                          ))}
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
                  </TableRow>

                  {expandedRows.includes(item._id) && (
                    <TableRow>
                      <TableCell colSpan={5} style={{ backgroundColor: '#1c1c1c' }}>
                        <Typography variant="subtitle2" gutterBottom style={{ color: '#fff', marginBottom: 8 }}>
                          Random Affix Pool:
                        </Typography>
                        <Box display="flex" flexWrap="wrap" gap={4}>
                          {Object.entries(
                            (item.properties_forge?.affixes_pool || []).reduce((acc, affix) => {
                              if (!acc[affix.type]) acc[affix.type] = [];
                              acc[affix.type].push(affix);
                              return acc;
                            }, {})
                          ).map(([type, affixes]) => (
                            <Box key={type} sx={{ minWidth: 150, mr: 4 }}>
                              <Typography variant="subtitle2" style={{ color: '#90caf9', marginBottom: 4 }}>{type}</Typography>
                              <Box display="flex" flexDirection="column" gap={1}>
                                {affixes.map((affix, index) => (
                                  <Typography key={index} variant="body2" style={{ color: '#ccc' }}>{affix.name}</Typography>
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
      </Box>
    </ThemeProvider>
  );
};

export default EquipmentTable;
