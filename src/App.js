import React, { Component } from "react";
// import Counter from "./Counter";
// import Dropdown from "./Dropdown";
// import ColorPicker from "./ColorPicker";
import ToDoList from "./components/ToDoList";
import initialTodos from "./todos.json";

// const colorPickerOptions = [
//   { label: "red", color: "#F44336" },
//   { label: "green", color: "#4CAF50" },
//   { label: "blue", color: "#2196F3" },
//   { label: "grey", color: "#607D8B" },
//   { label: "pink", color: "#E91E63" },
//   { label: "indigo", color: "#3F51B5" },
// ];

class App extends Component {
  state = {
    todos: initialTodos,
  };

  // фильтрация массива: элемент, id которого совпадает
  deleteTodo = (todoId) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todoId.id !== todoId),
    }));
  };

  render() {
    const { todos } = this.state;

    const totalTodoCount = todos.length;
    // главенствующая функция в реакте, когда необходимо что-то посчитать
    const completedTodoCount = todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );

    console.log(completedTodoCount);

    return (
      <>
        <h1>State of Component</h1>

        {/* <Counter initialValue={10} />

        <Dropdown />

        <ColorPicker options={colorPickerOptions} /> */}

        <ToDoList todos={todos} onDeleteTodo={this.deleteTodo} />

        <div>
          <p>All: {totalTodoCount}</p>
          <p>Completed: {completedTodoCount}</p>
        </div>
      </>
    );
  }
}

export default App;
