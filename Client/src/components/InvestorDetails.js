import React from "react";
import { useInvestorsContext } from "../hooks/useInvestorsContext";
import { useAuthContext } from "../hooks/useAuthContext";

//date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const InvestorDetails = ({ investor }) => {
  const { dispatch } = useInvestorsContext();
  const { user } = useAuthContext();

  const handleClick = async () => {
    if (!user) {
      return;
    }
    const { role } = user;
    const data = { role };
    const response = await fetch("/api/investors/" + investor._id, data, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_INVESTOR", payload: json });
    }
  };

  return (
    <div className="investor-details">
      <h4>{investor.title}</h4>
      <p>
        <strong>InvestorID : </strong>
        {investor.InvestorID}
      </p>
      <p>
        <strong>CustomerName : </strong>
        {investor.CustomerName}
      </p>
      <p>
        <strong>TotalInvestment : </strong>
        {investor.TotalInvestment}
      </p>
      <p>
        <strong>Status : </strong>
        {investor.Status}
      </p>
      <p>
        <strong>Valuation : </strong>
        {investor.Valuation}
      </p>
      <p>
        <strong>TotalDivPaid : </strong>
        {investor.TotalDivPaid}
      </p>
      <p>
        <strong>ProfitLoss : </strong>
        {investor.ProfitLoss}
      </p>
      <p>
        <strong>RtnCAGR : </strong>
        {investor.RtnCAGR}
      </p>
      <p>
        <strong>DivRein : </strong>
        {investor.DivRein}
      </p>
      <p>
        <strong>CustomerEmail : </strong>
        {investor.CustomerEmail}
      </p>
      <p>
        <strong>Last Updated : </strong>
        {formatDistanceToNow(new Date(investor.createdAt), { addSuffix: true })}
      </p>
      <span className="material-symbols-outlined" onClick={handleClick}>
        Delete
      </span>
    </div>
  );
};

export default InvestorDetails;
