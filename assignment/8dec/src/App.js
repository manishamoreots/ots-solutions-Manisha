import "./App.css";
import React, { useState } from "react";
import Form from "./components/form";
import List from "./components/list";
import ShowDetails from "./components/showdetails";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [selectIndex, setSelectIndex] = useState(null);

  const addReceipe = (receipe) => {
    setRecipes([...recipes, receipe]);
  };

  const deleteRecipe = () => {
    setRecipes((recipes) =>
      recipes.filter((currentIteration, index) => index !== selectIndex)
    );
    setSelectIndex(null);
  };

  const editRecipe = (index) => {
    setUpdateIndex(index);
  };

  const updateRecipe = (index, modifiedRecipe) => {
    recipes.splice(index, 1, modifiedRecipe);
    setRecipes([...recipes]);
  };

  const selectRecipe = (index) => {
    setSelectIndex(index);
  };

  console.log(recipes);
  return (
    <div className="App">
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            paddingTop: "50px",
          }}
        >
          <div
            style={{
              border: "2px solid grey",
              width: "550px",
              height: "450px",
            }}
          >
            <Form
              addReceipe={addReceipe}
              deleteRecipe={deleteRecipe}
              updateRecipe={updateRecipe}
              updatedDetails={recipes[updateIndex]}
            />
            <List
              recipes={recipes}
              selectRecipe={selectRecipe}
              deleteRecipe={deleteRecipe}
              editRecipe={editRecipe}
            />
          </div>
          <div style={{ float: "right" }}>
            <ShowDetails details={recipes[selectIndex]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
