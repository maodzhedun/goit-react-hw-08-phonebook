import { useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filterSlice';
import ContactListItem from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';
import { selectContacts } from '../../redux/contactSlice';

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log('contacts:', contacts);
  const filter = useSelector(selectFilter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
  console.log('visibleContacts', visibleContacts);
  if (!contacts.length) return <div>Нет контактов</div>;

  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem key={contact.id} contact={contact} />
      ))}
    </List>
  );
};

export default ContactList;
