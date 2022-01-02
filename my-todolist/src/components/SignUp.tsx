import axios from "axios";
import React, { useState } from "react";
import { Alert } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import "../styles/SignUp.css";
import { RootState } from "../redux/store";
import {
  failSignUp,
  submitSignUpSuccess,
  submitSignUpFail,
  successSignUp,
} from "../redux/features/auth/signUpSlice";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [signUpMsg, setSignUpMsg] = useState("");
  const [passwordCheckMsg, setPasswordCheckMsg] = useState("");

  const submitSignUp = useSelector(
    (state: RootState) => state.signUp.submitSignUp
  );
  const isSignUp = useSelector((state: RootState) => state.signUp.isSignUp);
  const dispatch = useDispatch();

  //simply password validation
  const checkPassword = () => {
    return password === password2;
  };

  const handleSignUp = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (checkPassword()) {
      try {
        const res = await axios.post("http://localhost:4000/api/user/signup", {
          username: username,
          password: password,
          isAdmin: false,
        });

        if (res.status === 201) {
          dispatch(submitSignUpSuccess());
          dispatch(successSignUp());
          setSignUpMsg("successfully signup, please login!");
          console.log("the res is: ", res);
        } else if (res.status === 500) {
          dispatch(failSignUp());
          setSignUpMsg("fail to sigup, please use a unique name!");
        }
      } catch (err) {
        dispatch(failSignUp());
        setSignUpMsg("fail to sigup, please use a unique name!");
      }
    } else {
      dispatch(submitSignUpFail());
      setPasswordCheckMsg("passwords do not match, please verify passwword!");
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
      {submitSignUp ? (
        isSignUp ? (
          <Alert variant="success">{signUpMsg}</Alert>
        ) : (
          <Alert variant="warning">{signUpMsg}</Alert>
        )
      ) : (
        <Alert variant="warning">{passwordCheckMsg}</Alert>
      )}

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
          onClick={(e) => handleSignUp(e)}
          className="btn btn-primary btn-block"
        >
          Sign Up
        </button>
        <p className="forgot-password text-right">
          Already registered <Link to="/login">Login</Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
