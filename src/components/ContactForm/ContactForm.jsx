import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import shortId from'shortid';
import PropTypes from 'prop-types';

import {formSubmitHandler} from '../../redux/contacts/contact-action'
import Button from '../Button'

import styles from './ContactForm.module.scss'


const ContactForm = () => {

   
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    if (!name || !number) 
    return;


    const contactNames = contacts.map(contact => contact.name.toLowerCase());
    if (contactNames.includes(name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // const contact = {
    //       id: shortId.generate(),
    //       name,
    //       number,
    //     };
        dispatch(formSubmitHandler(name, number));
        setName('');
        setNumber('');
  };

    return (
      <form className={styles.form} onSubmit={handleSubmit} >
        <label className={styles.formLabel}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            className={styles.formInput}
            placeholder="Enter name"
            onChange={handleChange}
          />
        </label>
        <label className={styles.formLabel}>
          Number
          <input
            type="tel"
            value={number}
            name="number"
            className={styles.formInput}
            placeholder="Enter contact"
            onChange={handleChange}
          />
        </label>
        <Button />
      </form>
    );
  }




ContactForm.propTypes = {
  contacts: PropTypes.array.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;