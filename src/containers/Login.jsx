import React, { useState } from "react";
import { useAuthDataContext } from "../components/AuthData";
import { useHistory } from 'react-router-dom'

export function Login() {
  let history = useHistory()
  const { onLogin } = useAuthDataContext();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setError(false);
    if (user !== "user" || password !== "Password123") {
      setError(true);
    } else {
      onLogin();
      history.push('/')
    }
  };

  let errorText;
  let errorBorder = "";
  if (error === true) {
    errorText = (
      <p className="text-red-500 text-xs italic">Wrong user or password</p>
    );
    errorBorder = "border-red-500";
  }

  return (
    <React.Fragment>
      <div className="flex justify-center ">
        <form className="m-16 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="flex justify-center ">
            <img
              alt=""
              src="https://img.icons8.com/bubbles/100/000000/facebook-new.png"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className={`shadow appearance-none border ${errorBorder} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="username"
              type="text"
              placeholder="Username"
              onChange={(e) => setUser(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className={`shadow appearance-none border ${errorBorder} rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              id="password"
              type="password"
              placeholder="******************"
              onChange={(e) => setPassword(e.target.value)}
            />
            {errorText}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleClick}
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="absolute bottom-0 right-0 h-8 w-auto ">
        <a
          className="text-white text-xs mr-4"
          href="https://icons8.com/icon/118555/facebook"
        >
          Facebook icon by Icons8
        </a>
      </div>
    </React.Fragment>
  );
}
