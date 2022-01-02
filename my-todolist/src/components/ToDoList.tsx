import axios from "axios";
import React, { useState } from "react";
import {
  Button,
  Container,
  ListGroup,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { createToDo, selectEvents } from "../redux/features/events/toDoSlices";
import { RootState } from "../redux/store";
import EventRow from "./EventRow";

const ToDoList = () => {
  //front end input
  const [tempKey, setTempKey] = useState(0);
  const [addTodo, setAddToDO] = useState(false);
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [content, setContent] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [toggle, setToggle] = useState(false);

  //access redux store for user info
  const { username, jwtToken } = useSelector(
    (state: RootState) => state.auth.userInfo
  );

  //for modify the http header and access backend
  //set the header manually, why?
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  const events = useSelector(selectEvents);
  const dispatch = useDispatch();

  //handle font end use input
  const handleAddEvent = () => {
    const initialValue = {
      id: tempKey,
      from: "",
      to: "",
      content: "",
      isCompleted: "",
    };
    dispatch(createToDo(initialValue));
    setTempKey(tempKey + 1);
  };

  //for updating the to-do-list UI
  const handleRerender = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <ListGroup>
        <ListGroup.Item>
          <Button onClick={() => handleAddEvent()}>ADD EVENT</Button>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListGroup horizontal>
            <ListGroup.Item style={{ width: "30rem" }}>From</ListGroup.Item>
            <ListGroup.Item style={{ width: "30rem" }}>To</ListGroup.Item>
            <ListGroup.Item style={{ width: "30rem" }}>Content</ListGroup.Item>
            <ListGroup.Item style={{ width: "10rem" }}>Status</ListGroup.Item>
            <ListGroup.Item style={{ width: "15rem" }}>Action</ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>

        {/*better solution for the unqie key ???????? why */}
        {events.map((item) => (
          <EventRow
            key={item.id}
            id={item.id}
            from={item.from}
            to={item.to}
            content={item.content}
            isCompleted={item.isCompleted}
          />
        ))}
      </ListGroup>
    </div>
  );
};

export default ToDoList;
