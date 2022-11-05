export const selectCartState = (state) => state.cart;
export const selectCartItems = (state) => selectCartState(state).cartItems;
export const selectCartId = (state) => selectCartState(state).cartId;
export const selectCartProducts = (state) => selectCartState(state).cartProducts;
export const selectProductNumber = (state) => selectCartState(state).productNumber;