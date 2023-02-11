import { useContext } from "react";
import { InvestorsContext } from "../context/InvestorContext";

export const useInvestorsContext = () => {
  const context = useContext(InvestorsContext);

  if (!context) {
    throw Error(
      "useInvestorsContext must be used inside an InvestorsContextProvider"
    );
  }

  return context;
};
