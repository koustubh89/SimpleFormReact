/*
    ./client/components/App.jsx
*/
import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';
import { Headerbar } from './HeaderBar.jsx';
import { ContentArea } from './ContentArea.jsx';
import About from './About.jsx';
import Home from './Home.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div style={{textAlign: 'center'}}>
        <Headerbar />
        <BrowserRouter>
          <Switch>
            <Route
              exact path="/" component={ContentArea} />
            <Route
              exact path="/about" component={About} />
            <Route
              exact path="/home" component={Home} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
