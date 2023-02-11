import React from 'react'
import { Header } from '../components';
import Signup from "./Signup";


const UserConfig = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
    <Header category="Page" title="Create User" />
    <Signup />
    </div>
  )
}

export default UserConfig