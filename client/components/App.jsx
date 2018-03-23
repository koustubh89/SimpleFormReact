/*
    ./client/components/App.jsx
*/
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import { Headerbar } from './HeaderBar.jsx';
import { ContentArea } from './ContentArea.jsx';
import About from './About.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <Headerbar />
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/" component={ContentArea} />
            <Route
              exact path="/about" component={About} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
