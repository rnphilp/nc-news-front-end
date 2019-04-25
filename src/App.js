import React, { Component } from 'react';
import MainSite from './components/MainSite';
import { Router } from '@reach/router';
import LandingPage from './components/LandingPage';
import Drawer from './components/Drawer';
import * as api from './api';

class App extends Component {
  state = {
    loggedIn: true,
    username: 'weegembump',
    drawerOpen: false,
    topics: []
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

  componentDidMount() {
    this.getTopics();
  }

  toggleDrawer = () => {
    this.setState(state => ({
      drawerOpen: !state.drawerOpen
    }));
  };
  getTopics = () => {
    api.getTopics().then(({ topics }) => {
      this.setState({
        topics
      });
    });
  };
}

export default App;
