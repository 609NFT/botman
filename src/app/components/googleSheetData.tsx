import React, { useState, useEffect, CSSProperties } from "react";
import axios from "axios";
import { Button } from "react-bootstrap/lib/InputGroup";

// Define the type for the data as an array of arrays of any (or string if you expect strings)
type SheetData = (string | number)[][];

const url =
  "https://docs.google.com/forms/d/e/1FAIpQLSdCgLqCz0GUaXICbqnl8Trbm029h66qy9qBNpYibOLD8HQseA/viewform";

const openInNewTab = () => {
  window.open(url, "_blank", "noopener,noreferrer");
};

function GoogleSheetData() {
  const [data, setData] = useState<SheetData>([]);
  const API_KEY = "AIzaSyByhuWwOgKqMVcteeBOeCbcbUXtc29vhYo"; // Be cautious with your API key
  const SPREADSHEET_ID = "1QTBkySwnAzLYuhJhDlBu3v1YNvARyhMtwIYwxsJvQ7Q";
  const RANGE = "Sheet1!B2:D"; // Adjust the range as needed

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
        );
        setData(response.data.values || []);
      } catch (error) {
        console.error("Error fetching data from Google Sheets:", error);
      }
    };

    fetchData();
  }, []);

  // Styling for the table using CSSProperties for type safety
  const tableStyle: CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    boxShadow: "0 2px 3px rgba(0,0,0,0.1)",
    backgroundColor: "white", // Set background color to white
  };

  const thStyle: CSSProperties = {
    background: "#f4f4f4",
    color: "#333",
    fontWeight: "bold",
    padding: "8px",
    border: "1px solid #ccc",
  };

  const tdStyle: CSSProperties = {
    padding: "8px",
    border: "1px solid #ccc",
    textAlign: "left",
  };

  const header: CSSProperties = {
    color: "white",
    fontSize: "40px",
    paddingBottom: "20px",
  };

  const submit: CSSProperties = {
    padding: "10px 15px 10px 15px",
    background: "white",
    borderRadius: "15px",
    marginBottom: "20px",
  };

  return (
    <div className="ruggers">
      <h1 style={header}>Active Web3 Ruggers</h1>
      <button style={submit} onClick={openInNewTab}>
        Submit a Rugger
      </button>
      <table style={tableStyle}>
        <thead>
          <tr>
            {/* Dynamically create headers or hardcode as needed */}
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Social(s)</th>
            <th style={thStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {row.map((cell, i) => (
                <td key={i} style={tdStyle}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GoogleSheetData;
