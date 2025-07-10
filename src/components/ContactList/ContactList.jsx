import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/contacts/filterSlice';
import ContactListItem from 'components/ContactListItem/ContactListItem';
// import { List } from './ContactList.styled';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { ListRoot } from '@chakra-ui/react';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  if (!contacts.length) return <div>Нет контактов</div>;

  return (
    <ListRoot>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </ListRoot>
  );
};

export default ContactList;
