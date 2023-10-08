import React, { useState } from "react";
import "./Signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from 'react-router-dom';
import axios from "axios"; // Don't forget to import axios

function Signup() {
  const [username, setUsername] = useState(""); // State for username
  const [password, setPassword] = useState(""); // State for password
  const notify = (mess) => toast(mess);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const alert = () => {
    axios
      .post("http://127.0.0.1:8000/signup", {
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response.data.message);
        notify(response.data.message);
        if (response.data.message == "Account added!"){
            window.location.replace("/login");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        notify("error");
      });
  };

  return (
    <div className="signup">
      <form action="">
        <div className="">
          <label htmlFor="username">
            Please Enter A Username (dont use spaces or special characters)
          </label>
          <input
            type="text"
            name="username"
            id=""
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="">
          <label htmlFor="password">Please Enter a Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={alert}>
          Signup
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Signup;
