import { selectIsLoading, selectError } from '../../redux/contacts/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useSelector, useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import AppBar from "../AppBar/AppBar";
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Routes, Route } from 'react-router';
import { selectToken, selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import { Toaster } from 'react-hot-toast';


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const RegisterPage = lazy(() => import("../../pages/RegisterPage/RegisterPage"));
const ContactPage = lazy(() => import("../../pages/ContactPage/ContactPage"));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const token = useSelector(selectToken);
  useEffect(() => {
      dispatch(refreshUser());
  }, [dispatch]);
  return (
    !isRefreshing && <>
      <Toaster position="top-right" reverseOrder={false} />
      <AppBar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />} />
          <Route path="/register" element={<RestrictedRoute component={<RegisterPage />} redirectTo="/contacts" />} />
          <Route path="/contacts" element={<PrivateRoute component={<ContactPage />} redirectTo="/login" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
