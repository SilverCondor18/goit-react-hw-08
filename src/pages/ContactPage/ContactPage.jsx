import ContactForm from '../../components/ContactForm/ContactForm'
import SearchBox from '../../components/SearchBox/SearchBox'
import ContactList from '../../components/ContactList/ContactList';
import css from './ContactPage.module.css'
import { ClipLoader } from 'react-spinners';
import { selectIsLoading, selectError } from '../../redux/contacts/contactsSlice';
import { fetchContacts } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Error from '../../components/ErrorMessage/ErrorMessage';

function ContactPage() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1 className={css.header}>Phonebook</h1>
      <Error error={error} />
      <ContactForm />
      <SearchBox />
      <ContactList />
      <ClipLoader loading={isLoading} className={css.loader} />
    </>
  )
}

export default ContactPage;
