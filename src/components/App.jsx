
import { Div } from './App.styled';
import { Login } from './Login/Login';
import { Register } from './Register/Register';
import { HomePage } from 'pages/HomePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ContactsPage } from 'pages/ContactsPage';
import { Layout } from 'pages/Layout';
import { Routes, Route } from "react-router-dom";


export function App() { 
  return <Div className='thema'>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="register" element={ <Register />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
    </Div>
};

