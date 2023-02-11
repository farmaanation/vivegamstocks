import React from 'react'
import { Header } from '../components';
import EmployeeForm from "../components/EmployeeForm";


const CreateEmployees = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Create Employee" />
    <EmployeeForm />
    </div>
  )
}

export default CreateEmployees