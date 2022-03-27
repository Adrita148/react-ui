import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./vars";

export default function Header() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
