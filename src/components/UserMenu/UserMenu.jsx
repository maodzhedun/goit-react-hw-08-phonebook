import React from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/authOperations';
import css from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <p className={css.userName}>Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(handleLogout)}>
        Logout
      </button>
    </div>
  );
};
