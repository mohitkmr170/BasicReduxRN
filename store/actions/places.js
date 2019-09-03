import {ADD_PLACES, DEL_PLACES, CLEAR_PLACES} from './types';

export const addPlace = placeName => {
  // this addPlace() returns an action to reducer based on the action type, to execute reducer function case
  return {
    type: ADD_PLACES,
    payload: placeName,
  };
};

export const delPlace = placeId => {
  return {
    type: DEL_PLACES,
    payload: placeId,
  };
};

export const clearAll = () => {
  return {
    type: CLEAR_PLACES,
  };
};
