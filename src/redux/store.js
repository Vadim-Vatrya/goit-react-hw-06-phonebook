import { createStore,combineReducers } from "redux";

const rootReduser = combineReducers({
    contacts: contactsReduser
});

const store = createStore(rootReduser, composeWithDevTools());