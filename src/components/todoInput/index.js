import React, { useState } from "react";

function TodoInput() {
  const [inputText, setInputText] = useState("");
  const [inputList, setInputList] = useState([]);
  const [isEdit, setIsEdit] = useState(true)

  function handleClick() {
    setInputList([...inputList, { title: inputText }]);
    setInputText("");
    setIsEdit(true)
  }

  function handleDeleteClick(title) {
    const removeItem = inputList.filter((inputList) => {
      return inputList.title !== title;
    });
    setInputList(removeItem)
  }

  function handleEditTodoChange(title){
    setInputText(title)
    setIsEdit(false)
    // setInputList(
    //   inputList.map((item)=>
    //     title === item.title?{...inputList, title:inputText}: inputList
    // )
    // )

    setInputList( inputList.map((item)=> { 
      if(title === item.title){
        return { ...item, title: inputText }
      }
      return item
    }))

    

    
    
  }

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
      <button className="add-button" onClick={()=>{handleClick()}}>
        {isEdit ? 'add' : "edit"}
      </button>
      {inputList?.map((inputList) => (
        <div key={inputList.title}><p>{inputList.title}</p>
        {inputList.title.length > 0 && <div key={inputList.title}> <button className="remove-list" onClick={()=>handleDeleteClick(inputList.title)}>
        delete
      </button>
      <button className="edit-button" onClick={()=>handleEditTodoChange(inputList.title)}>edit</button> </div>}
      </div>
      ))}
     
    </div>
  );
}

export default TodoInput;
