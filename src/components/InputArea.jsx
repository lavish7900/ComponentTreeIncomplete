import React from "react";

function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.change} type="text" value={props.value} />
      <button onClick={props.add}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
