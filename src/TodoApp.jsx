import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import DataEntry from "./DataEntry";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { selectCount } from "./features/counter/counterSlice";
import {
  selectTodo,
  addToDo,
  editToDo,
  removeToDo,
} from "./features/todos/todoSlice";
import { useDispatch } from "react-redux";

import Todo from "./Todo";
import "./styles.css";

const ToDoApp = () => {
  const count = useSelector(selectCount);
  const todoList = useSelector(selectTodo);

  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const inputChange = (e) => {
    if (e) {
      const el = { id: uuid(), value: e };
      dispatch(addToDo(el));
      setInputValue("");
    }
  };

  const buttonChange = () => {
    if (inputValue) {
      const el = { id: uuid(), value: inputValue };
      dispatch(addToDo(el));
      setInputValue("");
    }
  };
  const handleChange = (evt) => {
    setInputValue(evt);
  };

  const updateTodo = (id, value) => {
    dispatch(editToDo({ id: id, value: value }));
  };

  const allTodo = todoList.map((el) => {
    return (
      <Todo
        key={"todo_" + el.id}
        element={el}
        updateTodo={updateTodo}
        removeToDo={(id) => dispatch(removeToDo(id))}
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
