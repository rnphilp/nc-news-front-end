import React, { Component } from 'react';
import MainSite from './components/MainSite';
import { Router } from '@reach/router';
import LandingPage from './components/LandingPage';

class App extends Component {
  state = {
    loggedIn: true,
    username: 'weegembump',
    drawerOpen: false,
    topics: [
      {
        slug: 'coding',
        description: 'Code is love, code is life'
      },
      {
        slug: 'football',
        description: 'FOOTIE!'
      },
      {
        slug: 'cooking',
        description: 'Hey good looking, what you got cooking?'
      }
    ]
  };

  render() {
    const { drawerOpen } = this.state;
    return (
      <div className="App">
        <Router>
          <LandingPage path="/" />
          <MainSite path="/*" drawerOpen={drawerOpen} />
        </Router>
      </div>
    );
  }
}

export default App;
