import React,{useState,useEffect} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';
import { investorsData, investorsGrid } from '../data/dummy';
import { Header } from '../components';

// const[del, setDel]= useState(false)
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

const Investors = () => {
  const [data, setData] = useState(); 
  // const [investorsData, setInvestorsData] = useState(); 
  
  useEffect(()=>{ 
    investorsData().then(PromiseResult=>setData(PromiseResult));
   
  },[])

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ['Add', 'Edit', 'Delete', 'Save', 'Cancel'];
  const editing = { allowDeleting: true, allowEditing: true, allowAdding: true };

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-8 bg-white rounded-3xl">
      <Header category="Page" title="Investors" />
      <GridComponent
        dataSource={data}
        enableHover={true}
        pageSettings={{ pageCount: 5 }}
        allowPaging
        width="auto"
        selectionSettings={selectionsettings}
        toolbar={toolbarOptions}
        editSettings={editing}
        deleteSettings={handleClick}
        allowSorting
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {investorsGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Selection, Toolbar, Edit, Sort, Filter]} />
      </GridComponent>
    </div>
  );
};

export default Investors;
