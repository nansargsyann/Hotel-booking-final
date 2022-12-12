import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const DashboardTabs = () => {
  const params = useLocation();

  return (
    <Container>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link
            className={`nav-link text-green ${
              params.pathname === '/dashboard/bookings' && 'active'
            }`}
            to="/dashboard/bookings"
          >
            Your Bookings
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className={`nav-link text-green ${
              params.pathname === '/dashboard/seller' && 'active'
            }`}
            to="/dashboard/seller"
          >
            Your Hotels
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default DashboardTabs;
