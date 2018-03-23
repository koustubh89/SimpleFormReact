/* 
    ./client/index.js
*/
import './styles/global.scss';
import React from 'react';
import { connect } from 'react-redux';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {configureStore} from './redux/configureStore.js';
import App from './components/App.jsx';
import { ContentArea } from './components/ContentArea.jsx';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'));

const mapStateToProps = state => {
    return {
      currentTime: state.currentTime
    }
  }
  export default connect(
    mapStateToProps
  )(ContentArea);