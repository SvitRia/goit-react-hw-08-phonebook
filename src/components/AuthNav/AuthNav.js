import { NavLink } from "react-router-dom";
// import {
//   Breadcrumb,
//   BreadcrumbItem,
//   BreadcrumbLink,
// } from '@chakra-ui/react'

export const AuthNav = () => {
  return (
       <div>
      <NavLink  to="/register">
        Register
      </NavLink>
      <NavLink  to="/login">
        Log In
      </NavLink>
    </div>
  );
};
//     <Breadcrumb fontWeight='medium' fontSize='sm'>
//   <BreadcrumbItem>
//     <BreadcrumbLink to='/register'>Register</BreadcrumbLink>
//   </BreadcrumbItem>

//   <BreadcrumbItem>
//       <BreadcrumbLink to='/login'>Log In</BreadcrumbLink>
//   </BreadcrumbItem>

//     </Breadcrumb>
//     );
//  };
