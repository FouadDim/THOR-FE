import React, { useState } from "react";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from 'react-router-dom';
import axios from "axios"; // Don't forget to import axios

function Login() {
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
      .post("http://127.0.0.1:8000/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        notify(response.data.message);
        if (response.data.status == 200){
            localStorage.setItem("user_id", response.data.payload.user_id)
            localStorage.setItem("username", response.data.payload.username)
            window.location.replace("/");
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
            Please Enter Your Username
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
          <label htmlFor="password">Please Enter Password</label>
          <input
            type="password"
            name="password"
            id=""
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="button" onClick={alert}>
          Login
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Login;
