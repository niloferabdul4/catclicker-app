import React, { useContext} from 'react';
import { ReducerContext } from '../../Context/ReducerContext';
import './card.css';

const Card = ({cat}) => {
   
    const {dispatch}=useContext(ReducerContext)  
     
         
    const age=
    (cat.clicks_count >0 && cat.clicks_count <=5) ? "Infant":
    (cat.clicks_count >=6 && cat.clicks_count <=12)  ? "Child":
    (cat.clicks_count >=13 && cat.clicks_count <=25)  ? "Young":
    (cat.clicks_count >=26 && cat.clicks_count <=40)  ? "Middle Age":
    (cat.clicks_count >=41 && cat.clicks_count <=60)  ? "Old":
    (cat.clicks_count >=61 && "Very Old")   

    const handleClick=(cat)=>
    {
        dispatch({type:'INCREMENT CLICKS_COUNT',payload:cat}) 
        dispatch({type:'SELECT CAT',payload:cat})         
        const element = document.getElementById('centerCard');
        if (element)
        {
            element.scrollIntoView({ scroll_behavior: 'smooth' });
        }       
    }

    const deleteCat=(cat)=>{
        dispatch({type:'DELETE CAT',payload:cat})
    }
    
 
    return (
        <div className='card' >
            <div className='card_info'>
                <h3>{cat.name}</h3>
                <p>{`No of times clicked: ${cat.clicks_count}`}</p>
            </div>          
            <img className='image' src={cat.image} role='button' onClick={()=>handleClick(cat)}/>
            
             <div className='card_bottom'>
             <p>{age}</p>
             <span style={{display:'flex',justifyContent:'space-between'}}>
                 <a href='#'>Card Link</a>
                 <button className='delete_btn' onClick={()=>deleteCat(cat)}>Delete</button>
             </span>
                
            </div>
            
        </div>
    );
}

export default Card;
