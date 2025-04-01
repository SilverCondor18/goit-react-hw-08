import css from './ContactList.module.css'
import Contact from '../Contact/Contact'
import { useSelector } from 'react-redux';

export default function ContactList()
{
    const contacts = useSelector(state => state.contacts.items);
    const filter = useSelector(state => state.filters.name);
    return (
        <ul className={css.list}>
            {contacts.filter(c => c.name.toLowerCase().includes(filter.trim().toLowerCase())).map(contact => (
                <li key={contact.id} className={css.item}>
                    <Contact item={contact} />
                </li>
            ))}
        </ul>
    );
}