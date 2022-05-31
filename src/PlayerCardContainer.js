import React from "react"
import PlayerCard from "./PlayerCard"
import { NavLink, Link } from 'react-router-dom'

function PlayerCardContainer({athletes, removeFromContainer}){
    return(
        <main>
            <ul className="cards">
               {
                athletes.map(items => (
                    <PlayerCard items = {items} removeFromContainer={removeFromContainer} />)
                )
               }   
            </ul> 
            <NavLink className="middleButton" id="middleBack"  exact to ="/" >
                    Rename
            </NavLink>
            <NavLink className="middleButton" id="middleDone"exact to ="/score" >
                    Ready to Play
            </NavLink>
        </main>
)
}

export default PlayerCardContainer