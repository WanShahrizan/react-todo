import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
const NewTodoFormTwo = require("./NewTodoForm2");
const TodoListItem = require("./TodoListItem");
import {
  loadTodos,
  removeTodoRequest,
  markTodoAsCompetedRequest,
} from "./thunks";
import {
  getTodosLoading,
  getCompleteTodos,
  getIncompleteTodos,
} from "./selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

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
    <ListWrapper>
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
    </ListWrapper>
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
