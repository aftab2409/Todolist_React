import React from 'react'
import{useSelector} from 'react-redux'

function CaompA() {
    const gameobj =useSelector(state=>state)
    return (
        <div>
            <h1>The given game is gamereducer {gameobj.gameName}  </h1>
            <h1>The given playename is  {gameobj.playerName}  </h1>
            <h1>The given username is  {gameobj.userName}  </h1>
        </div>
    )
}

export default CaompA
