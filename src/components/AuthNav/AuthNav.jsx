import React from 'react';
import { NavLink } from 'react-router-dom';
// import css from './AuthNav.module.css';
import {Link,  Flex } from '@chakra-ui/react';

export const AuthNav = () => {
  return (
    <Flex 
    as="nav"
    align="center"
    justify="space-between"
    p={4}
    mb={4}
    boxShadow={'md'}
    >
      <Link as={NavLink} to="/register">
        Register
      </Link>
      <Link as={NavLink} to="/login">
        Log In
      </Link>
    </Flex>
  );
};
