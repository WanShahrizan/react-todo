const React = require("react");
const NewTodoFormTwo = require("./NewTodoForm2");
const TodoListItem = require("./TodoListItem");

import "./TodoList.css";

function TodoList() {
  let todoItem = ["Study", "Sleep", "Play", "Eat"];
  return (
    <div className="list-wrapper">
      <NewTodoFormTwo />
      <TodoListItem todoItem={todoItem} />
    </div>
  );
}

// {todos.map(function (todo) {
//     <TodoListItem todo={todo} />;
//   })}

module.exports = TodoList;
