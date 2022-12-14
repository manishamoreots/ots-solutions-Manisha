import React from "react";

const List = ({ arr }) => {
  return (
    <div style={{ color: "green", width: 100 }}>
      {arr.map((i) => (
        <li>{i}</li>
      ))}
    </div>
  );
};

export default List;
