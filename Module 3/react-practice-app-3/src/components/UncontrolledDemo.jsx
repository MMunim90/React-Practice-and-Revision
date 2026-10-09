import React from "react";

const UncontrolledDemo = () => {
  const handleSubmit = () => {
    const value = document.getElementById("inputText").value;
    console.log(value);
  };

  return (
    <div>
      <input id="inputText" type="text" />
      <button onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default UncontrolledDemo;
