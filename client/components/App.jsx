/*
    ./client/components/App.jsx
*/
import React from 'react';
import {Headerbar} from './HeaderBar.jsx';
import {ContentArea} from './ContentArea.jsx';

export default class App extends React.Component {
  render() {
    return (
    <div style={{textAlign: 'center'}}>
        <Headerbar />
        <ContentArea />
    </div>);
  }
}