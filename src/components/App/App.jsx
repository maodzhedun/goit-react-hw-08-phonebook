import { ContainerApp } from './App.styled';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';
import ContactForm from 'components/ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectContactsState } from '../../redux/contactSlice';
import { selectIsLoading, selectError } from '../../redux/contactSlice';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOperations';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsState);
  const items  = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  console.log(contacts, items, isLoading, error)

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <ContainerApp>
      <div>
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
};

export default App;
