import { RiContactsFill, RiPhoneFill } from "react-icons/ri"
import css from './Contact.module.css'
import { deleteContact, fetchContacts, updateContact } from "../../redux/contacts/operations"
import { useDispatch } from "react-redux"
import toast from "react-hot-toast";
import { useState } from "react";
import OnDeleteModal from "../OnDeleteModal/OnDeleteModal";
export default function Contact({ item: { id, name, number } })
{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dispatch = useDispatch();
    const onDelete = cid => {
        dispatch(deleteContact(cid)).unwrap()
            .then(() => toast.success(`Contact ${name} was deleted!`))
            .catch(() => toast.error(`Error when deleting ${name} contact!`));
    };

    const onSave = e => {
        e.preventDefault();
        const { name, number } = e.target.elements;
        dispatch(updateContact({
            updateData: {
                name: name.value,
                number: number.value
            },
            cid: id
        })).unwrap()
            .then(() => {
                toast.success("Contact updated");
                dispatch(fetchContacts());
            })
            .catch(() => toast.error("Something went wrong!"));
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };
    return (
        <>
            <OnDeleteModal contactName={name} onClose={closeModal} isModalOpen={isModalOpen} onDelete={() => onDelete(id)} />
            <div className={css.wrapper}>
                <form onSubmit={onSave}>
                    <label className={css.description}><RiContactsFill /><input name="name" defaultValue={name} type="text" /></label>
                    <label className={css.description}><RiPhoneFill /><input name="number" defaultValue={number} type="tel" /></label>
                    <button type="submit">Save</button>
                </form>
            </div>
            <button type="button" onClick={openModal}>Delete</button>
        </>
    );
}