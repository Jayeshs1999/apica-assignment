import * as React from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "availabilityStatus",
    headerName: "Availability Status",
    width: 130,
  },
  { field: "brand", headerName: "Brand", width: 130 },
  {
    field: "discountPercentage",
    headerName: "Discount Percentage",
    type: "decimal",
    width: 130,
  },
  {
    field: "category",
    headerName: "Category",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
  },
  {
    field: "createdAt",
    headerName: "Created At",
    width: 130,
  },
];

interface DataTableProps {
  data: any;
  paginationData: any;
}

export default function DataTable({ data, paginationData }: DataTableProps) {
  const pageOptions = paginationData?.pageOptions;
  console.log("data:", paginationData);

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={data}
        rowCount={paginationData?.totalCount}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={pageOptions}
        // checkboxSelection
      />
    </div>
  );
}
