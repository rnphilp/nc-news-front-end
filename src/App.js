import React, { Component } from 'react';
import MainSite from './components/MainSite';
import { Router } from '@reach/router';
import LandingPage from './components/LandingPage';
import Drawer from './components/Drawer';

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
    const { drawerOpen, topics } = this.state;
    return (
      <div className="App">
        <Drawer
          open={drawerOpen}
          toggleDrawer={this.toggleDrawer}
          topics={topics}
        />
        <Router>
          <LandingPage path="/" />
          <MainSite
            path="/*"
            drawerOpen={drawerOpen}
            toggleDrawer={this.toggleDrawer}
          />
        </Router>
      </div>
    );
  }

  toggleDrawer = () => {
    this.setState(state => ({
      drawerOpen: !state.drawerOpen
    }));
  };
}

export default App;
