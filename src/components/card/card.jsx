import React from 'react';
import './card.css';

const Card = props =>{
    return(
        <div className='card-container'>
            <img src={`https://robohash.org/${props.monster.id}?set=set2`}/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>
        </div>
    )
}

export default Card;