const React = require("react");
import { connect } from "react-redux";
const NewTodoFormTwo = require("./NewTodoForm2");
const TodoListItem = require("./TodoListItem");
import { removeTodo, markTodoAsCompleted } from "./actions";

import "./TodoList.css";

function TodoList({ todos = [], onRemovePressed, onCompletedPressed }) {
  return (
    <div className="list-wrapper">
      <NewTodoFormTwo />
      {todos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(TodoList);
