import React from "react";
import { createContext, useReducer } from "react";

export const InvestorsContext = createContext();

export const investorsReducer = (state, action) => {
  switch (action.type) {
    case "SET_INVESTORS":
      return {
        investors: action.payload,
      };
    case "CREATE_INVESTOR":
      return {
        investors: [action.payload, ...state.investors],
      };
    case "DELETE_INVESTOR":
      return {
        investors: state.investors.filter((i) => i._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const InvestorsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(investorsReducer, {
    investors: null,
  });

  return (
    <InvestorsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </InvestorsContext.Provider>
  );
};
