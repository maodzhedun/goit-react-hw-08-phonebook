import { createSlice } from '@reduxjs/toolkit';
// import { fetchContacts, addContact, deleteContact } from "./contactsOperations";

const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',

  initialState: contactsInitialState,
  extraReducers: builder => {
    builder
      .addCase('contacts/fetchContacts/pending', state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase('contacts/fetchContacts/fulfilled', (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
        console.log('Contacts stored in Redux:', action.payload);
      })
      .addCase('contacts/fetchContacts/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase('contacts/addContact/pending', state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase('contacts/addContact/fulfilled', (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase('contacts/addContact/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase('contacts/deleteContact/pending', state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase('contacts/deleteContact/fulfilled', (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(item => item.id !== action.payload.id);
      })
      .addCase('contacts/deleteContact/rejected', (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
  addContactSuccess,
  deleteContactSuccess,
} = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;

// Selectors
export const selectContactsState = state => state.contacts; //  {items, isLoading, error}
export const selectContacts = state => state.contacts.items;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;

// const contactsSlice = createSlice({
//   name: 'contacts',

//   initialState: contactsInitialState,
//   reducers: {
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//       console.log('Contacts stored in Redux:', action.payload);
//     },
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//     addContactSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(action.payload);
//     },
//     deleteContactSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(item => item.id !== action.payload);
//     },
//   },
// });

// export const {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
//   addContactSuccess,
//   deleteContactSuccess,
// } = contactsSlice.actions;

// export const contactsReducer = contactsSlice.reducer;
