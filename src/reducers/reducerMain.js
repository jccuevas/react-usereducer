

function reducerMain (state,action){
    switch(action.type){
        case 'LOGGED':
            return {...state, logged:true};
        case 'LOGOUT':
            return {...state, logged:false};
        default: return state;
    }
}

export default reducerMain;