import React, { Component, useContext } from 'react';
import PropTypes from 'prop-types';
import { IconButton, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  ThumbUpRounded as ThumbUpIcon,
  ThumbDownRounded as ThumbDownIcon
} from '@material-ui/icons';
import * as api from '../api';
import UserContext from './context/UserContext';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

class Votes extends Component {
  state = {
    voteChange: 0
  };

  static contextType = UserContext;

  render() {
    const { classes, votes } = this.props;
    const { voteChange } = this.state;
    const { loggedIn } = this.context;
    return (
      <div className={classes.root}>
        <IconButton
          onClick={() => this.incVote(-1)}
          disabled={voteChange < 0 || !loggedIn}
        >
          <ThumbDownIcon />
        </IconButton>
        <Typography variant="h5">{votes + voteChange} Votes</Typography>
        <IconButton
          onClick={() => this.incVote(1)}
          disabled={voteChange > 0 || !loggedIn}
        >
          <ThumbUpIcon />
        </IconButton>
      </div>
    );
  }

  incVote = num => {
    const { articleId } = this.props;
    this.setState(state => {
      return {
        voteChange: state.voteChange + num
      };
    });
    api.incArticleVotes(articleId, num).catch(err => {
      this.setState(state => {
        return {
          votes: state.voteChange - num
        };
      });
    });
  };
}

Votes.propTypes = {
  articleId: PropTypes.number.isRequired
};

export default withStyles(styles)(Votes);
