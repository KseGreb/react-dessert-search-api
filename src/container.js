
function Container({inputInfo, setInputInfo, searchInfo}){

const typeYourDrink = (e) =>{
    setInputInfo(e.target.value)
    }

const finalSearch = (e)=>{
    e.preventDefault();
    searchInfo(inputInfo)
}

    return(
        <div className="container">

        <form onSubmit={finalSearch}>
            <input onChange={typeYourDrink} value={inputInfo} placeholder="Type your dessert..."></input>
        </form>

        <button onClick={finalSearch}>Search</button>

        </div>
    )
}
export default Container;
