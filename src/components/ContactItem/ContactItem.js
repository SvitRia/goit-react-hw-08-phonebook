
// import { ListItem, BtnTrash } from './ContactItem.styled';
import {
    Tag,

} from '@chakra-ui/react';
import { Button,  } from '@chakra-ui/react'

import { HiTrash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';

import { deleteContact } from 'redux/operations';

export const ContactItem = (({ contact: { id, name, number }}) => {
    const dispatch = useDispatch();
    return (
            <Tag>
                <span>{name}</span>
                <span>{number}</span>
                <Button type="button" onClick={() => dispatch(deleteContact(id))}><HiTrash/></Button>
            </Tag>
        )
})


