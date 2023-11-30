import { useSelector } from 'react-redux';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { selectFilteredContacts } from 'redux/selectors';
import {
  ListItem,
  UnorderedList,
} from '@chakra-ui/react'

export const ContactList = (() => {
  
   
    const contacts = useSelector(selectFilteredContacts);

    return (
            <UnorderedList>
                <ListItem>
                    {contacts.map(item => (<li key={item.id}> <ContactItem
                        contact = {item} />
                    </li>) 
                )}
                </ListItem>
            </UnorderedList>
        )
})

