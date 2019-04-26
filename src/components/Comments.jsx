import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Typography, Paper } from '@material-ui/core';
import * as api from '../api';
import { withStyles } from '@material-ui/core/styles';
import Sort from './Sort';

class Comments extends Component {
  state = {
    comments: [],
    sortBy: 'created_at',
    sortAsc: false
  };

  render() {
    const { commentCount } = this.props;
    const { comments, sortBy, sortAsc } = this.state;
    const sortByOptions = [
      { display: 'date', name: 'created_at' },
      { display: 'author', name: 'author' },
      { display: 'votes', name: 'votes' }
    ];
    return (
      <div>
        <Typography variant="h6">
          {`${commentCount} Comment${commentCount > 1 && 's'}`}
        </Typography>
        <Sort
          sortByOptions={sortByOptions}
          sortBy={sortBy}
          sortAsc={sortAsc}
          handleChange={this.handleChange}
          toggleSortOrder={this.toggleSortOrder}
        />
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

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  toggleSortOrder = () => {
    this.setState(state => ({
      sortAsc: !state.sortAsc
    }));
  };
}

Comments.propTypes = {
  commentCount: PropTypes.number.isRequired,
  articleId: PropTypes.number.isRequired
};

export default withStyles({})(Comments);
