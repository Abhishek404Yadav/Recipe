import RecipeList from './RecipeList';
import React,{useState,useEffect} from 'react';
import {  v4 as uuidv4 } from 'uuid';
import "../css/app.css";

 export const recipeContext=React.createContext();
 const LOCAL_STORAGE_KEY= "cooking.App.recipe";

function App() {
  const [recipe,setRecipe]=useState(sampleRecipe);

  useEffect(()=>{
    const localrecipe=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(localrecipe !== null) 
    setRecipe(localrecipe)
  },[])
  
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipe))
  },[recipe])
  
  const recipeContextValue ={
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeDelete(id){
    setRecipe(recipe.filter(recipe=> recipe.id !== id))
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
    setRecipe([...recipe,newRecipe])
  }

  return (
    <recipeContext.Provider value={recipeContextValue}>
    <div className="App">
      <RecipeList recipes={recipe}/>
    </div>
    </recipeContext.Provider>
  );
}
// Array of Objects for recipe
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
