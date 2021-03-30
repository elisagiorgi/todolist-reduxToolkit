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
    buttonText
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
          backgroundColor: "#a0d911",
          color: "black",
          border: "1px #a0d911"
        }}
        onClick={() => onClickButton()}
      >
        <p style={{ fontSize: "20px" }}>{buttonText}</p>
      </Button>
    </div>
  );
};

export default DataEntry;
