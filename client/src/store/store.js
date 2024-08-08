import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice
  }
})


/*
https://redux.js.org/redux-toolkit/overview

configureStore(): 
- wraps createStore to provide simplified configuration 
  options and good defaults. It can automatically combine 
  your slice reducers, adds whatever Redux middleware you 
  supply, includes redux-thunk by default, and enables 
  use of the Redux DevTools Extension.



*/