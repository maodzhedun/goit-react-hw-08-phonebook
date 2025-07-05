import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addContactSuccess,
//   deleteContactSuccess,
// } from './contactSlice';

axios.defaults.baseURL = 'https://6861054d8e7486408444ab24.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const response = await axios.get('/contacts');

//     dispatch(fetchingSuccess(response.data));
//     console.log(response.data);
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    const response = await axios.get('/contacts');
    return response.data;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async contact => {
    const response = await axios.post('/contacts', contact);
    return response.data;
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async id => {
    const response = await axios.delete(`/contacts/${id}`);
    return response.data;
  }
);

// import axios from 'axios';
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addContactSuccess,
//   deleteContactSuccess,
// } from './contactSlice';

// axios.defaults.baseURL = 'https://6861054d8e7486408444ab24.mockapi.io';

// export const fetchContacts = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const response = await axios.get('/contacts');

//     dispatch(fetchingSuccess(response.data));
//     console.log(response.data);
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

// export const addContact = contact => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.post('/contacts', contact);

//     dispatch(addContactSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };

// export const deleteContact = id => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());
//     const response = await axios.delete(`/contacts/${id}`);

//     dispatch(deleteContactSuccess(response.data));
//   } catch (e) {
//     dispatch(fetchingError(e.message));
//   }
// };
