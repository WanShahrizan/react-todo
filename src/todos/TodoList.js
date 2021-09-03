import React, { useEffect } from "react";
import { connect } from "react-redux";
const NewTodoFormTwo = require("./NewTodoForm2");
const TodoListItem = require("./TodoListItem");
import { loadTodos } from "./thunks";
import { removeTodo, markTodoAsCompleted } from "./actions";
import { isLoading } from "./reducers";
import { displayAlert } from "./thunks";

import "./TodoList.css";

function TodoList({
  todos = [],
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading todos...</div>;
  const content = (
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
  return isLoading ? loadingMessage : content;
}

const mapStateToProps = (state) => ({
  isLoading: state.isLoading,
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markTodoAsCompleted(text)),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(TodoList);
