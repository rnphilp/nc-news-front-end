import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';
import { Router } from '@reach/router';
import Articles from './Articles';
import { withStyles } from '@material-ui/core';
import Article from './Article';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    'padding-top': '70px'
  }
});
class MainSite extends Component {
  state = {
    title: 'Page Title'
  };
  render() {
    const { drawerOpen, toggleDrawer, classes } = this.props;
    const { title } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          title={title}
        />
        <main className={classes.content}>
          <Router>
            <Articles path="/articles" />
            <Article path="/articles/*" />
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
