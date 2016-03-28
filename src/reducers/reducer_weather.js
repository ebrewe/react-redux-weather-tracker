import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FETCH_WEATHER:
      //return state.concat([ action.payload.data ]);
      //ES6 version of above with spread operator
      return [action.payload, ...state];
      break;

    default:
      return state;
  }

  return state;
}
