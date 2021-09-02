const React = require("react");
import "./TodoListItem.css";

function TodoListItem(props) {
  let { todoItem } = props;
  let todo = todoItem.map(function (text) {
    return (
      <a>
        {text}
        <br />
      </a>
    );
  });

  return (
    <div className="todo-item-container">
      {todo}
      <div className="buttons-container">
        <button className="completed-button">Mark As Completed</button>
        <button className="remove-button">Remove</button>
      </div>
    </div>
  );
}

module.exports = TodoListItem;
