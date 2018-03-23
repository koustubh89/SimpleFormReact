import * as types from './types';

{
  type: types.FETCH_NEW_TIME;
  payload: new Date().toString(); // Any serializable value
}


//export const FETCH_NEW_TIME = 'FETCH_NEW_TIME';