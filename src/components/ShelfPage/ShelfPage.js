import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import deleteItem from '../../redux/reducers/delete.reducer';


function ShelfPage() {
  const dispatch = useDispatch();
  const shelfItems = useSelector((store)=>store.shelfReducer)
  const deleteItem = useSelector((store) => store.deleteItem)
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

const handleDelete = (itemId) => {
  console.log("Delete Clicked");
  console.log("Item ID is:", itemId);
  dispatch({ type: 'DELETE_ITEM', payload: itemId})
  return;

}

  return (<>
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
          <li key={item.id}>{item.description} {item.image_url}
          <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        )
        )}

      

    </div>
    </> );
}

export default ShelfPage;

