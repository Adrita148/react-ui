import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { columns } from "./vars";

const Header = () => {
  const [pageSize, setPageSize] = useState(10);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/HRC/Fetch")
      .then((data) => data.json())
      .then((data) => setTableData(data));
  });

  return (
    <div
      style={{
        height: 480,
        width: "100%",
      }}
    >
      <DataGrid
        density="compact"
        getRowId={(row) => row.sl_no}
        rows={tableData}
        columns={columns}
        checkboxSelection
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[10, 20, 50]}
      />
    </div>
  );
};
export default Header;
