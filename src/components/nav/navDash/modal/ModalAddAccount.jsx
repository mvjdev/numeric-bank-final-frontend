import React, { useState } from "react";
import { useMyContext } from "../../../../context/AppContext";
import { BiX } from "react-icons/bi";
import "./Modal.css";

const ModalAddAccount = ({ isOpen, onClose, account }) => {
  const { dispatch, createAccount } = useMyContext();
  const [formData, setFormData] = useState({
    firstname: account?.firstname || "",
    lastname: account?.lastname || "",
    birthdate: account?.birthdate || "",
    netMonthlyPay: account?.netMonthlyPay || "",
    overdraftAllowed: account?.overdraftAllowed || "",
    accountNumber: account?.accountNumber || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "account/post", payload: formData });
    createAccount(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <BiX className="close-icon" onClick={onClose} />{" "}
        <form onSubmit={handleSubmit} className="form-holder">
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="First Name"
            className="input"
          />
          <input
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Last Name"
            className="input"
          />
          <input
            type="date"
            name="birthdate"
            value={formData.birthdate}
            placeholder="Birthdate"
            onChange={handleChange}
            className="input"
          />
          <input
            type="number"
            name="netMonthlyPay"
            value={formData.netMonthlyPay}
            onChange={handleChange}
            placeholder="Net Monthly Pay"
            className="input"
          />
          <input
            type="text"
            name="overdraftAllowed"
            value={formData.overdraftAllowed}
            onChange={handleChange}
            placeholder="Overdraft Allowed"
            className="input"
          />
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            onChange={handleChange}
            placeholder="Account Number"
            className="input"
          />
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ModalAddAccount;
