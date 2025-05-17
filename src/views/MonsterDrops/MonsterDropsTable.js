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
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";
import { rows } from "./data/index";

const baseIconPath = "/assets/monsters/";
const defaultIcon = "/assets/monsters/monsters-image.png";

const silverGlow = {
  border: "1px solid #C0C0C0",
  boxShadow: "0 0 6px 2px rgba(192, 192, 192, 0.6)",
  backgroundColor: "#1a1a1a",
  borderRadius: 6,
  width: 42,
  height: 42,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const goldGlow = {
  border: "1px solid gold",
  boxShadow: "0 0 8px 3px rgba(255, 215, 0, 0.8)",
  backgroundColor: "#1a1a1a",
  borderRadius: 6,
  width: 42,
  height: 42,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const uncommonDecorationColors = {
  "Famous Wizard Painting": "#e57373", // Red
  "Firepit": "#e57373",
  "Simple Cactus": "#fff176", // Yellow
  "Water Tub": "#fff176",
  "Small Bucket": "#81c784", // Green
  "Miniature Larissa": "#81c784",
  "Witch Cauldron": "#64b5f6", // Blue
  "Tarot Cards": "#64b5f6",
  "Everburning Candle": "#ba68c8", // Purple
  "Opal Orb": "#e0e0e0", // White
  "Cookpot": "#a1887f" // Brown
};


const darkTheme = createTheme({
  palette: { type: "dark" },
  overrides: {
    MuiTableCell: {
      root: {
        padding: "6px 10px",
        fontSize: "0.85rem",
        whiteSpace: "nowrap"
      },
      head: {
        backgroundColor: "#333",
        color: "#fff",
        fontWeight: "bold"
      }
    },
    MuiCheckbox: {
      colorSecondary: {
        '&$checked': {
          color: '#2196f3'
        }
      }
    }
  }
});

const wrapText = (text, maxLength = 78) => {
  if (!text) return "";
  const regex = new RegExp(`(.{1,${maxLength}})(\\s|$)`, "g");
  return text.match(regex)?.join("\n") ?? text;
};

const regionOrder = [
  "Azure Expanse",
  "Moon Wood",
  "The Wild",
  "Northern Thicket",
  "Southern Thicket",
  "Windmill (Dungeon)"
];


const MonsterDropsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDungeon, setShowDungeon] = useState(false);
  const [showNonDungeon, setShowNonDungeon] = useState(false);
  const [showBoss, setShowBoss] = useState(false);

  const processedRows = useMemo(() =>
    rows.map(row => {
      if (row.icon) return row;
      const fileName = row.monster
        ? row.monster.toLowerCase().replace(/[ ()]/g, "").replace(/[^a-z0-9]/gi, "_")
        : null;
      return {
        ...row,
        icon: fileName ? `${baseIconPath}${fileName}.png` : defaultIcon
      };
    }), []
  );

  const filteredData = useMemo(() => {
    const filtered = processedRows.filter(row => {
      const matchesSearch = Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      );
      const isDungeon = row.regionCategory === "Dungeon";
      const isBoss = row.categoryMonster === "Boss";
      const dungeonMatch = showDungeon ? isDungeon : true;
      const nonDungeonMatch = showNonDungeon ? !isDungeon : true;
      const bossMatch = showBoss ? isBoss : true;
      return matchesSearch && dungeonMatch && nonDungeonMatch && bossMatch;
    });

return filtered.sort((a, b) => {
  const regionCompare = regionOrder.indexOf(a.region) - regionOrder.indexOf(b.region);
  if (regionCompare !== 0) return regionCompare;

  const getCount = (val) =>
    val && val !== "N/A"
      ? val.split(",").map(s => s.trim()).filter(Boolean).length
      : 0;

  const score = (row) =>
    getCount(row.equipment) + getCount(row.skills) + getCount(row.decorations);

  const scoreA = score(a);
  const scoreB = score(b);

  if (scoreA !== scoreB) return scoreB - scoreA;

  if (a.categoryMonster === "Boss" && b.categoryMonster !== "Boss") return -1;
  if (a.categoryMonster !== "Boss" && b.categoryMonster === "Boss") return 1;

  return a.monster.localeCompare(b.monster);
});


  }, [searchTerm, processedRows, showDungeon, showNonDungeon, showBoss]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box p={2}>
        <Typography variant="h5" gutterBottom>
          Monster Drop Table
        </Typography>

        <TextField
          label="Search"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          style={{ marginBottom: 20, maxWidth: 400 }}
        />

        <FormGroup row style={{ marginBottom: 16 }}>
          <FormControlLabel
            control={<Checkbox color="primary" checked={showDungeon} onChange={e => setShowDungeon(e.target.checked)} />}
            label="Dungeons"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={showNonDungeon} onChange={e => setShowNonDungeon(e.target.checked)} />}
            label="Non-Dungeons"
          />
          <FormControlLabel
            control={<Checkbox color="primary" checked={showBoss} onChange={e => setShowBoss(e.target.checked)} />}
            label="Boss"
          />
        </FormGroup>

            <Box
              mb={2}
              p={1}
              style={{
                backgroundColor: "#2e2e2e",
                borderRadius: 6,
                border: "1px solid #444",
                fontSize: "0.85rem",
                maxWidth: 700,
                color: "#ccc"
              }}
            >
              <Typography variant="subtitle2" gutterBottom style={{ color: "#fff" }}>
                Recipe Drop Rate
              </Typography>
              <Box display="flex" justifyContent="space-between">
                <Box width="32%">
                  <div>Tier II Uncommon Spells: 0.83%</div>
                  <div>Tier II Equipment: 0.83%</div>
                </Box>
                <Box width="32%">
                  <div>High Uncommon Spell: 0.17%</div>
                  <div>High Equipment: 0.17%</div>
                </Box>
                <Box width="32%">
                  <div>Common Decoration: 2%</div>
                  <div>Uncommon Decoration: 0.5%</div>
                </Box>
              </Box>
            </Box>



        <TableContainer component={Paper}>
          <Table size="small">
            <colgroup>
              <col style={{ width: '6%' }} />
              <col style={{ width: '7%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '15%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Monster</TableCell>
                <TableCell>Material Drop</TableCell>
                <TableCell>Equipment</TableCell>
                <TableCell>Skills</TableCell>
                <TableCell>Decorations</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow
                  key={`${row.monster}-${index}`}
                  style={{
                    backgroundColor: index % 2 === 0 ? "#2b2b2b" : "#1f1f1f",
                    transition: "background-color 0.2s ease"
                  }}
                  onMouseEnter={e =>
                    (e.currentTarget.style.backgroundColor = "#3a3a3a")
                  }
                  onMouseLeave={e =>
                    (e.currentTarget.style.backgroundColor =
                      index % 2 === 0 ? "#2b2b2b" : "#1f1f1f")
                  }
                >
                  <TableCell>
                    <div style={row.categoryMonster === "Boss" ? goldGlow : silverGlow}>
                      <img
                        src={row.icon || defaultIcon}
                        alt={row.monster || "Unknown"}
                        style={{
                          width: "150%",
                          height: "150%",
                          objectFit: "contain",
                          display: "block"
                        }}
                        onError={(e) => {
                          if (!e.currentTarget.src.endsWith(defaultIcon)) {
                            e.currentTarget.src = defaultIcon;
                          }
                        }}
                      />
                    </div>
                  </TableCell>
                  <TableCell>{row.region}</TableCell>
                  <TableCell>{row.monster}</TableCell>
                  <TableCell style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                    {wrapText(row.materialDrop)}
                  </TableCell>
                  <TableCell>{row.equipment}</TableCell>
                  <TableCell>{row.skills}</TableCell>
                 <TableCell>
                  {row.decorations && row.decorations !== "N/A" ? row.decorations.split(",").map((item, idx) => {
                    const trimmed = item.trim();
                    const color = uncommonDecorationColors[trimmed];
                    return (
                      <span key={idx} style={{
                        color: color || undefined,
                        fontWeight: color ? 'bold' : undefined,
                        display: 'inline-flex',
                        alignItems: 'center',
                        marginRight: 8
                      }}>
                        {color && (
                          <span style={{
                            width: 10,
                            height: 10,
                            borderRadius: "50%",
                            backgroundColor: color,
                            display: "inline-block",
                            marginRight: 4
                          }} />
                        )}
                        {trimmed}
                      </span>
                    );
                  }) : ""}
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

export default MonsterDropsTable;
