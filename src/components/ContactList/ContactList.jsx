import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from '../ContactItem/ContactItem';
import { deleteContact } from 'redux/contactsSlice';
import css from './ContactList.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const handleDeleteClick = (contactId) => {
    dispatch(deleteContact(contactId));
  };

  const filteredContacts = contacts.filter((contact) => {
  if (typeof contact.name === 'string') {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  }
  return false;
});
    return (
      <ul className={css.item_contact}>
        {filteredContacts.map((contact) => (
          <ContactItem
            contact={contact}
            onDeleteClick={handleDeleteClick}
            key={contact.id}
          />
        ))}
      </ul>
    );
  }


