import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { register } from '../../actions/auth/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Register = () => {
  const navigate = useNavigate();

  const registerHandler = async (values) => {
    try {
      const response = await register({ name: values.name, email: values.email, password: values.password });
      toast.success('successfully registered');
      setTimeout(() => {
        navigate('/login');
      }, 1000);
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Container>
    <Row>
      <Col md={{ span: 4, offset: 4 }} className="mt-4">
        <div className="h3">Create account</div>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      <Formik 
          initialValues={{ name: "", email: "", password: "" }} 
          validationSchema={Yup.object({ 
              name: Yup.string().required("Required!"), 
              email: Yup.string().email("Invalid email address").required("Required!"),
              password: Yup.string().min(8, "Must be at least 8 characters").required("Required!"), 
          })} 
          onSubmit={registerHandler }
      > 
          <Form>
          <div className='mb-3'>
              <span>Name</span> 
              <Field name="name" type="text" className='form-control inputField' /> 
              <ErrorMessage name="name" component="div" className='text-danger'/> 
            </div>

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

export default Register;
