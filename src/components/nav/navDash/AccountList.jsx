import React, { useState } from "react";
import "../navDashCss/accountList.css";
import { useMyContext } from "../../../context/AppContext";
import Loader from "./Loader";
import image from "../../../assets/profil.jpeg";
import { BiEdit } from "react-icons/bi";
import Modal from "./modal/Modal";

export default function AccountList() {
  const { accounts, loader } = useMyContext();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedAccount, setSelectedAccount] = useState(null);

  const openModal = (account, e) => {
    e.stopPropagation(); // Empêcher la propagation de l'événement de clic
    setSelectedAccount(account);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  {
    accounts?.map((account) => {
      if (account) {
        console.log(
          account.id,
          account.firstname,
          account.lastname,
          account.birthdate,
          account.netMonthlyPay,
          account.overdraftAllowed,
          account.accountNumber
        );
      }
    });
  }

  console.log("Loader:", loader);

  return (
    <div className="account--list">
      <div className="list--header">
        <h2>Account</h2>
        <select id="languageSelect" name="languageSelect">
          <option value="english">English</option>
          <option value="other">Other</option>
        </select>
      </div>
      <section className="list--container">
        <table>
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300">Image</th>
              <th className="py-2 px-4 border border-gray-300">Firstname</th>
              <th className="py-2 px-4 border border-gray-300">Lastname</th>
              <th className="py-2 px-4 border border-gray-300">Birhdate</th>
              <th className="py-2 px-4 border border-gray-300">Monthly pay</th>
              <th className="py-2 px-4 border border-gray-300">Is Allowed ?</th>
              <th className="py-2 px-4 border border-gray-300">
                Number Account
              </th>
            </tr>
          </thead>
          <tbody>
            {loader ? (
              <tr>
                <td colSpan="7">
                  <Loader />
                </td>
              </tr>
            ) : (
              <>
                {accounts.slice(1).map((account) => (
                  <tr
                    key={account.id}
                    style={{ cursor: "pointer" }}
                    className="list"
                    onClick={() =>
                      (window.location.href = `/profil/${account.id}`)
                    }
                  >
                    <td className="account--detail">
                      <img src={image} alt="Profile" />
                    </td>
                    <td>{account.firstname}</td>
                    <td>{account.lastname}</td>
                    <td>{account.birthdate}</td>
                    <td>{account.netMonthlyPay}</td>
                    <td>
                      {account.overdraftAllowed ? "Allowed" : "Not Allowed"}
                    </td>
                    <td>{account.accountNumber}</td>
                    <td>
                      <BiEdit
                        className="w-5 h-5"
                        onClick={(e) => openModal(account, e)}
                      />
                    </td>
                  </tr>
                ))}
                {isModalOpen && (
                  <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    account={selectedAccount} // Passez l'objet account sélectionné au composant Modal
                  />
                )}
              </>
            )}
          </tbody>
        </table>
      </section>
    </div>
  );
}
