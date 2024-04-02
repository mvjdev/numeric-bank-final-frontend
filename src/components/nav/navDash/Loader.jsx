import "../navDashCss/loader.css";

import React from "react";

export default function Loader() {
  return (
    <>
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <p>Waiting ...Be patient</p>
    </>
  );
}
