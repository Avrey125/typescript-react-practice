import React from 'react';
import './card-styles.css'
import Card from './card';

const CardList = props => {
  console.log(props);
  return (
  <div className='card-list'>
    {props.monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
  )
};

export default CardList;

