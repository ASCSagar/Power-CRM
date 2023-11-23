import React from "react";

function InputBox(props) {
  const inputChangeHandler = function (e) {
    props.onChange({ type: props.reducerName, value: e.target.value });
  };
  return (
      <input
        type={props.type}
        className="form-control"
        required={props.required ? true : false}
        onChange={inputChangeHandler}
        value={props.value}
      />
  );
}

export default InputBox;