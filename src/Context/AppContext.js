import React,{createContext, useState} from 'react';
export const Context=createContext();

const AppContext = ({children}) => {
    const [cats,setCats]=useState([]);
    return (
        <div>
            <Context.Provider value={{cats,setCats}} >

               {children}

            </Context.Provider>
            
        </div>
    );
}

export default AppContext;
