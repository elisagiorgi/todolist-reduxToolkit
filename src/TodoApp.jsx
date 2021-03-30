import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuid } from "uuid";
import DataEntry from "./DataEntry";
import "antd/dist/antd.css";

import Todo from "./Todo";
import "./styles.css";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([
    { id: uuid(), value: "Keep learning" },
    { id: uuid(), value: "Have a coffee" },
    { id: uuid(), value: "Climb a mountain", done: true },
    { id: uuid(), value: "Read a book" },
  ]);

  const [hiddenAdd, setHiddenAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const inputChange = (e) => {
    if (e) {
      const el = { id: uuid(), value: e };
      setTodoList([...todoList, el]);
      setInputValue("");
    }
  };

  const buttonChange = () => {
    if (inputValue) {
      const el = { id: uuid(), value: inputValue };
      setTodoList([...todoList, el]);
      setInputValue("");
    }
  };
  const handleChange = (evt) => {
    setInputValue(evt);
  };

  const updateTodo = (id, value) => {
    const editedList = todoList.map((el) => {
      el = el.id === id ? { ...el, value: value } : { ...el };
      return el;
    });
    setTodoList(editedList);
  };

  const removeToDo = (id) => {
    const editedList = todoList.filter((el) => el.id !== id);
    setTodoList(editedList);
  };

  const allTodo = todoList.map((el) => {
    return (
      <Todo
        key={"todo_" + el.id}
        element={el}
        updateTodo={updateTodo}
        removeToDo={removeToDo}
      />
    );
  });

  return (
    <>
      <div className="container">
        <p className="title">To do List</p>

        <div className="content">
          <div
            className={!hiddenAdd ? "addButton" : "addButton red"}
            onClick={() => setHiddenAdd(!hiddenAdd)}
          >
            <FontAwesomeIcon
              icon={!hiddenAdd ? faPlus : faTimes}
              style={{ fontSize: "20px", color: "white", margin: "0 auto" }}
            />
          </div>
          {hiddenAdd && (
            <DataEntry
              inputValue={inputValue}
              onChangeInput={handleChange}
              onPressEnterInput={inputChange}
              onClickButton={buttonChange}
              buttonText="Add"
            />
          )}
          {allTodo}
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
