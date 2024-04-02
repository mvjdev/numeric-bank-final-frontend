import React from "react";
import "../navDashCss/content.css";

import { BiBadge, BiKey, BiSmile } from "react-icons/bi";

const courses = [
  {
    title: "Service Bancaire",
    icon: <BiBadge />,
  },
  {
    title: "Simple",
    duration: "2 Hours",
    icon: <BiSmile />,
  },
  {
    title: "Sécurisé",
    duration: "2 Hours",
    icon: <BiKey />,
  },
];

const Card = () => {
  return (
    <div className="card--container">
      {courses.map((item, index) => (
        <div className="card" key={index}>
          <div className="card--cover">{item.icon}</div>
          <div className="card--title">
            <h2>{item.title}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
