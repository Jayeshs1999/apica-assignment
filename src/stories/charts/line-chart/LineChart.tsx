import { Line } from "react-chartjs-2";
import 'chart.js/auto';
import React from "react";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface LineChartProps {
  chartData: any;
  handleFullScreenChart?: (action:any)=>void;
  isPreview?:boolean;
}

export const LineChart = ({ chartData,isPreview, handleFullScreenChart}:LineChartProps) => {
  return (
    <div className="chart-container" style={{background:'lavender',borderRadius:'20px',padding:'20px'}}>
       <div style={{display:'flex',justifyContent:"space-between",alignItems:'centers',cursor:'pointer'}}>
        <h2 style={{ textAlign: "start" }} >Line Chart</h2>
        <FullscreenIcon style={{visibility:!isPreview? 'visible':'hidden' }} onClick={()=>{handleFullScreenChart && handleFullScreenChart('line')}} />
      </div>
      <Line
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