import { createContext, useState, useCallback } from 'react';

const CartContext = createContext({
    cart: [],
    toggleCart: () => { },
    isInCart: () => { },
    cartProducts: 0,
    changeQuantity: () => { }
});

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const toggleCart = useCallback((products, id, isloggedin) => () => {
        if (isloggedin) {
            console.log(isloggedin)
            id = id - 1;
            if (cart.includes(products[id])) {
                setCart(list => list.filter(item => item.id !== (products[id].id)));
            } else {
                setCart([...cart, products[id]]);
            }
        } else {
            return;
        }
        console.log(cart)
    }, [cart]);

    const isInCart = (id) => {
        cart.forEach((product) => {
          product.quantity = 1;
        });
        if (cart.find(product => product.id === id)) {
            return true
        } else {
            return false
        }
    }

    const cartProducts = cart.length;

    const changeQuantity = (id, type) => () => {
        const updateQuantity = cart.map(product => {
            if (product.id === id & product.quantity >= 1 & type === '+') {
                return { ...product, quantity: product.quantity + 1 };
            } else if (product.id === id & product.quantity >= 2 & type === '-') {
                return { ...product, quantity: product.quantity - 1 };
            }
            return product;
        });
        setCart(updateQuantity);
    }

    const contextValues = {
        cart: cart,
        toggleCart: toggleCart,
        isInCart: isInCart,
        cartProducts: cartProducts,
        changeQuantity: changeQuantity
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;