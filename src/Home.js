import React from "react"
import { NavLink, Link } from 'react-router-dom'

function Home({title, setTitle}){

function handleSubmit(e){
    e.preventDefault()
    console.log(title)
}    
    return (
        <body>
            <h1 className="centerTitle">Make Your NBA Dream Team</h1>
            <h1 className="nameTitle">Name:{title}</h1>
            <form className="nameInputBar" onSubmit={handleSubmit}>
                <input 
                    type="text"
                    id="searchName"
                    placeholder="Input Your Team Name"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    />
                <NavLink class="nextButton" exact to ="/main" >
                    Next
                </NavLink>
                
            </form>
        
        </body>
      
    )
   
    }

    export default Home