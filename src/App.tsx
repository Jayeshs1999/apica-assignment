import { useState } from "react";
import Header from "./stories/molecules/header/Header";
import SideDrawer from "./stories/molecules/drawer/SideDrawer";
import Dashboard from "./screens/Dashboard";
import "chart.js/auto";

function App() {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <div className="App">
      <Header
        openDrawer={openDrawer}
        setOpenDrawer={(isOpen) => {
          setOpenDrawer(isOpen);
        }}
      />
      <div
        style={{
          padding: "20px",
          height: "calc(96vh - 64px)",
          overflow: "auto",
        }}
      >
        <Dashboard />
      </div>

      <SideDrawer
        open={openDrawer}
        setOpen={() => {
          setOpenDrawer(false);
        }}
      />
    </div>
  );
}

export default App;
