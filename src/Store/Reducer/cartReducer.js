const initialState = {
    items: [],
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART_SUCCESS':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;