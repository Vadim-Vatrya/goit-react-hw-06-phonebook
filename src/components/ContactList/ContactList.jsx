import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactList.module.scss';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.listItem}>
            <span className={styles.name}>{name}:</span>
            <span className={styles.number}>{number}</span>
            <button className={styles.deleteButton} onClick={() => onDeleteContact(id)}>
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    }),
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default  ContactList;