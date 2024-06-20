import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';


function ShelfPage() {
  const dispatch = useDispatch();
  const shelfReducer = useSelector((store)=>store.shelfReducer)

useEffect(()=> {
  dispatch({type: "SET_ITEM"})
}, []);


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
    </div>
  );
}

export default ShelfPage;
