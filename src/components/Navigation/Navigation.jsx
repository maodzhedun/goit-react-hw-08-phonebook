import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { ColorModeButton } from 'components/ui/color-mode';
import { Link, Flex } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      p={4}
      mb={4}
      boxShadow={'md'}
    >
      <nav style={{ display: 'flex', gap: '40px' }}>
        <Link to="/" as={NavLink}  mr={'auto'}>
          Home
        </Link>
        {isLoggedIn && (
          <Link to="/contacts" as={NavLink}>
            Contacts
          </Link>
        )}
      </nav>
      <ColorModeButton />
    </Flex>
  );
};
