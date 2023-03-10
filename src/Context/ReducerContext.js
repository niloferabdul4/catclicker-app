import React,{useEffect,useState,createContext, useReducer} from 'react';
import cats_data from '../data';
import reducer from './reducer';


export const ReducerContext=createContext();

    const ReducerContextProvider = ({children}) => {     
    const [cats,setCats]=useState(cats_data);
    

    /*******  SAVING AND GETTING DATA FROM LOCAL STORAGE  ********************** */
   

    useEffect(()=>{localStorage.setItem('cats', JSON.stringify(cats))},[cats])  
    useEffect(() => {
        if(JSON.parse(localStorage.getItem('cats')))
         {
          setCats(localStorage.getItem('cats'))
        }
      }, []);
    

    const [state,dispatch]=useReducer(reducer,{cats,  
                                               selectedCat:{ id:cats[0].id,
                                                            name:cats[0].name,
                                                            clicks_count:cats[0].clicks_count,
                                                            image:cats[0].image,
                                                            nickname:cats[0].nickname,
                                                            age:cats[0].age
                                                           }                                                                                 
                                               }          
                                                                                          
                                            )
    return (
        <div>
            <ReducerContext.Provider value={{state,dispatch}}>
                {children}
            </ReducerContext.Provider>
        </div>
    );
}

export default ReducerContextProvider;
