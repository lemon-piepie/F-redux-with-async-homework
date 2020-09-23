const userInfo = (
  state = {
      isFetching:false,
      logged: false,
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
          ...state, isFetching: false, data: action.payload, logged: true
      }
  }
  if(action.type === 'CLEAR_USER_INFO'){
      return {
          ...state, logged: false
      }
  }
  return state
}

export default userInfo
