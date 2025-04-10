import { selectIsLoading, selectError } from '../../redux/contacts/contactsSlice';
import { fetchContacts } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import AppBar from "../AppBar/AppBar";
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Routes, Route } from 'react-router';
import { selectIsLoggedIn, selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage/ContactPage"));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  useEffect(() => {
      dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && <>
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute page={<LoginPage />} fallbackRoute="/contacts" />} />
          <Route path="/register" element={<RestrictedRoute page={<RegisterPage />} fallbackRoute="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute page={<ContactPage />} fallbackRoute="/login" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
