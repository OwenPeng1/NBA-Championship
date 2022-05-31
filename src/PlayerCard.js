import React from "react"

function PlayerCard({items, removeFromContainer}){

function handleClick(e){
    e.preventDefault()
    removeFromContainer(items)
}
    
    return (
        <li className="card">
            <div className="title">
                <h3>{items.name}</h3>
            </div>
            <div className="image">
                <img src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${items.id}.png`}/>
            </div>
            <div className="cardStats">
                <p>Points: {items.points}</p>
                <p>Assists: {items.assists}</p>
                <p>Rebounds: {items.rebounds}</p>
            </div>
            <button className="removeButton"
            onClick = {handleClick}
            >Remove</button>
        </li>
    )
}

export default PlayerCard