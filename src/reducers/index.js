import { combineReducers } from 'redux';
import UsersReducer from './reducerUser'
import ActiveUserReducer from './reducerActiveUser'

const rootReducer = combineReducers({
  users : UsersReducer,
  activeUser : ActiveUserReducer
});

export default rootReducer;
