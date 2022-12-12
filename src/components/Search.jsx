import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;
import { useNavigate } from 'react-router';
import moment from 'moment';
import ReactGoogleAutocomplete from 'react-google-autocomplete';

const Search = ({ locationProps, dateProps, bedProps }) => {
  const arrDate = dateProps ? dateProps.split(',') : '';

  const navigate = useNavigate();

  const [location, setLocation] = useState(locationProps ? locationProps : '');
  const [date, setDate] = useState(arrDate);
  const [bed, setBed] = useState(bedProps ? bedProps : 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-result?location=${location}&date=${date}&bed=${bed}`);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="row mb-3">
        <Form.Group className="mb-3 col-md-3">
           <ReactGoogleAutocomplete
                  placeholder="Location"
                  className="form-control inputField"
                  apiKey={import.meta.env.VITE_APP_GOOGLE_AUTOCOMPLETE}
                  onPlaceSelected={(place) => {
                    setLocation(place.formatted_address);
                  }}
                />
        </Form.Group>

        <RangePicker
          className="mb-3 col-md-4 inputField"
          onChange={(value, dateString) => setDate(dateString)}
          format="YYYY-MM-DD"
          defaultValue={
            date && [
              moment(date[0], 'YYYY-MM-DD'),
              moment(date[1], 'YYYY-MM-DD'),
            ]
          }
        />

        <Form.Group className="mb-3 col-md-4">
          <Form.Select
            name="bed"
            className="mb-3 inputField"
            value={bed}
            onChange={(e) => setBed(e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Form.Select>
        </Form.Group>

        <div className="col-md-1">
          <Button variant="primary" type="submit" className='pointer'>
            Search
          </Button>
        </div>
      </Form>
    </>
  );
};

export default Search;
