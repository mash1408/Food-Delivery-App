import Axios from 'axios';
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_ADD_ITEM_FAIL,
} from './constants';

export const addToCart = (itemId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`http://localhost:3005/home/dish/${itemId}`);
  const {
    cart: { cartItems },
  } = getState();
  const {cook}=await Axios.get(`http://localhost:3005/home/cook/${data.cook_id}`);
  if (cartItems.length > 0 && cook._id !== cartItems[0].cook_id) {
    dispatch({
      type: CART_ADD_ITEM_FAIL,
      payload: `Can't Add To Cart`,
    });
  } else {
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        name: data.dishName,
        // image: data.image,
        price: data.price,
        item: data._id,
        cook_id:cook._id,
        cookName: cook.name,
        cookPhone:cook.phone,
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
