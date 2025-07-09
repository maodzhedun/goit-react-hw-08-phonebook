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
      as="form" // Render Box as a form element
      onSubmit={handleSubmit}
      autoComplete="off"
      p={8} // Padding around the form
      borderWidth={1} // Add a border
      borderRadius="lg" // Rounded corners
      boxShadow="lg" // Add a shadow
      maxWidth="md" // Limit max width
      mx="auto" // Center the form horizontally
      mt={10} // Margin top
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
          colorScheme="blue" // Use Chakra's color scheme
          mx="auto"
          size="lg" // Large button size
          width="50%" // Make button full width
          mt={4} // Margin top for spacing
          borderRadius="md" // Rounded corners for button
        >
          Register
        </Button>
      </VStack>
    </Box>
  );
};
