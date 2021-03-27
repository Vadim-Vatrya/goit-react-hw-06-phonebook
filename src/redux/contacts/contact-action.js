import { createAction } from '@reduxjs/toolkit';
import shortid from 'shortid';
// import types from './contact-types';

export const formSubmitHandler = createAction('contact/formSubmitHandler', ({ name, number }) => {
  return {
      payload: {
          id: shortid.generate(),
          name,
          number
      },
  };
})

// const   formSubmitHandler = ({ name, number }) => ({
//   type: types.ADD,
//   payload: {
//     id: shortid.generate(),
//     name,
//     number,
// }
// });

export const deleteContact = createAction('contact/deleteContact');

// const deleteContact = (id) => ({
//   type: types.DELETE,
//   payload: id,
// });

export const changeFilter = createAction('contact/changeFilter');

// const changeFilter = value => ({
//   type: 'CHANGE_FILTER',
//   payload: value,
// });


