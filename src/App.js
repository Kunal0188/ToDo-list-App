import React, { useState } from "react";
import "./App.css";
import ToDoInput from "./component/ToDoInput";
import ToDolist from "./component/ToDoList";


function App() {
  const [listToDo, setListToDo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      setListToDo([...listToDo, inputText]);
    }
  }

  let removeList = (key) => {
    let newList = [...listToDo];
    newList.splice(key, 1);
    setListToDo([...newList]);
  }

  return (
    <div className={`App`}>
      <div className="container">
        <h1 className="Heading"> ToDo list </h1>
        <ToDoInput addList={addList} />
        {listToDo.map((listItem, i) => {
          return (
            <ToDolist key={i} index={i} item={listItem} removeList={removeList} />
          )
        })}
      </div>
    </div>
  );
}

export default App;

