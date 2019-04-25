import React, { Component } from 'react';
import { Router } from '@reach/router';
import MainSite from './components/MainSite';
import LandingPage from './components/LandingPage';
import Drawer from './components/Drawer';
import Auth from './components/Auth';
import * as api from './api';

export const UserContext = React.createContext({});
class App extends Component {
  state = {
    loggedIn: false,
    loginOpen: true,
    loginError: false,
    user: {},
    drawerOpen: false,
    topics: []
  };

  render() {
    const {
      drawerOpen,
      topics,
      loginOpen,
      loggedIn,
      loginError,
      user
    } = this.state;
    return (
      <div className="App">
        <UserContext.Provider value={{ loggedIn, user }}>
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
        </UserContext.Provider>
        <Auth
          open={loginOpen}
          onClose={this.closeLogin}
          getUser={this.getUser}
          loginError={loginError}
        />
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

  closeLogin = () => {
    this.setState({
      loginOpen: false
    });
  };

  getUser = username => event => {
    event.preventDefault();
    api
      .getUser(username)
      .then(user => {
        this.setState({
          user,
          loginError: false,
          loggedIn: true,
          loginOpen: false
        });
      })
      .then(() => console.log(this.state))
      .catch(() => {
        this.setState({
          loginError: true
        });
      });
  };
}

export default App;
