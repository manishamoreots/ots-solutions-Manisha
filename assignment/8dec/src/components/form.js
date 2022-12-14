import React, { useState, useEffect } from "react";

const Form = ({ addReceipe, updateRecipe, updatedDetails }) => {
  const [details, setDetails] = useState({
    recipe: "",
    chef: "",
    instruction: "",
  });

  useEffect(() => {
    if (updatedDetails) {
      setDetails({
        recipe: updatedDetails.recipe,
        chef: updatedDetails.chef,
        instruction: updatedDetails.instruction,
      });
    }
  },[updatedDetails]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setDetails((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = () => {
    console.log(details);
    const { recipe, chef, instruction } = details;
    if (recipe && chef && instruction) {
      addReceipe({ recipe, chef, instruction });
      setDetails({ recipe: "", chef: "", instruction: "" });
    }
  };

  const handleUpdate=(index)=>{
const{recipe,chef,instruction}=details;
updateRecipe(index,{recipe,chef,instruction});
  }

  return (
    <div>
      <h2>Recipe Information</h2>
      <label>Receipe Name : </label>
      <input
        id="inputField"
        name="recipe"
        type="text"
        value={details.recipe}
        placeholder="Enter Recipe"
        onChange={handleChange}
      ></input>
      <br />
      <br />

      <label>Chef Name : </label>
      <input
        id="inputField"
        type="text"
        name="chef"
        value={details.chef}
        placeholder="Enter Chef"
        onChange={handleChange}
      ></input>
      <br />
      <br />
      <label>Instructions : </label>
      <input
        id="inputField"
        type="text"
        name="instruction"
        placeholder="Enter Instruction"
        onChange={handleChange}
      ></input>
      <br />
      <br />
      {
      updatedDetails?
        <button
          style={{
            backgroundColor: "Blue",
            height: "30px",
            width: "60px",
            borderRadius: "5px",
            color:"white"
          }}
          onClick={handleUpdate}
        >
          Update
        </button>:
        <button
        style={{
          backgroundColor: "lightGreen",
          height: "30px",
          width: "60px",
          borderRadius: "5px",
          color:"white"
        }}
        onClick={handleSubmit}
      >
        Add
      </button>
      }
    </div>
  );
};

export default Form;
