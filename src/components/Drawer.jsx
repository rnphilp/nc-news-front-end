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
import { withStyles } from '@material-ui/core/styles';
import { Link as ReachLink } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlackHash } from '@fortawesome/free-brands-svg-icons';

const styles = theme => ({
  drawer: {
    width: theme.drawer.width
  },
  drawerPaper: {
    width: theme.drawer.width
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
          {[
            { display: 'Home', link: '' },
            { display: 'Articles', link: 'articles' }
            // { display: 'Topics', link: 'articles' }
          ].map((item, index) => {
            return (
              <div key={item.display}>
                <Divider />
                <Link component={ReachLink} to={`${item.link}`}>
                  <ListItem button key={item.display}>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={item.display} />
                  </ListItem>
                </Link>
              </div>
            );
          })}
          {topics.map(topic => {
            return (
              <Link
                key={topic.slug}
                component={ReachLink}
                to={`articles/?topic=${topic.slug}`}
              >
                <ListItem button key={topic.slug}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faSlackHash} />
                  </ListItemIcon>
                  <ListItemText primary={topic.slug} />
                </ListItem>
              </Link>
            );
          })}
          <Divider />
          <Link component={ReachLink} to="/users/">
            <ListItem button>
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
