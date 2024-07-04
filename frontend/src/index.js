import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import siteContentSlice from './slice/siteContentSlice';
import { Provider } from 'react-redux';
import userSlice from './slice/userSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
  siteContent : siteContentSlice,
  user : userSlice,
  }
})

root.render(
  <Provider store={store}> 
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

