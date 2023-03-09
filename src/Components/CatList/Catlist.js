import React,{useContext, useState} from 'react';
import { ReducerContext } from '../../Context/ReducerContext';
import './catlist.css';


const Catlist = () => {
  const {state:{cats},dispatch}=useContext(ReducerContext);  
  const [selectedMenu,setSelectedMenu]=useState(null)

  const menuClick=(item)=>{
   
    setSelectedMenu(item)
    dispatch({type:'SELECT CAT',payload:item})
  }
    return (
        <div className='leftbar'>
          <div className='menu_container'>         
        {cats.map(item=>{return  <ul key={item.id}>
               <li className={selectedMenu===item ? 'selected': ''} onClick={()=>menuClick(item)}>
               <p>{item.name}</p>
               <span className='count'>{item.clicks_count}</span>
               </li>
            </ul>        
         
        })}     
          </div>
        </div>
    );
}

export default Catlist;
