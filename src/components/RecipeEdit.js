import React from 'react'
import Ingredient from './Ingredient'
import RecipeIngredientEdit from './RecipeIngredientEdit'

export default function RecipeEdit({recipe}) {
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-btn-container'>
            <button className=' btn recipe-edit__remove-btn'>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
            {/* html for is used to make the label clickable */}
            <label 
            htmlFor='name'
            className="recipe-edit__label">
            Name
            </label> 
            <input
            type='text'
            name="name" 
            id='name'
            value={recipe.name}
            className='recipe-edit__input'/>

            <label 
            htmlFor='cookTime'
            className='recipe-edit__label'>
            Cook Time
            </label>
            <input 
            type="text" 
            name='cookTime' 
            id='cookTime' 
            value={recipe.cooktime}
            className='recipe-edit__input'/>

            <label 
            htmlFor='servings'
            className='recipe-edit__label'>
            Servings
            </label>
            <input 
            type="number"
            name="servings" 
            id='servings' 
            value={recipe.servings}
            className='recipe-edit__input'/>

            <label 
            htmlFor='instructions'
            className='recipe-edit__label'>
            Instructions
            </label>

            <textarea 
            name='instructions' 
            id='instructions' 
            className='recipe-edit__input'>{recipe.instructions}</textarea>

        </div>
        <br/>
            <label className='recipe-edit__label'>Ingredients</label>
        <div className='recipe-edit__inredients-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient=>{
                return <RecipeIngredientEdit key={ingredient.id} ingredient={ingredient}/>
            })}   
        </div>
        <div className='btn-recipe-list__container'>
            <button className=' recipe-edit__btn btn--primary '>Add Ingredient</button>
        </div>
    </div>
  )
}
