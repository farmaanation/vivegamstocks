import React, { useState, useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { investorsData, investorsGrid } from '../data/dummy';
import { Stacked, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, getInvestorsinfo } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
import { Header } from '../components';
import { IoMdContacts } from "react-icons/io";



// const DropDown = ({ currentMode }) => (
//   <div className="w-28 border-1 border-color px-2 py-1 rounded-md">
//     <DropDownListComponent id="time" fields={{ text: 'Time', value: 'Id' }} style={{ border: 'none', color: (currentMode === 'Dark') && 'white' }} value="1" dataSource={dropdownData} popupHeight="220px" popupWidth="120px" />
//   </div>
// );

const AdminAnalytics = () => {

  const { currentColor, currentMode } = useStateContext();

  const [data, setData] = useState([]);

  useEffect(async () => {
    const fetchData = async () => {
      const result = await getInvestorsinfo();
      setData(result);
    };
    console.log("Analytics", data)
    await fetchData();
  }, []);

  const TotalInvestment = data.reduce((total, current) => total + current.TotalInvestment, 0);
  const Valuation = data.reduce((total, current) => total + current.Valuation, 0);
  const TotalDivPaid = data.reduce((total, current) => total + current.TotalDivPaid, 0);
  const DivRein = data.reduce((total, current) => total + current.DivRein, 0);
  const RtnCAGR = data.reduce((total, current) => total + current.RtnCAGR, 0);
  const CustomerName = data.reduce((total, current) => total + current.CustomerName, 0);


  const TotalInvestors = data.length;
  const profit = Valuation - TotalInvestment;


  return (
    <div className="mt-24">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-5 bg-gradient-to-r from-slate-500 to-slate-800 rounded-3xl text-center">
        <h2 className="font-semibold leading-tight text-3xl mt-0 mb-2 bg-gradient-to-r from-blue-100 via-violet-100 to-sky-100 bg-clip-text text-transparent">Admin Dashboard</h2>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center ">
        <div className="bg-white dark:text-gray-500 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center">
          <div className="flex justify-between items-center">
            <div>
              <p className="font-bold text-gray-600">Total Investments</p>
              <p className="text-2xl">₹{TotalInvestment}</p>
            </div>
            <button
              type="button"
              style={{ backgroundColor: currentColor }}
              className="text-2xl opacity-0.9 text-white hover:drop-shadow-xl rounded-full  p-4"
            >
              <BsCurrencyDollar />
            </button>
          </div>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Download"
              borderRadius="10px"
            />
          </div>
        </div>
        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {earningData.map((item) => (
            <div key={item.title} className="bg-white h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}{item.since}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className="text-sm text-gray-400  mt-1">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-10 flex-wrap justify-center">
        <div className="bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780  ">
          <div className="flex justify-between">
            <p className="font-semibold text-xl">Revenue Updates</p>
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-2 text-gray-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Investments</span>
              </p>
              <p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Profits</span>
              </p>
            </div>
          </div>
          <div className="mt-10 flex gap-10 flex-wrap justify-center">
            <div className=" border-r-1 border-color m-4 pr-10">
              <div>
                <p>
                  <span className="text-3xl font-semibold">₹{profit}</span>
                  {/* <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-600 ml-3 text-xs">
                    23%
                  </span> */}
                </p>
                <p className="text-gray-500 mt-">Total Profits Gained</p>
              </div>
              <div className="mt-8">
                <p className="text-3xl font-semibold">₹{TotalInvestment}</p>

                <p className="text-gray-500 mt-1">Total Investments</p>
              </div>

              <div className="mt-5">
                <SparkLine currentColor={currentColor} id="line-sparkLine" type="Line" height="85px" width="250px" data={SparklineAreaData} color={currentColor} />
              </div>
              <div className="mt-10">
                <Button
                  color="white"
                  bgColor={currentColor}
                  text="Write a Review"
                  borderRadius="10px"
                />
              </div>
            </div>
            <div>
              <Stacked currentMode={currentMode} width="320px" height="360px" />
            </div>
          </div>
        </div>
        <div>
          <div
            className=" rounded-2xl md:w-400 p-10 m-3"
            style={{ backgroundColor: currentColor }}
          >
            <div className="flex justify-between items-center ">
              <p className="font-semibold text-white text-2xl">Valuation</p>

              <div>
                <p className="text-2xl text-white font-semibold mt-8">₹{Valuation}</p>
                <p className="text-gray-200">of all Investors</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="h-14 bg-gradient-to-r from-slate-500 to-slate-800 text-white rounded-2xl md:w-400 p-20 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold">{TotalInvestors} Investors</p>
              <p className="text-white-500 text-xl mt-2">Registered Clients</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default AdminAnalytics;
