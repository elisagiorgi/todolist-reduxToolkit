import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import DataEntry from "./DataEntry";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { selectCount } from "./features/counter/counterSlice";

import Todo from "./Todo";
import "./styles.css";

const ToDoApp = () => {
  const [todoList, setTodoList] = useState([
    { id: uuid(), value: "Keep learning" },
    { id: uuid(), value: "Have a coffee" },
    { id: uuid(), value: "Climb a mountain", done: true },
    { id: uuid(), value: "Read a book" },
  ]);

  const count = useSelector(selectCount);

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
        <p className="title sub"> Completed: {count}</p>

        <div className="content">
          <DataEntry
            inputValue={inputValue}
            onChangeInput={handleChange}
            onPressEnterInput={inputChange}
            onClickButton={buttonChange}
            buttonText="Add"
          />

          {allTodo}
        </div>
      </div>
    </>
  );
};

export default ToDoApp;
