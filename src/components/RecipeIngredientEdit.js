import React from 'react'

export default function RecipeIngredientEdit({ingredient,handleIngredientChange}) {

  return (
      <>
        <input className='recipe-edit__input' type="text"
        value={ingredient.name}
        onInput={(e)=>handleIngredientChange(ingredient.id,{...ingredient,name:e.target.value})}
        />
        <input className='recipe-edit__input' 
        type="text" value={ingredient.quantity}
        onInput={(e)=>handleIngredientChange(ingredient.id,{...ingredient,quantity:e.target.value})}
        />
        <button className='recipe-edit__btn btn--danger'>&times;</button>
    </>
  )
}
