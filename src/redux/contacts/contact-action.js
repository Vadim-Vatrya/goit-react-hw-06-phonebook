import shortid from 'shortid';
import types from './contact-types';

const   formSubmitHandler = ({ name, number }) => ({
  type: types.ADD,
  payload: {
    id: shortid.generate(),
    name,
    number,
}
});

const deleteContact = (id) => ({
  type: types.DELETE,
  payload: id,
});


const changeFilter = value => ({
  type: 'CHANGE_FILTER',
  payload: value,
});


export {formSubmitHandler, deleteContact, changeFilter};

