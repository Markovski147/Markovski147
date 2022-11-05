import styled from 'styled-components';
import { useEffect } from 'react';
import { calcTotalPrice } from './priceCalc.ts'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectCartItems, selectCartProducts, selectCartId } from '../../store/selectors/cartSelectors.js';
import { getCart, setCart, setCartItem, deleteCartItem } from '../../store/actions/cartActions';
import { cartActions } from "../../store/slices/cartSlice.js";
import { setOrders } from '../../store/actions/orderActions.js';
import { Redirect } from "react-router-dom";

const CheckoutContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.mainContainer {
  width: 940px;
  display: flex;
  flex-direction: column;
}
  h2 {
    text-transform: uppercase;
    font-weight: 800;
  }

  .headerContainer {
    display: flex;
    flex-direction: row;
  }

  .productsHeader {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-right: 1px solid;
    padding: 1.5em 0;
  }

  h3 {
    text-transform: uppercase;
    font-weight: 800;
  }

  .orderDetailsHeader {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-around;
    width: 60%;
    padding: 1.5em 0;
  }
  
  .productCardsContainer {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid;
  }

  .product {
    display: flex;
    flex-direction: row;
  }

    .productCard {
      display: flex;
      flex-direction: row;
      width: 40%;
      align-items: center;
      border-right: 1px solid;
      padding: 1.5em 0;

    img {
      width: 150px;
      object-fit: cover;
      aspect-ratio: 4/3;
    }

    h4 {
      margin-left: 1em;
      font-weight: 700;
    }
  }

  .productOptions{
    display: flex;
    flex-direction: row;
    width: 60%;
    padding: 1.5em 0;
    justify-content: space-around;
    align-items: center;
  }

  .quantityContainer {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 35%;

    span{
      font-size: 2.2em;
      font-weight: 300;
      cursor: pointer;
      :hover {
        opacity: 70%;
      }
    }

    .quantity {
      font-size: 1.5em;
      cursor: default;
    }
  }

  .orderSummaryHeader{
    width: 40%;
    border-right: 1px solid;
    padding: 1em 0 0 0;
  }
  
  .summaryMainContainer{
    display: flex;
    flex-direction: row;
  }

  h4 {
    font-weight: 800;
    text-transform: uppercase;
  }

  h5 {
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
  }

  h6 {
    font-weight: 400;
    text-transform: uppercase;
    color: gray;
    border-right: 1px solid white;;
    margin: 0;
    width: 40%;
    padding: 1em 0;
  }

  .orderSummaryContainer {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-right: 1px solid;
    align-items: start;
  }
  
  .summary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
  }

  .totalSummaryContainer {
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: end;
  }

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
  }

  .checkout {
    width: 940px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
  }

  .checkoutBtn {
    height: 40px;
    width: 12rem;
    border: none;
    border-radius: 3px;
    color: white;
    background: rgb(19, 43, 159);
    background: linear-gradient(90deg, rgba(19, 43, 159, 1) 0%, rgba(249, 5, 5, 1) 100%);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
  }

  .checkoutBtn:disabled {
    opacity: 50%;
  }

  @media (max-width: 992px) {
    .mainContainer {
      width: 90%;
      display: flex;
      flex-direction: column;
    }
    
    .productCard {
    img {
      width: 40%;
    }

  }

  h2 {
    font-size: 3.2vw;
  }
    
  h3 {
    font-size: 2.4vw;
  }

  h4 {
    font-size: 2.2vw;
  }

  h5{
    font-size: 2vw;
  }

  h6 {
    font-size: 2vw;
  }

  .summary {
    width: 70%;
  }

  .total {
    width: 40%;
  }

  .quantityContainer {
    span {
      font-size: 5vw;
      
      :hover {
        opacity: 100%;
      }
    }
    
    .quantity{
      font-size: 3vw;      
    }
  }
  
  .checkout {
    width: 90%;

    .checkoutBtn {
      height: 6vw;
      width: 26vw;
      font-size: 2.2vw;
    }
  }
  }
