
// import { ListItem, BtnTrash } from './ContactItem.styled';
import {
    Box

} from '@chakra-ui/react';
import { Button,  } from '@chakra-ui/react'

import { HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

export const ContactItem = (({ contact: { id, name, number }}) => {
    const dispatch = useDispatch();
    return (
            <Box w='100%' p={4}>
                <span>{name}</span>
                <span>{number}</span>
                <Button type="button" onClick={() => dispatch(deleteContact(id))}><HiTrash/></Button>
            </Box>
        )
})


