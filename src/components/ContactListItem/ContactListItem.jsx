import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/contactsOperations';
import { Item } from './ContactListItem.styled';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const id = contact.id;

    // State to manage editing mode and form inputs
    const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(contact.name);
    const [number, setNumber] = useState(contact.number);
  
    const handleEditToggle = () => {
      setIsEditing(!isEditing);
    };
  
    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateContact({ id, contact: { name, number } }));
      setIsEditing(false); // Close the edit form after updating
    };

    return (
      <Item key={id}>
        {isEditing ? (
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
            <button type="submit">Save</button>
            <button type="button" onClick={handleEditToggle}>Cancel</button>
          </form>
        ) : (
          <>
            {contact.name}: {contact.number}
            <button type="button" onClick={handleEditToggle}>
              Edit
            </button>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </button>
          </>
        )}
      </Item>
    );
  };

export default ContactListItem;
