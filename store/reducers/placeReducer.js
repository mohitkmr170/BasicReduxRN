import {ADD_PLACES, DEL_PLACES, CLEAR_PLACES} from '../actions/types';
import {findIndex} from 'lodash';

const initialState = {
  placeName: '',
  places: [],
};

const deletePlace = (action, state) => {
  let index = action.payload;
  const stateTemp = [
    ...state.places.slice(0, index),
    ...state.places.slice(index + 1),
  ];
  return {...state, placeName: '', places: stateTemp};
};

const placeReducer = (state = initialState, action) => {
  console.log('Store', state, action);
  switch (action.type) {
    case ADD_PLACES:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          value: action.payload,
        }),
      };
    case DEL_PLACES:
      return deletePlace(action, state);
    case CLEAR_PLACES:
      return initialState;
    default:
      return state;
  }
};

export default placeReducer;
