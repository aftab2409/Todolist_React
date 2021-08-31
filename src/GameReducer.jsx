const intialData = {
    gameName: 'Basketbal',
    playerName: 'Messi',
    userName:"Aftab"
}

function GameReducer(state = intialData, action) {

    switch (action.type) {
        case 'CHANGE_NAME': return {
            ...state,
            gameName: action.payload
        }
        case 'CHANGE_PLAYER': return {
            ...state,
            playerName: action.payload
        }
        case 'Change_User_Name':return{
            ...state,
            userName:action.payload.username
        }

    }

    return state


}
export default GameReducer