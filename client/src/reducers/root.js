import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
// import reducer from './reducer';

// const defaultReducer = (state={}, action) => {
//   switch(action.type) {
//     default: 
//       return state
//   }
// }

const rootReducer = combineReducers({
  // defaultReducer,
  // reducer
  routing: routerReducer
});

export default rootReducer;

