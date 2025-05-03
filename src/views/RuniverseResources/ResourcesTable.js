// ResourcesTable.js
import React, { useState } from 'react';
import {
  ThemeProvider, createTheme,
  CssBaseline,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Typography, Box, TextField
} from '@material-ui/core';

const darkTheme = createTheme({
  palette: { type: 'dark' },
  overrides: {
    MuiTableCell: {
      root: { padding: '6px 10px', fontSize: '0.85rem', whiteSpace: 'normal' },
      head: { backgroundColor: '#333', color: '#fff', fontWeight: 'bold' }
    }
  }
});

const resourceData = [
  {
    region: 'Southern Thicket',
    wood: ['Oak', 'Olive', 'Pine'],
    fabric: ['Hemp', 'Jute', 'Flax', 'Cotton'],
    stone: ['Sand', 'Shale', 'Basalt', 'Granite'],
    metal: ['Tin', 'Iron', 'Copper'],
    element: ['Nitrogen', 'Carbon', 'Hydrogen'],
    resin: [],
    gem: []
  },
  {
    region: 'Northern Thicket',
    wood: ['Oak', 'Redwood', 'Pine'],
    fabric: ['Hemp', 'Flax', 'Cotton'],
    stone: ['Basalt', 'Granite', 'Limestone'],
    metal: ['Tin', 'Iron', 'Tungsten'],
    element: ['Nitrogen', 'Hydrogen'],
    resin: [],
    gem: []
  },
  {
    region: 'The Wild',
    wood: ['Oak', 'Redwood', 'Pine', 'Holly'],
    fabric: ['Cashmere', 'Flax', 'Wool'],
    stone: ['Limestone'],
    metal: ['Zinc', 'Aluminum'],
    element: ['Sulfur', 'Calcium', 'Nitrogen'],
    resin: ['Mastic', 'Amber'],
    gem: []
  },
  {
    region: 'Azure Expanse',
    wood: ['Oak', 'Redwood', 'Pine', 'Ash'],
    fabric: ['Cashmere', 'Flax', 'Wool'],
    stone: ['Marble'],
    metal: ['Zinc', 'Titanium'],
    element: ['Antimony', 'Silicon'],
    resin: ['Mastic', 'Amber', 'Pitch'],
    gem: []
  },
  {
    region: 'Moon Wood',
    wood: ['Oak', 'Redwood', 'Willow', 'Pine'],
    fabric: ['Flax', 'Silk'],
    stone: ['Shale', 'Alabaster'],
    metal: ['Zinc', 'Titanium'],
    element: ['Antimony'],
    resin: ['Dragon’s Blood', 'Copal', 'Shellac', 'Guaiac'],
    gem: []
  },
  {
    region: 'All Regions',
    wood: ['Oak'],
    fabric: [],
    stone: [],
    metal: [],
    element: [],
    resin: [],
    gem: ['Sapphire', 'Amethyst', 'Ruby', 'Topaz', 'Smoky Quartz', 'Emerald', 'Diamond']
  }
];

const renderMaterials = (materials) => {
  if (materials.length === 0) {
    return '—';
  }
  return (
    <Box display="flex" flexDirection="column">
      {materials.map((mat, index) => (
        <span key={index}>{mat}</span>
      ))}
    </Box>
  );
};

const ResourcesTable = () => {
  const [searchText, setSearchText] = useState('');

  const filteredData = resourceData.filter(row => {
    const searchTerms = searchText.toLowerCase().split(',').map(term => term.trim()).filter(Boolean);

    const fullText = [
      row.region,
      ...row.wood,
      ...row.fabric,
      ...row.stone,
      ...row.metal,
      ...row.element,
      ...row.resin,
      ...row.gem
    ].join(' ').toLowerCase();

    return searchTerms.every(term => fullText.includes(term));
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box p={2}>
        <Typography variant="h5" gutterBottom>Resources Table</Typography>

        <Box mb={2}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search... "
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            style={{ width: 400 }}
          />
        </Box>

        <TableContainer component={Paper}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>Region</TableCell>
                <TableCell>Wood</TableCell>
                <TableCell>Fabric</TableCell>
                <TableCell>Stone</TableCell>
                <TableCell>Metal</TableCell>
                <TableCell>Element</TableCell>
                <TableCell>Resin</TableCell>
                <TableCell>Gem</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {filteredData.map((row, index) => (
                  <TableRow
                    key={index}
                    style={{
                      backgroundColor: index % 2 === 0 ? '#2b2b2b' : '#1e1e1e',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#3c3c3c'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = index % 2 === 0 ? '#2b2b2b' : '#1e1e1e'}
                  >
                  <TableCell>{row.region}</TableCell>
                  <TableCell>{renderMaterials(row.wood)}</TableCell>
                  <TableCell>{renderMaterials(row.fabric)}</TableCell>
                  <TableCell>{renderMaterials(row.stone)}</TableCell>
                  <TableCell>{renderMaterials(row.metal)}</TableCell>
                  <TableCell>{renderMaterials(row.element)}</TableCell>
                  <TableCell>{renderMaterials(row.resin)}</TableCell>
                  <TableCell>{renderMaterials(row.gem)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  );
};

export default ResourcesTable;
