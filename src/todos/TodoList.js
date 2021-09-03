const React = require("react");
const NewTodoFormTwo = require("./NewTodoForm2");
const TodoListItem = require("./TodoListItem");

import "./TodoList.css";

function TodoList({ todos = [{ text: "Hello" }] }) {
  return (
    <div className="list-wrapper">
      <NewTodoFormTwo />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
}

// {todos.map(function (todo) {
//     <TodoListItem todo={todo} />;
//   })}

module.exports = TodoList;
