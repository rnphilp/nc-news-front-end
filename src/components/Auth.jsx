import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Dialog,
  DialogTitle,
  InputLabel,
  TextField,
  Button,
  FormHelperText
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({});

class Auth extends Component {
  state = {
    username: 'weegembump'
  };
  render() {
    const { username } = this.state;
    const { onClose, open, classes, getUser, loginError } = this.props;
    return (
      <div>
        <Dialog
          aria-labelledby="User log in"
          onClose={onClose}
          open={open}
          className={classes.dialog}
        >
          <DialogTitle>Sign In</DialogTitle>
          <form onSubmit={getUser(username)}>
            <InputLabel htmlFor="username" />
            <TextField
              id="username"
              label="username"
              value={username}
              onChange={this.handleChange('username')}
            />
            {loginError && <FormHelperText>incorrect username</FormHelperText>}
            <Button
              variant="contained"
              color="primary"
              onClick={getUser(username)}
            >
              Submit
            </Button>
          </form>
        </Dialog>
      </div>
    );
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
}

Auth.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  getUser: PropTypes.func.isRequired,
  loginError: PropTypes.bool.isRequired
};

export default withStyles(styles)(Auth);
