import React, { useState } from "react";
import ModalAddAccount from "../modal/ModalAddAccount";
import { Button } from "@material-tailwind/react";
import "./ButtonAddAccount.css";

export default function ButtonAddAccount() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [account, setAccount] = useState({});

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="button--add">
      <Button color="amber" onClick={openModal} className="p-4">
        Add Account
      </Button>
      {isModalOpen && (
        <ModalAddAccount
          isOpen={isModalOpen}
          onClose={closeModal}
          account={account}
        />
      )}
    </div>
  );
}
