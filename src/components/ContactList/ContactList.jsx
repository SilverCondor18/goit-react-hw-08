import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';

export default function ContactList()
{
    const contacts = useSelector(selectVisibleContacts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);
    return (
        <ul className={css.list}>
            {contacts.map(contact => (
                <li key={contact.id} className={css.item}>
                    <Contact item={contact} />
                </li>
            ))}
        </ul>
    );
}