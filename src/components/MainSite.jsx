import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

class MainSite extends Component {
  state = {
    title: 'Page Title'
  };
  render() {
    const { drawerOpen, toggleDrawer } = this.props;
    const { title } = this.state;
    return (
      <div>
        <AppBar
          drawerOpen={drawerOpen}
          toggleDrawer={toggleDrawer}
          title={title}
        />
      </div>
    );
  }
}

MainSite.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  toggleDrawer: PropTypes.func.isRequired
};

export default MainSite;
