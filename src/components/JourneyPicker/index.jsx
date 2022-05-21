import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import { CityOptions } from './CityOptions';
import './style.css';

export const JourneyPicker = ({ onJourneyChange }) => {
  const [fromCity, setFromCity] = useState(''); 
  const [toCity, setToCity] = useState(''); 
  const [date, setDate] = useState(''); 
  const [cities, setCities] = useState([]);  

  useEffect(() => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/cities')
    .then((resp) => resp.json())
    .then((data) => setCities(data.results))
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({fromCity});
    console.log({toCity});
    console.log({date});
  };
  
    return (
  <div className="journey-picker container">
    <h2 className="journey-picker__head">Kam chcete jet?</h2>
    <div className="journey-picker__body">
      <form className="journey-picker__form">
        <label>
          <div className="journey-picker__label">Odkud:</div>
          <select
          value={fromCity}
          onChange={(event) => setFromCity(event.target.value)}>
          <CityOptions cities={cities} />
          </select>
        </label>

        <label>
          <div className="journey-picker__label">Kam:</div>
          <select
          value={toCity}
          onChange={(event) => setToCity(event.target.value)}>
        <CityOptions cities={cities} />
          </select>
        </label>
        
        <label>
          <div className="journey-picker__label">Datum:</div>

          <select>
            <option value="">Vyberte</option>
            <option value="datum01" onChange={() => setDate(date)}>datum01</option>
            <option value="datum02" onChange={() => setDate(date)}>datum02</option>
            <option value="datum03" onChange={() => setDate(date)}>datum03</option>
            <option value="datum04" onChange={() => setDate(date)}>datum04</option>
            <option value="datum05" onChange={() => setDate(date)}>datum05</option>
          </select>
        </label>
        <div className="journey-picker__controls">
          <button 
            className="btn" 
            type="submit"  onClick={handleSubmit}>
            Vyhledat spoj
          </button>
        </div>
      </form>
      <img className="journey-picker__map" src={mapImage} />
    </div>
  </div>
    )
};
