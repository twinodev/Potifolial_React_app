function Project(props){
    return(
        <div className="project">
            <img src={props.cover} alt={props.name}></img>
            <div className="details">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <a href={props.live}>Live Demo</a>
            <a href={props.git}>Github</a>
            </div>
        </div>
    );
}
export default  Project