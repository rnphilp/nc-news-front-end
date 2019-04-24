import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';

class Comments extends Component {
  state = {
    comments: [
      {
        comment_id: 115,
        votes: 12,
        created_at: '2018-01-19T00:00:00.000Z',
        author: 'happyamy2016',
        body:
          'Neque dolor sint illum id consequuntur debitis qui nam eum. Nam adipisci similique consequatur officiis. Totam qui enim at iste dolorem ullam. Tenetur laudantium sed facilis aspernatur occaecati. Provident rerum quia consectetur et. Molestiae eligendi commodi.'
      },
      {
        comment_id: 272,
        votes: 17,
        created_at: '2017-09-26T00:00:00.000Z',
        author: 'tickle122',
        body:
          'Distinctio excepturi laboriosam eos aperiam quis amet eum animi minima. Officiis in quia. Est consequatur optio atque nostrum iusto impedit harum quod asperiores.'
      }
    ]
  };

  render() {
    const { comment_count } = this.props;
    const { comments } = this.state;
    return (
      <div>
        <Typography variant="h6">
          {`${comment_count} Comment${comment_count > 1 && 's'}`}
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
}

Comments.propTypes = {
  comment_count: PropTypes.number.isRequired
};

export default Comments;
