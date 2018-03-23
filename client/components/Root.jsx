import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import configureStore from '../redux/configureStore.js';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';


export default class Root extends React.Component {
	constructor(props) {
		super(props);
		this.store = configureStore();
	}

	render() {
		return (
			<Provider store={this.store}>
				<App />
			</Provider>
		)
	}
}