import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import mainImg from '/images/main3.png';

const HomeBanner = () => {
  return (
    <div>
      <Container className='vh-100 home-banner'>
      <Row>
        <Col md={{ span: 5, offset: 1}} className='text-green d-flex flex-column justify-content-center'>
          <p>Welcome to Emeralde</p>
          <span>Reserve Today and Enjoy Your Stay</span>
        </Col>
        <Col md={{ span: 6}}>
          <img src={mainImg} className='w-75'/>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default HomeBanner;
