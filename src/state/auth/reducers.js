const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || '',
  uid: localStorage.getItem('uid') || '',
  code: localStorage.getItem('code') || '',
  error: ''
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGN-UP':
      return {
        ...state,
        uid: action.uid, 
        user: action.user,
        error: '',
      };
    case 'LOGIN': 
      return {
        ...state,
        uid: action.uid,
        user: action.user,
        error: '',
      };
    case 'SEND-ERROR':
      return {
        ...state,
        error: action.error
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export default authReducer;