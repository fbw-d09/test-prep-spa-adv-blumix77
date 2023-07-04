import React from 'react';

const Card = ({country}) => 
{
  console.log(props.country);
  const { country } = props;
  return (
    <div className='Card'>
      <h2>{country.name}</h2>
    </div>
  )
}

export default Card