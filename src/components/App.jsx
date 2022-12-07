
import { Div } from './App.styled';
import { NotFoundPage } from 'pages/NotFoundPage';
import { lazy, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';


const Layout = lazy(() => import('pages/Layout'));
const HomePage = lazy(() => import('pages/HomePage'));
const Register = lazy(() => import('./Register/Register'));
const Login = lazy(() => import('./Login/Login'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));


export function App() { 

  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  useEffect(() => {
    dispatch(refreshUser());
  },[dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : ( <Div className='thema'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
          <Route path="register" element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          } />
          <Route path="login" element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          } />
        <Route path="contacts"  element={<PrivateRoute redirectTo="/login" component={<ContactsPage />}/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </Div>)
};

