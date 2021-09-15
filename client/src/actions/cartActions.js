import Axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_SAVE_SHIPPING_ADDRESS,
  CART_ADD_ITEM_FAIL,
} from './constants';

export const addToCart = (itemId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`http://localhost:3005/Dish/${itemId}`);
  const {
    cart: { cartItems },
  } = getState();
  if (cartItems.length > 0 && data.seller._id !== cartItems[0].cook._id) {
    dispatch({
      type: CART_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart`,
    });
  } else {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        item: data._id,
        seller: data.seller,
        qty,
      },
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems)
    );
  }
};

export const removeFromCart = (itemId) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE_ITEM, payload: itemId });
  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems));
};

export const saveShippingAddress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADDRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};