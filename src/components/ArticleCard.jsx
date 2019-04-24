import React from 'react';
import PropTypes from 'prop-types';
import { Paper, withStyles, Typography } from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex'
  }
});

const ArticleCard = props => {
  const { article, classes } = props;
  return (
    <div className={classes.root}>
      <Paper>
        <Typography variant="h5" component="h3">
          {article.title}
        </Typography>
        <Typography component="p">{article.author}</Typography>
        <Typography component="p">{article.topic}</Typography>
        <Typography component="p">Votes: {article.votes}</Typography>
        <Typography component="p">Comments: {article.comment_count}</Typography>
      </Paper>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired
};

export default withStyles(styles)(ArticleCard);
