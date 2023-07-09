
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactsSlice';
import { getContactsList } from 'redux/selectors';

import css from './ContactForm.module.css';

export const ContactForm = ( ) => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContactsList);

    const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const nameImput = e.target.elements.name.value;
    const number = e.target.elements.number.value;

    if (contacts.some(({ name }) => name === nameImput)) {
        return alert(`${nameImput} is already in contacts`);
    }

    dispatch(addContact(nameImput, number));
    form.reset();
    };


   
    
    return (
        <form className={css.form} onSubmit={handleSubmit}>
        <input className={css.text}
            type="text"
            name="name"
            placeholder="Name"
            value={contacts.name}
            required
        />
        <input className={css.text}
            type="tel"
            name="number"
            placeholder="Phone number"
            value={contacts.name}
            required
        />
        <button className={css.button} type="submit">Add Contact</button>
        </form>
    )
    }
