import { useAuth } from 'hooks';
import { NavLink } from
'react-router-dom';
import css from './Navigation.module.css';
// import {
//   Breadcrumb,
 
// } from '@chakra-ui/react'


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
     <nav  >
      <NavLink className={css.link}  to="/">
        Home /
      </NavLink>
      {isLoggedIn && (
        <NavLink className={css.linkactive} to="/contacts">
          Contacts 
        </NavLink>
      )}
    </nav>
  );
};


 
