import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router';
import error from '/images/error.png';

const Error = () => {
  const navigate = useNavigate();
  const navigateToHome = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <Container>
      <Row className='vh-100'>
        <Col md={{span: 5, offset: 1}} className='d-flex flex-column justify-content-center'>
          <img src={error} alt="error" className='w-100'/>
        </Col>
        <Col md={{span: 6}} className='d-flex flex-column justify-content-center'>
          <p className='h1'>Page Doesn't Exist</p>
          <p className='h4'>The link you clicked may be broken or the page may have been removed.</p>
          <Button onClick={navigateToHome} className='pointer w-50'>Back to Homepage</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Error;
