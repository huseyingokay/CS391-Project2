import './App.css';
import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Memes from './screens/Memes';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/memes" component={Memes} />
            </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
