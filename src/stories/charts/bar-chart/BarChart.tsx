import { Bar } from "react-chartjs-2";
import 'chart.js/auto';
import React from "react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface BarChartProps {
  chartData: any
  handleFullScreenChart?: (action:any)=>void
  isPreview?:boolean;
}

export const BarChart = ({ chartData ,isPreview,handleFullScreenChart}:BarChartProps) => {
  return (
    <div className="chart-container" style={{background:'lavender',borderRadius:'20px',padding:'20px'}}>
      <div style={{display:'flex',justifyContent:"space-between",alignItems:'centers',cursor:'pointer'}}>
        <h2 style={{ textAlign: "start" }} >Bar Chart</h2>
        <FullscreenIcon style={{visibility:!isPreview? 'visible':'hidden' }} onClick={()=>{handleFullScreenChart && handleFullScreenChart('bar')}} />
      </div>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};