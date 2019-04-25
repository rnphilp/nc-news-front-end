import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ArticleCard from './ArticleCard';
import * as api from './api';
import Sort from './Sort';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    'flex-direction': 'column',
    'justify-content': 'flex-start'
  }
});

class Articles extends Component {
  state = {
    articles: [],
    sortBy: 'date'
  };
  render() {
    const { articles, sortBy } = this.state;
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Sort sortBy={sortBy} handleChange={this.handleChange} />
        {articles.map(article => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getArticles();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy) this.getArticles();
  }

  getArticles = () => {
    const {
      location: { search }
    } = this.props;
    api.getArticles(search).then(({ articles }) => {
      this.setState({
        articles
      });
    });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
}

Articles.propTypes = {};

export default withStyles(styles)(Articles);
