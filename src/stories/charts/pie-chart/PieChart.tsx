import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";
import FullscreenIcon from "@mui/icons-material/Fullscreen";

interface PieChartProps {
  chartData: any;
  handleFullScreenChart?: (action: any) => void;
  isPreview?: boolean;
}
const PieChart = ({
  chartData,
  isPreview = false,
  handleFullScreenChart,
}: PieChartProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        background: "#afad9954",
        borderRadius: "20px",
        padding: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "centers",
          cursor: "pointer",
        }}
      >
        <h2 style={{ textAlign: "start" }}>Pie Chart</h2>
        <FullscreenIcon
          style={{ visibility: !isPreview ? "visible" : "hidden" }}
          onClick={() => {
            handleFullScreenChart && handleFullScreenChart("pie");
          }}
        />
      </div>

      <div
        style={{
          height: isPreview ? "100vh" : "390px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Pie
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Users Gained between 2016-2020",
              },
            },
          }}
        />
      </div>
    </div>
  );
};
export default PieChart;
