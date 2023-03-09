import React,{useContext,useState} from 'react';
import { ReducerContext } from '../../Context/ReducerContext';
import './form.css';

const Form = () => {
    const {state:{selectedCat,cats},dispatch}=useContext(ReducerContext)
    const [openForm,setOpenForm]=useState(false)
    const [isSaved,setIsSaved]=useState(false)
    const [input,setInput]=useState({   name:selectedCat.name,
                                        image:selectedCat.image,
                                        clicks_count:selectedCat.clicks_count,
                                        nickname:selectedCat.nickname
                                   })
       
    const handleChange=(event)=>
    {
        const {name,value}=event.target;
        setInput(prevData=>({...prevData,[name]:value}))
        console.log(input)
       
    }

    const addNewCat=(event)=>
    {
        event.preventDefault();   
        setIsSaved(true)
        const newCat={  id:cats.length+1,
                        name:input.name,
                        age:input.age,
                        clicks_count:input.clicks_count,
                        image:input.image,
                        nickname:input.nickname
                    }  
        
        dispatch({type:'ADD NEW CAT',payload:newCat})
        dispatch({type:'SELECT CAT',payload:newCat})
        setOpenForm(false)              
    }
  

    return (
        <div className='rightbar_container'>
        {!openForm ? ( <button className='open_btn' onClick={()=>setOpenForm(true)}>Open Edit Form</button>)
         :

        ( <form className='form' onSubmit={addNewCat}>
           
            <div className='input_wrapper'>
                <label htmlFor='name' className='label'>Cat Name</label>
                <input className='input' type='text' id='name' name='name' value={input.name} onChange={handleChange} required/>
            </div>
            <div className='input_wrapper'>
                <label htmlFor='url' className='label'>Cat Image</label>
                <input  className='input' type='url' id='url' name='image' value={input.image} onChange={handleChange} required/>
            </div>
            <div className='input_wrapper'>
                <label htmlFor='clicks' className='label'>Cat Clicks</label>
                <input  className='input' type='number'  id='clicks' name='clicks_count' value={input.clicks_count} onChange={handleChange} required />
            </div>
            <div className='input_wrapper'>
                <label htmlFor='nickname' className='label'>Nick Name</label>
                <input  className='input' type='text'  id='nickname' name='nickname' value={input.nickname} onChange={handleChange} required />
            </div>
            <div className='buttons'>
                <button className='btn save' type='submit'>Save</button>
                <button className='btn undo' onClick={()=>setInput('')} >Undo</button>
                <button className='btn cancel' onClick={()=>setOpenForm(false)} >Cancel</button>

            </div>
         </form>
        )
}
        </div>
    );
}

export default Form;
