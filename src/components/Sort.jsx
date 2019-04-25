import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, NativeSelect } from '@material-ui/core';

const styles = () => ({
  root: {
    display: 'flex'
  }
});

const Sort = props => {
  const { classes, sortBy, handleChange } = props;
  return (
    <div className={classes.root}>
      <FormControl>
        <InputLabel htmlFor="sort-by">sort by</InputLabel>
        <NativeSelect
          value={sortBy}
          onChange={handleChange('sortBy')}
          inputProps={{ id: 'sort-by' }}
        >
          {[
            { display: 'date', name: 'created_at' },
            { display: 'author', name: 'author' },
            { display: 'title', name: 'title' },
            { display: 'votes', name: 'votes' },
            { display: 'comments', name: 'comment_count' }
          ].map(item => {
            return (
              <option key={item.name} value={item.name}>
                {item.display}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
    </div>
  );
};

Sort.propTypes = {
  sortBy: PropTypes.string.isRequired,
  // sortOrder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
  // updateSortOrder: PropTypes.func.isRequired
};

export default withStyles(styles)(Sort);
