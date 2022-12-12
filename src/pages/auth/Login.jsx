import { login } from '../../actions/auth/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
// Bootstrap
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const loginHandler = async (values) => {

    try {
      const response = await login({ email: values.email, password: values.password });
      setTimeout(() => {
        navigate('/dashboard/bookings');
      }, 1000);
      if (response.data) {
        window.localStorage.setItem('auth', JSON.stringify(response.data));
        dispatch({
          type: 'LOGGED_IN_USER',
          payload: response.data,
        });
      }
    } catch (err) {
      toast.error(err.response.data);
    }
    //actions.resetForm();
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="mt-4">
          <div className="h3">Welcome</div>
          <p className="text-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        <Formik 
            initialValues={{ email: "", password: "" }} 
            validationSchema={Yup.object({  
                email: Yup.string().email("Invalid email address").required("Required!"),
                password: Yup.string().min(8, "Must be at least 8 characters").required("Required!"), 
            })} 
            onSubmit={loginHandler}
        > 
            <Form>
              <div className='mb-3'>
                <span>Email</span> 
                <Field name="email" type="email" className='form-control inputField' /> 
                <ErrorMessage name="email" component="div" className='text-danger'/> 
              </div>
                
              <div className='mb-3'>
                <span>Password</span> 
                <Field name="password" type="password" className='form-control inputField' /> 
                <ErrorMessage name="password" component="div" className='text-danger' /> 
              </div>
                
                <Button type="submit" className='pointer'>Submit</Button> 
            </Form> 
        </Formik> 
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
