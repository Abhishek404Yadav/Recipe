import React from "react";
import Recipe from "./Recipe";
import { recipeContext } from "./App";

export default function RecipeList({recipes}) {
  const {handleRecipeAdd}=React.useContext(recipeContext);
  return (
    <div className="recipe-list">
    <div>
      {recipes.map((recipe) => {
        return <Recipe key={recipe.id} {...recipe} />
      })}
    </div>
    <div className="btn__recipe-list">
    <button onClick={handleRecipeAdd} className="btn btn--primary">Add Recipe</button>
    </div>
    </div>
  );
}
