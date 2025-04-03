import { RiContactsFill, RiPhoneFill } from "react-icons/ri"
import css from './Contact.module.css'
import { deleteContact } from "../../redux/contactsOps"
import { useDispatch } from "react-redux"
export default function Contact({ item: { id, name, number } })
{
    const dispatch = useDispatch();
    const onDelete = cid => {
        dispatch(deleteContact(cid));
    }
    return (
        <>
            <div className={css.wrapper}>
                <p className={css.description}><RiContactsFill />{name}</p>
                <p className={css.description}><RiPhoneFill />{number}</p>
            </div>
            <button type="button" onClick={() => onDelete(id)}>Delete</button>
        </>
    );
}