
import { Formik } from 'formik';
import { Label, Button, Input, Forms, Error } from '../../components/ContactForm/ContactForm.styled';
import { useState } from "react";
import { Section } from "../Section/Section";
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';



const scema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(7).max(15).required(),
})

const Login = () => {
const dispatch = useDispatch();

const [password, setPassword] = useState('');
const [email, setEmail] = useState('');

  const handleSubmit = (values, { resetForm }) => { 
    const email = values.email;
      const password = values.password;
      setEmail(email)
      setPassword(password)
      dispatch(
      logIn({
        email: email,
        password: password,
      })
    );
    resetForm();
    
  };
    return <Section title="Сторінка входу">
        <Formik
            validationSchema={scema}
          initialValues={{email,password}}
          onSubmit={handleSubmit}
          >
          <Forms action="">
              <Error component='div' name='email'/>
              <Label htmlFor="email">Email:
                  <Input
                      type="email"
                      name="email"
                  />
              </Label>
              <Error component='div' name='password'/>
              <Label htmlFor="password">Password:
                  <Input
                    type="password"
                    name="password"
                  />
                    
              </Label>  
              <Button type='submit'>Login</Button>
          </Forms>
      </Formik> 
    </Section>
}

export default Login;