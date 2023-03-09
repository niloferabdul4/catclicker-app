import React from 'react';
import './topsection.css';
import Mainbar from '../Mainbar/Mainbar';
import Catlist from '../CatList/Catlist';
import Form from '../Form/Form';

const TopSection = () => {
    return (
        <div className='top_section'>          
            <Catlist />
            <Mainbar />                     
            <Form />     
        </div>
    );
}

export default TopSection;
