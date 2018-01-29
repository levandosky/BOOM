import {createAction, handleActions} from 'redux-actions';

const SET_USER = 'SET_USER';
const SERVER_LOGIN = 'SERVER/LOGIN';

export const setUser = createAction(SET_USER);
export const serverLogin = createAction(SERVER_LOGIN);


const initialState = {
    currentUser: 'test'
}


export default handleActions({
  [SET_USER]: (state, action) => {
    console.log(action);
    return Object.assign({}, state, action.payload);
  }
}, initialState);
