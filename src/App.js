import React, { Component } from "react";
import "./App.css";
import List from "./components/Lits";
import Hello from "./components/Hello";
const AddListButtonStyle = {
  background: "none",
  border: "1px solid #868585",
  padding: "5px 10px",
  borderRadius: 4,
  color: "white"
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
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "Basel",
      ListInputValue: "",
      listNameValue: "No Name",
      id: 1,
      Lists: [
        {
          listName: "TO DO LIST",
          id: "list-0",
          todosId: 3,
          todos: [],
          history: [
            {
              id: "todo-0",
              content: "1",
              done: false,
              deleted: false
            },
            {
              id: "todo-1",
              content: "2",
              done: true,
              deleted: true
            },
            {
              id: "todo-2",
              content: "3",
              done: true,
              deleted: false
            }
          ]
        },
        {
          listName: "TO BUY LIST",
          id: "list-1",
          todosId: 1,
          todos: [],
          history: [
            {
              id: "todo-0",
              content: "1",
              done: false,
              deleted: false
            }
          ]
        }
      ]
    };
  }
  onTodoToDone = (toDoId, listId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.history.map((todo) => {
          if (todo.id === toDoId) {
            todo.done = !todo.done;
          }
          return todo;
        });
        list.todos = [...list.history].filter((list) => list.deleted !== true);
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  onAddTodo = (listId, value, THIS) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        let newId = "todo-" + list.todosId++;
        list.history.push({
          id: newId,
          content: value,
          done: false,
          deleted: false
        });
        list.todos = [...list.history].filter((list) => list.deleted !== true);
      }
      return list;
    });
    this.setState({
      ListInputValue: "",
      lists: newLists
    });
  };
  onDelete = (listId, toDoId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.history.map((todo) => {
          if (todo.id === toDoId) {
            todo.deleted = !todo.deleted;
          }
          return todo;
        });
        list.todos = [...list.history].filter((list) => list.deleted !== true);
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  onFilterDeleted = (listId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.todos = [...list.history].filter((list) => list.deleted === true);
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  onFilterCompleted = (listId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.todos = [...list.history].filter(
          (list) => list.done === true && list.deleted === false
        );
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  onFilterNotCompleted = (listId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.todos = [...list.history].filter(
          (list) => list.done === false && list.deleted === false
        );
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  onFilterAll = (listId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.todos = [...list.history];
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  onFilterReset = (listId) => {
    const newLists = [...this.state.Lists];
    newLists.map((list) => {
      if (list.id === listId) {
        list.todos = [...list.history].filter((list) => list.deleted !== true);
      }
      return list;
    });
    this.setState({
      lists: newLists
    });
  };
  addList = () => {
    console.log(this.state);
    let newId = this.state.id + 1;
    let newLists = this.state.Lists.slice();
    newLists.push({
      listName: this.state.listNameValue,
      id: "list-" + newId,
      todosId: 0,
      todos: [],
      history: []
    });
    this.setState({
      id: newId,
      Lists: [...newLists]
    });
  };
  componentDidMount() {
    const newLists = [...this.state.Lists];
    newLists.map(
      (list) =>
        (list.todos = [...list.history].filter((list) => list.deleted !== true))
    );
    this.setState({
      lists: newLists
    });
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Hello user={this.state.user} />
          <div>
            <input
              style={inputStyle}
              onChange={(e) => this.setState({ listNameValue: e.target.value })}
              value={this.state.listNameValue}
              placeholder="Add List"
            />
            <button style={ListInputButtonStyle} onClick={this.addList}>
              Add List
            </button>
          </div>
          <div className="Lists-holder">
            {this.state.Lists.map((list) => (
              <List
                data={list}
                key={list.id}
                onTodoToDone={this.onTodoToDone}
                onAddTodo={this.onAddTodo}
                onDelete={this.onDelete}
                ListInputValue={this.state.ListInputValue}
                onFilterDeleted={this.onFilterDeleted}
                onFilterCompleted={this.onFilterCompleted}
                onFilterNotCompleted={this.onFilterNotCompleted}
                onFilterAll={this.onFilterAll}
                onFilterReset={this.onFilterReset}
              />
            ))}
          </div>
        </header>
      </div>
    );
  }
}

export default App;
