import React from 'react';
import PropTypes from 'prop-types';
import {
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  Toolbar as MuiToolbar,
  Typography as MuiTypography
} from '@material-ui/core';
import { Menu as MuiMenuIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

const styles = theme => ({
  menuButton: {
    marginLeft: 0,
    marginRight: 20
  }
});

const AppBar = props => {
  const { title, classes, toggleDrawer } = props;
  return (
    <div>
      <MuiAppBar position="fixed" color="primary">
        <MuiToolbar>
          <MuiIconButton
            color="inherit"
            aria-label="Open drawer"
            className={classNames(classes.menuButton)}
            onClick={toggleDrawer}
          >
            <MuiMenuIcon />
          </MuiIconButton>
          <MuiTypography variant="title" color="inherit" noWrap>
            {title}
          </MuiTypography>
          {/* TODO: Make searchbar dynamic for mobile */}
        </MuiToolbar>
      </MuiAppBar>
    </div>
  );
};

AppBar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(AppBar);
