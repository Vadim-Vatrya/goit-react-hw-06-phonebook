import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

import styles from './ContactList.module.scss';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter),
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={styles.listItem}>
            <span className={styles.name}>{name}:</span>
            <span className={styles.number}>{number}</span>
            <ButtonDelete id={id}/>
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