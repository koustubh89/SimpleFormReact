/* 
    ./client/index.js
*/
import './styles/global.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from './components/Root.jsx';
import { ContentArea } from './components/ContentArea.jsx';

ReactDOM.render(<Root />, document.getElementById('root'));