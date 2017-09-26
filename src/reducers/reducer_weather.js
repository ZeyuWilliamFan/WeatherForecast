import { FETCH_WEATHER } from '../actions/index';

export default function (state=[], action) {
  switch (action.type) {
  case  FETCH_WEATHER:
    // Can't mutate state, but create copy of it and return
    //return state.concat( [action.payload.data]);

    //ES6, same as above
    return [action.payload.data, ...state]
  }

  return state;
}
