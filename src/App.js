import "./App.css"
import React from "react"
import Header from "./Header"
import Genre from "./Genre.js"


export default function App(){
  return(
    <div>
      <Header username="aish"/>
      <Genre genre="Science fiction"/>
      <Genre genre="Biopic"/>
      <Genre genre="Action"/>
    </div>
  )
} 