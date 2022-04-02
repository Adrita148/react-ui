import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";


const columns = [
  { field: "sl_no", headerName: "Sl. No.", width: 90 },
  {
    field: "business_code",
    headerName: "Business Code",
    width: 150,
    editable: true,
  },
  {
    field: "cust_number",
    headerName: "Customer Number",
    width: 150,
    editable: true,
  },
  {
    field: "clear_date",
    headerName: "Clear Date",
    width: 150,
    editable: true,
  },
  {
    field: "buisness_year",
    headerName: "Business Year",
    width: 150,
    editable: true,
  },
  {
    field: "doc_id",
    headerName: "Document Id",
    width: 150,
    editable: true,
  },
  {
    field: "posting_date",
    headerName: "Posting Date",
    width: 150,
    editable: true,
  },
  {
    field: "document_create_date",
    headerName: "Document Create Date",
    width: 200,
    editable: true,
  },
  {
    field: "document_create_date1",
    headerName: "Document Create Date 1",
    width: 200,
    editable: true,
  },
  {
    field: "due_in_date",
    headerName: "Due In Date",
    width: 150,
    editable: true,
  },
  {
    field: "invoice_currency",
    headerName: "Invoice Currency",
    width: 150,
    editable: true,
  },
  {
    field: "document_type",
    headerName: "Document Type",
    width: 150,
    editable: true,
  },
  {
    field: "posting_id",
    headerName: "Posting Id",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "area_business",
    headerName: "Area Business",
    width: 150,
    editable: true,
  },
  {
    field: "total_open_amount",
    headerName: "Total Open Amount",
    type: "number",
    width: 150,
    editable: true,
  },
  {
    field: "baseline_create_date",
    headerName: "Baseline Create Date",
    width: 180,
    editable: true,
  },
  {
    field: "cust_payment_terms",
    headerName: "Customer Payment Terms",
    width: 190,
    editable: true,
  },
  {
    field: "invoice_id",
    headerName: "Invoice ID",
    width: 150,
    editable: true,
  },
  {
    field: "isOpen",
    headerName: "Is Open",
    type: "number",
    width: 100,
    editable: true,
  },
  {
    field: "aging_bucket",
    headerName: "Aging Bucket",
    width: 150,
    editable: true,
  },
  {
    field: "is_deleted",
    headerName: "Is Deleted",
    type: "number",
    width: 100,
    editable: true,
  },
];

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