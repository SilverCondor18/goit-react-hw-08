import Modal from "react-modal";
import css from "./OnDeleteModal.module.css";

const customStyles = {
  content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
    overlay:
    {
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    }
};

export default function OnDeleteModal({ contactName, onClose, isModalOpen, onDelete })
{
    return (
        <Modal style={customStyles} className={css.modal} onRequestClose={onClose} isOpen={isModalOpen} contentLabel="Contact deletion confirm">
            <p className={css.caption}>Delete contact {contactName}?</p>
            <div className={css.buttons}>
                <button type="button" onClick={() => {
                    onDelete();
                    onClose();
                }}>Yes</button>
                <button type="button" onClick={onClose}>No</button>
            </div>
        </Modal>
    )
}