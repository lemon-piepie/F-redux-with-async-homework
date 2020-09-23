export const setUserInfo = info => {
  // eslint-disable-line
  return {
    type: 'SET_USER_INFO',
    payload: info
  };
};

export const clearUserInfo = () => {
  // eslint-disable-line
  return {
    type: 'CLEAR_USER_INFO'
  };
}

const fetchInfoRequest = () => {
  return {
    type: 'FETCH_INFO_REQUEST'
  }
}
const fetchInfoReceive = info => {
  return {
    type: 'FETCH_INFO_RECEIVE',
    payload: info
  }
}

export const fetchInfo = () => dispatch => {
  dispatch(fetchInfoRequest())
  fetch('https://my-json-server.typicode.com/kevindongzg/demo/login')
    .then( res => res.json())
    .then( data => { 
      dispatch(fetchInfoReceive(data));
    })
}