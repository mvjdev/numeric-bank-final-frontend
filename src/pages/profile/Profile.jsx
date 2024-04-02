import React, { useState } from "react";
import "../../components/nav/navDashCss/content.css";
import PieChartBalance from "../../components/piechart/PieChartBalance";
import ProfileContent from "../../components/nav/navDash/ProfileContent";
const Profile = () => {
  return (
    <>
      <ProfileContent />
      <PieChartBalance />
    </>
  );
};

export default Profile;
