import { useState } from "react";
function ShowRecipes({index, image, label, url, cuisineType, ingredients, people}){

    const [toggle, setToggle] = useState(false);

    return(
        <div key={index} className="recipeInfo">
            <div className="recipeAbout">
                <a href={url}> 
                    <h2>{label}</h2>
                </a>
                <p>Cuisine: {cuisineType} </p>
                <p>Would serve {people} people</p>
                <button onClick={()=>setToggle(!toggle)}>{toggle ? "Hide ingredients" : "Show ingredients"}</button>
                {toggle &&(
                    <ul>
                        {ingredients.map((ingredient)=>(
                            <li>{ingredient}</li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="photo">
                <a href={url}> 
                    <img src={image} alt="dessert" />
                </a>
            </div>
        </div>
    )
}
export default ShowRecipes;