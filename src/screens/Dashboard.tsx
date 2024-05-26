import React, { useEffect, useState } from "react";
import DataTable from "../stories/molecules/table/Table"; // Importing DataTable component
import { Data } from "../utils/data"; // Importing Data utility
import { BarChart } from "../stories/charts/bar-chart/BarChart"; // Importing BarChart component
import PieChart from "../stories/charts/pie-chart/PieChart"; // Importing PieChart component
import useDeviceType from "../utils/DeviceType"; // Importing useDeviceType hook
import FullScreenDialog from "../utils/FullScreenDialog"; // Importing FullScreenDialog component
import { LineChart } from "../stories/charts/line-chart/LineChart"; // Importing LineChart component

const Dashboard = () => {
  // Using custom hook to determine device type
  const deviceType = useDeviceType();

  // State variables
  const [openFullScreen, setOpenFullScreen] = useState(false); // State for full screen mode
  const [selectedChart, setSelectedChart] = useState(""); // State for selected chart
  const [paginationData, setPaginationData] = useState({ // State for pagination data
    page: 1,
    size: 394,
    pageOptions: [5, 10, 20, 50, 100],
    totalCount: 0,
    onChangeRowsPerPage: () => {},
  });

  const [tableData, setTableData] = useState(null); // State for table data

  const [chartData, setChartData] = useState({ // State for chart data
    labels: Data.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained ",
        data: Data.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "&quot;#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // Fetching data from API and updating state on component mount
  useEffect(() => {
    fetch(`https://dummyjson.com/products?limit=${paginationData?.size}`)
      .then((data) => data.json())
      .then((result) => {
        setPaginationData((prevData) => ({
          ...prevData,
          totalCount: result?.total,
        }));

        const modifiedResult = result?.products?.map((data:any) => ({
          ...data,
          createdAt: new Date(data?.meta?.createdAt).toLocaleDateString(
            "en-US"
          ),
        }));

        setTableData(modifiedResult); // Updating table data state
      });
  }, []); // Empty dependency array means this effect runs only once, on component mount

  // Function to handle full screen mode for charts
  const handleFullScreen = (action:string) => {
    setSelectedChart(action);
    setOpenFullScreen(!openFullScreen);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: deviceType === "mobile" ? "100%" : "49.5% 49.5%",
        width: "100%",
        gap: "20px",
      }}
    >
      {/* Render BarChart component */}
      <BarChart
        chartData={chartData}
        handleFullScreenChart={handleFullScreen}
      />
      {/* Render LineChart component */}
      <LineChart
        chartData={chartData}
        handleFullScreenChart={handleFullScreen}
      />
      {/* Render PieChart component */}
      <PieChart
        chartData={chartData}
        handleFullScreenChart={handleFullScreen}
      />

      {/* Render DataTable component if table data is available */}
      {tableData && (
        <div>
          <DataTable data={tableData} paginationData={paginationData} />
        </div>
      )}
      {/* Render FullScreenDialog component for displaying charts in full screen */}
      <FullScreenDialog
        selectedChart={selectedChart}
        chartData={chartData}
        isOpen={openFullScreen}
        setOpen={() => setOpenFullScreen(false)}
      />
    </div>
  );
};

export default Dashboard;
