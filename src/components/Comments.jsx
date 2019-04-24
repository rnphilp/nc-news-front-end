import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import * as api from './api';

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    const { commentCount } = this.props;
    const { comments } = this.state;
    return (
      <div>
        <Typography variant="h6">
          {`${commentCount} Comment${commentCount > 1 && 's'}`}
        </Typography>
        {comments.map(comment => {
          return (
            <Paper key={comment.comment_id}>
              <Typography variant="body2">{comment.author}</Typography>
              <Typography variant="body2">Votes: {comment.votes}</Typography>
              <Typography variant="body2">{comment.created_at}</Typography>
              <Typography variant="body1">{comment.body}</Typography>
            </Paper>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  getComments = () => {
    api.getComments(this.props.articleId).then(comments => {
      this.setState({
        comments
      });
    });
  };
}

Comments.propTypes = {
  commentCount: PropTypes.number.isRequired,
  articleId: PropTypes.number.isRequired
};

export default Comments;
