export const selectOrder = (state) => state.order;
export const selectOrderedProducts = (state) => selectOrder(state).orderedProducts;
