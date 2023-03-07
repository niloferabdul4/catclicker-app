import React from 'react';
import './card.css';

const Card = ({name,clicks_count,image}) => {
    return (
        <div className='card'>
            <div className='card_info'>
                <h3>{name}</h3>
                <p>{`No of times clicked: ${clicks_count}`}</p>
            </div>          
            <img className='image' src={image} />
            <div className='card_link'>
                 <a href='#'>Card Link</a>
            </div>
            
        </div>
    );
}

export default Card;
