
import { useDispatch, useSelector } from 'react-redux';
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setContactsFilter } from '../redux/filtersSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import css from './App.module.css';



export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts);
  const filter = useSelector((state) => state.filter);

  const handleAddContact = (newContact) => {
    const isDuplicate = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`Contact with name ${newContact.name} already exists.`);
    } else {
      dispatch(addContact(newContact));
    }
  };
  const handleFilterChange = (event) => {
    dispatch(setContactsFilter(event.target.value));
  };
  
  
  const handleDeleteContact = (contactId) => {
    dispatch(deleteContact(contactId));
      };

  return (
    <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={handleAddContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter value={filter} onChange={handleFilterChange} />
        <ContactList contacts={contacts} filter={filter} onDeleteContact={handleDeleteContact} />
      </div>
  )
  };
