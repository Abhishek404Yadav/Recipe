import RecipeList from './RecipeList';
import React from 'react';
import "../css/app.css";

function App() {
  return (
    <div className="App">
      <RecipeList recipes={sampleRecipe}/>
    </div>
  );
}
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
