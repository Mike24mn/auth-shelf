import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ShelfPage() {

const [description, setDescription] = useState('')
const [image, setImage] = useState('')
  const addItem = useSelector(store => store.addItem)
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({type: 'ADD_ITEM_SUCCESS', payload: description, image })
    setDescription('');
    setImage('');
  }

  return (<>
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>

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
    </> );
}

export default ShelfPage;
