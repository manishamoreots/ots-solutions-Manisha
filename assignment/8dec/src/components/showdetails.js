import React from "react";

const ShowDetails = ({ details }) => {
  return (
    <>
      <div style={{border:"2px solid crimson",width:"300px",height:"250px"}}>
        <h2>Recipe Description</h2>
        <div>
          <p>Recipe Name :  {details?.recipe}</p>
          <p>Cheif Name :   {details?.chef}</p>
          <p>Instruction :  {details?.instruction}</p>
        </div>
      </div>
    </>
  );
};

export default ShowDetails;
