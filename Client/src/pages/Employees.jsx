import React,{useState,useEffect} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
  const [data, setData] = useState(); 
  // const [investorsData, setInvestorsData] = useState(); 
  
  useEffect(()=>{
    employeesData().then(PromiseResult=>setData(PromiseResult));
   
  },[])

  const toolbarOptions = ['Edit', 'Delete', 'Save'];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={data}
        enableHover={false}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 5 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};
export default Employees;


// import React,{useState,useEffect} from 'react';
// import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
// import { employeesData, employeesGrid } from "../data/dummy.js"
// import { Header } from '../components';

// const Employees = () => {
//   const [data, setData] = useState(); 
//   // const [investorsData, setInvestorsData] = useState(); 
  
//   useEffect(()=>{
//     employeesData().then(PromiseResult=>setData(PromiseResult));
   
//   },[])

//   const selectionsettings = { persistSelection: true };
//   const toolbarOptions = ['Edit', 'Delete', 'Save'];
//   const editing = { allowDeleting: true, allowEditing: true };

//   return (
//     <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
//       <Header category="Page" title="Employees" />
//       <GridComponent
//         dataSource={data}
//         enableHover={false}
//         allowPaging
//         pageSettings={{ pageCount: 5 }}
//         selectionSettings={selectionsettings}
//         toolbar={toolbarOptions}
//         editSettings={editing}
//         allowSorting
//       >
//         <ColumnsDirective>
//           {/* eslint-disable-next-line react/jsx-props-no-spreading */}
//           {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
//         </ColumnsDirective>
//         <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
//       </GridComponent>
//     </div>
//   );
// };

// export default Employees;
