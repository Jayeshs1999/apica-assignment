import { useState } from "react";
import Header from "./stories/molecules/header/Header";
import SideDrawer from "./stories/molecules/drawer/SideDrawer";
import Dashboard from "./screens/Dashboard";

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
      <Dashboard />

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
