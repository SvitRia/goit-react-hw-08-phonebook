import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/Operations';
// import css from './RegisterForm.module.css';
import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleRegistreSubmit = ({ name, email, password }, { resetForm }) => {
    // e.preventDefault();
    // const form = e.currentTarget;
    dispatch(
      register({
        name,
        email,
        password
      })
    );
    resetForm();
  };

  return (
    <Flex bg="bisque_lite" align="center" justify="center" h="100vh">
       <Box bg="white" w="40vw" p={6} rounded="md" >
        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            rememberMe: false
          }}
          onSubmit={handleRegistreSubmit}
          // onSubmit={(values) => {
          //   console.log(values)
          //   alert(JSON.stringify(values, null, 2));
          // }}
        >
          {( { handleSubmit ,errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
                 <FormControl>
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <Field
                    as={Input}
                    id="name"
                    name="name"
                    type="name"
                    variant="filled"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="email"
                    variant="filled"
                  />
                </FormControl>
                <FormControl isInvalid={!!errors.password && touched.password}>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type="password"
                    variant="filled"
                    validate={(value) => {
                      let error;

                      if (value.length < 6) {
                        error = "Password must contain at least 6 characters";
                      }

                      return error;
                    }}
                  />
                  <FormErrorMessage>{errors.password}</FormErrorMessage>
                </FormControl>
                <Field
                  as={Checkbox}
                  id="rememberMe"
                  name="rememberMe"
                  colorScheme="purple"
                >
                  Remember me?
                </Field>
                <Button type="submit" colorScheme="purple" width="full">
                 Register me
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
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




  