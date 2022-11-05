import { HttpService } from "../../axios"
import { cartActions } from "../slices/cartSlice";

const httpService = HttpService.getInstance();

export const setCart = () => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'POST',
      url: '/cart'
    });
    console.log('CART RESPONSE', response)
    const cartId = response.data?.data?.id;
    dispatch(cartActions.cartId(cartId))
  } catch(error) {
    console.log(error)
  }
}

export const setCartItem = (productId, sessionId, quantity = 1) => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'POST',
      url: '/cart/item',
      data: {
        quantity,
        productId,
        sessionId
      }
    });
    console.log('CART ITEM RESPONSE', response)
  } catch(error) {
    console.log(error)
  }
}

export const getCart = () => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'GET',
      url: '/cart'
    });
    console.log('GET CART', response);
    const cartId = response.data?.data?.id;
    const cart = response.data?.data?.cartItems;
    cart.sort((a, b) => Number(b.product?.id) - Number(a.product?.id));
    dispatch(cartActions.cartProducts(cart));
    dispatch(cartActions.cartId(cartId));
  } catch(error) {
    console.log(error)
  }
}

export const deleteCartItem = (productId) => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'DELETE',
      url: `/cart/item/${productId}`,
    });
    console.log('DELETE CART ITEM RESPONSE', response)
  } catch(error) {
    console.log(error)
  }
}

export const deleteCart = (cartId) => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'DELETE',
      url: `/cart/${cartId}`
    });
    console.log('DELETE CART RESPONSE', response)
    dispatch(cartActions.cartId(undefined));
  } catch(error) {
    console.log(error)
  }
}