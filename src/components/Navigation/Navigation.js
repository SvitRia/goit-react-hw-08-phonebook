import { useAuth } from 'hooks';
import { NavLink } from
'react-router-dom';
import css from './Navigation. module.css';


export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
     <nav className={css.link}>
      <NavLink  to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink  to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};


 
