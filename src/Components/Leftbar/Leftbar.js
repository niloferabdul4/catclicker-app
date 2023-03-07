import React,{useContext} from 'react';
import { Context } from '../../Context/AppContext';
import './leftbar.css';


const Leftbar = () => {
    const {cats}=useContext(Context)
    console.log(cats)
    return (
        <div className='leftbar'>
          <div className='menu_container'>
         
        {cats.map(item=>{return  <ul>
              <li className='menu_items'>
               <p>{item.data.name}</p>
               <span className='count'>{item.data.clicks_count}</span>
               </li>
        </ul>        
         
        })}
            
         
            
          </div>
        </div>
    );
}

export default Leftbar;
