import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography, Link, Chip, Badge } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import {
  HowToVoteRounded as VotesIcon,
  CommentRounded as CommentIcon
} from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSlackHash } from '@fortawesome/free-brands-svg-icons';

import { Link as ReachLink } from '@reach/router';

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 2
  },
  Paper: {
    padding: theme.spacing.unit * 3
  },
  Chip: {
    marginTop: theme.spacing.unit * 1,
    marginBottom: theme.spacing.unit * 1
  },
  margin: {
    margin: theme.spacing.unit * 2
  }
});

const ArticleCard = props => {
  const { article, classes, navigate } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.Paper}>
        <Link component={ReachLink} to={`${article.article_id}`}>
          <Typography button="true" variant="h5" component="h3">
            {article.title}
          </Typography>
        </Link>
        <Chip
          icon={<FontAwesomeIcon icon={faSlackHash} />}
          label={article.topic}
          onClick={() => navigate(`/articles/?topic=${article.topic}`)}
          className={classes.Chip}
        />
        <Typography component="p">{article.author}</Typography>
        <Typography component="p">{article.created_at}</Typography>
        <Badge
          className={classes.margin}
          badgeContent={article.votes}
          color="primary"
          showZero
        >
          <VotesIcon />
        </Badge>
        <Badge
          className={classes.margin}
          badgeContent={article.comment_count}
          color="primary"
          showZero
        >
          <CommentIcon />
        </Badge>
      </Paper>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
};

export default withStyles(styles)(ArticleCard);
