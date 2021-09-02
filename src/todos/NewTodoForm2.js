import React, { useState } from "react";

import "./NewTodoForm.css";

function NewTodoFormTwo() {
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
      <button className="new-todo-button">Create Todo</button>
    </div>
  );
}

module.exports = NewTodoFormTwo;
