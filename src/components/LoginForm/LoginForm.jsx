import React from 'react';
import { logIn } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Box, Button, Field, Input, VStack } from '@chakra-ui/react';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    dispatch(logIn({ email, password }));
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
          size="lg" 
          mx="auto"
          width="50%" 
          mt={4} 
          borderRadius="md" 
        >
          Log In
        </Button>
      </VStack>
    </Box>
  );
};

export default LoginForm;
