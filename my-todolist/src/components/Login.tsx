import { useState } from "react";
import "../styles/Login.css";
import { Alert, Button } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  loginFail,
  loginSuccess,
  selectIsLgoin,
  selectUserInfo,
} from "../redux/features/auth/authSlice";
import { useHistory } from "react-router-dom";

const Login = (props: any) => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loginErrorMsg, setLoginErrorMsg] = useState("");

  const history = useHistory();

  //access the redux store
  const isLogin = useSelector(selectIsLgoin);
  const userInfo = useSelector(selectUserInfo);
  const dispatch = useDispatch();

  const handleLogin = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();

    const loginURL = "http://localhost:4000/api/user/login";

    try {
      const res = await axios.post(loginURL, {
        username: username,
        password: password,
        isAdmin: false,
      });
      //success login
      if (res.status === 200) {
        console.log("the res is: ", res);
        console.log("the token is: ", res.data.data.token);
        const userData = {
          username: res.data.data.username,
          jwtToken: res.data.data.token,
        };
        dispatch(loginSuccess(userData));
        //redirect to the todolist once the user login? why?
        history.push("/todolist");
      }
      //invalid password
      else if (res.status === 401) {
        console.log("invalid password");
        dispatch(loginFail());
        setLoginErrorMsg("invalid username or password");
      }
      //username does not exist
      else if (res.status === 403) {
        dispatch(loginFail());
        setLoginErrorMsg("invalid username or password");
      }
      //axios failure
      else {
        console.log("axios error");
      }
    } catch {
      console.log("Unauthorized 401");
      dispatch(loginFail());
      setLoginErrorMsg("invalid username or password");
    }
  };
  return (
    <>
      {isLogin ? null : <Alert variant="warning">{loginErrorMsg}</Alert>}
      <div className="Login-wrapper">
        <h1>Please Login</h1>
        <form className="Login-form">
          <label>
            <p>Username</p>
            <input
              type="text"
              onChange={(event) => setUserName(event.target.value)}
            ></input>
          </label>
          <label>
            <p>Passwaord</p>
            <input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </label>
          <div>
            <Button type="submit" onClick={(e) => handleLogin(e)}>
              Login
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
