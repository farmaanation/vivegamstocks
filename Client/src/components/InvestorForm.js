import React from "react";
import { useState } from "react";

import { useInvestorsContext } from "../hooks/useInvestorsContext";
import { useAuthContext } from "../hooks/useAuthContext";

const InvestorForm = () => {
  const { dispatch } = useInvestorsContext();
  const { user } = useAuthContext();

  const [title, setTitle] = useState("");
  const [InvestorID, setInvestorID] = useState("");
  const [CustomerName, setCustomerName] = useState("");
  const [TotalInvestment, setTotalInvestment] = useState("");
  const [Status, setStatus] = useState("");
  const [Valuation, setValuation] = useState("");
  const [TotalDivPaid, setTotalDivPaid] = useState("");
  const [ProfitLoss, setProfitLoss] = useState("");
  const [RtnCAGR, setRtnCAGR] = useState("");
  const [DivRein, setDivRein] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");

  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError("You must be logged in");
      return;
    }

    const investor = {
      title,
      InvestorID,
      CustomerName,
      TotalInvestment,
      Status,
      Valuation,
      TotalDivPaid,
      ProfitLoss,
      RtnCAGR,
      DivRein,
      CustomerEmail,
    };

    const response = await fetch("/api/Investors", {
      method: "POST",
      body: JSON.stringify(investor),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      setInvestorID("");
      setCustomerName("");
      setTotalInvestment("");
      setStatus("");
      setValuation("");
      setTotalDivPaid("");
      setProfitLoss("");
      setRtnCAGR("");
      setDivRein("");
      setCustomerEmail("");
      setEmptyFields([]);
      console.log("new Investor added:", json);
      dispatch({ type: "CREATE_INVESTOR", payload: json });
    }
  };

  return (
    <div className="w-full max-w-xs ">
      <form
        className="create bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        class="bg-gradient-to-r from-sky-500 to-indigo-500 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Title:
          </label>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className={emptyFields.includes("title") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Investor ID :
          </label>
          <input
            type="number"
            onChange={(e) => setInvestorID(e.target.value)}
            value={InvestorID}
            className={emptyFields.includes("investorid") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Investor Id"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Investor Name:
          </label>
          <input
            type="text"
            onChange={(e) => setCustomerName(e.target.value)}
            value={CustomerName}
            className={emptyFields.includes("customername") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Investor Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Total Investment :
          </label>
          <input
            type="number"
            onChange={(e) => setTotalInvestment(e.target.value)}
            value={TotalInvestment}
            className={emptyFields.includes("totalinvestment") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Total Investment"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Status :
          </label>
          <input
            type="text"
            onChange={(e) => setStatus(e.target.value)}
            value={Status}
            className={emptyFields.includes("status") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Profit / Loss"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Valuation :
          </label>
          <input
            type="number"
            onChange={(e) => setValuation(e.target.value)}
            value={Valuation}
            className={emptyFields.includes("valuation") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Valuation"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Total Div Paid :
          </label>
          <input
            type="number"
            onChange={(e) => setTotalDivPaid(e.target.value)}
            value={TotalDivPaid}
            className={emptyFields.includes("totaldivpaid") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Total Div Paid"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Profit/Loss in ₹:
          </label>
          <input
            type="number"
            onChange={(e) => setProfitLoss(e.target.value)}
            value={ProfitLoss}
            className={emptyFields.includes("profitloss") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter Value in ₹"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Rtn CAGR :
          </label>
          <input
            type="number"
            onChange={(e) => setRtnCAGR(e.target.value)}
            value={RtnCAGR}
            className={emptyFields.includes("rtncagr") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Rtn CAGR"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Div Rein :
          </label>
          <input
            type="number"
            onChange={(e) => setDivRein(e.target.value)}
            value={DivRein}
            className={emptyFields.includes("divrein") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Div Rein"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            CustomerEmail:
          </label>
          <input
            type="text"
            onChange={(e) => setCustomerEmail(e.target.value)}
            value={CustomerEmail}
            className={emptyFields.includes("customeremail") ? "error" : ""}
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
            placeholder="Enter Customer Email"
          />
        </div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-600 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-100 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-400">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Add Investor
          </span>
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
};

export default InvestorForm;
