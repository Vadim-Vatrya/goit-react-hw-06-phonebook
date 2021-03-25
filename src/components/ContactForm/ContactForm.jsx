import { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../Button'

import styles from './ContactForm.module.scss'


class ContactForm extends Component {

   

  state = {
    name: '',
    number: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={styles.form} onSubmit={this.handleSubmit} >
        <label className={styles.formLabel}>
          Name
          <input
            type="text"
            value={name}
            name="name"
            className={styles.formInput}
            placeholder="Enter name"
            onChange={this.handleChange}
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
            onChange={this.handleChange}
          />
        </label>
        <Button />
      </form>
    );
  }
}



ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;