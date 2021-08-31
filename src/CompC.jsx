import React from 'react'
import {useDispatch} from 'react-redux'

function CompC() {
    const dispatch = useDispatch()
    const changeusername=()=>{
        const user={
            username:"Hussain",
            userid:"10",
            useremail:"ah71166@gmail.com"
        }
        dispatch({type:'Change_User_Name', payload:user})
    }
    return (
        <div>
            <h1>This is component C</h1>
            <button onClick={changeusername}>change USerName</button>
        </div>
    )
}

export default CompC
