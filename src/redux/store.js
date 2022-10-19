import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER} from "redux-persist";
import { authReducer } from './auth/slice';

import {contactsReducer} from './contacts/contactSlice';
import filtrReducer from "./contacts/filtersSlice"

const persistConfiguration = {
  key: "contacts",
  storage,
  whitelist: ['token'],
}


const persistContactReducers = persistReducer(persistConfiguration, contactsReducer);

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfiguration, authReducer),
    contacts: persistContactReducers,
    filter: filtrReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
}),
})

export const persistor = persistStore(store);


// import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import {contactsReducer} from './contacts/contactSlice';
// import { authReducer } from './auth/slice';
// import filtrReducer from "./contacts/filtersSlice"
// console.log(storage)
// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

// // Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// export const store = configureStore({
//   reducer: {
//     auth: persistReducer(authPersistConfig, authReducer),
//     contacts: contactsReducer,
//     filter: filtrReducer,
//   },
//   middleware,
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
