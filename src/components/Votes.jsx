import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, IconButton, Typography } from '@material-ui/core';
import * as api from './api';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class Votes extends Component {
  state = {
    votes: 20
  };

  render() {
    const { classes } = this.props;
    const { votes } = this.state;
    return (
      <div className={classes.root}>
        <IconButton onClick={() => this.incVote(-1)}>-</IconButton>
        <Typography variant="h5">{votes} Votes</Typography>
        <IconButton onClick={() => this.incVote(1)}>+</IconButton>
      </div>
    );
  }

  incVote = num => {
    const { articleId } = this.props;
    this.setState(state => {
      return {
        votes: state.votes + num
      };
    });
    api.incArticleVotes(articleId, num).catch(err => {
      this.setState(state => {
        return {
          votes: state.votes - num
        };
      });
    });
  };
}

Votes.propTypes = {
  articleId: PropTypes.number.isRequired
};

export default withStyles(styles)(Votes);
