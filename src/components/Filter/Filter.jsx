
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import {changeFilter} from '../../redux/contacts/contact-action';
import styles from './Filter.module.scss'

const Filter = () => {
  const value = useSelector(changeFilter);
  const dispatch = useDispatch();

  const inputChangeFilter = event => {
    const { value } = event.target.value;
    dispatch(changeFilter(value));
  };
 
  return (
    <>
    <label className={styles.label}>
      Find contacts by name
      <input
      type="text"
      value={value}
      onChange={inputChangeFilter}
      placeholder="search"
      className={styles.input}>
    
      </input>
    </label>
  </>
);
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;