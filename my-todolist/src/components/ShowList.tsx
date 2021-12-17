import React, { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { todoObj } from "./ToDoList";

interface Props {
  todoCollection: todoObj[];
  delete: any;
}
const ShowList: React.FC<Props> = (props) => {
  const [editClicked, seteditClicked] = useState(false);

  const todoList = props.todoCollection.map((item, index) => {
    return (
      <ListGroupItem key={index}>
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
                <Button onClick={() => props.delete(index)}>Delete</Button>
              </>
            ) : (
              <Button onClick={() => seteditClicked(true)}>EDIT</Button>
            )}
          </ListGroupItem>
        </ListGroup>
      </ListGroupItem>
    );
  });

  return <>{todoList}</>;
};

export default ShowList;
