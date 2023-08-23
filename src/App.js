import { useEffect, useState } from 'react';
import './App.css';
import Container from './container';
import ShowRecipes from './showRecipes';
import VideoBG from './videoBG';

function App() {

const My_ID = "b9a5c076";
const My_Key = "bdbba1a4994220e08fa4735c5c484ce5";

const [input, setInput] = useState("");
const [recipe, setRecipe] = useState([]);
const [typeWord, setTypeWord] = useState("chocolate");

useEffect(()=>{
  const getDessert = async ()=> {
    const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${typeWord}&app_id=${My_ID}&app_key=${My_Key}&dishType=Desserts`);
    const data = await response.json();
    setRecipe(data.hits)
  }
  getDessert()
}, [typeWord])


  return (
    <div className="App">
      <VideoBG/>
      <Container inputInfo = {input} setInputInfo = {setInput} searchInfo = {setTypeWord}/>
    <div className="container">
      {recipe.map((element, index )=>(
        <ShowRecipes key={index}
          image = {element.recipe.image}
          label = {element.recipe.label}
          url = {element.recipe.url}
          cuisineType = {element.recipe.cuisineType}
          ingredients = {element.recipe.ingredientLines}
          people = {element.recipe.yield}
        />
      ))}
      </div>
    </div>
  );
}

export default App;
