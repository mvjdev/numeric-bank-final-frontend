import React, { useState } from "react";
import { useMyContext } from "../../../../context/AppContext";
import { BiX } from "react-icons/bi"; // Importez l'icône de fermeture
import "./Modal.css";

const Modal = ({ isOpen, onClose, account }) => {
  const { dispatch, updateAccount } = useMyContext();
  const [formData, setFormData] = useState(account);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    console.log("PUT", formData);
    e.preventDefault();
    dispatch({ type: "account/put", payload: formData });
    updateAccount(formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <BiX className="close-icon" onClick={onClose} cursor={PointerEvent} />{" "}
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
            type="text"
            name="birthdate"
            value={formData.birthdate}
            placeholder="Birthdate"
            className="input"
            readOnly
          />
          <input
            type="text"
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
            readOnly
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

export default Modal;
