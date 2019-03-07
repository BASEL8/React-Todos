import React, { Component } from "react";
import ListItem from "./ListItem";

const ListStyle = {
  border: "1px solid #868585",
  width: "250px",
  padding: "10px 30px",
  margin: 10,
  borderRadius: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between"
};
const inputStyle = {
  background: "none",
  borderRight: "none",
  outline: "none",
  borderStyle: "solid",
  borderColor: "gray",
  borderWidth: 1,
  padding: 5,
  color: "lightgreen"
};
const buttonsContainerStyle = {
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  flexWrap: "wrap",
  marginTop: 20,
  width: "100%",
  height: 80,
  fontSize: 15
};
const ListButtonStyle = {
  background: "none",
  border: "1px solid #868585",
  padding: "5px 10px",
  borderRadius: 4,
  color: "#868585"
};
const ListInputButtonStyle = {
  background: "none",
  border: "1px solid #868585",
  padding: "5px 10px",
  borderRadius: 4,
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  borderLeft: "none",
  color: "#868585"
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: this.props.ListInputValue
    };
  }
  render() {
    const { props } = this;
    return (
      <div style={ListStyle}>
        <h6>{props.data.listName}</h6>
        <div>
          {props.data.todos.map((listItem) => (
            <ListItem
              data={listItem}
              key={listItem.id}
              parentId={props.data.id}
              onTodoToDone={props.onTodoToDone}
              onDelete={props.onDelete}
            />
          ))}
        </div>
        <div>
          <input
            style={inputStyle}
            onChange={(e) => this.setState({ inputValue: e.target.value })}
            placeholder="add todo"
            onFocus={(e) => (e.target.value = "")}
            onBlur={(e) => (e.target.value = "")}
          />
          <button
            style={ListInputButtonStyle}
            onClick={() => {
              props.onAddTodo(props.data.id, this.state.inputValue);
            }}
          >
            Add Todo
          </button>
        </div>
        <div style={buttonsContainerStyle}>
          <span>Filters : </span>
          <button
            style={ListButtonStyle}
            onClick={() => this.props.onFilterAll(this.props.data.id)}
          >
            All
          </button>
          <button
            style={ListButtonStyle}
            onClick={() => this.props.onFilterCompleted(this.props.data.id)}
          >
            Complete
          </button>
          <button
            style={ListButtonStyle}
            onClick={() => this.props.onFilterNotCompleted(this.props.data.id)}
          >
            Not Complete
          </button>
          <button
            style={ListButtonStyle}
            onClick={() => this.props.onFilterDeleted(this.props.data.id)}
          >
            Deleted
          </button>
          <button
            style={ListButtonStyle}
            onClick={() => this.props.onFilterReset(this.props.data.id)}
          >
            Reset
          </button>
        </div>
      </div>
    );
  }
}

export default List;
