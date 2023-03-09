import React, { useContext} from 'react';
import { ReducerContext } from '../../Context/ReducerContext';
import './mainbar.css';


const Mainbar = () => {
    const {state:{selectedCat},dispatch}=useContext(ReducerContext)

    const handleClick=(selectedCat)=>
    {
     dispatch({type:'INCREMENT CLICKS_COUNT',payload:selectedCat}) 
     
     
    }

     return (
      
       <div className='main_container'>        
         <div className='selected_card' id='centerCard'>
             <div className='selected_card_info'>           
                <h2 className='selected_card_title'>{selectedCat.name}</h2>
                <p>{`No of times clicked: ${selectedCat.clicks_count}`}</p>
            </div>            
            <img className='selected_card_image' src={selectedCat.image} onClick={()=>handleClick(selectedCat)} alt='' />
            <div className='selected_card_description'>
                 <p>{selectedCat.nickname}</p>
                 <p>{`age: ${selectedCat.age}`}</p>
                 <div className='selected_card_link'>
                   <a href=''>Card Link</a>
                 </div>
           </div>
        </div>
        </div>

    );
}

export default Mainbar;
