import React, { useEffect, useState } from 'react';
import mapImage from './img/map.svg';
import './style.css';





export const JourneyPicker = ({ onJourneyChange }) => {

  const [fromCity, setFromCity] = useState() 
  const [toCity, setToCity] = useState() 
  const [date, setDate] = useState() 
  const handleSubmit = (event) => {
    event.preventDefault()
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
          <select>
            <option value="">Vyberte</option>
            <option value="mesto01" onChange={() => setFromCity(FromCity)}>Město1</option>
            <option value="mesto02" onChange={() => setFromCity(FromCity)}>Město2</option>
            <option value="mesto03" onChange={() => setFromCity(FromCity)}>Město3</option>
            <option value="mesto04" onChange={() => setFromCity(FromCity)}>Město4</option>
            <option value="mesto05" onChange={() => setFromCity(FromCity)}>Město5</option>
          </select>
        </label>
        <label>
          <div className="journey-picker__label">Kam:</div>
          <select>
            <option value="">Vyberte</option>
            <option value="mesto01" onChange={() => setToCity(toCity)}>Město1</option>
            <option value="mesto02" onChange={() => setToCity(toCity)}>Město2</option>
            <option value="mesto03" onChange={() => setToCity(toCity)}>Město3</option>
            <option value="mesto04" onChange={() => setToCity(toCity)}>Město4</option>
            <option value="mesto05" onChange={() => setToCity(toCity)}>Město5</option>
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
