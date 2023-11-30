import { useAuth } from 'hooks';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (

<Breadcrumb fontWeight='medium' fontSize='sm'>
  <BreadcrumbItem>
    <BreadcrumbLink href='/'>Home</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
    {isLoggedIn && (
      <BreadcrumbLink href='/contacts'>Contacts</BreadcrumbLink>)}
  </BreadcrumbItem>

    </Breadcrumb>
    );
 };
