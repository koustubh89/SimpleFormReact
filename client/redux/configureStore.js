import { createStore } from 'redux';
import { rootReducer, initialState } from './reducers.js';

export const configureStore = () => {
	const store = createStore(
		rootReducer, // root reducer
		initialState
	);

	return store;
}

export default configureStore;