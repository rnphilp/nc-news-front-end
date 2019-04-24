import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer as MuiDrawer,
  IconButton as MuiIconButton
} from '@material-ui/core';
import { ChevronLeft as MuiChevronLeftIcon } from '@material-ui/icons';
import { withStyles } from '@material-ui/core';

const drawerWidth = 240;

const styles = theme => ({
  drawer: {
    width: drawerWidth
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  }
});

const Drawer = props => {
  const { classes, open, toggleDrawer } = props;
  return (
    <div>
      <MuiDrawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <MuiIconButton onClick={toggleDrawer}>
            <MuiChevronLeftIcon />
          </MuiIconButton>
        </div>
      </MuiDrawer>
    </div>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(Drawer);
