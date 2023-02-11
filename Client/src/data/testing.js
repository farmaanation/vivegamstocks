import React, { useEffect, useState } from "react";
import axios from "axios";
// var axios = require('axios');
import qs from "qs";

import {
  AiOutlineAreaChart,
  AiOutlineBarChart,
  AiOutlineStock,
} from "react-icons/ai";
import { FiShoppingBag, FiCreditCard } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import { BsBoxSeam, BsCurrencyDollar, BsShield } from "react-icons/bs";
import { IoMdContacts } from "react-icons/io";
import { RiContactsLine, RiStockLine } from "react-icons/ri";
import {
  MdOutlineSupervisorAccount,
  MdSettingsApplications,
} from "react-icons/md";
import { HiOutlineRefresh } from "react-icons/hi";

export const getSingleInfo = async () => {
  let userDetail = [];
  let token = JSON.parse(localStorage.getItem("user"));
  token = token.token;
  // get apitoken from local storage
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  userDetail = await axios.get("https://vivegam-server.onrender.com/api/investors", config);
  console.log("All Investors", userDetail);
  return userDetail.data;
};

export async function singleData() {
  let result = [];

  console.log("test singleData");

  let sample = getSingleInfo().then((res) => {
    console.log(res);
    result = res.map((item) => {
      return {
        title: item.title,
        InvestorID: item.InvestorID,
        CustomerName: item.CustomerName,
        TotalInvestment: item.TotalInvestment,
        Status: item.Status,
        Valuation: item.Valuation,
        TotalDivPaid: item.TotalDivPaid,
        ProfitLoss: item.ProfitLoss,
        RtnCAGR: item.RtnCAGR,
        DivRein: item.DivRein,
        CustomerEmail: item.CustomerEmail,
        user_id: item.user_id,
      };
    });
    return result;
  });
  return sample;
}

export const singleInvestorData = [
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "TotalDivPaid",
    percentage: "-4%",
    title: "Div Paid",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "DivRein",
    percentage: "-4%",
    title: "Div Rein",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "RtnCAGR",
    percentage: "+23%",
    title: "Abs Rtn/CAGR",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
    pcColor: "green-600",
  },
  {
    icon: <HiOutlineRefresh />,
    since: "3 Dec 2022",
    title: "Member Since",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];