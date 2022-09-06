import styled from "styled-components";
// import { useState } from 'react';
import grid from '../../assets/grid.svg'
import list from '../../assets/list.svg'
import { FaBars } from "react-icons/fa";
import ProductContext from '../../store/productsList';
import CartContext from "../../store/reducers/cart";
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const ProductsContainer = styled.div`
display: flex;
justify-content: center;

.gridContainer {
    width: 940px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    justify-content: space-between;   
    margin: 50px 0; 
    
    @media (max-width: 992px) {
    justify-content: center;
    }
    
    @media (max-width: 600px) {
        width: 90%;
}

.sideBarContainer {
    display: inline;
    width: 300px;
    background: #2E2E30;  
    border-radius: 5px;
    overflow: hidden;
    z-index: 1;
    
    @media (max-width: 992px) {
        position: fixed;
        top: 0px;
        padding: 26px 0px 0px 50px;
        height: 100%;
        transition: 0.5s;
        left: 0px;
        background: #111;
    }
    
    @media (max-width: 600px) {
        width: 100%;
        overflow: scroll;
        height: 90%;
        padding: 10%;
      }

    .side-close {
        position: relative;
        float: right;
        margin-right: 25px;
        cursor: pointer;
        background: #fff;
        width: 30px;
        height:30px;
        border-radius: 15px;
        color: black;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        
        @media (max-width: 600px) {
            margin-right: 75px;
        }

        @media (min-width: 992px) {
            display: none;
        }
    }
    

    .sortByPrice {
        margin: 30px 30px 0 30px;
    }
    
    input[type="radio"] {
        margin: 10px 10px 10px 0;
        width: 1.5em;
        height: 1.5em;
        cursor: pointer;
        accent-color: black;
    }

    h3 {
        margin: 40px 0 10px 0;
    }

    .categories {
        margin-left: 30px;
        border: none;
        padding: 0;

        div{
            display: flex;
            align-items: center;
            font-size: 14px;
        }
    }
    
    .ratings {
        margin-left: 30px;
        border: none;
        padding: 0;

        div{
            display: flex;
            align-items: center;
            font-size: 14px;
        }
    }

    .shipping {
        margin-left: 30px;
        border: none;
        padding: 0;

        div{
            display: flex;
            align-items: center;
            font-size: 14px;
        }
    }
    }

    .hideSidebar {
        width: 300px;
    
        @media (max-width: 992px) {
        width: 0;
        padding: 0;
        }
    }
}


.cardsContainer{
    display: inline;
}

.productHeading{
    display: block;
    background: #2E2E30;
    height: 100px;
    border-radius: 5px;
    padding: 30px;
    
    @media (max-width: 600px) {
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 30px 5%;
    }

    h2 {
        margin: 0
    }

    span {
        position: relative;
        top: 42px;

        @media (max-width: 600px) {
            position: inherit;
        }
    }

    .sortBy {
        position: relative;
        float: right;
        top: 45px;
        
    @media (max-width: 600px) {
        position: initial;
    }

        form select{
            width: 120px;
        }
    }
}

.gridIcons {
    display: flex;
    justify-content: end;
    margin-top: 20px;

    .showSidebarDiv{
        width:100%;

    svg {
        font-size: 32px;
        cursor: pointer;
        opacity: 70%;
        
    }
        
        @media (max-width: 600px) {
            right: 251px;
        }
        
        :hover {
            opacity: 100%;
        }

        @media (min-width: 992px) {
            display: none;
        }
    
    }

    img {
        opacity: 70%;
        width: 30px;
        height: 30px;
        color: white;
        margin: 0 0 10px 10px;
        cursor: pointer;
        
        :hover {
            opacity: 100%;
        }
        }
        
        .active {
            opacity: 100%;
    }
}

.cardGridContainer {
    width: 620px;
    display: grid;
    grid-template-columns: repeat(2, 300px);
    justify-content: space-between;
    
    @media (max-width: 600px) {
        width: 100%;
        grid-template-columns: repeat(2, 48%);
    }
}

    .card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #2E2E30;
        border-radius: 5px;
        height: 80%;
    }

        .listView {
            width: 100%;
            flex-direction: row;
            grid-auto-rows: auto;
            grid-column: 1/3;
        }

    .imgDiv {
        height: 67%;
        width: 100%;
    }

    .listView .imgDiv {  
        height: 100%;      
        width: 75%;
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
        min-height: 63px;
        margin: auto 0;
        height: 100%;
        justify-content: center;
        align-items: center;
    }

    .listView .detailsContainer {
        width: 100%;
        padding: 0;

        .productDetails{
            margin: 5%;
            display:flex;
            flex-direction: column;
            justify-content: space-evenly;
        }
    }

    .productDetails {
        margin: auto 0 auto 10%;
        width: 100%;
        
        @media (max-width: 600px) {
            margin: auto 5% auto 10%;
        
        }

        div {
            font-size: 14px;
            font-weight: normal;
            
        @media (max-width: 600px) {
            font-size: 2.3vw;
            max-font-size: 14px;
        }
        }
    }

    .title, .price {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
    }

    .hidden {
        display: none;
    }

    .cart {
        position: relative;
        margin: auto 10% auto 0;
        float: right;
        font-size: 28px;
        cursor: pointer;
        width: 10%;
        text-align: end;

        @media (max-width: 600px) {
            font-size: 5vw;
    }
    }
    }
}

        
.addedTocart {
    color: #db1f1f;
}

.pagination {
    
    ul {
    display: flex;
    height: 50px;
    list-style: none;
    margin: 5% 0 0 0;
    padding: 0;
    
    .active {
        background: #db1f1f;
    }
    }
    
    li {
    display: flex;
    background: #2E2E30;
    width: 40px;
    margin: 0 5px;
    border-radius: 3px;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover {
        background: #db1f1f;
    }
    }
}
    .alert {
        position: absolute;
        border-radius: 5px;
        padding: 2vw;
        background-color: white;
        color: black;
        font-size: 14px;
        max-width: 42%;
        transition: 0.5s;
        
        @media (max-width: 600px) {
            font-size: 2.5vw;
    }
      }
      
      .closebtn {
        margin-left: 15px;
        color: black;
        font-weight: bold;
        float: right;
        font-size: 22px;
        line-height: 20px;
        cursor: pointer;
        transition: 0.5s;
      }
      
      .closebtn:hover {
        color: gray;
      }

      .hideAlert {
        position: absolute;
        overflow: hidden;
        transition: 0.5s;
        width: 40%;
      }
`;

