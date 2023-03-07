import React from 'react';
import './selectedcard.css'


const SelectedCard = () => {
    return (
        <div className='selected_card'>
             <div className='selected_card_info'>
                <h2 className='selected_card_title'>Tobby</h2>
                <p>{`No of times clicked: 5`}</p>
            </div>            
            <img className='selected_card_image' src='https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg' />
            <div className='selected_card_description'>
                 <p>Tobby tobby...</p>
                 <a href='#'>Card Link</a>
            </div>
        </div>
    );
}

export default SelectedCard;
