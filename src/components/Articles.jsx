import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import * as api from '../api';
import Sort from './Sort';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'column',
    justifyContent: 'flex-start'
  },
  articles: {
    maxWidth: '750px'
  }
});

class Articles extends Component {
  state = {
    articles: [],
    sortBy: 'date',
    sortAsc: false
  };
  render() {
    const { articles, sortBy, sortAsc } = this.state;
    const { classes } = this.props;
    const sortByOptions = [
      { display: 'date', name: 'created_at' },
      { display: 'author', name: 'author' },
      { display: 'title', name: 'title' },
      { display: 'votes', name: 'votes' },
      { display: 'comments', name: 'comment_count' }
    ];
    return (
      <div className={classes.root}>
        <Sort
          sortByOptions={sortByOptions}
          sortBy={sortBy}
          handleChange={this.handleChange}
          toggleSortOrder={this.toggleSortOrder}
          sortAsc={sortAsc}
          className={classes.Sort}
        />
        <div className={classes.articles}>
          {articles.map(article => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) this.getArticles();
    if (prevState.sortAsc !== this.state.sortAsc) this.getArticles();
    if (prevProps.location.search !== this.props.location.search)
      this.getArticles();
  }

  getArticles = () => {
    const { sortBy, sortAsc } = this.state;
    const {
      location: { search }
    } = this.props;
    const queries = {
      sort_by: sortBy,
      order: sortAsc ? 'asc' : 'desc'
    };
    if (search) queries.topic = search.split('=')[1];
    api.getArticles(queries).then(({ articles }) => {
      this.setState({
        articles
      });
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

Articles.propTypes = {};

export default withStyles(styles)(Articles);
