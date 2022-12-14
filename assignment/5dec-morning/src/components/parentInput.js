import React, { useState } from "react";
import InputForm from "./inputform";
import List from "./list";

const ParentForm = () => {
  const [data, setData] = useState([]);
  let update = (item) => {
    if (item) {
      setData((c) => [...c, item]);
    }
  };

  return (
    <div>
      <InputForm parentBag={update} />
      <List arr={data}/>
    </div>
  );
};

export default ParentForm;
