/*
    ./client/components/App.jsx
*/
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Headerbar } from './HeaderBar.jsx';
import { ContentArea } from './ContentArea.jsx';
import { About } from './About.jsx';

// const Home = () => {
//   console.log('rendering this space');
//   return (<div><h1>Welcome home</h1><Link to='/about'>Go to about</Link></div>);
// }

export default class App extends React.Component {
  render() {
    return (
    <div style={{textAlign: 'center'}}>
        <Headerbar />
        <BrowserRouter>
          <Switch>
            <Route
              // path='/about' exact render={() => <Redirect to='/home' /> } />
              path='/about' exact component={About} />
            <Route
              path='/home' exact component={About} />
          </Switch>
        </BrowserRouter>
        {/* <ContentArea /> */}
    </div>);
  }
}