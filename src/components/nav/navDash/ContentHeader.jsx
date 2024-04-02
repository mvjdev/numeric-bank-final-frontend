import React from "react";
import { BiNotification, BiSearch } from "react-icons/bi";
import "../navDashCss/content.css";
import "../../sidebar/Sidebar.css";

export default function ContentHeader() {
  const [searchTerm, setSearchTerm] = React.useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div className="content--header dashboard--content">
      <h1 className="header--title">Dashboard</h1>
      <div className="header--activity">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search anything here..."
            value={searchTerm}
            onChange={handleChange}
          />
          <BiSearch className="icon" />
        </div>

        <div className="notify">
          <BiNotification className="icon" />
        </div>
      </div>
    </div>
  );
}
