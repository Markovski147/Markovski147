import styled from "styled-components";
// import { useState } from 'react';
import grid from '../../assets/grid.svg'
import list from '../../assets/list.svg'
import { FaBars } from "react-icons/fa";
import ProductContext from '../../store/productsList';
import { useContext, useState } from 'react';
import { Link } from "react-router-dom";

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
        width: fit-content;
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
        padding: 100px 0;
        height: 100%;
        transition: 0.5s;
        left: 0px;
        background: #111;
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
        width: 360px;
    }

    h2 {
        margin: 0
    }

    span {
        position: relative;
        top: 42px;
    }

    .sortBy {
        position: relative;
        left: 380px;
        top: 20px;

        form select{
            width: 120px;
        }
        
        @media (max-width: 600px) {
            left: 200px;
        }
    }
}

.gridIcons {
    display: flex;
    justify-content: end;
    margin-top: 20px;
    
    @media (max-width: 600px) {
        width: 420px;
    }

    svg {
        position: relative;
        font-size: 30px;
        margin: 0 0 10px 10px;
        right: 510px;
        cursor: pointer;
        opacity: 70%;
        
        @media (max-width: 600px) {
            right: 312px;
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
        width: 420px;
        grid-template-columns: repeat(2, 200px);
    }
}

    .card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        background: #2E2E30;
        border-radius: 5px;
        margin-bottom: 30px;
        height: 300px;
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
}

.pagination {
    width: 200px;
    
    ul {
    display: flex;
    height: 50px;
    list-style: none;
    margin: 0;
    padding: 0;
    
    .active {
        background: #db1f1f;
        :hover {
            background: #7f7f7f;
        }
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

`;

const Products = () => {

    const { products } = useContext(ProductContext);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);
    
    const [listView, setlistView] = useState(true);
    const showListView = () => setlistView(true);
    const showGridView = () => setlistView(false);



    return (
        <ProductsContainer>
            <div className='gridContainer'>
                <div className={sidebar ? 'sideBarContainer' : 'sideBarContainer hideSidebar'}>
                    <div className='side-close' onClick={(closeSidebar)}>&#x2716;</div>
                    <div className="sortByPrice">
                        <h3>Price</h3>
                        <input type="range" name="price" id="price" min="0" max="200000" step="1" value="100000"></input>
                        <output className="price-output">
                            <div>Price: $0 - $1,000</div>
                        </output>
                    </div>
                    <fieldset className="categories" id="categories">
                        <h3>Categories</h3>
                        <div>
                            <input type="radio" name="category"/>All
                        </div>
                        <div>
                            <input type="radio" name="category" value='smartphones' />Smartphones
                        </div>
                        <div>
                            <input type="radio" name="category" value='fragrances' />Fragrances
                        </div>
                    </fieldset>
                    <fieldset className="ratings" id="ratings">
                        <h3>Rating stars</h3>
                        <div>
                            <input type="radio" name="ratings" value='1'/>1
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='3'/>2
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='3'/>3
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='4'/>4
                        </div>
                        <div>
                            <input type="radio" name="ratings" value='5'/>5
                        </div>
                    </fieldset>
                    <fieldset className="shipping" id="shipping">
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
                            <form>
                                <label>Sort by: </label>
                                <select id="cars" name="cars">
                                    <option value=""></option>
                                    <option value="byName">Name</option>
                                    <option value="byPrice">Price</option>
                                    <option value="byRating">Rating</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="gridIcons">
                        <FaBars onClick={showSidebar} />
                        <img src={grid} alt='grid' className={listView ? 'active' : ''} onClick={showListView}></img>
                        <img src={list} alt='list' className={!listView ? 'active' : ''} onClick={showGridView}></img>
                    </div>
                    <div className='cardGridContainer'>
                        {
                            products.map(({ id, title, price, thumbnail }, index) => {
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
                                                <div className="price">${price}</div>
                                            </div>
                                            <div className="wishList">&#10084;</div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pagination">
                    <ul>
                        <li className="active">1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </div>
                    </div>
            </div>
            {/* <div>{console.log(newProduct(data))}</div> */}
        </ProductsContainer>
    )
}

export default Products;