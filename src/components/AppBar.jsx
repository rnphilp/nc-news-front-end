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
import { UserContext } from '../App';

const styles = theme => ({
  menuButton: {
    marginLeft: 0,
    marginRight: 20
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
  const { title, classes, toggleDrawer, openLogin, logout } = props;
  const { loggedIn } = useContext(UserContext);
  return (
    <div>
      <MuiAppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            className={classNames(classes.menuButton)}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" noWrap>
            {title}
          </Typography>
          {/* TODO: Make searchbar dynamic for mobile */}
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
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(AppBar);
