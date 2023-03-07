import React from 'react';
import './topsection.css';
import Leftbar from '../Leftbar/Leftbar';
import Mainbar from '../Mainbar/Mainbar';
import Rightbar from '../Rightbar/Rightbar';

const TopSection = () => {
    return (
        <div className='top_section'>
             <Leftbar />
            <Mainbar />
            <Rightbar />
        </div>
    );
}

export default TopSection;
