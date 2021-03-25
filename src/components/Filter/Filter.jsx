import React from 'react';
import PropTypes from 'prop-types';

import styles from './Filter.module.scss'

const Filter = ({ value, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="search"
      className={styles.input}
          ></input>
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;