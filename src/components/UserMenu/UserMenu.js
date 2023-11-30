import { useDispatch } from 'react-redux';
import { logOut } from 'redux/Auth/Operations';
import { useAuth } from 'hooks';
import { Button } from '@chakra-ui/react'
import css from './UserNenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper} >
      <p className={css.username}>Welcome, {user.name}</p>
      <Button bg='#7a8b8b' p={4} color={"white"} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
