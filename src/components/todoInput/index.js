import React, { useState } from "react";

function TodoInput() {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);

  function handleClick() {
    setInputList([
      ...inputList,
      { title: inputText },
    ]);
    setInputText('')
  }
  console.log(inputList)
  return (
    <div className="input-container">
      <input
        type="text"
        className="input-text"
        placeholder="Input your todo"
        onChange={(e) => {
          setInputText(e.target.value);
          console.log(e.target.value);
        }}
      ></input>
      <button className="add-button" onClick={handleClick} >
        +
      </button>
      {inputList?.map((inputList) => (
        <div key={inputList.title}>
            {inputList.title}
        </div>
      ))}
    </div>
  );
}

export default TodoInput;
