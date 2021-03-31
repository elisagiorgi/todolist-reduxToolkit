import React from "react";

import { Input, Button } from "antd";
import "antd/dist/antd.css";

import "./styles.css";

const DataEntry = (props) => {
  const {
    inputValue,
    onChangeInput,
    onPressEnterInput,
    onClickButton,
    buttonText,
  } = props;

  return (
    <div className="inputStyle">
      <Input
        style={{ height: "40px", fontSize: "20px" }}
        placeholder="Write..."
        value={inputValue}
        onChange={(event) => onChangeInput(event.target.value)}
        onPressEnter={(event) => onPressEnterInput(event.target.value)}
      />
      <Button
        style={{
          height: "40px",
          marginLeft: "15px",
          backgroundColor: "#ffff",
          color: "black",
          border: "2px solid #f2a899",
        }}
        onClick={() => onClickButton()}
      >
        <p style={{ fontSize: "20px", color: "#f2a899" }}>{buttonText}</p>
      </Button>
    </div>
  );
};

export default DataEntry;
