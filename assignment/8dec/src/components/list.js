import React, { useState } from "react";

const List = ({ recipes, selectRecipe, deleteRecipe ,editRecipe}) => {

 
  return (
    <div>
      <h2>Recipe Details</h2>
      <ul className="list">
        {recipes.map((item, index) => (
          <li
            style={{ listStyleType: "none" }}
            key={index}
            onClick={() => selectRecipe(index)}
          >
            <p>
              {item.recipe}{" "}
              <button
                style={{
                  backgroundColor: "blue",
                  height: "30px",
                  width: "50px",
                  borderRadius: "5px",
                  color: "white",
                  margin: "5px",
                }}
                onClick={()=>editRecipe(index)} 
              >
                Edit
              </button>
              <button
                style={{
                  backgroundColor: "red",
                  height: "30px",
                  width: "50px",
                  borderRadius: "5px",
                  color: "white",
                }}
                onClick={()=>deleteRecipe()}
              >
                Delete
              </button>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default List;
