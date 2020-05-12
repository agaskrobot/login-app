import React from "react";
import { useHistory } from 'react-router-dom'
import { useAuthDataContext } from "../components/AuthData";

export function Dashboard() {
  let history = useHistory()
  const { onLogout } = useAuthDataContext();
  
  const handleClick = (e) => {
    e.preventDefault();
      onLogout();
      history.push('/login')
  };
  return (
    <React.Fragment>
      <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img
            alt=""
            src="https://img.icons8.com/bubbles/60/000000/facebook-new.png"
          />
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="flex justify-end text-sm lg:flex-grow">
            <a
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              Notifications
            </a>
            <a
            onClick={handleClick}
              href="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
            >
              UserName
            </a>
          </div>
          <div></div>
        </div>
      </nav>
    </React.Fragment>
  );
}
