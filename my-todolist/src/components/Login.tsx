import { useState } from "react";
import { ToDoList } from "./ToDoList";
import "../styles/Login.css";
import { Button } from "react-bootstrap";
const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setisLogin] = useState(false);

  return (
    <>
      {isLogin ? (
        <ToDoList />
      ) : (
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
              <Button type="submit">Login</Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
