import React from 'react'
import { Header } from '../components';
import InvestorForm from "../components/InvestorForm";


const CreateInvestors = () => {
  return (

    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Create Investor" />
    <InvestorForm />
    </div>

  )
}

export default CreateInvestors