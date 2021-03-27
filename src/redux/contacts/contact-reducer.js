import {combineReducers } from 'redux';
import { createReducer} from "@reduxjs/toolkit";
import {formSubmitHandler, deleteContact, changeFilter} from './contact-action';

// import types from './counter-types';

const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const itemsReducer = createReducer(contacts, {
  [formSubmitHandler]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) => state.filter(({ id }) => id !== payload),
})

// const itemsReducer = (state=contacts, {type, payload}) => {

//   switch  (type) {
//     case types.ADD:
//     return [...state, payload];

//     case types.DELETE:
//     return state.filter(({ id }) => id !== payload);

//     default:
//        return state;
//   }
// };

export const itemsFilter = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});
// const itemsFilter = (state ='', {type, payload}) => {
//   switch (type) {
//           case types.CHANGE_FILTER:
//           return payload.trim();
      
//           default:
//           return state;
//          }
//         }

export default combineReducers({
  itemsReducer,
  itemsFilter,
});
        
