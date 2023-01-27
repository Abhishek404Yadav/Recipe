import React,{useContext} from 'react'
import RecipeIngredientEdit from './RecipeIngredientEdit'
import { recipeContext } from './App'

export default function RecipeEdit({recipe}) {
    const {handleRecipeChange}= useContext(recipeContext);

    function handelChange(changes){
        handleRecipeChange(recipe.id,{...recipe, ...changes})
    }

    function handleIngredientChange(id ,ingredient){
        const newIngredients = [...recipe.ingredients]
        const index =newIngredients.findIndex(i=>i.id === id)  
        newIngredients[index] = ingredient;
        handelChange({ingredients: newIngredients});

    }
  return (
    <div className='recipe-edit'>
        <div className='recipe-edit__remove-btn-container'>
            <button className=' btn recipe-edit__remove-btn'>&times;</button>
        </div>
        <div className='recipe-edit__details-grid'>
            {/* htmlFor is used to make the label clickable */}
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
            onInput={e=>handelChange({name: e.target.value})}
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
            onInput={e=>handelChange({cooktime: e.target.value})}
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
            onInput={e=>handelChange({servings: parseInt(e.target.value)|| ""})}
            className='recipe-edit__input'/>

            <label 
            htmlFor='instructions'
            className='recipe-edit__label'>
            Instructions
            </label>

            <textarea 
            name='instructions' 
            id='instructions' 
            value={recipe.instructions}
            onInput={e=>handelChange({instructions: e.target.value})}
            className='recipe-edit__input'/>

        </div>
        <br/>
            <label className='recipe-edit__label'>Ingredients</label>
        <div className='recipe-edit__inredients-grid'>
            <div>Name</div>
            <div>Amount</div>
            <div></div>
            {recipe.ingredients.map(ingredient=>{
                return <RecipeIngredientEdit handleIngredientChange={handleIngredientChange} key={ingredient.id} ingredient={ingredient}/>
            })}   
        </div>
        <div className='btn-recipe-list__container'>
            <button className=' recipe-edit__btn btn--primary '>Add Ingredient</button>
        </div>
    </div>
  )
}
