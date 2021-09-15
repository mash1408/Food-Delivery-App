import {
    CART_ADD_ITEM,
    CART_ADD_ITEM_FAIL,
    CART_EMPTY,
    CART_REMOVE_ITEM,
  } from '../actions/constants';
  
  export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
      case CART_ADD_ITEM:
        const item = action.payload;
        const existItem = state.cartItems.find((x) => x.item === item.item);
        if (existItem) {
          return {
            ...state,
            error: '',
            cartItems: state.cartItems.map((x) =>
              x.item === existItem.item ? item : x
            ),
          };
        } else {
          return { ...state, error: '', cartItems: [...state.cartItems, item] };
        }
      case CART_REMOVE_ITEM:
        return {
          ...state,
          error: '',
          cartItems: state.cartItems.filter((x) => x.item !== action.payload),
        };
      case CART_ADD_ITEM_FAIL:
        return { ...state, error: action.payload };
      case CART_EMPTY:
        return { ...state, error: '', cartItems: [] };
      default:
        return state;
    }
  };