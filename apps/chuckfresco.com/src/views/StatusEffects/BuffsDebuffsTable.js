// BuffsDebuffsTable.js
import React, { useState } from "react";
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Avatar, TextField, Box, Typography, ThemeProvider, createTheme, CssBaseline
} from "@material-ui/core";

const darkTheme = createTheme({
  palette: { type: "dark" },
  overrides: {
    MuiTableCell: {
      root: { padding: "6px 10px", fontSize: "0.85rem", whiteSpace: "nowrap" },
      head: { backgroundColor: "#333", color: "#fff", fontWeight: "bold" }
    }
  }
});

const buffs = [
  { name: "Accelerate", description: "Fills a percentage of the ATB.", duration: "Immediate", icon: "/assets/status/accelerate.png" },
  { name: "Regen", description: "Recover a small amount of HP at the start of each turn.", duration: "Lasts 3 turns", icon: "/assets/status/regen.png" },
  { name: "Cleanse", description: "Removes all debuffs.", duration: "Immediate", icon: "/assets/status/cleanse.png" },
  { name: "Shield", description: "Grants a decaying shield which absorbs damage taken.", duration: "Lasts until depleted", icon: "/assets/status/shield.png" },
  { name: "Empower", description: "Increases damage dealt.", duration: "Applies 3 times", icon: "/assets/status/empower.png" },
  { name: "Taunt", description: "When attacked, must be targeted first.", duration: "Lasts 3 turns", icon: "/assets/status/taunt.png" },
  { name: "Haste", description: "Increases speed.", duration: "Lasts 3 turns", icon: "/assets/status/haste.png" },
  { name: "Ward", description: "Reduces damage taken.", duration: "Applies 3 times", icon: "/assets/status/ward.png" },
];

const debuffs = [
  { name: "Bleed", description: "Lose a moderate amount of HP when damage is taken.", duration: "Applies once", icon: "/assets/status/bleed.png" },
  { name: "Burn", description: "Lose a small amount of HP at the start of each turn.", duration: "Lasts 3 turns", icon: "/assets/status/burn.png" },
  { name: "Charm", description: "Allies are considered enemies. Actions are chosen at random.", duration: "Applies once", icon: "/assets/status/charm.png" },
  { name: "Confuse", description: "Actions and targets are chosen at random.", duration: "Applies once", icon: "/assets/status/confuse.png" },
  { name: "Corrupt", description: "Lose a small amount of HP when healing is received.", duration: "Applies 3 times", icon: "/assets/status/corrupt.png" },
  { name: "Enfeeble", description: "Reduces damage dealt.", duration: "Applies 3 times", icon: "/assets/status/enfeeble.png" },
  { name: "Exhaust", description: "Removes a percentage of the ATB.", duration: "Immediate", icon: "/assets/status/exhaust.png" },
  { name: "Frostbite", description: "Lose a small amount of HP when a spell/ability is used.", duration: "Applies 3 times", icon: "/assets/status/frostbite.png" },
  { name: "Poison", description: "Lose a small amount of HP at the end of each turn.", duration: "Lasts 3 turns", icon: "/assets/status/poison.png" },
  { name: "Purge", description: "Removes all buffs.", duration: "Immediate", icon: "/assets/status/purge.png" },
  { name: "Sleep", description: "Cannot take actions. Ends early if hit.", duration: "3 seconds", icon: "/assets/status/sleep.png" },
  { name: "Stagger", description: "Increases damage taken.", duration: "Applies 3 times", icon: "/assets/status/stagger.png" },
  { name: "Slow", description: "Reduces speed.", duration: "Lasts 3 turns", icon: "/assets/status/slow.png" },
];

const StatusTable = ({ title, data }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter(item => {
    const term = searchTerm.toLowerCase();
    return (
      item.name.toLowerCase().includes(term) ||
      item.description.toLowerCase().includes(term) ||
      item.duration.toLowerCase().includes(term)
    );
  });

  return (
    <Box mb={4}>
      <Typography variant="h5" gutterBottom>{title}</Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 600 }}
      />
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell style={{ width: '40px' }}>Icon</TableCell>
              <TableCell style={{ width: '120px' }}>Name</TableCell>
              <TableCell style={{ width: '320px' }}>Description</TableCell>
              <TableCell style={{ width: '100px' }}>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((item, index) => (
              <TableRow
                key={index}
                style={{
                  backgroundColor: index % 2 === 0 ? "#2b2b2b" : "#1f1f1f",
                  cursor: "pointer",
                  transition: "background-color 0.2s ease"
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = "#3a3a3a"}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#2b2b2b" : "#1f1f1f"}
              >
                <TableCell><Avatar src={item.icon} alt={item.name} variant="square" style={{ width: 28, height: 28 }} /></TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell style={{ whiteSpace: 'normal' }}>{item.description}</TableCell>
                <TableCell>{item.duration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

const BuffsDebuffsTable = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box p={2}>
        <StatusTable title="Buffs" data={buffs} />
        <StatusTable title="Debuffs" data={debuffs} />
      </Box>
    </ThemeProvider>
  );
};

export default BuffsDebuffsTable;
