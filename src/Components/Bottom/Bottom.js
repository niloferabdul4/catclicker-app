import React,{useContext} from 'react';
import Card from './Card';
import './bottom.css';
//import { AppContext } from '../../Context/AppContext';
import { ReducerContext } from '../../Context/ReducerContext';

const Bottom = () => {

    const {state:{cats}}=useContext(ReducerContext); 

    return (
        <div className='bottom_section'>
          <h2 className='bottom_title'>Cats Image Gallery</h2>
          <div className='gallery'>
            {cats.map(cat=>{return <Card key={cat.id}  cat={cat}                                        
              />})}
          </div>      
        </div>
    );
}

export default Bottom;
