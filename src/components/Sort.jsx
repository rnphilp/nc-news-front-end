import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl,
  InputLabel,
  NativeSelect,
  IconButton
} from '@material-ui/core';
import {
  ArrowUpwardRounded as ArrowUpwardIcon,
  ArrowDownwardRounded as ArrowDownwardIcon
} from '@material-ui/icons';

const styles = () => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-end'
  }
});

const Sort = props => {
  const {
    classes,
    sortBy,
    handleChange,
    sortAsc,
    toggleSortOrder,
    sortByOptions
  } = props;
  return (
    <div className={classes.root}>
      <FormControl className={classes.FormControl}>
        <InputLabel htmlFor="sort-by">sort by</InputLabel>
        <NativeSelect
          value={sortBy}
          onChange={handleChange('sortBy')}
          inputProps={{ id: 'sort-by' }}
        >
          {sortByOptions.map(item => {
            return (
              <option key={item.name} value={item.name}>
                {item.display}
              </option>
            );
          })}
        </NativeSelect>
      </FormControl>
      <IconButton aria-label="Change sort order" onClick={toggleSortOrder}>
        {sortAsc ? <ArrowUpwardIcon /> : <ArrowDownwardIcon />}
      </IconButton>
    </div>
  );
};

Sort.propTypes = {
  sortBy: PropTypes.string.isRequired,
  sortAsc: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  toggleSortOrder: PropTypes.func.isRequired,
  sortByOptions: PropTypes.arrayOf(PropTypes.object)
};

export default withStyles(styles)(Sort);
