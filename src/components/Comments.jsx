import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper, Fab, TextField, Button } from '@material-ui/core';
import { AddRounded as AddIcon } from '@material-ui/icons';
import * as api from '../api';
import { withStyles } from '@material-ui/core/styles';
import Sort from './Sort';
import UserContext from './context/UserContext';
import classNames from 'classnames';
import CommentCard from './CommentCard';

const styles = theme => ({
  root: {
    maxWidth: '500px'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: theme.spacing.unit * 2
  },
  headerButton: {
    display: 'flex',
    alignItems: 'center'
  },
  headerText: {
    marginLeft: theme.spacing.unit
  },
  Paper: {
    margin: theme.spacing.unit * 2,
    padding: theme.spacing.unit
  },
  colorBackground: {
    backgroundColor: theme.palette.primary.light
  },
  commentForm: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  textField: {
    flexGrow: 1
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});
class Comments extends Component {
  state = {
    comments: [],
    sortBy: 'created_at',
    sortAsc: false,
    postCommentOpen: false,
    commentBody: ''
  };

  static contextType = UserContext;

  render() {
    const { commentCount, classes } = this.props;
    const {
      comments,
      sortBy,
      sortAsc,
      postCommentOpen,
      commentBody
    } = this.state;

    const { loggedIn } = this.context;
    const username = this.context.user.username || '';

    const sortByOptions = [
      { display: 'date', name: 'created_at' },
      { display: 'author', name: 'author' },
      { display: 'votes', name: 'votes' }
    ];
    return (
      <div className={classes.root}>
        <div className={classes.header}>
          <div className={classes.headerButton}>
            <Fab
              color="primary"
              aria-label="Add new comment"
              className={classes.fab}
              size="small"
              onClick={this.openPostComment}
              disabled={!loggedIn}
            >
              <AddIcon />
            </Fab>
            <Typography variant="h6" className={classes.headerText}>
              {`${commentCount} Comment${commentCount > 1 && 's'}`}
            </Typography>
          </div>
          <Sort
            sortByOptions={sortByOptions}
            sortBy={sortBy}
            sortAsc={sortAsc}
            handleChange={this.handleChange}
            toggleSortOrder={this.toggleSortOrder}
          />
        </div>
        {postCommentOpen && (
          <Paper className={classNames(classes.Paper, classes.commentPost)}>
            <form onSubmit={this.postComment} className={classes.commentForm}>
              <TextField
                id="outlined-multiline-flexible"
                label={`${username}'s comment`}
                multiline
                rows="4"
                rowsMax="20"
                value={commentBody}
                onChange={this.handleChange('commentBody')}
                className={classes.textField}
                margin="normal"
                variant="outlined"
              />
              <div className={classes.buttonContainer}>
                <Button
                  color="default"
                  variant="contained"
                  onClick={this.postComment}
                >
                  submit
                </Button>
              </div>
            </form>
          </Paper>
        )}
        {comments.map(comment => {
          return (
            <CommentCard
              comment={comment}
              key={comment.comment_id}
              deleteComment={this.deleteComment}
            />
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  componentDidUpdate(prevProps, prevState) {
    const { articleId } = this.props;
    if (prevState.sortBy !== this.state.sortBy) this.getComments(articleId);
    if (prevState.sortAsc !== this.state.sortAsc) this.getComments(articleId);
  }

  getComments = () => {
    const { sortBy, sortAsc } = this.state;
    const queries = {
      sort_by: sortBy,
      order: sortAsc ? 'asc' : 'desc'
    };
    api
      .getComments(this.props.articleId, queries)
      .then(comments => {
        this.setState({
          comments
        });
      })
      .catch(err => {
        this.props.navigate(`/error/${err.response.status}`, { replace: true });
      });
  };

  openPostComment = () => {
    this.setState({
      postCommentOpen: true
    });
  };

  postComment = () => {
    const { articleId } = this.props;
    const { commentBody } = this.state;
    const username = this.context.user.username;
    const body = { username, body: commentBody };
    api
      .postComment(articleId, body)
      .then(newComment => {
        this.setState(state => ({
          comments: [newComment, ...state.comments],
          postCommentOpen: false
        }));
      })
      .catch(err => {
        this.props.navigate(`/error/${err.response.status}`);
      });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toggleSortOrder = () => {
    this.setState(state => ({
      sortAsc: !state.sortAsc
    }));
  };

  deleteComment = commentId => event => {
    this.setState(state => ({
      comments: state.comments.filter(
        comment => comment.comment_id !== commentId
      )
    }));
    api.deleteComment(commentId).catch(err => {
      this.props.navigate(`/error/${err.response.status}`);
    });
  };
}

Comments.propTypes = {
  commentCount: PropTypes.number.isRequired,
  articleId: PropTypes.number.isRequired,
  navigate: PropTypes.func.isRequired
};

export default withStyles(styles)(Comments);
