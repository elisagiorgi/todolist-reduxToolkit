import React, { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Checkbox } from "antd";
import DataEntry from "./DataEntry";
import "antd/dist/antd.css";

import "./todo.css";

const Todo = (props) => {
  const { element, updateTodo, removeToDo } = props;
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(element.value);
  const [complete, setComplete] = useState(element.done || false);

  const editElement = () => {
    setEdit(!edit);
  };

  const removeElement = (evt) => {
    removeToDo(element.id);
  };

  const editOnChange = (evt) => {
    setEditValue(evt);
  };

  const editSubmit = () => {
    if (editValue) {
      editElement();
      updateTodo(element.id, editValue);
    }
  };

  return (
    <div id={element.id} className="todoContainer">
      {edit ? (
        <DataEntry
          inputValue={editValue}
          onChangeInput={editOnChange}
          onPressEnterInput={editSubmit}
          onClickButton={editSubmit}
          buttonText="Edit"
        />
      ) : (
        <React.Fragment>
          <Checkbox
            className="green"
            checked={complete}
            onChange={() => setComplete(!complete)}
          />
          <p className={complete ? "textTodo completedTodo" : "textTodo"}>
            {element.value}
          </p>
          <div className="iconContainer" onClick={() => editElement()}>
            <div className="icon">
              <FontAwesomeIcon
                icon={faPen}
                style={{ fontSize: "20px", color: "#597ef7", margin: "0 auto" }}
              />
            </div>
            <div className="icon" onClick={() => removeElement()}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{ fontSize: "20px", color: "#ff4d4f", margin: "0 auto" }}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Todo;
