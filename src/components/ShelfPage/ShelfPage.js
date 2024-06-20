import React from 'react';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';


function ShelfPage() {
  const dispatch = useDispatch();
  const shelfItems = useSelector((store)=>store.shelfReducer)

useEffect(()=> {
  dispatch({type: "FETCH_ITEM"})
}, []);


  return (
    <div className="container">
      <h2>Shelf</h2>
      <p>All of the available items can be seen here.</p>
      <ul>
        {shelfItems.map((item)=>(
          <li key={item.id}>{item.description} {item.image_url}</li>
        )
        )}

      </ul>

    </div>
  );
}

export default ShelfPage;

