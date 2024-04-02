import React, { useState, useEffect, useContext } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import { BiWallet, BiDollar, BiIntersect } from "react-icons/bi";
import "../../nav/navDashCss/content.css";
import { Button } from "@material-tailwind/react";
import PieChartBalance from "../../piechart/PieChartBalance";
import { useMyContext } from "../../../context/AppContext";

const ProfileContent = () => {
  const { fetchDataBalance, accounts, balances, loader, error } =
    useMyContext();
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    fetchDataBalance();
  }, []);

  const handleValueChange = (newValue) => {
    setSelectedDate(newValue);
  };

  // Assuming you want to display the first account's details for simplicity
  const accountDetails = accounts && accounts.length > 0 ? accounts[0] : {};
  const balanceDetails = balances && balances.length > 0 ? balances[0] : {};

  // Calculate values for the pie chart based on the first account's details
  const totalLoans = accountDetails.loanAmount || 0;
  const totalValue =
    accountDetails.mainBalance +
    totalLoans +
    (totalLoans * accountDetails.loanInterest) / 100;

  const pieChartData = [
    {
      name: "Solde Principal",
      value: accountDetails.mainBalance,
      color: "#8884d8",
    },
    {
      name: "Intérêt",
      value: (totalLoans * accountDetails.loanInterest) / 100,
      color: "#82ca9d",
    },
    { name: "Prêt", value: totalLoans, color: "#ffc658" },
  ];

  return (
    <div className="flex flex-col items-center justify-end dashboard--content content">
      <div className="bg-red-700 shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4 text-cyan-50">Profil</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {/* Solde principal */}
          <div className="w-full p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex items-center">
                  <BiWallet className="text-gray-700 text-2xl mr-2" />
                  <span className="text-gray-700 text-lg">Solde principal</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-lg">
                  {accountDetails.mainBalance}
                </p>
              </div>
            </div>
          </div>
          {/* Prêts */}
          <div className="w-full p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex items-center">
                  <BiDollar className="text-gray-700 text-2xl mr-2" />
                  <span className="text-gray-700 text-lg">Prêts</span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-lg">
                  {accountDetails.loanAmount}
                </p>
              </div>
            </div>
          </div>
          {/* Intérêts des prêts */}
          <div className="w-full p-4">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-4">
                <div className="flex items-center">
                  <BiIntersect className="text-gray-700 text-2xl mr-2" />
                  <span className="text-gray-700 text-lg">
                    Intérêts des prêts
                  </span>
                </div>
              </div>
              <div className="p-4">
                <p className="text-gray-700 text-lg">
                  {accountDetails.loanInterest}%
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <label
            htmlFor="date-picker"
            className="block text-sm font-bold text-cyan-50"
          >
            Sélectionnez une date pour consulter le solde :
          </label>
          <Datepicker
            value={selectedDate}
            onChange={handleValueChange}
            className="border-0"
          />
        </div>
        <div className="flex flex-row items-center justify-center gap-4 m-9">
          <Button color="purple" ripple={true}>
            Virement
          </Button>
          <Button color="amber" ripple={true}>
            Approvisionnement de solde
          </Button>
        </div>
      </div>
      {/* Intégration du PieChartBalance */}
      <PieChartBalance data={pieChartData} />
    </div>
  );
};

export default ProfileContent;
