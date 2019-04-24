import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from './AppBar';

class MainSite extends Component {
  state = {
    title: 'Page Title'
  };
  render() {
    const { drawerOpen } = this.props;
    const { title } = this.state;
    return (
      <div>
        <AppBar drawerOpen={drawerOpen} title={title} />
      </div>
    );
  }
}

MainSite.propTypes = {
  drawerOpen: PropTypes.bool.isRequired
};

export default MainSite;
