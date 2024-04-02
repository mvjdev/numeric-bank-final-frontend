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
    transfer_category: {
      id: 0,
      name: "",
      categoryType: "EXPENSE",
      comment: "",
      idTransfer: 0,
    },
  });

  const handleChange = (e) => {
    setTransferDetails({
      ...transferDetails,
      transfer_category: {
        ...transferDetails.transfer_category,
        [e.target.name]: e.target.value,
      },
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
          {/* Les autres champs du formulaire */}
          <div>
            <label
              htmlFor="transfer_category_name"
              className="block text-sm font-medium text-gray-700"
            >
              Nom de la Catégorie de Transfert
            </label>
            <input
              type="text"
              name="name"
              id="transfer_category_name"
              value={transferDetails.transfer_category.name}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label
              htmlFor="transfer_category_type"
              className="block text-sm font-medium text-gray-700"
            >
              Type de Catégorie
            </label>
            <select
              name="categoryType"
              id="transfer_category_type"
              value={transferDetails.transfer_category.categoryType}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="EXPENSE">Dépense</option>
              <option value="INCOME">Revenu</option>
              {/* Ajoutez d'autres options si nécessaire */}
            </select>
          </div>
          <div>
            <label
              htmlFor="transfer_category_comment"
              className="block text-sm font-medium text-gray-700"
            >
              Commentaire
            </label>
            <input
              type="text"
              name="comment"
              id="transfer_category_comment"
              value={transferDetails.transfer_category.comment}
              onChange={handleChange}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          {/* Le bouton de soumission */}
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
