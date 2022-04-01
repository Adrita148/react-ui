import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "../services/vars";

export default function Header({ data }) {
  const [datarow, setdatarow] = useState(rows);

  return (
    <div style={{ height: "510px", width: "100%" }}>
      <DataGrid
        rows={datarow}
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
