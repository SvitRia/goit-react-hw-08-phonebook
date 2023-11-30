// import { useFormik } from "formik";
import { Formik, Field } from 'formik';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack,
  theme,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

// import * as Yup from 'yup';
// import "yup-phone";
// import { ErrMessage, StyledForm, StyledField, Label, BtnAdd } from './ContactForm.styled';

// const quizSchema = Yup.object().shape({
//   name: Yup.string().min(3, 'Too short!').required('This field is required!'),
//     number: Yup.string().matches(/^\d{2}-\d{2}-\d{3}$/, 'Must be in format: 000-000-0000').required('This field is required!')

// });

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const handleFormSubmit = ({ name, number }, { resetForm }) => {
    const hasContact = contacts.some(contact =>
      contact.name.toLowerCase().includes(name.toLowerCase())
    );

    if (hasContact) {
      resetForm();
      return alert(`WARNING! ${name} is already in contacts`);
    }
    dispatch(addContact({ name, number }));
    resetForm();
  };
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     number: "",
  //     },
  //   // validationSchema: { quizSchema },
  //   onSubmit:{handleFormSubmit},
  //   // onSubmit: (values) => {
  //   //   alert(JSON.stringify(values, null, 2));
  //   // },

  // });
  return (
    <Flex bg="gray.100" align="center" justify="center" h="100vh">
      <Box bg="white" p={6} rounded="md">
        <Formik
          initialValues={{
            name: '',
            number: '',
          }}
          onSubmit={handleFormSubmit}
        >
          <form onSubmit={handleFormSubmit}>
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
                <FormLabel htmlFor="number">Number (000-000-0000)</FormLabel>
                <Field
                  as={Input}
                  id="number"
                  name="number"
                  type="tel"
                  variant="filled"
                  placeholder="Phone number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                />
              </FormControl>

              <Button type="submit" colorScheme={theme.colors.add} width="full">
                Add Contact
              </Button>
            </VStack>
          </form>
        </Formik>
      </Box>
    </Flex>
  );
};

//   return (
//     <Formik
//       initialValues={{
//         name: '',
//         number: '',
//       }}
//       onSubmit={handleFormSubmit}
//       validationSchema={quizSchema}
//       >
//       <StyledForm>

//         <Label>
//           Name
//           <StyledField type="text" name="name" placeholder=" " />
//           <ErrMessage name="name" component="div" />
//         </Label>

//         <Label>
//           Number (000-000-0000)
//           <StyledField type="text" name="number" />
//           <ErrMessage name="number" component="div" />
//         </Label>

//         <BtnAdd type="submit">Add contact</BtnAdd>
//       </StyledForm>
//     </Formik>
//   );
// };

export default ContactForm;
