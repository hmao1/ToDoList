import axios from "axios";
import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, IToDO } from "../redux/features/events/toDoSlices";
import { RootState } from "../redux/store";

const EventRow: React.FC<IToDO> = (props) => {
  const [editClicked, setEditClicked] = useState(false);

  //front end input
  const [fromDate, setFromDate] = useState(new Date());
  const [toDate, setToDate] = useState(new Date());
  const [content, setContent] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);

  //access redux store for user info
  const { username, jwtToken } = useSelector(
    (state: RootState) => state.auth.userInfo
  );
  const dispatch = useDispatch();

  axios.defaults.headers.common["Authorization"] = `Bearer ${jwtToken}`;

  //handle font end use input
  // const handleEdit = () => {setEditClicked(true)};

  const handleFromDate = () => {};

  const handleToDate = () => {};

  const handleContent = () => {};

  const handleIscompleted = () => {};

  const handleDelete = (id?: string | number) => {
    dispatch(deleteTodo(id));
  };

  //add to do event to backend
  const handleSave = () => {};

  return (
    <ListGroupItem key={props.id}>
      <ListGroup horizontal>
        <ListGroupItem style={{ width: "30rem" }}>
          <input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            value="2018-06-12T19:30"
            min="2018-06-07T00:00"
            max="2018-06-14T00:00"
          ></input>
        </ListGroupItem>
        <ListGroupItem style={{ width: "30rem" }}>
          <input
            type="datetime-local"
            id="meeting-time"
            name="meeting-time"
            value="2018-06-12T19:30"
            min="2018-06-07T00:00"
            max="2018-06-14T00:00"
          ></input>
        </ListGroupItem>

        <ListGroupItem style={{ width: "30rem" }}>
          <input type="text"></input>
        </ListGroupItem>

        <ListGroupItem style={{ width: "10rem" }}>
          <input type="checkbox"></input>
        </ListGroupItem>

        <ListGroupItem style={{ width: "15rem" }}>
          {editClicked ? (
            <>
              <Button>Save</Button>
              <Button
                onClick={() => {
                  handleDelete(props.id);
                }}
              >
                Delete
              </Button>
            </>
          ) : (
            <Button onClick={() => setEditClicked(true)}>EDIT</Button>
          )}
        </ListGroupItem>
      </ListGroup>
    </ListGroupItem>
  );
};

export default EventRow;
