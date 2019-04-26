import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const Error = props => {
  const {
    classes,
    location: { pathname }
  } = props;
  const errorCode = pathname.split('/error/')[1];
  return (
    <div className={classes.root}>
      <Typography variant="h1">We're Sorry!</Typography>
      <Typography variant="h3">{`${errorCode} Error`}</Typography>
    </div>
  );
};

export default withStyles(styles)(Error);
