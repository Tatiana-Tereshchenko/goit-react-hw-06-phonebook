
import { useDispatch, useSelector } from 'react-redux';
import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

import { addContact, deleteContact } from '../redux/contactsSlice';
import { setContactsFilter } from '../redux/filtersSlice';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { Filter } from './Filter/Filter';
import css from './App.module.css';



export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
   const [name, setName] = useState('');
  const [number, setNumber] = useState('');
 
  const filter = useSelector(getFilter);

  const handleAddContact = () => {
  const isDuplicate = contacts.find(
    (contact) => contact.name.toLowerCase() === name.toLowerCase()
  );

  if (isDuplicate ) {
    alert(`${name} is already in contacts`);
    return;
  }

  const newContact = {
    id: nanoid(),
    name: name.trim(),
    number: number.trim(),
  };
  dispatch(addContact(newContact));
  setName('');
  setNumber('');
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
