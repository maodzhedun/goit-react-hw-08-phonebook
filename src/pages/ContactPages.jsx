import React from 'react';
import { ContainerApp } from 'components/App/App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';

import { useEffect } from 'react';

import { selectContacts, selectContactsState, selectError, selectIsLoading } from '../redux/contacts/contactsSlice';
import { fetchContacts } from '../redux/contacts/contactsOperations';

function ContactPages() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsState);
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log(contacts, items, isLoading, error);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerApp>
      <div>
        <title>ContactPages</title>
        <h1>Phonebook</h1>
        <ContactForm />
      </div>
      <div>
        <h2>Contacts</h2>
        <Filter />
        {isLoading && <p>Loading...</p>}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
        <ContactList />
      </div>
    </ContainerApp>
  );
}

export default ContactPages;
