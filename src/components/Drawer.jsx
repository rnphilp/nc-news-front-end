import React, { useContext } from 'react';
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
import UserContext from './context/UserContext';

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
    padding: '0px 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end'
  },
  List: {
    paddingTop: '0px'
  },
  topics: {
    marginLeft: theme.spacing.unit * 3.5
  },
  topicText: {
    paddingLeft: 0
  }
});

const Drawer = props => {
  const { classes, open, toggleDrawer, topics } = props;
  const { loggedIn } = useContext(UserContext);
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
        <List className={classes.List}>
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
                <ListItem button key={topic.slug} className={classes.topics}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faSlackHash} />
                  </ListItemIcon>
                  <ListItemText
                    primary={topic.slug}
                    className={classes.topicText}
                  />
                </ListItem>
              </Link>
            );
          })}
          <Link component={ReachLink} to="/users/">
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Account" />
            </ListItem>
          </Link>
          {!loggedIn && (
            <ListItem>
              <ListItemText secondary="Log In for to vote, comment and post new articles" />
            </ListItem>
          )}
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