const Products = () => {

    const { isLoggedIn } = useContext(AuthContext);

    const {
        products,
        currentPage,
        switchPage,
        productsToDisplay,
        setProductsToDisplay,
        currentCategory,
        switchCategory,
        currentRating,
        switchRating,
        currentSortBy,
        switchSortBy
    } = useContext(ProductContext);

    const {
        toggleCart,
        isInCart,
        renderError,
        errorMsg
    } = useContext(CartContext);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);

    const [listView, setlistView] = useState(true);
    const showListView = () => setlistView(true);
    const showGridView = () => setlistView(false);

    const sort = (list, sortBy = currentSortBy) => {
        if (sortBy === 'byName') {
            list.sort((a, b) => {
                let fa = a.title.toLowerCase(),
                    fb = b.title.toLowerCase();
                if (fa < fb) {
                    return -1;
                }
                if (fa > fb) {
                    return 1;
                }
                return 0;
            });
        } else if (sortBy === 'byPrice') {
            list.sort((a, b) => {
                return a.price - b.price;
            });
        } else if (sortBy === 'byRating') {
            list.sort((a, b) => {
                return a.rating - b.rating;
            });
        }
    }

    let updatedProducts = [];
    const updateProducts = (page) => () => {
        updatedProducts = [...products];
        sort(updatedProducts);
        updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
        updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
        updatedProducts = updatedProducts.slice((6 * page - 6), (6 * page));
        switchPage(page);
        setProductsToDisplay(updatedProducts);
    }

    const updateProductsByCategory = (cat) => () => {
        switchCategory(cat);
        updatedProducts = [...products];
        sort(updatedProducts);
        updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
        updatedProducts = updatedProducts.filter(item => item.category.includes(cat));
        updatedProducts = updatedProducts.slice(0, 6);
        switchPage(1);
        setProductsToDisplay(updatedProducts);
    }

    const updateProductsByRating = (rating) => () => {
        updatedProducts = [...products];
        sort(updatedProducts);
        updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
        updatedProducts = updatedProducts.filter(item => item.rating > rating);
        updatedProducts = updatedProducts.slice(0, 6);
        switchRating(rating);
        switchPage(1);
        setProductsToDisplay(updatedProducts);
    }

    const renderSortForm = () => {

        const handleSubmit = (event) => {
            event.preventDefault();
            const sortBy = event.target.value;
            updatedProducts = [...products];
            sort(updatedProducts, sortBy);
            updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
            updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
            setProductsToDisplay(updatedProducts);
            switchSortBy(sortBy);
            switchPage(1);
        }
        const renderForm = (
            <form onChange={handleSubmit}>
                <label>Sort by: </label>
                <select id="cars" name="cars">
                    <option value=""></option>
                    <option value="byName">Name</option>
                    <option value="byPrice">Price</option>
                    <option value="byRating">Rating</option>
                </select>
            </form>
        )
        return (
            <>{renderForm}</>
        )
    }

    const renderProduct = (items) => {
        if (items === undefined) {
            return <div>loading...</div>
        } else {
            return items.slice(0, 6).map(({ id, title, description, price, thumbnail, rating }, index) => {
                return (
                    <div key={index} className={!listView ? 'card listView' : 'card'}>
                        <div className="imgDiv">
                            <Link to={`/products/product/${id}`}>
                                <img src={thumbnail} alt=''></img>
                            </Link>
                        </div>
                        <div className="detailsContainer">
                            <div className="productDetails">
                                <div className="title">{title}</div>
                                <div className={listView ? 'hidden' : ''}>DESCRIPTION: {description}</div>
                                <div className="price">${price}</div>
                                <div className="price">{rating}&#11088;</div>
                            </div>
                            <div className={isInCart(id) ? 'cart addedTocart' : 'cart'} title="Add to Wish List"onClick={toggleCart(products, id, isLoggedIn)}>
                            &#10084;</div>
                            <div className={errorMsg ? "alert" : 'hideAlert'}>{renderError('notLoggedIn')}</div>
                        </div>
                    </div>
                )
            })
        }
    }
    
    const renderPagination = () => {
        updatedProducts = [...products];
        sort(updatedProducts);
        updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
        updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
        let pages = [...Array(Math.ceil(updatedProducts.length/6+1)).keys()];
        pages.splice(0,1);
        return pages.map((index) => {
            return (
                <li key={index} className={currentPage === index ? "active" : ''} onClick={updateProducts(index)}>{index}</li>
            )
        })
    }

    return (
        <ProductsContainer>
            <div className='gridContainer'>
                <div className={sidebar ? 'sideBarContainer' : 'sideBarContainer hideSidebar'}>
                    <div className='side-close' onClick={(closeSidebar)}>&#x2716;</div>
                    <div className="sortByPrice">
                        <h3>Price</h3>
                        <input type="range" name="price" id="price" min="0" max="200000" step="1" ></input>
                        <output className="price-output">
                            <div>Price: $0 - $1,000</div>
                        </output>
                    </div>
                    <fieldset className="categories" id="categories" onChange={(closeSidebar)}>
                        <h3>Categories</h3>
                        <div>
                            <input type="radio" name="category" value='' onClick={updateProductsByCategory('')} />All
                        </div>
                        <div>
                            <input type="radio" name="category" value='smartphones' onClick={updateProductsByCategory('smartphones')} />Smartphones
                        </div>
                        <div>
                            <input type="radio" name="category" value='laptops' onClick={updateProductsByCategory('laptops')} />Laptops
                        </div>
                        <div>
                            <input type="radio" name="category" value='fragrances' onClick={updateProductsByCategory('fragrances')} />Fragrances
                        </div>
                        <div>
                            <input type="radio" name="category" value='groceries' onClick={updateProductsByCategory('groceries')} />Groceries
                        </div>
                    </fieldset>
                    <fieldset className="ratings" id="ratings" onChange={(closeSidebar)}>
                        <h3>Rating stars</h3>
                        <div>
                            <input type="radio" name="ratings" value='1' onClick={updateProductsByRating(1)} />1
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='3' onClick={updateProductsByRating(2)} />2
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='3' onClick={updateProductsByRating(3)} />3
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='4' onClick={updateProductsByRating(4)} />4
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='5' onClick={updateProductsByRating(5)} />5
                        </div>
                    </fieldset>
                    <fieldset className="shipping" id="shipping" onChange={(closeSidebar)}>
                        <h3>Shipping</h3>
                        <div>
                            <input type="radio" name="shipping" />Free
                        </div>
                        <div>
                            <input type="radio" name="shipping" />Express
                        </div>
                    </fieldset>
                </div>
                <div className="cardsContainer">
                    <div className='productHeading'>
                        <h2>Products</h2>
                        <span>Showing 1-16 of 29 results</span>
                        <div className="sortBy">
                            {renderSortForm()}
                        </div>
                    </div>
                    <div className="gridIcons">
                        <div className="showSidebarDiv"><FaBars onClick={showSidebar} /></div>
                        <img src={grid} alt='grid' className={listView ? 'active' : ''} onClick={showListView}></img>
                        <img src={list} alt='list' className={!listView ? 'active' : ''} onClick={showGridView}></img>
                    </div>
                    <div className='cardGridContainer'>
                        {renderProduct(productsToDisplay)}
                    </div>
                    <div className="pagination">
                        <ul>
                            {renderPagination()}
                        </ul>
                    </div>
                </div>
            </div>
        </ProductsContainer>
    )
}

export default Products;