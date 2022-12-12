import Card from 'react-bootstrap/Card';
import { GoLocation } from 'react-icons/go';
// import { diffDays } from '../../actions/hotels';
import moment from 'moment/moment';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const HotelCard = ({ hotel, isOwner = false, setSmShow, setId }) => {
  const navigate = useNavigate();
  const navigateToEdit = (e) => {
    e.preventDefault();
    navigate('/hotels/edit', { state: { id: hotel._id } });
  };

  const openDeleteModal = (e) => {
    e.preventDefault();
    setSmShow(true);
    setId(hotel._id);
  };

  return (
    <Card className="mb-4 primary-bg hotel-card">
      <Card.Img
        variant="top"
        src={`${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}`}
        className='hotel-img'
      />
      <Card.Body>
        <Card.Title className='text-hid fw-bold'>{hotel.title}</Card.Title>
        <Card.Text className="mb-2 text-hid">
          <GoLocation />
          {hotel.location}
        </Card.Text>
        {/* <Card.Text className="mb-2">
          <BiCalendarAlt />
          for {diffDays(hotel.from, hotel.to)}{' '}
          {diffDays(hotel.from, hotel.to) <= 1 ? ' day' : ' days'}
        </Card.Text> */}
        <Card.Text className="text-muted mb-0">
          <small>
            Available from {new Date(hotel.from).toLocaleDateString()}
          </small>
        </Card.Text>
        <Card.Text className="text-muted mb-0">
          <small>
            <i>Posted {moment(hotel.createdAt).fromNow()}</i>
          </small>
        </Card.Text>
        <Card.Text className='fw-bold'>${hotel.price} night</Card.Text>
        {isOwner && (
          <div className="d-grid gap-2">
            <Button className='pointer' onClick={navigateToEdit}>
              Edit
            </Button>
            <Button variant="danger" onClick={openDeleteModal}>
              Delete
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
