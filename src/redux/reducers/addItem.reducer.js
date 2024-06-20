
const addItem = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEM_SUCCESS':
            return [...state, action.payload]; 
        default:
            return state;
    }
}




export default addItem 