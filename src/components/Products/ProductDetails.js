import ProductContext from '../../store/productsList';
import CartContext from '../../store/cart'
import { useContext, useState } from 'react';
import styled from 'styled-components';
import AuthContext from "../../store/auth-context";
import { renderSimilarProducts } from "./renderFunctions";

const ProductDetailsContainer = styled.div`
    display: flex;
    margin: 50px 0;
    justify-content: center;

.main-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 90%;
    max-width: 1000px;
}

.images-container {
    width: 100%;
    border-right: 1px solid white;
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
  margin: 3em 0;
}

.img-container {
    width: 100%;
}

.images-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.second-img-container {
    display: flex;
    justify-content: space-evenly;
}

.last-img-container {
    display: flex;
    justify-content: center;
}

.img-container img {
    width: 90%;
    margin: 2em 0;
}

.second-img-container img {
    width: 30%;
    margin: 2em 0;
}

.last-img-container img {
    margin: 2em 0;
    width: 70%;
}

.product-container {
    width: 100%;
}

.product-info-container {
    margin: 0 0 0 2em;
}

.description, .details, .shipping {
    border-top: 1px solid grey;
    margin: 0 0 1em 0;
}

.details-container div h4 {
    margin: 1em 0 0 1em;
}

.details-container div span {
    font-size: 12px;
    background: white;
    color: black;
    margin: 0 1em 0 0;
    cursor: pointer;
}

.details-container div p {
    margin: 1em 0 1em 3.5em;
    font-size: 12px;
}

hidden {
    display: none;
}

.details-container .similar-items-container h4 {
    margin: 1em 0 3em 3em;
}

.details-container .similar-items {
    display: flex;
    justify-content: space-evenly;
    align-items: start;
    margin: 3em 0;
}

.details-container .similar-items img {
    max-width: 150px;
    margin: 0 auto;
}

.similar-items .item-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
}

.similar-items .item-details {
    width: 150px;
}

.item-details .price {
    font-weight: bold;
    text-transform: none;
}

.item-details .title {
    text-transform: none;
}

h3 {
    font-size: 3vw;
    text-transform: uppercase;
    font-weight: 800;
  }

h4 {
    text-transform: uppercase;
    font-weight: 400;
}

h5 {
}

h5 span {
    color: red;
}

h6 {
    font-size: 14px;
    text-transform: uppercase;
    margin: 0.5em 0;
    font-weight: 400;
}

@media (max-width: 992px) {
.checkoutBtn {
      height: 6vw;
      width: 26vw;
      font-size: 2vw;
}

.details-container div span {
    font-size: 1.8vw;
}

h3 {
    font-size: 3vw;
  }

h4 {
    font-size: 2.5vw;
}

h5 {
    font-size: 2.2vw;
}

h6 {
    font-size: 2.2vw;
}

h5 span {
    font-size: 2vw;    
}

.details-container div p {
    font-size: 1.8vw;
}

.details-container .similar-items img {
    width: 100%;
}

.similar-items .item-details {
    width: 100%;
}
}

`


const ProductDetails = () => {

    const { isLoggedIn } = useContext(AuthContext);

    const { products } = useContext(ProductContext);
    const {
        toggleCart,
        isInCart
    } = useContext(CartContext);

    const curId = window.location.pathname.slice(-2);
    const product = products[curId.replace('/', '') - 1];

    const [showDescription, setShowDescription] = useState(false);
    const [showDetails, setShowDetails] = useState(false);
    const [showShipping, setShowShipping] = useState(false);

    const toggleMenu = (type) => () => {
        switch(type) {
            case 'description':
                showDescription ? setShowDescription(false) : setShowDescription(true);
                break;
            case 'details':
                showDetails ? setShowDetails(false) : setShowDetails(true);
                break;
            case 'shipping':
                showShipping ? setShowShipping(false) : setShowShipping(true);
                break;
                default:
        }
    }

    return (
        <ProductDetailsContainer>
            <div className='main-container'>
                <div className='images-container'>
                    <div className='img-container'>
                        <h3>Product</h3>
                        <div className='images-container'>
                            <img src={product.images[0]} alt=''></img>
                            <div className='second-img-container'>
                                <img src={product.images[1]} alt=''></img>
                                <img src={product.images[2]} alt=''></img>
                            </div>
                            <div className='last-img-container'>
                                <img src={product.images[3]} alt=''></img>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-container'>
                    <div className='product-info-container'>
                        <h3>{product.title}</h3>
                        <h4 className='price'>${product.price}</h4>
                        <h3>{product.brand}</h3>
                        <h4>Rating: {'⭐'.repeat(Math.round(product.rating)) + '★'.repeat(5-Math.round(product.rating))}</h4>
                        <h4>Stock: {product.stock}</h4>
                        <h5>Discount: <span>{product.discountPercentage}%</span></h5>
                        <button className='checkoutBtn' onClick={toggleCart(products, product.id, isLoggedIn)}>{isInCart(product.id) ? 'Remove from cart' : 'Add to cart'}</button>
                    </div>
                    <div className='details-container'>
                        <div className='description'>
                            <h4 onClick={toggleMenu('description')}><span>{showDescription ? '\u2796' : '\u2795'}</span>Description</h4>
                            <p className={showDescription ? '' : 'hidden'}>{product.description}</p>
                        </div>
                        <div className='details'>
                            <h4 onClick={toggleMenu('details')}><span>{showDetails ? '\u2796' : '\u2795'}</span>Details</h4>
                            <p className={showDetails ? '' : 'hidden'}>No details available</p>
                        </div>
                        <div className='shipping'>
                            <h4 onClick={toggleMenu('shipping')}><span>{showShipping ? '\u2796' : '\u2795'}</span>Shipping and returns</h4>
                            <p className={showShipping ? '' : 'hidden'}>Shipping fee: free</p>
                        </div>
                        <div className='similar-items-container'>
                            <h4>Similar items</h4>
                            <div className='similar-items'>
                            {renderSimilarProducts(products, product)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProductDetailsContainer>
    )
}

export default ProductDetails