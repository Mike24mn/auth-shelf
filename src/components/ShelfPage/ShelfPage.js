import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from 'react';


function ShelfPage() {
  const dispatch = useDispatch();
  const shelfItems = useSelector((store)=>store.shelfReducer)
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

useEffect(()=> {
  dispatch({type: "FETCH_ITEM"})
}, []);


const handleSubmit = (event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Dispatch action with payload
  dispatch({ type: 'ADD_ITEM', payload: { description, image_url: image } });

  // Clear input fields
  setDescription('');
  setImage('');
}


  return (
    <div className="container">
      <h2>Shelf</h2>

      <form onSubmit={handleSubmit}> 
        <input 
          type='text'
          placeholder='Description'
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />

        <input 
          type='text'
          placeholder='Image URL'
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />

        <button type='submit'>Submit</button>
      </form>
      <p>All of the available items can be seen here.</p>
      
        {shelfItems.map((item)=>(
          <li key={item.id}>{item.description} {item.image_url}</li>
        )
        )}

      

    </div>
  );
}

export default ShelfPage;

