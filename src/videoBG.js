import video from "./food.mp4"

function VideoBG(){
    return(
        <div className="container">
        <div className="videoBg">
            <h1>Got a sweet tooth?</h1>
             <video src={video} loop muted autoPlay/>
        </div>
        </div>
    )
}
export default VideoBG;