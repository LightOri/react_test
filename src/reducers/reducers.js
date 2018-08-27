import { combineReducers } from 'redux';

const cardsCountReducer = (state = {}, action) => {
  if (action.type === 'CHANGE_COUNT') {
    const newState = { ...state, count: action.count };
    return newState;
  }
  return state;
}

const colorReducer = (state = {}, action) => {
  if (action.type === 'SET_COLOR') {
    const newState = { ...state, color: action.color };
    return newState;
  }
  return state;
}

export const allReducers = combineReducers({
  cardsState: cardsCountReducer,
  colorState: colorReducer
});