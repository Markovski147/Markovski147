import { createContext, useState, useCallback } from 'react';

const CartContext = createContext({
    cart: [],
    toggleCart: () => { },
    isInCart: () => { },
    cartProducts: 0,
    renderError: () => { },
    errorMsg: []
});

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [errorMsg, setErrorMsg] = useState();

    const renderError = () =>{
        return (
            <>
            <span className={errorMsg ? "closebtn" : 'hideAlert'} onClick={closeAlert}>&times;</span>
            {errorMsg}
            </>
    )};

       const setError = (err) => {         
        setErrorMsg(err);
        setTimeout(() => {
            setErrorMsg('');                    
        }, 3000);
       }     

       const closeAlert = () => {
        setErrorMsg('');
       }

    const toggleCart = useCallback((products, product, isloggedin) => () => {
        console.log(cart)
        if (isloggedin) {
            setErrorMsg('')
            console.log(isloggedin)
            product = product - 1;
            if (cart.includes(products[product])) {
                setCart(list => list.filter(item => item !== (products[product])));
            } else {
                setCart([...cart, products[product]]);
            }
        } else {
            console.log(isloggedin)
            setError('⚠️ Please login to use shopping cart.')
        }
    }, [cart]);

    const isInCart = (id) => {
        if (cart.find(product => product.id === id)) {
            return true
        } else {
            return false
        }
    }

    const cartProducts = cart.length;

    const contextValues = {
        cart: cart,
        toggleCart: toggleCart,
        isInCart: isInCart,
        cartProducts: cartProducts,
        renderError: renderError,
        errorMsg: errorMsg
    };

    return (
        <CartContext.Provider value={contextValues}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContext;