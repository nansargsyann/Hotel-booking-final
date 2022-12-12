import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import greenLogo from '/images/greenLogo.png';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';


const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <Navbar className='primary-bg' expand="lg">
      <Container>
        <Link to="/" className="navbar-brand"> <img src={greenLogo} className='w-15'/> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-green' />
        <Navbar.Collapse>
          <Nav className="d-flex justify-content-around w-75">
            <>
            <Link to="/" className="nav-link text-green">
              Home
            </Link>
            </>
            {auth && auth.token ? (
              <NavDropdown align="end" className="" title={auth.user.name}>
                <NavDropdown.Item as={Link} to="/dashboard/bookings">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Link to="/login" className="nav-link text-green">
                  Login
                </Link>
                <Link to="/register" className="nav-link text-green">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
