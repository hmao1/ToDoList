import axios from "axios";
import React, { Component, useState } from "react";

import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";
import { ToDoList } from "./ToDoList";

const SigUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [isLogin, setisLogin] = useState(false);

  const checkPassword = () => {
    return password === password2;
  };

  const sendRequest = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (checkPassword()) {
      const res = await axios.post("http://localhost:4000/api/user/signup", {
        username,
        password,
        isAdmin: false,
      });

      switch (res.status) {
        case 500:
          alert("username exists, pelease use another one!");
          break;
        case 201:
          alert("successfully create a new account");
          setisLogin(true);
          console.log(res);
          break;
        default:
          alert("network error");
          break;
      }
    } else {
      alert("two password does not match, please comfirm your password");
    }
  };

  const getUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const getPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const getPassword2 = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword2(e.target.value);
  };
  return (
    <>
      {isLogin ? (
        <ToDoList />
      ) : (
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={(e) => getUserName(e)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={(e) => getPassword(e)}
            />
          </div>

          <div className="form-group">
            <label>Comfirm Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Re-enter password"
              onChange={(e) => getPassword2(e)}
            />
          </div>

          <button
            onClick={(e) => sendRequest(e)}
            className="btn btn-primary btn-block"
          >
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <Link to="/login">Login</Link>
          </p>
        </form>
      )}
    </>
  );
};

export default SigUp;
