import React from "react";
import IngredientList from "./IngredientList";

export default function Recipe(props) {
 const {name,servings,cooktime,instructions ,ingredients}=props;
  return (
    <div className="recipe">
      <div className="recipe__header">
        <h3 className="recipe__title">{name}</h3>
        <div>
          <button className="btn btn--primary mr-1">Edit</button>
          <button className="btn btn--danger mr-1">Delete</button>
        </div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label -mr-1">Cook Time: </span>
        <span className="recipe__value">{cooktime}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label -mr-1">Servings: </span>
        <span className="recipe__value">{servings}</span>
      </div>
      <div className="recipe__row">
        <span className="recipe__label -mr-1">Instruction: </span>
        <div className="recipe__value indented instruction">{instructions}</div>
      </div>
      <div className="recipe__row">
        <span className="recipe__label -mr-1">Ingredients :</span>
          <div className="recipe__value indented ingredient--grid">
          <IngredientList ingredients={ingredients}/>
          </div>
      </div>
    </div>
  );
}
