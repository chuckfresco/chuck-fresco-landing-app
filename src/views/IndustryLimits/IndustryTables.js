import React from 'react';
import { Button } from '@material-ui/core';
import './styles.css'; // Make sure to include this in your project

const TableComponent = ({ title, headers, data, colWidths }) => (
  <div style={{ marginBottom: "20px", overflowX: "auto" }}>
    <h3>{title}</h3>
    <div
      style={{
        maxWidth: "800px",
        width: "100%",
        marginLeft: "0",
        marginRight: "auto",
        display: "block",
      }}
    >
      <table
        border="1"
        cellPadding="2"
        cellSpacing="0"
        style={{
          width: "100%",
          maxWidth: "100%",
          borderCollapse: "collapse",
        }}
      >
        <colgroup>
          {colWidths.map((width, idx) => (
            <col key={idx} style={{ width }} />
          ))}
        </colgroup>
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th key={idx} style={{ background: "#ddd", padding: "5px", color: "black", height: "20px" }}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, idx) => (
                <td key={idx} style={{ padding: "5px", height: "20px" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const IndustryTables = () => {
  const outsideColWidths = ["30%", "20%", "25%", "25%"]; 
  const insideColWidths = ["30%", "20%", "25%", "25%"]; 

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "40px", display: "flex", gap: "20px" }}>
        <Button color="primary" variant="contained" size="large" onClick={() => document.getElementById("outside-section").scrollIntoView({ behavior: "smooth" })}>
          Outside Industries
        </Button>
        <Button color="primary" variant="contained" size="large" onClick={() => document.getElementById("inside-section").scrollIntoView({ behavior: "smooth" })}>
          Inside Industries
        </Button>
      </div>
      <h2 id="outside-section" style={{ marginBottom: "40px" }}>Outside Industries</h2>
      {tables.outside.map((table, index) => (
        <TableComponent key={index} {...table} colWidths={outsideColWidths} />
      ))}
      <h2 id="inside-section" style={{ marginTop: "60px", marginBottom: "40px" }}>Inside Industries</h2>
      {tables.inside.map((table, index) => (
        <TableComponent key={index} {...table} colWidths={insideColWidths} />
      ))}
    </div>
  );
};

const tables = {
  outside: [
    {
      title: "Producer Industries",
      data: [
        ["T1/T2 Soil", "1.5%", "1.1%", "0.8%"],
        ["T3/T4 Soil", "N/A", "1.1%", "0.8%"],
        ["T1 Tree", "3%", "2.2%", "1.5%"],
        ["T2 Tree", "3.5%", "2.6%", "1.8%"],
        ["T3 Tree", "N/A", "3%", "2%"],
        ["T4 Tree", "N/A", "3.3%", "2.3%"],
        ["T1 Mine", "10%", "7.4%", "5%"],
        ["T2 Mine", "15%", "11.1%", "7.5%"],
        ["T3 Mine", "N/A", "14.8%", "10%"],
        ["T4 Mine", "N/A", "18.5%", "12.5%"],
      ],
      headers: ["Industry", "Speck (%)", "Small Size (%)", "Large Size (%)"],
    },
    {
      title: "Crafting Industries",
      data: [
        ["T1 WW/MW/SS", "12%", "7.5%", "5%"],
        ["T2 WW/MW/SS", "16%", "10%", "6.7%"],
        ["T3 WW/MW/SS", "N/A", "12.5%", "8.3%"],
        ["T4 WW/MW/SS", "N/A", "15%", "10%"],
        ["BarnBQ Grill", "2%", "1.3%", "0.8%"],
        ["Textiler", "10%", "6.3%", "4.2%"],
      ],
      headers: ["Industry", "Speck (%)", "Small Size (%)", "Large Size (%)"],
    },
    {
      title: "Petcare Industries",
      data: [
        ["Slug Hutch", "40%", "33.3%", "25%"],
        ["Apiary", "N/A", "N/A", "3.75%"],
      ],
      headers: ["Industry", "Speck (%)", "Small House (%)", "Large House (%)"],
    },
    {
      title: "Business Industries",
      data: [
        ["Winery T1/T2/T3/T4", "N/A", "100%", "100%"],
      ],
      headers: ["Industry", "Speck (%)", "Small Size (%)", "Large Size (%)"],
    },
  ],
  inside: [
    {
      title: "Stove Industries",
      data: [
        ["T1 Stove", "6.7%", "6.7%", "5%"],
        ["T2 Stove", "10%", "10%", "7.5%"],
        ["T3 Stove", "N/A", "13.3%", "10%"],
        ["T4 Stove", "N/A", "16.7%", "12.5%"],
      ],
      headers: ["Industry", "Speck (%)", "Small House (%)", "Large House (%)"],
    },
    {
      title: "Crafting Industries",
      data: [
        ["T1 WW/MW/SS", "10%", "10%", "7.5%"],
        ["T2 WW/MW/SS", "13.3%", "13.3%", "10%"],
        ["T3 WW/MW/SS", "N/A", "16.7%", "12.5%"],
        ["T4 WW/MW/SS", "N/A", "20%", "15%"],
      ],
      headers: ["Industry", "Speck (%)", "Small House (%)", "Large House (%)"],
    }
  ]
};

export default IndustryTables;
