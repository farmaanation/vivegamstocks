import React from 'react';
import { MdOutlineCancel } from 'react-icons/md';

import { Link } from "react-router-dom";
import { Button } from '.';
import { useStateContext } from '../contexts/ContextProvider';
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const UserProfile = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };
  const { currentColor } = useStateContext();

  return (
    
    <div className="nav-item absolute right-1 top-16 bg-gradient-to-r from-slate-500 to-slate-800 p-8 rounded-lg w-96">
      {user && (
      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg dark:text-gray-200">User Profile</p>
        <Button
          icon={<MdOutlineCancel />}
          color="rgb(153, 171, 180)"
          bgHoverColor="light-gray"
          size="2xl"
          borderRadius="50%"
        />
      </div>
      )}
      {/* {!user && (
            <div>
              <Link to="/login">Login</Link>  
            </div>
          )} */}
      {user && (
        <div>
          <p className="font-semibold text-2xl dark:text-gray-200"> {user.email} </p>
          <p className="text-xl font-semibold bg-gradient-to-r from-blue-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">  {user.role}   </p>
          {/* <p className="text-gray-500 text-sm font-semibold dark:text-gray-400"> {user.email} </p> */}
        </div>
)}
{!user && (
            <div>
              <Link to="/login" class="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300">You must be logged in to access portal</Link>
            </div>
          )}

      {user && (
      <div className="mt-5"><button class="rounded-lg px-4 py-2 bg-gray-600 text-gray-100 hover:bg-gray-700 duration-300" onClick={handleClick}>Log out</button>
        {/* <button 
        color="white"
        bgColor={currentColor}
        text="Logout"
        borderRadius="10px"
        width="full"
        onClick={handleClick}>
        </button> */}
      </div>
      )}
      {/* {!user && (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )} */}
      {/* {!user && (
            <div>
              <Link to="/login">Login</Link>
            </div>
          )} */}
    </div>

  );
};

export default UserProfile;
