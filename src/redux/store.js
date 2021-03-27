import { combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import {itemsReducer, itemsFilter} from './contacts/contact-reducer';


const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  ];

  const contactsReducer = combineReducers({
    items: itemsReducer,
    filter: itemsFilter
});

  const contactsPersistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
  };

 export const store = configureStore({
    reducer: {
      contacts: persistReducer(contactsPersistConfig, contactsReducer),
    },
    middleware,
  
    devTools: process.env.NODE_ENV === 'development',
  });

  export const persistor = persistStore(store);

// export default { store, persistor };


// const rootReducer = combineReducers({
//     contacts: contactsReduser
// });

// const store = createStore(rootReduser, composeWithDevTools());