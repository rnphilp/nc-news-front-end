import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  AppBar as MuiAppBar,
  IconButton,
  Toolbar,
  Typography
} from '@material-ui/core';
import {
  MenuRounded as MenuIcon,
  ExitToApp as LogoutIcon,
  AccountCircleRounded as LoginIcon
} from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import UserContext from './context/UserContext';

const styles = theme => ({
  AppBar: {
    color: 'secondary',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  AppBarShift: {
    width: `calc(100% - ${theme.drawer.width}px)`,
    marginLeft: theme.drawer.width,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 0,
    marginRight: 20
  },
  clear: {
    color: 'rgb(0,0,0)',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  Toolbar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  leftItems: {
    display: 'flex',
    alignItems: 'center'
  },
  hide: {
    display: 'none'
  }
});

const LogInButton = ({ openLogin }) => {
  return (
    <IconButton color="inherit" aria-label="log in" onClick={openLogin}>
      <LoginIcon />
    </IconButton>
  );
};

const LogoutButton = ({ logout }) => {
  return (
    <IconButton color="inherit" aria-label="log in" onClick={logout}>
      <LogoutIcon />
    </IconButton>
  );
};

const AppBar = props => {
  const {
    title,
    classes,
    toggleDrawer,
    drawerOpen,
    openLogin,
    logout,
    color,
    elevation
  } = props;
  const { loggedIn } = useContext(UserContext);
  const barColor = color || 'primary';
  const barElevation = elevation || 2;
  return (
    <div>
      <MuiAppBar
        position="fixed"
        color={barColor}
        elevation={+barElevation}
        classes={{ colorDefault: classes.clear }}
        className={classNames(classes.AppBar, {
          [classes.AppBarShift]: drawerOpen
        })}
      >
        <Toolbar className={classes.Toolbar}>
          <div className={classes.leftItems}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              className={classNames(
                classes.menuButton,
                drawerOpen && classes.hide
              )}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              {title}
            </Typography>
            {/* TODO: Make searchbar dynamic for mobile */}
          </div>
          <div className={classes.rightItems} />
          {loggedIn ? (
            <LogoutButton logout={logout} />
          ) : (
            <LogInButton openLogin={openLogin} />
          )}
        </Toolbar>
      </MuiAppBar>
    </div>
  );
};
AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  drawerOpen: PropTypes.bool.isRequired,
  openLogin: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired
};

export default withStyles(styles)(AppBar);
