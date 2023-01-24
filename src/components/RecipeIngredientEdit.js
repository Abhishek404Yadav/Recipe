import React from 'react'

export default function RecipeIngredientEdit({ingredient}) {
  return (
      <>
        <input className='recipe-edit__input' type="text" value={ingredient.name}/>
        <input className='recipe-edit__input' type="text" value={ingredient.quantity}/>
        <button className='recipe-edit__btn btn--danger'>&times;</button>
    </>
  )
}
