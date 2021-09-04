import React, { useEffect } from "react";
import { connect } from "react-redux";
const NewTodoFormTwo = require("./NewTodoForm2");
const TodoListItem = require("./TodoListItem");
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompetedRequest,
} from "./thunks";
import {
  getTodos,
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from "./selectors";
import "./TodoList.css";

function TodoList({
  completeTodos,
  incompleteTodos,
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
      <h3>Incomplete:</h3>
      {incompleteTodos.map((todo) => (
        <TodoListItem
          todo={todo}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3>Completed:</h3>
      {completeTodos.map((todo) => (
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
  isLoading: getTodosLoading(state),
  completeTodos: getCompleteTodos(state),
  incompleteTodos: getIncompleteTodos(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompetedRequest(id)),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(TodoList);
