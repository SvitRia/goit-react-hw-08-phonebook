import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/Operations';
// import css from './RegisterForm.module.css';
import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  theme
} from "@chakra-ui/react";

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
const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rememberMe: false
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <form onSubmit={handleSubmit}>
          <VStack spacing={4} align="flex-start">
            <FormControl>
              <FormLabel htmlFor="name">Name</FormLabel>
              <Input
                id="name"
                name="name"
                type="name"
                variant="filled"
                // onChange={formik.handleChange}
                value={formik.values.name}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <Input
                id="email"
                name="email"
                type="email"
                variant="filled"
                // onChange={formik.handleChange}
                value={formik.values.email}
              />
            </FormControl>
            
            <FormControl>
              <FormLabel htmlFor="password">Password</FormLabel>
              <Input
                id="password"
                name="password"
                type="password"
                variant="filled"
                // onChange={formik.handleChange}
                value={formik.values.password}
              />
            </FormControl>
            <Checkbox
              id="rememberMe"
              name="rememberMe"
              // onChange={formik.handleChange}
              isChecked={formik.values.rememberMe}
              colorScheme="purple"
            >
              Remember me?
            </Checkbox>
            <Button type="submit" colorScheme={theme.colors.orange} width="full">
              Register
            </Button>
          </VStack>
        </form>
      </Box>
    </Flex>
  );
}
//   return (
//     <form  onSubmit={handleSubmit} autoComplete="on">
//       <label >
//         Username
//         <input type="text" name="name" />
//       </label>
//       <label >
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label >
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Register</button>
//     </form>
//   );
// };




  