import RecipeList from './RecipeList';
import React,{useState,useEffect} from 'react';
import {  v4 as uuidv4 } from 'uuid';
import "../css/app.css";
import RecipeEdit from './RecipeEdit'

 export const recipeContext=React.createContext();
 const LOCAL_STORAGE_KEY= "cooking.App.recipes";

function App() {
  const [selectedRecipeId, setSelectedRecipeId ] =useState();
  const [recipes,setRecipes]=useState(sampleRecipe);
  const selectedRecipe = recipes.find(recipe=> recipe.id === selectedRecipeId);

  useEffect(()=>{
    const localrecipe=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(localrecipe !== null) 
    setRecipes(localrecipe)
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  },[recipes])
  
  const recipeContextValue ={
    handleRecipeEdit,
    handleRecipeDelete,
    handleRecipeAdd,
    handleRecipeChange
  }
  function handleRecipeChange(id,Recipe){
    const newRecipe =[...recipes]
    const index = newRecipe.findIndex(res=>res.id === id)
    newRecipe[index] = Recipe;
    setRecipes(newRecipe);
  }

  function handleRecipeEdit(id){
    setSelectedRecipeId(id)
  }

  function handleRecipeDelete(id){
    setRecipes(recipes.filter(recipe=> recipe.id !== id))
  }

  function handleRecipeAdd(){
    const newRecipe={
      id:uuidv4(),
      name: 'Name',
      cooktime: '1:00',
      servings: "1",
      instructions : "Add Instruction",
      ingredients :[
        {
          id :uuidv4(),
          name:"Ingredient 1",
          quantity:"none"
        },
        {
          id :uuidv4(),
          name:"Ingredint 2",
          quantity:"none"
        }
      ]
    }
    setRecipes([...recipes,newRecipe])
  }

  return (
    <recipeContext.Provider value={recipeContextValue}>
    <div className="App">
      <RecipeList recipes={recipes}/>
      {selectedRecipeId && <RecipeEdit recipe={selectedRecipe}/>}
    </div>
    </recipeContext.Provider>
  );
}
// Array of Objects for recipes
const sampleRecipe =[
  {
    id:1,
    name: 'Palak Paneer',
    cooktime: '2:45',
    servings: "4",
    instructions : "1. Put Salt On Paneer\n2. Put Paneer in Kadayi \n3. Eat The Paneer",
    ingredients :[
      {
        id :1,
        name:"Paneer",
        quantity:"500 gm"
      },
      {
        id :2,
        name:"Palak",
        quantity:"1 kg"
      }
    ]
  }
  ,
  {
    id:2,
    name: 'Plain Chicken',
    cooktime: '1:45',
    servings: "3",
    instructions: "1. Put Salt On Chicken\n2. Put Chicken in oven\n3. Eat The Chicken",
    ingredients :[
      {
        id :1,
        name:"Chicken",
        quantity:"1 kg"
      },
      {
        id :2,
        name:"Salt",
        quantity:"5 tbsp"
      }
    ]
  }
  
]
export default App;
