import ProductContext from '../../store/productsList';
import { useContext } from 'react';
import styled from 'styled-components';



const ProductDetailsContainer = styled.div`
    display: flex;
    margin: 50px 0;
    justify-content: center;

.card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background: #2E2E30;
    border-radius: 5px;
    margin-bottom: 30px;
    height: 300px;
    
    @media (max-width: 600px) {
        height: 400px;
        width: 450px;
    }
}

    .listView {
        flex-direction: row;
        grid-auto-rows: auto;
        grid-column: 1/3;
        height: 200px;
}

.imgDiv {
    height: 200px;
    width: 100%;
    
    @media (max-width: 600px) {
        width: 300px;
    }
}

img {
    width: 100%;
    height: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
    cursor: pointer;
}

.detailsContainer {
    display: flex;
    flex-direction: row;
    height: 63px;
    margin: auto 0;
}

.productDetails {
    margin: auto 0 auto 30px;
    width: 300px;
}

.title, .price {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 14px;
}

.wishList {
    position: relative;
    margin: auto 20px;
    float: right;
    font-size: 28px;
    cursor: pointer;
    
:hover {
    color: #db1f1f;
}
}
`


const ProductDetails = () => {


    const { products } = useContext(ProductContext);

    const curId = window.location.pathname.slice(-1);
    const product = products[curId - 1];

    return (
        <ProductDetailsContainer>
            <div className='card'>
                <div className="imgDiv">
                        <img src={product.thumbnail} alt=''></img>
                </div>
                <div className="detailsContainer">
                    <div className="productDetails">
                        <div className="title">{product.title}</div>
                        <div className="price">${product.price}</div>
                    </div>
                    <div className="wishList">&#10084;</div>
                </div>
            </div>
        </ProductDetailsContainer>
    )
}

export default ProductDetails