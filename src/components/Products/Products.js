import grid from '../../assets/grid.svg'
import list from '../../assets/list.svg'
import { FaBars } from "react-icons/fa";
import ProductContext from '../../store/productsList';
import CartContext from "../../store/cart";
import { useContext, useState } from 'react';
import AuthContext from "../../store/auth-context";
import { renderCategories, renderRatings, renderPagination, renderSortForm, renderProducts } from "./renderFunctions";
import './products.css';

const Products = () => {
    const { isLoggedIn } = useContext(AuthContext);

    const {
        products,
        currentPage,
        switchPage,
        productsToDisplay,
        setProductsToDisplay,
        currentCategory,
        currentRating,
        switchSortBy,
        updateProducts,
        updateProductsByCategory,
        updateProductsByRating,
        sort
    } = useContext(ProductContext);

    const {
        toggleCart,
        isInCart
    } = useContext(CartContext);

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);

    const [listView, setlistView] = useState(true);
    const showListView = () => setlistView(true);
    const showGridView = () => setlistView(false);

    return (
        <div className='productsContainer'>
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
                        {renderCategories(products, updateProductsByCategory)}
                    </fieldset>
                    <fieldset className="ratings" id="ratings" onChange={(closeSidebar)}>
                        <h3>Rating stars</h3>
                        {renderRatings(updateProductsByRating)}
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
                            {renderSortForm(products, sort, currentCategory, currentRating, setProductsToDisplay, switchSortBy, switchPage)}
                        </div>
                    </div>
                    <div className="gridIcons">
                        <div className="showSidebarDiv"><FaBars onClick={showSidebar} /></div>
                        <img src={grid} alt='grid' className={listView ? 'active' : ''} onClick={showListView}></img>
                        <img src={list} alt='list' className={!listView ? 'active' : ''} onClick={showGridView}></img>
                    </div>
                    <div className='cardGridContainer'>
                        {renderProducts(productsToDisplay, listView, isInCart, isLoggedIn, toggleCart)}
                    </div>
                    <div className="pagination">
                        <ul>
                            {renderPagination(products, sort, currentCategory, currentRating, currentPage, updateProducts)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;