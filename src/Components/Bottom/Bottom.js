import React,{useEffect,useContext} from 'react';
import Card from './Card';
import './bottom.css';
import { Context } from '../../Context/AppContext';
import { onSnapshot,orderBy,collection } from '@firebase/firestore';
import { db } from '../../Firebase/firebase';

const Bottom = () => {

    const {cats,setCats}=useContext(Context)

    useEffect(() => {
        const unSub = onSnapshot(collection(db, "cats"), orderBy('timestamp','desc'),(cat) => {
          setCats(cat.docs.map((doc) => ({ id: doc.id, data: doc.data() })));
        });
        return () => {
          unSub();
        };
      }, []);

    return (
        <div className='bottom_section'>
          <h2 className='bottom_title'>Cats Image Gallery</h2>
          <div className='gallery'>
            {cats.map(cat=>{return <Card key={cat.id}
                                          name={cat.data.title}
                                          clicks_count={cat.data.clicks_count}
                                          image={cat.data.image}
                                      
                                                
              />})}
          </div>
            
            
        </div>
    );
}

export default Bottom;
