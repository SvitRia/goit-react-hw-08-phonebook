import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/Operations';

import { Formik, Field } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from "@chakra-ui/react";

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleLoginSubmit = ({ email, password }, { resetForm }) => {
    // e.preventDefault();
    // const form = e.currentTarget;
    dispatch(
      logIn({
        email,
        password
      })
    );
    resetForm();
  };
 return (
    <Flex bg="#b4cdcd" align="center" justify="center" h="100vh">
      <Box bg="white" w="40vw" p={6} rounded="md" >
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={handleLoginSubmit
          }
        >
          {({ handleSubmit, errors, touched }) => (
            <form onSubmit={handleSubmit}>
              <VStack spacing={4} align="flex-start">
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
               
                <Button type="submit" colorScheme="purple" width="full">
                  Login
                </Button>
              </VStack>
            </form>
          )}
        </Formik>
      </Box>
    </Flex>
  );
}

