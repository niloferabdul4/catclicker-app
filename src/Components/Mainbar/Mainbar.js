import React,{useContext} from 'react';
import { Context } from '../../Context/AppContext';
import './mainbar.css';
import SelectedCard from './Selected_Card';


const Mainbar = () => {
    //const {cats,setCats}=useContext(Context)
    return (
        <div className='main_container'>
        
           <SelectedCard  />
        </div>
    );
}

export default Mainbar;
