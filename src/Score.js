import React from "react"
import { NavLink, Link } from 'react-router-dom'

function Score({athletes, totals}){
let points = Math.round(totals('points'))
let assists = Math.round(totals('assists'))
let rebounds = Math.round(totals('rebounds'))

let image1 = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${athletes[0].id}.png`
let image2 = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${athletes[1].id}.png`
let image3 = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${athletes[2].id}.png`
let image4 = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${athletes[3].id}.png`
let image5 = `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${athletes[4].id}.png`

    return (
        <body>
            <span className="stats">Points: {points}</span>
            <span className="stats">Assists: {assists}</span>
            <span className="stats">Rebounds: {rebounds}</span>
            <span className="winning"> YOU WON A CHAMPIONSHIP!</span>
            <NavLink className="lastButton" id="startOver"exact to ="/" >
                    Start Over
            </NavLink>
            <NavLink classname="lastButton" id="backButton" exact to ="/main" >
                    Back
            </NavLink>
            <div className="imageDiv">
                <img src={image1}
                className="smallPhoto" id="image1" />
                <img src={image2}
                className="smallPhoto" id="image2" />
                <img src={image3}
                className="smallPhoto" id="image3" />
                <img src={image4}
                className="smallPhoto" id="image4" />
                <img src={image5}
                className="smallPhoto" id="image5" />
                <img src={'https://cdn.vox-cdn.com/thumbor/lkpuS801bOhgdJPPu7msVHotl14=/63x0:3936x2582/1200x800/filters:focal(63x0:3936x2582)/cdn.vox-cdn.com/uploads/chorus_image/image/15288009/170992684.0.jpg'}
                className = "largePhoto" />
            </div>
        </body>
      
    )
}

export default Score