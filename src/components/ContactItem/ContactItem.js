import { Box,Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react'
import { Button,  } from '@chakra-ui/react'

import { HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

export const ContactItem = (({ contact: { id, name, number }}) => {
    const dispatch = useDispatch();
    return (
    <Flex  w='100vw' m="20px" color='black'>
  <Box w='200px' >
    <Text>{name}</Text>
  </Box>
  <Box  w='500px'>
    <Text>{number} </Text>
  </Box>
  <Box flex='1' w='300px'>
    <Button type="button" bg='#b4cdcd' onClick={() => dispatch(deleteContact(id))}><HiTrash/></Button>
  </Box>
</Flex>
            // <Box w='100%' p={4}>
            //     <span>{name}</span>
            //     <span>  -      {number}   </span>
            //     <Button type="button" onClick={() => dispatch(deleteContact(id))}><HiTrash/></Button>
            // </Box>
        )
})


