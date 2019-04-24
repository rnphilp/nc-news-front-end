import React from 'react';
import PropTypes from 'prop-types';
import {
  Drawer as MuiDrawer,
  IconButton,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import {
  ChevronLeft as ChevronLeftIcon,
  Home as HomeIcon
} from '@material-ui/icons';
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
  const { classes, open, toggleDrawer, topics } = props;
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
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <List>
          {['Home', 'Articles', 'Topics'].map((text, index) => {
            return (
              <div>
                <Divider />
                <Link>
                  <ListItem>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                </Link>
              </div>
            );
          })}
          {topics.map(topic => {
            return (
              <Link>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary={topic.slug} />
                </ListItem>
              </Link>
            );
          })}
          <Divider />
          <Link>
            <ListItem>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </Link>
        </List>
      </MuiDrawer>
    </div>
  );
};

Drawer.propTypes = {
  open: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired,
  topics: PropTypes.arrayOf(PropTypes.object.isRequired)
};

export default withStyles(styles)(Drawer);
