 import { useFormik } from "formik";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  VStack
} from "@chakra-ui/react";
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
  const formik = useFormik({
    initialValues: {
      name: "",
      number: "",
      },
    // validationSchema: { quizSchema },
    // onSubmit: (values) => { handleFormSubmit({ name: values.name, number:values.number })},
   onSubmit:handleFormSubmit

  });
  return (
    <Flex bg="bisque_middle" align="center" justify="center" h="100vh">
      <Box bg="white" w="40vw" p={6} rounded="md">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4} align="flex-start">
              <FormControl>
                <FormLabel htmlFor="name">Name</FormLabel>
                <Input 
                  id="name"
                  name="name"
                  type="text"
                  variant="filled"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="number">Number (000-000-0000)</FormLabel>
                <Input 
                  id="number"
                  name="number"
                  type="text"
                  variant="filled"
                  placeholder="Phone number"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                />
              </FormControl>

              <Button  type="submit" bg="add" color="white" width="full">
                Add Contact
              </Button>
            </VStack>
          </form>
        
      </Box>
    </Flex>
  );
};


export default ContactForm;
