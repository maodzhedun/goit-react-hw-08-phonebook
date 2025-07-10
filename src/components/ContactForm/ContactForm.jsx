import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/contactsOperations';
// import { FormEl } from './ContactForm.styled';
import { selectContacts } from '../../redux/contacts/contactsSlice';
import { Box, Button, Field, Input, VStack } from '@chakra-ui/react';
import { Toaster, toaster } from 'components/ui/toaster';


const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();


  const handleInputChange = event => {
    const { name, value } = event.target;

    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (contacts.find(contact => contact.name === name)) {
      // Use Chakra UI Toast for notifications instead of alert()
      toaster.create({
        title: 'Contact already exists.',
        description: `${name} is already in your contacts.`,
        status: 'warning',
        type: 'warning',
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
      return;
    }

    dispatch(addContact({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <Box
      as="form" 
      onSubmit={handleSubmit}
      p={8} 
      borderWidth={1} 
      borderRadius="lg" 
      boxShadow="lg" 
      maxWidth="md" 
      mx="auto" 
      mt={10} 
      mb={8} 
    >
      <VStack spacing={4} align="stretch">
        <Field.Root id="contactName">
          {' '}
          {/* Unique ID for this field */}
          <Field.Label>Name</Field.Label>
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleInputChange}
          />
        </Field.Root>
        <Field.Root id="contactNumber">
          {' '}
          {/* Unique ID for this field */}
          <Field.Label>Number</Field.Label>
          <Input
            type="text"
            name="number"
            value={number}
            required
            onChange={handleInputChange}
          />
        </Field.Root>
        <Button
          type="submit"
          colorScheme="teal" 
          size="lg" 
          mx="auto" 
          width="50%" 
          mt={4} 
          borderRadius="md" 
        >
          Add contact
        </Button>
        <Toaster />
      </VStack>
    </Box>
  );
};

export default ContactForm;
