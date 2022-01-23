import React from "react";
import "./App.css";
import TodoForm from "./compnents/TodoForm";
import TodoList from "./compnents/TodoList";

function App() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default App;