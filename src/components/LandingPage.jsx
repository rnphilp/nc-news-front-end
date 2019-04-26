import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Background from '../resources/tall-buildings.jpg';
import AppBar from './AppBar';
import { Typography, Button } from '@material-ui/core';

const styles = () => ({
  root: {
    backgroundImage: `url(${Background})`,
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    marginBottom: '200px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
});

const LandingPage = props => {
  const { classes, drawerOpen, toggleDrawer, openLogin, logout } = props;
  const { navigate } = props;
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
      <div className={classes.title}>
        <Typography variant="h1">NC News</Typography>
        <Button
          color="primary"
          variant="contained"
          onClick={() => navigate('/articles')}
        >
          browse articles
        </Button>
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
  openLogin: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default withStyles(styles)(LandingPage);
