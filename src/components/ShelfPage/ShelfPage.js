import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Dispatch action with payload
    dispatch({ type: 'ADD_ITEM_SUCCESS', payload: { description, image } });

    // Clear input fields
    setDescription('');
    setImage('');
  }

  return (
    <>
      <div className="container">
        <h2>Shelf</h2>
        <p>All of the available items can be seen here.</p>
      </div>

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
    </>
  );
}

export default ShelfPage;