`

const Checkout = () => {


  const dispatch = useDispatch();
  const cart = useSelector(selectCartItems);
  const cartProducts = useSelector(selectCartProducts);
  const cartId = useSelector(selectCartId);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch])


  console.log('CART ITEMS', cart);
  console.log('CART PRODUCTS', cartProducts);

  const decreaseQuantity = (id) => () => {
    let thisProduct = cartProducts.findIndex(obj => obj.product.id === id);
    let thisId = cartProducts[thisProduct].id;
    let thisQuantity = cartProducts[thisProduct].quantity;
    console.log('id is: ', thisId);
    dispatch(deleteCartItem(thisId));
    thisQuantity > 1 ? setTimeout(() => {
      dispatch(setCartItem(id, cartId, thisQuantity - 1));
    }, 500) : console.log('item removed');
    setTimeout(() => {
      dispatch(getCart());
    }, 1000);
  }

  const increaseQuantity = (id) => () => {
    let thisProduct = cartProducts.findIndex(product => product.product.id === id);
    console.log('tihs product', thisProduct);
    dispatch(cartActions.addCartItems(thisProduct));
    dispatch(setCartItem(id, cartId));
    dispatch(cartActions.productNumber(thisProduct.length));
    console.log(cartId);
    setTimeout(() => {
      dispatch(getCart());
    }, 500);
  }

  const checkoutCart = () => () => {
    console.log('current cart id is: ', cartId);
    dispatch(setOrders());
    setTimeout(() => {
      dispatch(setCart());      
    }, 500);
  }

  const renderProducts = (cart) => {
    if (cart === undefined) {
      return <div>Your cart is empty.</div>
    } else {
      return cart.map(({ product, quantity }, index) => {
        return (
          <div key={index} className='product'>
            <div className='productCard'>
              <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt='product'></img>
              </Link>
              <h4>{product.title}</h4>
            </div>
            <div className='productOptions'>
              <span>/</span>
              <div className='quantityContainer'>
                <span onClick={decreaseQuantity(product.id)}>-</span><span className='quantity'>{quantity}</span><span onClick={increaseQuantity(product.id)}>+</span>
              </div>
              <span>${product.price * quantity}</span>
            </div>
          </div>
        )
      })
    }
  }

  const totalPrice = (cart) => {
    let total = 0;
    cart.map(({ product, quantity }) => {
      return total = calcTotalPrice(total, product.price, quantity);
    })
    return (
      <>
        <h4>${total}</h4>
      </>
    )
  }

  return (
    <CheckoutContainer>
      <div className='mainContainer'>
        <div className='headerContainer'>
          <div className='productsHeader'>
            <h2>My Cart</h2>
            <h3>Products</h3>
          </div>
          <div className='orderDetailsHeader'>
            <h3>Size</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
        </div>
        <div className='productCardsContainer'>
          {renderProducts(cartProducts)}
        </div>
        <div className='orderSummaryHeader'>
          <h4>Order summary</h4>
        </div>
        <div className='summaryMainContainer'>
          <div className='orderSummaryContainer'>
            <div className='summary'>
              <h4 >Sub total:</h4>
              {totalPrice(cartProducts)}
            </div>
          </div>
          <div className='totalSummaryContainer'>
            <div className='total'>
              <h4>Total:</h4>
              {totalPrice(cartProducts)}
            </div>
          </div>
        </div>
        <h6>Shipping fee: free</h6>
      </div>
      <div className='checkout'>
        <h5>Tax: calculated at checkout</h5>
        <Link to='/orderSuccess'>
        <button className='checkoutBtn' onClick={checkoutCart()} disabled={cartProducts.length < 1 ? 'disable' : ''}>Checkout</button>
        </Link>
      </div>
    </CheckoutContainer>
  )
}

export default Checkout;