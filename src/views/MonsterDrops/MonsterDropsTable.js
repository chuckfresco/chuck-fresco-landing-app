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
  Box
} from "@material-ui/core";
import { rows } from "./data/index";

const baseIconPath = "/assets/monsters/";
const defaultIcon = "/assets/monsters/monsters-image.png";

const goldGlow = {
  border: "1px solid #FFD700", // gold
  boxShadow: "0 0 6px 2px rgba(255, 215, 0, 0.6)", // golden glow
  backgroundColor: "#1a1a1a",
  borderRadius: 6,
  width: 42,
  height: 42,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const silverGlow = {
  border: "1px solid #C0C0C0", // silver
  boxShadow: "0 0 6px 2px rgba(192, 192, 192, 0.6)", // silver glow
  backgroundColor: "#1a1a1a",
  borderRadius: 6,
  width: 42,
  height: 42,
  overflow: "hidden",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
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
    }
  }
});

const wrapText = (text, maxLength = 78) => {
  if (!text) return "";
  const regex = new RegExp(`(.{1,${maxLength}})(\\s|$)`, "g");
  return text.match(regex)?.join("\n") ?? text;
};

const MonsterDropsTable = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const processedRows = useMemo(() =>
    rows.map(row => {
      if (row.icon) return row; // use the one already set
  
      const fileName = row.monster
        ? row.monster.toLowerCase().replace(/[ ()]/g, "").replace(/[^a-z0-9]/gi, "_")
        : null;
  
      return {
        ...row,
        icon: fileName ? `${baseIconPath}${fileName}.png` : defaultIcon
      };
    }), []
  );
  

  const filteredData = useMemo(() =>
    processedRows.filter(row =>
      Object.values(row).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    ), [searchTerm, processedRows]
  );

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

        <TableContainer component={Paper}>
          <Table size="small">
            <colgroup>
              <col style={{ width: '6%' }} />
              <col style={{ width: '7%' }} />
              <col style={{ width: '10%' }} />
              <col style={{ width: '12%' }} />
              <col style={{ width: '15%' }} />
              <col style={{ width: '20%' }} />
            </colgroup>
            <TableHead>
              <TableRow>
                <TableCell>Icon</TableCell>
                <TableCell>Region</TableCell>
                <TableCell>Monster</TableCell>
                <TableCell>Material Drop</TableCell>
                <TableCell>Equipment</TableCell>
                <TableCell>Skills</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredData.map((row, index) => (
                <TableRow
                  key={row.id || index}
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
                  <div
                    style=
                      {silverGlow}
                  >
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
