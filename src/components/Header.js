import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./vars";

export default function Header() {
  return (
    <div style={{ height: "510px", width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
        sx={{
          backgroundColor: "#2a3e4c",
          border: "0px",
          color: "white",
          borderRadius: "0px",
        }}
      ></DataGrid>
    </div>
  );
}
