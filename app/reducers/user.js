import {SET_USER} from '../actions/types';

const initialState = {
  user: {},
};

export default function user(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
}
