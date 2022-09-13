export const addToCart = product => ({
    type: 'ADD_PRODUCT',
    payload: product
});

export const removeFromCart = product => ({
    type: 'REMOVE_PRODUCT',
    payload: product
});
