import types from './actionCreators';

// Initial (starting) state
const initialState = {
	currentTime: new Date().toString()
}

// Our root reducer starts with the initial state
// and must return a representation of the next state
export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_NEW_TIME:
			return { undefined }
		default:
			return state;
	}
}