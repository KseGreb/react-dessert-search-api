import {useState } from 'react';

function Container({searchInfo}){

    const [input, setInput] = useState("");

const typeYourDrink = (e) =>{
    setInput(e.target.value)
    }

const finalSearch = (e)=>{
    e.preventDefault();
    searchInfo(input)
}

    return(
        <div className="container">

        <form onSubmit={finalSearch}>
            <input onChange={typeYourDrink} value={input} placeholder="Type your dessert..."></input>
        </form>

        <button onClick={finalSearch}>Search</button>

        </div>
    )
}
export default Container;