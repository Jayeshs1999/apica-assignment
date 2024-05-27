import React from "react";
import { Link } from "react-router-dom";

const OverviewScreen = () => {
  return (
    <div>
      This is the overview screen
      <div>
        <Link to={"/"}>Goto Dashboard</Link>
      </div>
    </div>
  );
};

export default OverviewScreen;
