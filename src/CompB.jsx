import React,{useState} from 'react'
import { useDispatch } from 'react-redux'

function CompB() {
    const [game, setGame] = useState('')
    const [player, setplayer] = useState('')
    const dispatch = useDispatch()

    const changeName = ()=> {
        dispatch({type:'CHANGE_NAME', payload: game})
    }

    const changePlayer = ()=> {
        dispatch({type:'CHANGE_PLAYER', payload: player})
    }

    return (
        <div>
            <h1>This is Component B</h1>
            <input type="text" placeholder='newgame' value={game}
            onChange={(e)=>setGame(e.target.value)} />
            <button onClick={changeName}>Change Name</button>

            <input type="text" placeholder='newplayer' value={player}
            onChange={(e)=>setplayer(e.target.value)} />
            <button onClick={changePlayer}>Change  player Name</button>
        </div>

        
    )
}

export default CompB
