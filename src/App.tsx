import React, { useEffect } from 'react';
import './App.css';
import { StoreState } from '@store/config_store';
import { useSelector, useDispatch } from 'react-redux';
import { updateStatus } from '@store/reducers/healt_reducer';
import Card from '@components/Card';
import Navbar from '@components/Navbar';
import Title from '@components/Title';
import DataApartment from '@assets/info/stays.json';

export interface ApartmentI {
  city: string;
  country: string;
  superHost: boolean;
  title: string;
  rating: number;
  maxGuests: number;
  type: string;
  beds: number;
  photo: string;
}

function App() {
  const healtStatus = useSelector((state: StoreState) => state.healt.status);
  const dispatch = useDispatch();
  const apartmentData: ApartmentI[] = DataApartment as ApartmentI[];

  useEffect(() => {
    dispatch(updateStatus());
  }, []);

  console.log(healtStatus);

  return (
    <div className="">
      <Navbar />

      <div className="apartments-header">
        <Title>Stays in Finland</Title>
        <span> 12+ stays </span>
      </div>

      <div className="aparments-container">
        {apartmentData &&
          apartmentData.map((hotel: ApartmentI) => (
            <Card
              key={hotel.title}
              imageUrl={hotel.photo}
              superHost={hotel.superHost}
              description={`${hotel.type}  ${hotel.beds ? hotel.beds : ''}`}
              title={hotel.city}
              starts={hotel.rating}
            />
          ))}
      </div>
    </div>
  );
}

export default App;
