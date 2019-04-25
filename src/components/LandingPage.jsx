import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Background from '../resources/tall-buildings.jpg';
import AppBar from './AppBar';

const styles = () => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0
  }
});

const LandingPage = props => {
  const { classes, drawerOpen, toggleDrawer, openLogin, logout } = props;
  return (
    <div className={classes.root}>
      <AppBar
        drawerOpen={drawerOpen}
        toggleDrawer={toggleDrawer}
        title=""
        openLogin={openLogin}
        logout={logout}
        color="default"
        elevation="0"
      />
    </div>
  );
};

LandingPage.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default withStyles(styles)(LandingPage);
