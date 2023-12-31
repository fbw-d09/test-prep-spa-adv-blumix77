import React from 'react';

import { useContext } from 'react';

import ThemeContext from '../ThemeContext';

const Card = ({country}) => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="Card" style={{backgroundColor: theme === 'light' ? "white" : "black", color: theme === 'light' ? 'black' : 'white'}}>
      <h2>{country.name}</h2>
      <img src={country.img} alt="Flag"/>

      <p>Capital: {country.capital}</p>
      <p>Largest City: {country.largestCity}</p>
      <p>Population: {country.population}</p>
      <p>Currency: {country.currency}</p>

      <p>Official Languages:</p>
      <ul>
        {country.officialLanguages.map((language, index) => 
        (
            <li key={index}>{language}</li>
          ))}
      </ul>
      <p>Neighbouring Countries:</p>
      <ul>
        {country.neighbouringCountries.map((country, index) => 
        (
          <li key={index}>{country}</li>
        ))}
      </ul>
    </div>
  )
}

export default Card