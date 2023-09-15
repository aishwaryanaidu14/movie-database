import React from "react"
//import user from "./Username"

export default function LoginPage(props){
   // user("bobrow")
    return(
        <div className="Login">
            <h1>Login to Movie Database</h1>
            <input
            type="text" 
            placeholder="Enter username"
            />
            <a href='/App'><button>Login</button></a>
        </div>
    )
}