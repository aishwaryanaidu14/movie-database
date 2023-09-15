import React from "react";
import Card from "./card.js"
import defimage from "./logo512.png"


export default function Genre(props){

    let [add, toggleAdd]=React.useState(false)
    let [updateMode,toggleUpdateMode]=React.useState(false)
    let [updateid, setUpdateid]=React.useState(-1)
    const styles={
        display: "flex",
        margin: "0",
        padding: '0',
    }
    

    let [cards, updateCards]=React.useState([{image:defimage, name:"Sample Movie", date:"15/09/2023", time:"19:27" ,handleDelete:handleDelete, handleUpdate:handleUpdate, keyy:1}])
    let showCards=cards.map(card=><Card image={card.image} name={card.name} date={card.date} time={card.time} handleDelete={card.handleDelete} handleUpdate={card.handleUpdate} keyy={card.keyy}/>)
    let [movieimage, updateMovieImage]=React.useState("")
    let [moviename, updateMovieName]=React.useState("")

    function isImage(url) {
        return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
      }

    function handleSubmit(event){
        const today=new Date()
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        console.log(month)
        console.log(year)
        console.log(date)
        if(!moviename){
            alert("Enter a name for the movie!")
            return
        }
        if(!updateMode&&!isImage(movieimage)){
            alert("Enter a valid image url!")
            return
        }
        if(updateMode){
            updateCards(old=>{
                for (let item of old){
                    const {name, keyy}=item
                    if(keyy==updateid){
                        console.log("hello")
                        item.name=moviename
                        if(movieimage){item.image=movieimage}
                    }
                }
                //event.preventDefault();
                /*console.log(cards);

               // axios.post('https://sheet.best/api/sheets/f7fe81a5-11fd-46f7-904d-2f7340a3cc2b', cards)
                .then(response => {
                console.log(response);
                })*/
                return old
            })
            toggleUpdateMode(false)
            toggleAdd(false)
            updateMovieImage("")
            updateMovieName("")
            console.log(cards);

              //  axios.post('https://sheet.best/api/sheets/f7fe81a5-11fd-46f7-904d-2f7340a3cc2b', cards)
             //   .then(response => {
             //   console.log(response);
             //   })
            return 
        }
        updateCards(old=>[{image:movieimage, name:moviename, date:`${date}/${month}/${year}`, time:`${today.getHours()}:${today.getMinutes()}`,handleDelete:handleDelete, handleUpdate:handleUpdate, keyy:[old.length+1] }, ...old])
        updateMovieImage("")
        updateMovieName("")
        toggleAdd(false)
    }

    function handleUrlChange(event){
        updateMovieImage(event.target.value)
    }
    function handleNameChange(event){
        updateMovieName(event.target.value)
    }

    function handleDelete(event){
        //console.log("clicked")
        const removeditem=event.target.id
        updateCards(old=>old.filter(item=>item.keyy!=removeditem))
        console.log(removeditem)
        /*console.log(cards[0].keyy===removeditem)
        console.log(cards[0].keyy==removeditem)
        console.log(cards[0].keyy)*/
    }

    function handleUpdate(event){
        toggleAdd(true)
        toggleUpdateMode(true)
        const itemkeyy=event.target.id
        setUpdateid(itemkeyy)
        const newitem=cards.filter(item=>{
            const {keyy}=item
            console.log(keyy)
            return keyy==itemkeyy})
        console.log(newitem)
       // updateMovieImage(newitem[0].image)
       // updateMovieName(newitem[0].name)
    }

    function handleCancel(event){
        updateMovieImage("")
        updateMovieName("")
        toggleUpdateMode(false)
        toggleAdd(false)
    }
    return(
        <div className="genre">
            <div className="genrehead">
                <>
                <h2>{props.genre}</h2>
                <h3 className="genre-button" onClick={()=>{cards.length>=4?alert("You cannot add more than 4 movies!"):toggleAdd(true);}}>Add</h3>
                </>
                {add && <div style={styles}>
                <input type="url" placeholder={updateMode?"Ignore if image same":"Image URL"} value={movieimage} onChange={handleUrlChange}/>
                <input type="text" placeholder={updateMode?"New Name":"Movie Name"} value={moviename} onChange={handleNameChange}/>
                <h3 className="genre-button" onClick={handleSubmit}>Submit</h3>
                <h3 className="genre-button" onClick={handleCancel}>Cancel</h3>
            </div>}
            </div>
            <div className="genre-cards">
            {showCards}
             </div>
        </div>
    )
}



