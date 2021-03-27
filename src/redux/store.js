// import { combineReducers } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsReducer from './contacts/contact-reducer';

const contactsPersistConfig = {
  key: 'contacts',
  version: 1,
  storage,
  blacklist: ['filter'], 
};

export const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, contactsReducer),
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER], 
    },
  }),
});

export const persistor = persistStore(store);

// export default { store, persistor };




// export default { store, persistor };


// const rootReducer = combineReducers({
//     contacts: contactsReduser
// });


// const store = createStore(rootReducer, composeWithDevTools()); // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),

// export default store;