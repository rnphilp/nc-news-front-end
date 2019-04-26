import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link, Chip, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlackHash } from '@fortawesome/free-brands-svg-icons';

import { Link as ReachLink } from '@reach/router';

const styles = theme => ({
  root: {
    margin: '10px'
  }
});

const ArticleCard = props => {
  const { article, classes, navigate } = props;
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
        <Chip
          icon={<FontAwesomeIcon icon={faSlackHash} />}
          label={article.topic}
          onClick={() => navigate(`/articles/?topic=${article.topic}`)}
          className={classes.chip}
        />
        <Typography component="p">Votes: {article.votes}</Typography>
        <Typography component="p">Comments: {article.comment_count}</Typography>
      </Paper>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
};

export default withStyles(styles)(ArticleCard);
