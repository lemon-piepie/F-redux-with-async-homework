const info = (
    state = {
        isFetching:false,
        data: null
    },
    action
) => {
    if(action.type === 'FETCH_INFO_REQUEST'){
        return{
            ...state, isFetching: true
        }
    }
    if(action.type === 'FETCH_INFO_RECEIVE'){
        return{
            ...state, isFetching: false, data: action.payload
        }
    }
    return state
}

export default info