const shelfReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_SHELF_ITEM":
      return action.payload;
    case "ADD_ITEM_SUCCESS":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default shelfReducer;
