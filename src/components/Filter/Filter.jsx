import { useSelector, useDispatch } from 'react-redux';
import { setFilter, selectFilter } from '../../redux/contacts/filterSlice';
// import { Filtered } from './Filter.styled';
import {
  Box,
  Field,
  Input,
} from '@chakra-ui/react';

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <Box
      p={4} 
      borderWidth="1px" 
      borderRadius="lg" 
      boxShadow="sm" 
      maxWidth="md" 
      mx="auto" 
      mb={6} 
    >
      <Field.Root id="filter">
        <Field.Label>Find contacts by name</Field.Label>
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={handleFilter}
          placeholder="Search contacts..."
          borderRadius="md"
        />
      </Field.Root>
    </Box>
  );
};

export default Filter;
