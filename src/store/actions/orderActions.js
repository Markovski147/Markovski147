import { HttpService } from "../../axios"
import { orderActions } from "../slices/orderSlice";

const httpService = HttpService.getInstance();

export const setOrders = () => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'POST',
      url: '/order'
    });
    console.log('ORDER RESPONSE', response)
  } catch(error) {
    console.log(error)
  }
}

export const getOrders = () => async (dispatch) => {
  try {
    const response = await httpService({
      method: 'GET',
      url: `/order?page=1&limit=50`
    });
    console.log('ORDER RESPONSE', response)
    dispatch(orderActions.orderItems(response.data?.data?.items))
  } catch(error) {
    console.log(error)
  }
}
