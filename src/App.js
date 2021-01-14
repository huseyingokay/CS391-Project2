import './App.css';
import React from 'react';
import Login from './screens/Login';
import Signup from './screens/Signup';
import Memes from './screens/Memes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return (
      <>
        <Login />
        <Signup />
        <Memes />
      </>
    );
  }
}

export default App;
