import React from "react";
import { Link } from "react-router-dom";

const AnalyticsScreen = () => {
  return (
    <div>
      This is the Analytics Screen
      <div>
        <Link to={"/"}>Goto Dashboard</Link>
      </div>
    </div>
  );
};

export default AnalyticsScreen;
