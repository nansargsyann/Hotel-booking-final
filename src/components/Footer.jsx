import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import logo from '/images/greenLogo.png';

const Footer = () => {

  return (
    <div className="footer text-green p-2">
      <Container className='primary-bg w-75 p-4 mt-3'>
        <Row>
          <Col className='d-flex flex-column justify-content-center'>
            <Row className='row justify-content-center mb-3'>
              <img src={logo} alt="logo" className='w-50'/>
            </Row>
            <Row className='text-center'>
              <p className='text-uppercase '>Contact</p>
              <p>info@emeralde.com</p>
              <p>+374 12 345678</p>
            </Row>
            
          </Col>
          <Col>
            <Form>
            <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" className='inputField'/>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" className='inputField' />
              </Form.Group>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message"  rows={3} className='inputField'/>
              </Form.Group>
              <Button as="input" type="submit" value="Submit" className='pointer' />
            </Form>
          </Col>
        </Row>
      </Container>
      <p className='text-prim text-center mt-4'>www.emeralde-booking.am | All rights reserved!</p>
    </div>
  );
};

export default Footer;


