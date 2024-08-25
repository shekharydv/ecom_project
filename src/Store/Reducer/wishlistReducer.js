const initialState = {
    items: [],
  };
  
  const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST_SUCCESS':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default wishlistReducer;
  