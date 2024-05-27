import { useState } from "react";
import Header from "./stories/molecules/header/Header";
import Dashboard from "./screens/Dashboard";
import "chart.js/auto";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import OverviewScreen from "./screens/OverviewScreen";
import AnalyticsScreen from "./screens/AnalyticsScreen";
import ReportScreen from "./screens/ReportScreen";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="App">
      <Header
        openDrawer={openDrawer}
        setOpenDrawer={(isOpen) => {
          setOpenDrawer(isOpen);
        }}
        handleMenuItem={(action) => {
          navigate(`${action.toLocaleLowerCase()}`);
        }}
      />

      <div
        style={{
          padding: "20px",
          height: "calc(96vh - 64px)",
          overflow: "auto",
        }}
      >
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/overview" element={<OverviewScreen />} />
          <Route path="/report" element={<ReportScreen />} />
          <Route path="/analytics" element={<AnalyticsScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
