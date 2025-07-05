import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact} from '../../redux/contactsOperations';
import { FormEl } from './ContactForm.styled';
import { selectContacts } from '../../redux/contactSlice';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  console.log(contacts)

  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <FormEl>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </label>
        <label>
          Number
          <input
            type="text"
            name="number"
            value={number}
            required
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    </FormEl>
  );
};

export default ContactForm;
