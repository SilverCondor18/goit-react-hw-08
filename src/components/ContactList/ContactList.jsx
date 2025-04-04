import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/contactsSlice';

export default function ContactList()
{
    const contacts = useSelector(selectVisibleContacts);
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