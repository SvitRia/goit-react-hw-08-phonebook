import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

export const AuthNav = () => {
  return (
    <Breadcrumb fontWeight='medium' fontSize='sm'>
  <BreadcrumbItem>
    <BreadcrumbLink href='/register'>Register</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
      <BreadcrumbLink href='/login'>Log In</BreadcrumbLink>
  </BreadcrumbItem>

    </Breadcrumb>
    );
 };
