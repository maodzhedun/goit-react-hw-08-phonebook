import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOperations';
import { Item } from './ContactListItem.styled';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const id = contact.id;

  return (
    <Item key={id}>
      {contact.name}: {contact.number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </Item>
  );
};

export default ContactListItem;
