import React from 'react';
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

const Error404 = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography variant="h1">404 Error</Typography>
      <Typography variant="h3">Page Not Found</Typography>
    </div>
  );
};

export default withStyles(styles)(Error404);
