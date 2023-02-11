import React, { useState, useEffect } from 'react';
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';
// import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { Stacked, Button, SparkLine } from '../components';
import { earningData, SparklineAreaData, getInvestorsinfo, singleInvestorData } from '../data/dummy';

import { useStateContext } from '../contexts/ContextProvider';
import axios from 'axios';




const UserAnalytics = () => {

  const { currentColor, currentMode } = useStateContext();
  const [data, setData] = useState([]);
  const loggedInUserEmail = JSON.parse(localStorage.getItem('loggedInUserEmail'));

  useEffect(async () => {
    const fetchData = async () => {
      const result = await getInvestorsinfo();
      setData(result);
    };
    await fetchData();
  }, []);

  const filteredData = data.filter(item => item.CustomerEmail === loggedInUserEmail);
  const TotalInvestment = filteredData.reduce((total, current) => total + current.TotalInvestment, 0);
  const Valuation = filteredData.reduce((total, current) => total + current.Valuation, 0);
  const TotalDivPaid = filteredData.reduce((total, current) => total + current.TotalDivPaid, 0);
  const DivRein = filteredData.reduce((total, current) => total + current.DivRein, 0);
  const RtnCAGR = filteredData.reduce((total, current) => total + current.RtnCAGR, 0);
  // const CustomerName = filteredData[0].CustomerName;

  const ProfitLoss = filteredData.reduce((total, current) => total + current.ProfitLoss, 0);
  // const CustomerName = filteredData[0].CustomerName;

  const profit = Valuation - TotalInvestment;

  return (

    <div className="mt-24">
      <div className="m-2 md:m-10 mt-24 p-2 md:p-5 bg-gradient-to-r from-slate-500 to-slate-800 rounded-3xl text-center">
        <h2 className="font-semibold leading-tight text-3xl mt-0 mb-2 bg-gradient-to-r from-blue-100 via-violet-100 to-sky-100 bg-clip-text text-transparent">User Dashboard</h2>
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
              text="Add More"
              borderRadius="10px"
            />
          </div>

        </div>

        <div className="flex m-3 flex-wrap justify-center gap-1 items-center">
          {singleInvestorData.map((item) => (
            <div key={item.title} className="bg-gray-100 h-44 dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56  p-4 pt-9 rounded-2xl ">
              <button
                type="button"
                style={{ color: item.iconColor, backgroundColor: item.iconBg }}
                className="text-2xl opacity-0.9 rounded-full  p-4 hover:drop-shadow-xl"
              >
                {item.icon}
              </button>
              <p className="mt-3">
                <span className="text-lg font-semibold">{item.amount}{item.status}</span>
                <span className={`text-sm text-${item.pcColor} ml-2`}>
                  40%
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
                  <span className="text-3xl font-semibold">₹{ProfitLoss}</span>
                  <span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-600 ml-3 text-xs">
                    23%
                  </span>
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
                <p className="text-gray-200">Projected Valuation</p>
              </div>
            </div>

            <div className="mt-4">
              <SparkLine currentColor={currentColor} id="column-sparkLine" height="100px" type="Column" data={SparklineAreaData} width="320" color="rgb(242, 252, 253)" />
            </div>
          </div>

          <div className="h-14 bg-gradient-to-r from-slate-500 to-slate-800 text-white rounded-2xl md:w-400 p-20 m-3 flex justify-center items-center gap-10">
            <div>
              <p className="text-3xl font-semibold">₹2,43,246</p>
              <p className="text-white-500 text-xl mt-2">Annual Revenue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;


// import React, { useState, useEffect } from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
// import { singleData, getSingleInfo, singleInvestorData, SparklineAreaData, userProfileData } from '../data/dummy';
// import { Header } from '../components';


// const UserAnalytics = () => {
//   const [data, setData] = useState();
//   // const [investorsData, setInvestorsData] = useState(); 

//   useEffect(() => {
//     singleData().then(PromiseResult => setData(PromiseResult));

//   }, [])

//   const selectionsettings = { persistSelection: true };
//   const toolbarOptions = ['Add', 'Edit', 'Delete', 'Save', 'Cancel'];
//   const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-8 bg-white rounded-3xl">
//       <Header category="Page" title="Investments" />
//       <GridComponent
//         dataSource={data}
//         enableHover={true}
//         pageSettings={{ pageCount: 5 }}
//         allowPaging
//         width="auto"
//         selectionSettings={selectionsettings}
//         toolbar={toolbarOptions}
//         editSettings={editing}
//         allowSorting
//       >
//         <ColumnsDirective>
//           {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//           {singleInvestorData.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default UserAnalytics;
