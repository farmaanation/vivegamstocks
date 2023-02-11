import React, { useEffect, useState } from "react";
import axios from "axios";
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

// Fetching Data from API to Front END

// Investors API

export const getInvestorsinfo = async () => {
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

// export const getInvestorsinfo = async () => {
//   let userDetail = [];
//   const token = localStorage.getItem("token");
//   userDetail = await axios.get("http://localhost:4000/api/investors", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return userDetail.data.investors;
// };

export function investorsData() {
  let result = [];

  console.log("test investor");
  let sample = getInvestorsinfo().then((res) => {
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

// Employee API

export const getEmployeesinfo = async () => {
  let userDetail = [];
  let token = JSON.parse(localStorage.getItem("user"));
  token = token.token;
  // get apitoken from local storage
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  userDetail = await axios.get("https://vivegam-server.onrender.com/api/Employees", config);
  console.log("ALl Employees", userDetail);
  return userDetail.data;
};

export function employeesData() {
  let result = [];

  console.log("test Employees");
  let sample = getEmployeesinfo().then((res) => {
    result = res.map((item) => {
      return {
        employeename: item.employeename,
        designation: item.designation,
        employeeemail: item.employeeemail,
        employeephone: item.employeephone,
        employeeid: item.employeeid,
      };
    });
    return result;
  });
  return sample;
}

// User Investor API

// USER API

export const getUsersinfo = async () => {
  let userDetail = [];
  let token = JSON.parse(localStorage.getItem("user"));
  token = token.token;
  // get apitoken from local storage
  const config = {
    headers: { authorization: `Bearer ${token}` },
  };
  userDetail = await axios.get("https://vivegam-server.onrender.com/api/user", config);
  console.log("All Users", userDetail);
  return userDetail.data;
};

export function usersData() {
  let result = [];

  console.log("test Users");
  let sample = getUsersinfo().then((res) => {
    result = res.map((item) => {
      return {
        email: item.email,
        password: item.password,
        role: item.role,
      };
    });
    return result;
  });
  return sample;
}

// Fetching Data from API to Front END

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <p>{props.Name}</p>
  </div>
);

const customerGridImage = (props) => (
  <div>
    <p>{props.CustomerName}</p>
    <p>{props.CustomerEmail}</p>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p
      style={{ background: props.StatusBg }}
      className="rounded-full h-3 w-3"
    />
    <p>{props.Status}</p>
  </div>
);
export const areaPrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  majorGridLines: { width: 0 },
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  labelStyle: { color: "gray" },
};

export const areaPrimaryYAxis = {
  labelFormat: "{value}%",
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: "gray" },
};
// export const barPrimaryXAxis = {
//   valueType: "Category",
//   interval: 1,
//   majorGridLines: { width: 0 },
// };
// export const barPrimaryYAxis = {
//   majorGridLines: { width: 0 },
//   majorTickLines: { width: 0 },
//   lineStyle: { width: 0 },
//   labelStyle: { color: "transparent" },
// };
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 2.5 },
    { x: new Date(2008, 0, 1), y: 2.9 },
    { x: new Date(2009, 0, 1), y: 3.8 },
    { x: new Date(2010, 0, 1), y: 1.4 },
    { x: new Date(2011, 0, 1), y: 3.1 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
    { x: new Date(2005, 0, 1), y: 2.1 },
    { x: new Date(2006, 0, 1), y: 2.3 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 1.5 },
    { x: new Date(2009, 0, 1), y: 2.8 },
    { x: new Date(2010, 0, 1), y: 1.5 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
    { x: new Date(2005, 0, 1), y: 1.6 },
    { x: new Date(2006, 0, 1), y: 2 },
    { x: new Date(2007, 0, 1), y: 1.7 },
    { x: new Date(2008, 0, 1), y: 2.3 },
    { x: new Date(2009, 0, 1), y: 2.7 },
    { x: new Date(2010, 0, 1), y: 1.1 },
    { x: new Date(2011, 0, 1), y: 2.3 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: "x",
    yName: "y",
    name: "Revenue",
    opacity: "0.8",
    type: "SplineArea",
    width: "2",
  },
];

export const barChartData = [
  [
    { x: "USA", y: 46 },
    { x: "GBR", y: 27 },
    { x: "CHN", y: 26 },
  ],
  [
    { x: "USA", y: 37 },
    { x: "GBR", y: 23 },
    { x: "CHN", y: 18 },
  ],
  [
    { x: "USA", y: 38 },
    { x: "GBR", y: 17 },
    { x: "CHN", y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: "x",
    yName: "y",
    name: "Gold",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: "x",
    yName: "y",
    name: "Silver",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: "x",
    yName: "y",
    name: "Bronze",
    type: "Column",
    marker: {
      dataLabel: {
        visible: true,
        position: "Top",
        font: { fontWeight: "600", color: "#ffffff" },
      },
    },
  },
];

export const LinePrimaryXAxis = {
  valueType: "DateTime",
  labelFormat: "y",
  intervalType: "Years",
  edgeLabelPlacement: "Shift",
  majorGridLines: { width: 0 },
  background: "white",
};

export const LinePrimaryYAxis = {
  labelFormat: "{value}%",
  rangePadding: "None",
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

// test

// test
export const investorsGrid = [
  { type: "checkbox", width: "30" },
  {
    field: "title",
    headerText: "title",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "CustomerName",
    headerText: "Name",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "CustomerEmail",
    headerText: "CustomerEmail",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "TotalInvestment",
    headerText: "Total Investment",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "Valuation",
    headerText: "Valuation",
    width: "100",
    format: "C2",
    textAlign: "Center",
  },
  {
    field: "RtnCAGR",
    headerText: "Rtn/CAGR",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "DivRein",
    headerText: "Div.Rein",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "TotalDivPaid",
    headerText: "Div.Paid",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "ProfitLoss",
    headerText: "Profit/Loss",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "Status",
    headerText: "Status",
    width: "80",
    textAlign: "Center",
    // template: customerGridStatus,
  },
  // {
  //   field: "SET_DELETE",
  //   headerText: "Action",
  //   width: "70",
  //   amount: "DELETE",
  //   textAlign: "center",
  // },
  // {
  //   field: "InvestorID",
  //   headerText: "Investor ID",
  //   width: "80",
  //   textAlign: "Center",
  //   isPrimaryKey: true,
  // },
];

export const employeesGrid = [
  { type: "checkbox", width: "40" },
  {
    field: "employeename",
    headerText: "Employee",
    width: "100",
    // template: gridEmployeeProfile,
    textAlign: "center",
  },

  {
    field: "designation",
    headerText: "Designation",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "employeeemail",
    headerText: "Email",
    width: "100",
    textAlign: "Center",
  },
  {
    field: "employeephone",
    headerText: "Phone",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "employeeid",
    headerText: "Employee ID",
    width: "80",
    textAlign: "Center",
  },
  {
    field: "timestamps",
    headerText: "Last Updated",
    width: "100",
    textAlign: "Center",
  },
];

export const usersGrid = [
  { type: "checkbox", width: "50" },
  {
    field: "email",
    headerText: "User Email",
    width: "100",
    // template: gridEmployeeProfile,
    textAlign: "left",
  },
  {
    field: "password",
    headerText: "Encrypted Password",
    width: "150",
    textAlign: "Center",
  },
  {
    field: "role",
    headerText: "Role",
    width: "100",
    textAlign: "Center",
  },
];

export const links = [
  {
    title: "Dashboard",
    links: [
      {
        name: "AdminAnalytics",
        icon: <FiShoppingBag />,
      },
      {
        name: "UserAnalytics",
        icon: <FiShoppingBag />,
      },
    ],
  },

  {
    title: "Pages",
    links: [
      // {
      //   name: "orders",
      //   icon: <AiOutlineShoppingCart />,
      // },
      {
        name: "Employees",
        icon: <IoMdContacts />,
      },
      {
        name: "Investors",
        icon: <RiContactsLine />,
      },
      {
        name: "RegisteredUsers",
        icon: <RiContactsLine />,
      },
      {
        name: "CreateEmployees",
        icon: <RiContactsLine />,
      },
      {
        name: "CreateInvestors",
        icon: <RiContactsLine />,
      },
      {
        name: "UserConfig",
        icon: <RiContactsLine />,
      },
    ],
  },
  {
    title: "Charts",
    links: [
      {
        name: "line",
        icon: <AiOutlineStock />,
      },
      {
        name: "area",
        icon: <AiOutlineAreaChart />,
      },
      {
        name: "stacked",
        icon: <AiOutlineBarChart />,
      },
    ],
  },
];




export const earningData = [
  
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "90",
    percentage: "-4%",
    title: "Div Paid",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <MdOutlineSupervisorAccount />,
    amount: "39,354",
    percentage: "-4%",
    title: "Div Rein",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
    pcColor: "red-600",
  },
  {
    icon: <BsBoxSeam />,
    amount: "4,396",
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


// Testing New CHATGPT

export const getSingleInfo = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const token = user.token;
  let email = user.email;
  let data = JSON.stringify({ email });
  const config = {
    method: 'get',
    url: 'https://vivegam-server.onrender.com/api/investors/single',
    headers: { 
      authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    data: data
  };
  
  console.log('prabha', config)
  let Final_data;
  const response = await axios(config).then((res) => {
  console.log(res.data)
  Final_data = res.data;
  console.log('harry', Final_data)
}).catch(err=> console.log(err))
};

// Testing New ChatGPT

// testing chatGPT

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
    status: "Profit",
    title: "Status",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
    pcColor: "red-600",
  },
];

// export const getSingleinfo = async () => {
//   let userDetail = [];
//   let token = JSON.parse(localStorage.getItem("user"));
//   token = token.token;
//   // get apitoken from local storage
//   const config = {
//     headers: { authorization: `Bearer ${token}` },
//   };
//   userDetail = await axios.get(
//     "http://localhost:4000/api/investors/single",
//     config
//   );
//   console.log("Farmaan", userDetail);
//   return userDetail.data;
// };

// export async function singleData() {
//   let result = [];

//   console.log("test singleData");
//   let sample = await getSingleinfo().then((res) => {
//     result = res.map((item) => {
//       return {
//         title: item.title,
//         InvestorID: item.InvestorID,
//         CustomerName: item.CustomerName,
//         TotalInvestment: item.TotalInvestment,
//         Status: item.Status,
//         Valuation: item.Valuation,
//         TotalDivPaid: item.TotalDivPaid,
//         ProfitLoss: item.ProfitLoss,
//         RtnCAGR: item.RtnCAGR,
//         DivRein: item.DivRein,
//         CustomerEmail: item.CustomerEmail,
//         user_id: item.user_id,
//       };
//     });
//     return result;
//   });
//   return sample;
// }

// Single Investor API

// export const singleInvestorData = async () => {
//   const data = await singleData();
//   return [
//     {
//       icon: <MdOutlineSupervisorAccount />,
//       amount: data.TotalDivPaid,
//       percentage: "-4%",
//       title: "Div Paid",
//       iconColor: "#03C9D7",
//       iconBg: "#E5FAFB",
//       pcColor: "red-600",
//     },
//     {
//       icon: <MdOutlineSupervisorAccount />,
//       amount: data.DivRein,
//       percentage: "-4%",
//       title: "Div Rein",
//       iconColor: "#03C9D7",
//       iconBg: "#E5FAFB",
//       pcColor: "red-600",
//     },
//     {
//       icon: <BsBoxSeam />,
//       amount: data.RtnCAGR,
//       percentage: "+23%",
//       title: "Abs Rtn/CAGR",
//       iconColor: "rgb(255, 244, 229)",
//       iconBg: "rgb(254, 201, 15)",
//       pcColor: "green-600",
//     },
//     {
//       icon: <HiOutlineRefresh />,
//       since: "3 Dec 2022",
//       title: "Member Since",
//       iconColor: "rgb(0, 194, 146)",
//       iconBg: "rgb(235, 250, 242)",
//       pcColor: "red-600",
//     },
//   ];
// };

export const themeColors = [
  {
    name: "blue-theme",
    color: "#1E4DB7",
  },
  {
    name: "green-theme",
    color: "#03C9D7",
  },
  {
    name: "indigo-theme",
    color: "#1A97F5",
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: "My Profile",
    desc: "Account Settings",
    iconColor: "#03C9D7",
    iconBg: "#E5FAFB",
  },
  {
    icon: <BsShield />,
    title: "My Inbox",
    desc: "Messages & Emails",
    iconColor: "rgb(0, 194, 146)",
    iconBg: "rgb(235, 250, 242)",
  },
  {
    icon: <FiCreditCard />,
    title: "My Tasks",
    desc: "To-do and Daily Tasks",
    iconColor: "rgb(255, 244, 229)",
    iconBg: "rgb(254, 201, 15)",
  },
];

// export const investorsData = [
//   {
//     InvestorID: 1001,
//     CustomerName: "Nirav Joshi",
//     CustomerEmail: "nirav@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹2.4k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1002,

//     CustomerName: "Sunil Joshi",
//     CustomerEmail: "sunil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",

//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹3.9k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1003,

//     CustomerName: "Andrew McDownland",
//     CustomerEmail: "andrew@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Pending",
//     StatusBg: "#FEC90F",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹24.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1004,

//     CustomerName: "Christopher Jamil",
//     CustomerEmail: "jamil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Withdrawn",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1005,

//     CustomerName: "Michael",
//     CustomerEmail: "michael@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Loss",
//     StatusBg: "red",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1006,
//     CustomerName: "Nirav Joshi",
//     CustomerEmail: "nirav@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹2.4k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1007,

//     CustomerName: "Sunil Joshi",
//     CustomerEmail: "sunil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",

//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹3.9k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1008,

//     CustomerName: "Andrew McDownland",
//     CustomerEmail: "andrew@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Pending",
//     StatusBg: "#FEC90F",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹24.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1009,

//     CustomerName: "Christopher Jamil",
//     CustomerEmail: "jamil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Withdrawn",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1010,

//     CustomerName: "Michael",
//     CustomerEmail: "michael@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Loss",
//     StatusBg: "red",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1011,
//     CustomerName: "Nirav Joshi",
//     CustomerEmail: "nirav@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹2.4k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1012,

//     CustomerName: "Sunil Joshi",
//     CustomerEmail: "sunil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",

//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹3.9k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1013,

//     CustomerName: "Andrew McDownland",
//     CustomerEmail: "andrew@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Pending",
//     StatusBg: "#FEC90F",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹24.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1014,

//     CustomerName: "Christopher Jamil",
//     CustomerEmail: "jamil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Withdrawn",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1015,

//     CustomerName: "Michael",
//     CustomerEmail: "michael@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Loss",
//     StatusBg: "red",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1016,
//     CustomerName: "Nirav Joshi",
//     CustomerEmail: "nirav@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹2.4k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1017,

//     CustomerName: "Sunil Joshi",
//     CustomerEmail: "sunil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",

//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹3.9k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1018,

//     CustomerName: "Andrew McDownland",
//     CustomerEmail: "andrew@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Pending",
//     StatusBg: "#FEC90F",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹24.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1019,

//     CustomerName: "Christopher Jamil",
//     CustomerEmail: "jamil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Withdrawn",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1020,

//     CustomerName: "Michael",
//     CustomerEmail: "michael@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Loss",
//     StatusBg: "red",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1021,
//     CustomerName: "Nirav Joshi",
//     CustomerEmail: "nirav@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹2.4k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1022,

//     CustomerName: "Sunil Joshi",
//     CustomerEmail: "sunil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Profit",

//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹3.9k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1023,

//     CustomerName: "Andrew McDownland",
//     CustomerEmail: "andrew@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Pending",
//     StatusBg: "#FEC90F",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹24.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1024,

//     CustomerName: "Christopher Jamil",
//     CustomerEmail: "jamil@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Withdrawn",
//     StatusBg: "#8BE78B",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
//   {
//     InvestorID: 1025,

//     CustomerName: "Michael",
//     CustomerEmail: "michael@gmail.com",
//     TotalInvestment: "1,50,000",
//     Status: "Loss",
//     StatusBg: "red",
//     Valuation: "1,74,000",
//     TotalDivPaid: "₹16.5k",
//     ProfitLoss: "24,000",
//     RtnCAGR: "28.19% / 12.42%",
//     DivRein: "5%",
//   },
// ];
// export const employeesData = [
//   {
//     EmployeeID: 1,
//     Name: "Syed Musaddiq",
//     Title: "Managing Director",
//     Privilege: "Admin",
//     EmployeeEmail: "syed@vivegaminvestments.com",
//     EmployeeContact: "1234567890",
//   },
//   {
//     EmployeeID: 2,
//     Name: "Nasimiyu Danai",
//     Title: "Marketing Head",
//     Privilege: "Admin",
//     EmployeeEmail: "syed@vivegaminvestments.com",
//     EmployeeContact: "1234567890",
//   },
//   {
//     EmployeeID: 3,
//     Name: "Iulia Albu",
//     Title: "HR",
//     Privilege: "Admin",
//     EmployeeEmail: "syed@vivegaminvestments.com",
//     EmployeeContact: "1234567890",
//   },
//   {
//     EmployeeID: 4,
//     Name: "Siegbert Gottfried",
//     Title: "Marketing Head",
//     Privilege: "Admin",
//     EmployeeEmail: "syed@vivegaminvestments.com",
//     EmployeeContact: "1234567890",
//   },
// ];

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
    { x: new Date(2008, 0, 1), y: 38 },
    { x: new Date(2009, 0, 1), y: 54 },
    { x: new Date(2010, 0, 1), y: 57 },
    { x: new Date(2011, 0, 1), y: 70 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
    { x: new Date(2008, 0, 1), y: 50 },
    { x: new Date(2009, 0, 1), y: 66 },
    { x: new Date(2010, 0, 1), y: 78 },
    { x: new Date(2011, 0, 1), y: 84 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
    { x: new Date(2008, 0, 1), y: 39 },
    { x: new Date(2009, 0, 1), y: 50 },
    { x: new Date(2010, 0, 1), y: 70 },
    { x: new Date(2011, 0, 1), y: 100 },
  ],
];
export const dropdownData = [
  {
    Id: "1",
    Time: "March 2021",
  },
  {
    Id: "2",
    Time: "April 2021",
  },
  {
    Id: "3",
    Time: "May 2021",
  },
];
export const SparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];

export const lineCustomSeries = [
  {
    dataSource: lineChartData[1],
    xName: "x",
    yName: "y",
    name: "Revenue",
    width: "2",
    marker: { visible: true, width: 10, height: 10 },
    type: "Line",
  },
];

export const contextMenuItems = [
  "AutoFit",
  "AutoFitAll",
  "SortAscending",
  "SortDescending",
  "Copy",
  "Edit",
  "Delete",
  "Save",
  "Cancel",
  "PdfExport",
  "ExcelExport",
  "CsvExport",
  "FirstPage",
  "PrevPage",
  "LastPage",
  "NextPage",
];

export const stackedChartData = [
  [
    { x: "Jan", y: 111.1 },
    { x: "Feb", y: 127.3 },
    { x: "Mar", y: 143.4 },
    { x: "Apr", y: 159.9 },
    { x: "May", y: 159.9 },
    { x: "Jun", y: 159.9 },
    { x: "July", y: 159.9 },
  ],
  [
    { x: "Jan", y: 111.1 },
    { x: "Feb", y: 127.3 },
    { x: "Mar", y: 143.4 },
    { x: "Apr", y: 159.9 },
    { x: "May", y: 159.9 },
    { x: "Jun", y: 159.9 },
    { x: "July", y: 159.9 },
  ],
];

export const stackedCustomSeries = [
  {
    dataSource: stackedChartData[0],
    xName: "x",
    yName: "y",
    name: "Invested",
    type: "StackingColumn",
    background: "blue",
  },

  {
    dataSource: stackedChartData[1],
    xName: "x",
    yName: "y",
    name: "Profit",
    type: "StackingColumn",
    background: "red",
  },
];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: "Rotate45",
  valueType: "Category",
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: "{value}",
};
