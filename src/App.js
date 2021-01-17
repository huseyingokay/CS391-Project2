import './App.css';
import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
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
<<<<<<< HEAD
      <NavBar />
=======
      <Header></Header>
>>>>>>> 7450cfec48f668c6ed03ef8151547871afc6ad90
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
