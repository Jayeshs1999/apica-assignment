import React, { useEffect, useState } from "react";
import DataTable from "../stories/molecules/table/Table";

const Dashboard = () => {
  const [paginationData, setPaginationData] = useState({
    page: 1,
    size: 394,
    pageOptions: [5, 10, 20, 50, 100],
    totalCount: 0,
    onChangeRowsPerPage: () => {},
  });

  const [tableData, setTableDate] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${paginationData?.size}`)
      .then((data) => data.json())
      .then((result) => {
        setPaginationData((prevData) => ({
          ...prevData,
          totalCount: result?.total,
        }));

        const modifiedResult = result?.products?.map((data: any) => ({
          ...data,
          createdAt: new Date(data?.meta?.createdAt).toLocaleDateString(
            "en-US"
          ),
        }));

        setTableDate(modifiedResult);
      });
  }, []);

  return (
    <div>
      {tableData && (
        <div>
          <DataTable data={tableData} paginationData={paginationData} />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
