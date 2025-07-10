import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Box, Button, Field, Input, VStack } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box
      as="form" 
      onSubmit={handleSubmit}
      autoComplete="off"
      p={8} 
      borderWidth={1} 
      borderRadius="lg" 
      boxShadow="lg" 
      maxWidth="md" 
      mx="auto" 
      mt={10} 
    >
      <VStack spacing={4} align="stretch">
        {' '}
        {/* Stack elements vertically with spacing */}
        <Field.Root id="name">
          <Field.Label>Username</Field.Label>
          <Input
            type="text"
            name="name"
            placeholder="Enter your name"
            borderRadius="md"
          />
        </Field.Root>
        <Field.Root id="email">
          <Field.Label>Email</Field.Label>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            borderRadius="md"
          />
        </Field.Root>
        <Field.Root id="password">
          <Field.Label>Password</Field.Label>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            borderRadius="md"
          />
        </Field.Root>
        <Button
          type="submit"
          colorScheme="blue" 
          mx="auto"
          size="lg" 
          width="50%" 
          mt={4} 
          borderRadius="md" 
        >
          Register
        </Button>
      </VStack>
    </Box>
  );
};
