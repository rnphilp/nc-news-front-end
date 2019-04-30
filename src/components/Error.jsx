import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Error404 from './Error404';

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
    location: { pathname },
    errorCode
  } = props;
  // const errorCode = pathname.split('/error/')[1];
  if (+errorCode === 404) {
    return <Error404 />;
  }
  return (
    <div className={classes.root}>
      <Typography variant="h1">We're Sorry!</Typography>
      <Typography variant="h3">{`A ${errorCode} Error has Occurred...`}</Typography>
    </div>
  );
};

export default withStyles(styles)(Error);
