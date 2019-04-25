import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Link as ReachLink } from '@reach/router';

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
        <Link component={ReachLink} to={`${article.article_id}`}>
          <Typography button="true" variant="h5" component="h3">
            {article.title}
          </Typography>
        </Link>
        <Typography component="p">{article.author}</Typography>
        <Typography component="p">{article.created_at}</Typography>
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
