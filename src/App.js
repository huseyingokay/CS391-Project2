import './App.css';
import React from 'react';
import Login from './screens/Login';
import Signup from './screens/SignUp/Signup';
import Memes from './screens/Memes/Memes';
import Header from './sections/Header';
import Footer from './sections/Footer';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
// <Route exact path="/" component={Login} />
  render() {
    return (
      <>
      <Header></Header>
        <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/memes" component={Memes} />
            </Switch>
        </BrowserRouter>
        <Footer />
      </>
    );
  }
}

export default App;
