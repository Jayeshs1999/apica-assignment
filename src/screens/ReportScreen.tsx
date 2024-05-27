import React from "react";
import { Link } from "react-router-dom";

const ReportScreen = () => {
  return (
    <div>
      This is the Report Screen
      <div>
        <Link to={"/"}>Goto Dashboard</Link>
      </div>
    </div>
  );
};

export default ReportScreen;
