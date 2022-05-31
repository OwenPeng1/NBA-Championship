import React, {useState} from "react" ;

function Search({searchTerm, setSearchTerm,makePlayer }){
    
    function handleSubmit(e){
        e.preventDefault()
        makePlayer(searchTerm)
    }

    return(
        <form className="searchBar" onSubmit={handleSubmit}>
            <input 
                type="text"
                id="search"
                placeholder="Player Name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            <button type="submit"> Add Player</button>
        </form>
    )
}

export default Search