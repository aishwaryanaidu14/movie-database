import React from "react"

export default function Card(props){
    const styles={
        display: "flex",
        margin: "0.5rem 0",
        justifyContent: "left",
        padding: "0rem",
        paddingLeft: "0rem",
    }

    let [showButtons, toggleShowButtons]=React.useState(false)

    function handleMouseEnter(){
        toggleShowButtons(true)
    }

    function handleMouseLeave(){
        toggleShowButtons(false)
    }
    
    return(
        <div class="movie-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <img src={props.image} alt="Movie poster"/>
            <div className="text-area">
            <h2>{props.name}</h2>
            <p>Date added: {props.date}</p>
            <p>Time added: {props.time}</p>
            <div style={styles}>
            <h3 className="card-button" onClick={props.handleUpdate} id={props.keyy} name={props.name} image={props.image}>{showButtons?"Update":""}</h3>
            <h3 className="card-button" onClick={props.handleDelete} id={props.keyy}>{showButtons?"Delete":""}</h3>
            </div>
            <span></span>
            </div>
        </div>
    )
}