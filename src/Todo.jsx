import React, { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import DataEntry from "./DataEntry";
import "antd/dist/antd.css";
import { useDispatch } from "react-redux";
import "./todo.css";
import { decrement, increment } from "./features/counter/counterSlice";

const Todo = React.memo((props) => {
  const { element, updateTodo, removeToDo } = props;
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(element.value);
  const [complete, setComplete] = useState(element.done || false);
  const dispatch = useDispatch();

  const editElement = () => {
    setEdit(!edit);
  };

  const removeElement = (evt) => {
    removeToDo(element.id);
    if (complete) {
      dispatch(decrement());
    }
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

  useEffect(() => {
    if (complete) {
      dispatch(increment());
    }
  }, [complete, dispatch]);

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
          <input
            type="checkbox"
            className="customizedCheck"
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
                style={{
                  fontSize: "20px",
                  color: "cornflowerblue",
                  margin: "0 auto",
                }}
              />
            </div>
            <div className="icon" onClick={() => removeElement()}>
              <FontAwesomeIcon
                icon={faTrash}
                style={{
                  fontSize: "20px",
                  color: "cornflowerblue",
                  margin: "0 auto",
                }}
              />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
});

export default Todo;
