import { authActions } from "../slices/authLogin.js"
import { setCart } from "./cartActions.js"
import { HttpService } from "../../axios"

const httpService = HttpService.getInstance()

export const loginAction = (credentials) => async (dispatch) => {
  dispatch(authActions.loginRequest())
  try {
    const response = await httpService({
      method: 'POST',
      url: '/auth/signin',
      data: credentials
    });
    dispatch(authActions.loginSuccess(response.data))
    dispatch(setCart())
  } catch (error) {
    console.log(error);
    const message = error?.response?.data?.message || "Please check your login credentials";
    console.log(message);
    dispatch(authActions.loginFailed(message));
  }
}