import React from "react";
import ContentHeader from "./ContentHeader";
import "../navDashCss/content.css";
import Card from "./Card";
import AccountList from "./AccountList";

export default function Content() {
  return (
    <div>
      <div className="content">
        <Card />
        <AccountList />
      </div>
    </div>
  );
}
