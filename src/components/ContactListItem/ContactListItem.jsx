import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  updateContact,
} from '../../redux/contacts/contactsOperations';
// import { Item } from './ContactListItem.styled';
import {
  ListItem, 
  Text, 
  Button, 
  HStack, 
  Input, 
  Box, 
  VStack,
  Field, 
} from '@chakra-ui/react';

const ContactListItem = ({ contact }) => {
  const dispatch = useDispatch();
  const id = contact.id;

  // State to manage editing mode and form inputs
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
    if (isEditing) {
      setName(contact.name);
      setNumber(contact.number);
    }
  };

  const handleUpdate = e => {
    e.preventDefault();
    dispatch(updateContact({ id, contact: { name, number } }));
    setIsEditing(false); // Close the edit form after updating
  };

  return (
    <ListItem
      key={id}
      p={3} 
      borderWidth="1px" 
      borderRadius="md" 
      mb={2} s
      display="flex" 
      justifyContent="space-between" 
      alignItems="center" 
      flexWrap="wrap" 
    >
      {isEditing ? (
        <Box onSubmit={handleUpdate} width="full" as="form" >
          <VStack spacing={2} align="stretch">
            <Field.Root id={`edit-name-${id}`}>
              <Field.Label>Name</Field.Label>
              <Input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                placeholder="Name"
                borderRadius="md"
              />
            </Field.Root>
            <Field.Root id={`edit-number-${id}`}>
              <Field.Label>Number</Field.Label>
              <Input
                type="text"
                value={number}
                onChange={e => setNumber(e.target.value)}
                required
                placeholder="Number"
                borderRadius="md"
              />
            </Field.Root>
            <HStack spacing={2} justifyContent="flex-end" width="full">
              {' '}
              {/* Buttons for save/cancel */}
              <Button
                type="submit"
                colorScheme="blue"
                size="sm"
                borderRadius="md"
              >
                Save
              </Button>
              <Button
                type="button"
                onClick={handleEditToggle}
                size="sm"
                variant="outline"
                borderRadius="md"
              >
                Cancel
              </Button>
            </HStack>
          </VStack>
        </Box>
      ) : (
        <>
          <Text fontSize="lg" fontWeight="medium" flex="1" mr={4}>
            {' '}
            {/* Display contact info */}
            {contact.name}: {contact.number}
          </Text>
          <HStack spacing={2}>
            {' '}
            {/* Buttons for edit/delete */}
            <Button
              type="button"
              onClick={handleEditToggle}
              size="sm"
              colorScheme="teal"
              variant="outline"
              borderRadius="md"
            >
              Edit
            </Button>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(id))}
              size="sm"
              colorScheme="red"
              borderRadius="md"
            >
              Delete
            </Button>
          </HStack>
        </>
      )}
    </ListItem>
  );
};

export default ContactListItem;
