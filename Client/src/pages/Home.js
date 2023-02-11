import React from "react";
import { useEffect } from "react";
import { useInvestorsContext } from "../hooks/useInvestorsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import InvestorDetails from "../components/InvestorDetails";
import InvestorForm from "../components/InvestorForm";

const Home = () => {
  const { investors, dispatch } = useInvestorsContext();
  const { user } = useAuthContext();
  console.log("Farmaan", user);

  useEffect(() => {
    const fetchInvestors = async () => {
      const response = await fetch("/api/investors", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_INVESTORS", payload: json });
      }
    };

    const fetchSingleInvestor = async () => {
      let { email } = user;
      let data = { email };
      const response = await fetch("/api/investors/single", data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_INVESTORS", payload: json });
      }
    };
    if (user.role === "admin") {
      fetchInvestors();
    } else {
      fetchSingleInvestor();
    }
  }, [dispatch, user]);

  return (
    <div className="home">
      <div className="investors">
        {investors &&
          investors.map((investor) => (
            <InvestorDetails key={investor._id} investor={investor} />
          ))}
      </div>
      <InvestorForm />
    </div>
  );
};

export default Home;
