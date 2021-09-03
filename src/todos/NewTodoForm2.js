import React, { useState } from "react";
import { connect } from "react-redux";
import { createTodo } from "./actions";

import "./NewTodoForm.css";

function NewTodoFormTwo({ todos, onCreatePressed }) {
  const [inputValue, setInputValue] = useState("");

  function updateInput(event) {
    setInputValue(event.target.value);
  }

  return (
    <div className="new-todo-form">
      <input
        className="new-todo-input"
        type="text"
        placeholder="Type your new to do here"
        value={inputValue}
        onChange={updateInput}
      />
      <button
        onClick={() => {
          const isDuplicateText = todos.some(
            (todo) => todo.text === inputValue
          );
          if (!isDuplicateText) {
            onCreatePressed(inputValue);
            setInputValue("");
          }
        }}
        className="new-todo-button"
      >
        Create Todo
      </button>
    </div>
  );
}

//Object represent entire redux state (take the state object)
const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(createTodo(text)),
});

module.exports = connect(mapStateToProps, mapDispatchToProps)(NewTodoFormTwo);
