import { Formik} from 'formik';
import { Label, Button, Input, Forms, Error } from '../../components/ContactForm/ContactForm.styled';
import { useState } from "react";
import { Section } from "../Section/Section";
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';



const scema = yup.object().shape({
    name: yup.string().required(),
    password: yup.string().min(7).max(15).required(),
    email: yup.string().email().required(),
})


const Register = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (values, { resetForm }) => { 
    const name = values.name;
      const email = values.email;
      const password = values.password;
      setName(name)
      setPassword(email)
      setEmail(password)
      
      dispatch(
      register({
        name: name,
        email: email,
        password: password,
      })
    );
    resetForm();
    
  };
    return <Section title="Сторінка реєстрації">

        <Formik
        validationSchema={scema}
          initialValues={{email,name,password}}
          onSubmit={handleSubmit}
          >
          <Forms action="">
              <Error component='div' name='name'/>
              <Label htmlFor="text">Name:
                  <Input
                      type="text"
                      name="name"
                      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                      required
                  />
                </Label>
                <Error component='div' name='name'/>
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
              <Button type='submit'>Register</Button>
          </Forms>
      </Formik> 
    </Section>
}

export default Register;