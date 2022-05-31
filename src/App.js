import React, {useState} from "react"
import Search from "./Search"
import PlayerCardContainer from "./PlayerCardContainer"
import Home from "./Home"
import {Switch, Route} from 'react-router-dom'
import Header from "./Header"
import Score from "./Score"


function App() {
  const [searchTerm, setSearchTerm] = useState("")
  const [athletes, setAthletes] = useState([])
  const [title, setTitle]= useState("")

function toTitleCase(str) {
  return str.replace(/\w\S*/g, function(txt){
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function makePlayer(name){
  let capitalizedName = toTitleCase(name)
  let input_Name=capitalizedName.split(" ")

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com',
      'X-RapidAPI-Key': '55cac87a6dmsh071e3b7a235e309p1fb399jsnec6114bee4f9'
    }
  };
  
  fetch(`https://nba-stats4.p.rapidapi.com/players/?page=1&full_name=${input_Name[0]}%20${input_Name[1]}&per_page=50`, options)
    .then(response => response.json())
    .then(response =>  {
      const playerObj = response[0]
      const playerID = playerObj.id.toString()
      
      const options2 = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Host': 'nba-stats4.p.rapidapi.com',
          'X-RapidAPI-Key': '55cac87a6dmsh071e3b7a235e309p1fb399jsnec6114bee4f9'
        }
      };
      
      fetch(`https://nba-stats4.p.rapidapi.com/per_game_career_regular_season/${playerID}`, options2)
        .then(response => response.json())
        .then(response => {
          const newAthlete = {name: capitalizedName,
                              points: response.pts_per_game,
                              assists: response.ast_per_game,
                              rebounds: response.reb_per_game,
                            id: playerID}
                            
            function addtoAthletes(AthleteToAdd){
              const check = athletes.find(
                (eachAthlete) => {
                  return(eachAthlete.name === AthleteToAdd.name)
                })
              if(check===undefined && athletes.length <= 5){
                setAthletes([...athletes, AthleteToAdd])
              }}
          
              addtoAthletes(newAthlete)
          }
          )
            
          }
        
          )
        
  
    }
  
console.log(athletes)

function removeFromContainer(athleteToRemove){
  let newAthletes = athletes.filter(
    (eachAthlete) => {
    return eachAthlete.name !== athleteToRemove.name}
  )
  setAthletes([...newAthletes])
}

function totals(stat){
  let statTotal = 0
    for(let i=0; i<athletes.length; i++){
      let playerStat=athletes[i][stat]
      statTotal += playerStat
    }
  return statTotal
}
    


    
 //URL for player headshots, replace number with player ID

 //https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/977.png

 return (
   <body>
  <Switch>
      <Route exact path="/">
        <Home title={title} setTitle={setTitle} />
      </Route>
      <Route path="/main">
        <Header title={title}/>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} makePlayer={makePlayer}/>
        <PlayerCardContainer athletes={athletes} removeFromContainer={removeFromContainer}/>
      </Route>
      <Route path="/score">
        <Score athletes={athletes} totals={totals}/>
      </Route>
  </Switch>

  </body>
)

  }
export default App;
