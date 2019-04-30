import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';
import { Router } from '@reach/router';
import Articles from './Articles';
import { withStyles } from '@material-ui/core/styles';
import Article from './Article';
import classNames from 'classnames';
import Error404 from './Error404';
import Error from './Error';

const styles = theme => ({
  main: {
    display: 'flex',
    justifyContent: 'center',
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    paddingTop: theme.spacing.unit * 9,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  mainShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: theme.drawer.width
  }
});
class MainSite extends Component {
  state = {
    title: 'NC News'
  };
  render() {
    const { drawerOpen, toggleDrawer, classes, openLogin, logout } = this.props;
    const { title } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          title={title}
          openLogin={openLogin}
          logout={logout}
          className={classNames(classes.AppBar, {
            [classes.AppBarShift]: drawerOpen
          })}
        />
        <main
          className={classNames(classes.main, {
            [classes.mainShift]: drawerOpen
          })}
        >
          <Router>
            <Articles path="/articles" />
            <Article path="/articles/:articleId" />
            <Error path="/error/:errorCode" />
            <Error404 path="/404PageNotFound" default />
          </Router>
        </main>
      </div>
    );
  }
}

MainSite.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(MainSite);
