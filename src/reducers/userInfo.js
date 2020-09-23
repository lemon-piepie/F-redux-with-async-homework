const userInfo = (
  state = {
      isFetching:false,
      logged: false,
      data: null,
      netError: false
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
          ...state, isFetching: false, data: action.payload, logged: true
      }
  }
  if(action.type === 'CLEAR_USER_INFO'){
      return {
          ...state, logged: false
      }
  }if(action.type == 'SIGN_IN_FAIL'){
    return{
          ...state, netError: true
    }
  }
  return state
}

export default userInfo
