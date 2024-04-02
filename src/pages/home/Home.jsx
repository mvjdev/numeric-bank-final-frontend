// Home.js
import React, { useState } from "react";
import Content from "../../components/nav/navDash/Content";
import "../../components/nav/navDashCss/content.css";
import "../../components/sidebar/Sidebar.css";
import ButtonAddAccount from "../../components/nav/navDash/buttonAddAccount/ButtonAddAccount";
import ModalAddAccount from "../../components/nav/navDash/modal/ModalAddAccount";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="dashboard--content content">
      <Content />
      <div className="absolute">
        <ButtonAddAccount onClick={openModal} />
        {isModalOpen && (
          <ModalAddAccount isOpen={isModalOpen} onClose={closeModal} />
        )}
      </div>
    </div>
  );
}
