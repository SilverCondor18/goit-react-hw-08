import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList';
import css from './App.module.css'
import { ClipLoader } from 'react-spinners';
import { selectIsLoading, selectError } from '../../redux/contactsSlice';
import { fetchContacts } from '../../redux/contactsOps';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Error from '../ErrorMessage/ErrorMessage';

function App() {
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

export default App
