import { fetchAccount, postAccount, putAccount } from "../services/ApiAcount";

import { createContext, useReducer, useEffect, useContext } from "react";

const AppContext = createContext();

const initialState = {
  accounts: [],
  loader: true,
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "account/get":
      return {
        ...state,
        accounts: action.payload,
      };
    case "account/post":
      return {
        ...state,
        accounts: [...state.accounts, action.payload],
      };
    case "account/put":
      if (!action.payload || !action.payload.id) {
        return state;
      }
      const updatedAccounts = state.accounts.map((account) =>
        account.id === action.payload.id ? action.payload : account
      );
      return {
        ...state,
        accounts: updatedAccounts,
      };

    case "loader":
      return {
        ...state,
        loader: action.payload,
      };
    case "error":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default function AppProvider({ children }) {
  const [{ accounts, loader, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const fetchData = async () => {
    try {
      dispatch({ type: "loader", payload: true });
      const data = await fetchAccount();
      dispatch({ type: "account/get", payload: data });
      dispatch({ type: "loader", payload: false });
    } catch (error) {
      dispatch({ type: "error", payload: error.data || error.message });
      dispatch({ type: "loader", payload: false });
    }
  };

  const createAccount = async (account) => {
    try {
      dispatch({ type: "loader", payload: true });
      const newAccount = await postAccount(account);
      dispatch({ type: "account/post", payload: newAccount });
      dispatch({ type: "loader", payload: false });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
      dispatch({ type: "loader", payload: false });
    }
  };

  const updateAccount = async (account) => {
    try {
      dispatch({ type: "loader", payload: true });
      const updateAccount = await putAccount(account);
      dispatch({ type: "account/put", payload: updateAccount });
      dispatch({ type: "loader", payload: false });
    } catch (error) {
      dispatch({ type: "error", payload: error.message });
      dispatch({ type: "loader", payload: false });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        accounts,
        loader,
        error,
        dispatch,
        createAccount,
        updateAccount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useMyContext = () => {
  const context = useContext(AppContext);
  return context;
};
