import React, { useState } from "react";
import "./todo.css";

function TodoInput() {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);
  const [isEdit, setIsEdit] = useState(true);
  const [id, setId] = useState("");

  function handleClick(evt) {
    evt.preventDefault();
    if (isEdit) {
      const id = Date.now();
      setInputList([...inputList, { id: id, title: inputText }]);
      setInputText("");
    } else {
      const todos = inputList.map((item) => {
        if (item.id === id) {
          return { ...item, title: inputText };
        }
        return item;
      });
      setInputList(todos);
      setInputText("");
    }
    setIsEdit(true);
  }

  function handleDeleteClick(id) {
    const removeItem = inputList.filter((inputList) => {
      return inputList.id !== id;
    });
    setInputList(removeItem);
  }

  function handleEditTodoChange(id, title) {
    setInputText(title);
    setIsEdit(false);
    setId(id);
  }

  console.log(inputList);

  return (
    <div className="input-container">
      <input
        type="text"
        className="input-text"
        placeholder="Input your todo"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <button className="add-button" onClick={(evt) => handleClick(evt)}>
        {isEdit ? "add" : "edit"}
      </button>
      {inputList?.map((inputList) => (
        <div key={inputList.title}>
          <p>{inputList.title}</p>
          {inputList.title.length > 0 && (
            <div key={inputList.title}>
              {" "}
              <button
                className="remove-list"
                onClick={() => handleDeleteClick(inputList.id)}
              >
                delete
              </button>
              <button
                className="edit-button"
                onClick={() =>
                  handleEditTodoChange(inputList.id, inputList.title)
                }
              >
                edit
              </button>{" "}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default TodoInput;
