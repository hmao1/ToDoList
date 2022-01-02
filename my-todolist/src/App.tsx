import React, { useState } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import ToDoList from "./components/ToDoList";
import Home from "./components/Home";

//access the Redux store
import { selectIsLgoin } from "./redux/features/auth/authSlice";

//react-router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

//need to enable the protected route
//need to move the route to APP, more common?
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
          <ProtectedRoute exact path="/todolist">
            <ToDoList />
          </ProtectedRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
