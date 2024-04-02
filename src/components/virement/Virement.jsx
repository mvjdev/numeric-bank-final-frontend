import React, { useState } from "react";

const TransferForm = () => {
  const [transferDetails, setTransferDetails] = useState({
    id: 0,
    id_account_source: 0,
    destination_account_number: "",
    transfer_datetime: "",
    value_datetime: "",
    amount: 0,
    reference: "",
    is_external_bank: true,
    status: "CANCELLED",
  });

  const handleChange = (e) => {
    setTransferDetails({
      ...transferDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour soumettre le formulaire
    console.log(transferDetails);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-red-700 shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-cyan-50">
          Formulaire de Virement
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="id_account_source"
              className="block text-sm font-medium text-gray-700"
            >
              Compte Source
            </label>
            <input
              type="number"
              name="id_account_source"
              id="id_account_source"
              value={transferDetails.id_account_source}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="destination_account_number"
              className="block text-sm font-medium text-gray-700"
            >
              Numéro de Compte de Destination
            </label>
            <input
              type="text"
              name="destination_account_number"
              id="destination_account_number"
              value={transferDetails.destination_account_number}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="transfer_datetime"
              className="block text-sm font-medium text-gray-700"
            >
              Date et Heure du Transfert
            </label>
            <input
              type="datetime-local"
              name="transfer_datetime"
              id="transfer_datetime"
              value={transferDetails.transfer_datetime}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="value_datetime"
              className="block text-sm font-medium text-gray-700"
            >
              Valeur à la Date
            </label>
            <input
              type="datetime-local"
              name="value_datetime"
              id="value_datetime"
              value={transferDetails.value_datetime}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="amount"
              className="block text-sm font-medium text-gray-700"
            >
              Montant
            </label>
            <input
              type="number"
              name="amount"
              id="amount"
              value={transferDetails.amount}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="reference"
              className="block text-sm font-medium text-gray-700"
            >
              Référence
            </label>
            <input
              type="text"
              name="reference"
              id="reference"
              value={transferDetails.reference}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="is_external_bank"
              className="block text-sm font-medium text-gray-700"
            >
              Transfert Externe
            </label>
            <input
              type="checkbox"
              name="is_external_bank"
              id="is_external_bank"
              checked={transferDetails.is_external_bank}
              onChange={(e) =>
                setTransferDetails({
                  ...transferDetails,
                  is_external_bank: e.target.checked,
                })
              }
              className="mt-1 block p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="status"
              className="block text-sm font-medium text-gray-700"
            >
              Statut
            </label>
            <select
              name="status"
              id="status"
              value={transferDetails.status}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="CANCELLED">Annulé</option>
              <option value="PENDING">En Attente</option>
              <option value="COMPLETED">Complété</option>
            </select>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600"
            >
              Soumettre le Virement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransferForm;
