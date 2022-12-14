import React, { useState } from "react";

const InputForm = ({ parentBag }) => {
  const [input, setInput] = useState(" ");
  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} />
      <button
        onClick={() => {
          parentBag(input);
        //   setInput("");
        }}
      >
        AddMe
      </button>
    </div>
  );
};

export default InputForm;
