import { timeStamp } from "console";
import React, { Component } from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import ShowList from "./ShowList";

export interface todoObj {}

interface MyProps {}
interface MyState {
  dataCollection: todoObj[];
}
export class ToDoList extends Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);

    this.state = {
      dataCollection: [],
    };
  }

  //update the dataCollection state, only affec the UI, not the DB
  handleAdd = () => {
    this.setState((preState) => {
      return { dataCollection: [...preState.dataCollection, {}] };
    });
  };

  handleDelete = (id: number) => {
    console.log("delete");
    this.setState(
      {
        dataCollection: this.state.dataCollection.filter(
          (item, index) => id !== index
        ),
      },
      () => console.log(this.state.dataCollection)
    );
  };

  handleSave = () => {
    console.log("save");
  };

  render(): React.ReactNode {
    return (
      <div>
        <ListGroup>
          <ListGroup.Item>
            <Button onClick={() => this.handleAdd()}>ADD EVENT</Button>
          </ListGroup.Item>
          <ListGroup.Item>
            <ListGroup horizontal>
              <ListGroup.Item style={{ width: "30rem" }}>From</ListGroup.Item>
              <ListGroup.Item style={{ width: "30rem" }}>To</ListGroup.Item>
              <ListGroup.Item style={{ width: "30rem" }}>
                Content
              </ListGroup.Item>
              <ListGroup.Item style={{ width: "10rem" }}>Status</ListGroup.Item>
              <ListGroup.Item style={{ width: "15rem" }}>Action</ListGroup.Item>
            </ListGroup>
          </ListGroup.Item>

          <ShowList
            todoCollection={this.state.dataCollection}
            delete={this.handleDelete}
          />
        </ListGroup>
      </div>
    );
  }
}
