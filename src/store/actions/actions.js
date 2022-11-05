// export const addToCart = product => ({
//     type: 'ADD_PRODUCT',
//     payload: product
// });

// export const removeFromCart = product => ({
//     type: 'REMOVE_PRODUCT',
//     payload: product
// });

import { HttpService } from "../../axios"
import { authActions } from "../slices/authLogin.js"
import { setCart } from "../../store/actions/cartActions.js"

const httpService = HttpService.getInstance()

export const loginAction = (loginCredentials) => async (dispatch) => {
  dispatch(authActions.loginRequest())
  try {
    const response = await httpService({
      method: 'POST',
      url: '/auth/signin',
      data: loginCredentials
    });
    dispatch(authActions.loginSuccess(response.data))
    dispatch(setCart())
  } catch (error) {
    console.log(error)
    const message = "Please check your login credentials"
    console.log(message)
    dispatch(authActions.loginFailed(message))
  }
}