import React from 'react'
import Ingredient from './Ingredient'

export default function IngredientList(props) {
    const ingredientElement=props.ingredients.map((ingr=> {
        return <Ingredient key={ingr.id} {...ingr} />
    }))
  return (
    <>
        {ingredientElement}
    </>
  )
}
