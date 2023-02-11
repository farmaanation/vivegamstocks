import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { InvestorsContextProvider } from "./context/InvestorContext";
import { EmployeesContextProvider } from "./context/EmployeeContext";
import { AuthContextProvider } from "./context/AuthContext";
import { ContextProvider } from "./contexts/ContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <AuthContextProvider>
        <EmployeesContextProvider>
          <InvestorsContextProvider>
            <App />
          </InvestorsContextProvider>
        </EmployeesContextProvider>
      </AuthContextProvider>
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
