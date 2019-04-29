import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { DeleteRounded as DeleteIcon } from '@material-ui/icons';
import classNames from 'classnames';
import UserContext from './context/UserContext';

const styles = theme => ({
  Paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit
  },
  colorBackground: {
    backgroundColor: theme.palette.primary.light
  }
});

const CommentCard = props => {
  const { comment, classes, deleteComment } = props;
  const username = useContext(UserContext).user.username || '';
  const isCurrentUser = comment.author === username;
  return (
    <div>
      <Paper
        className={classNames(classes.Paper, {
          [classes.colorBackground]: isCurrentUser
        })}
      >
        {isCurrentUser && (
          <IconButton onClick={deleteComment(comment.comment_id)}>
            <DeleteIcon />
          </IconButton>
        )}
        <Typography variant="body2">{comment.author}</Typography>
        <Typography variant="body2">Votes: {comment.votes}</Typography>
        <Typography variant="body2">{comment.created_at}</Typography>
        <Typography variant="body1">{comment.body}</Typography>
      </Paper>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object.isRequired,
  deleteComment: PropTypes.func.isRequired
};

export default withStyles(styles)(CommentCard);
