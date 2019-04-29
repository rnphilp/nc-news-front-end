import React, { Component } from 'react';
import { Router } from '@reach/router';
import { withStyles, MuiThemeProvider } from '@material-ui/core/styles';
import MainSite from './components/MainSite';
import LandingPage from './components/LandingPage';
import Drawer from './components/Drawer';
import Auth from './components/Auth';
import theme from './theme';
import * as api from './api';
import UserContext from './components/context/UserContext';

const styles = () => ({
  App: {
    padding: 0,
    margin: 0
  }
});
class App extends Component {
  state = {
    loggedIn: false,
    loginOpen: false,
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
        <MuiThemeProvider theme={theme}>
          <UserContext.Provider value={{ loggedIn, user }}>
            <Drawer
              open={drawerOpen}
              toggleDrawer={this.toggleDrawer}
              topics={topics}
            />
            <Router>
              <LandingPage
                path="/"
                drawerOpen={drawerOpen}
                toggleDrawer={this.toggleDrawer}
                openLogin={this.openLogin}
                logout={this.logout}
              />
              <MainSite
                path="/*"
                drawerOpen={drawerOpen}
                toggleDrawer={this.toggleDrawer}
                openLogin={this.openLogin}
                logout={this.logout}
              />
            </Router>
          </UserContext.Provider>
          <Auth
            open={loginOpen}
            onClose={this.closeLogin}
            getUser={this.getUser}
            loginError={loginError}
          />
        </MuiThemeProvider>
      </div>
    );
  }

  componentDidMount() {
    this.getTopics();
    this.retrieveUser();
  }

  toggleDrawer = () => {
    this.setState(state => ({
      drawerOpen: !state.drawerOpen
    }));
  };

  getTopics = () => {
    api
      .getTopics()
      .then(({ topics }) => {
        this.setState({
          topics
        });
      })
      .catch(err => {
        this.props.navigate(`/error/${err.response.status}`, { replace: true });
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
        window.localStorage.setItem('user', JSON.stringify(user));
      })
      .catch(() => {
        this.setState({
          loginError: true
        });
      });
  };

  logout = () => {
    this.setState({
      loggedIn: false,
      user: {}
    });
    window.localStorage.removeItem('user');
  };

  openLogin = () => {
    this.setState({
      loginOpen: true
    });
  };

  closeLogin = () => {
    this.setState({
      loginOpen: false
    });
  };

  retrieveUser = () => {
    let user = window.localStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
      this.setState({
        user,
        loggedIn: true
      });
    }
  };
}

export default withStyles(styles)(App);
