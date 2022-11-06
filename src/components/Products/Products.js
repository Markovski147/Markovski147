import grid from '../../assets/grid.svg'
import list from '../../assets/list.svg'
import { FaBars } from "react-icons/fa";
import ProductContext from '../../store/productsList';
import { useContext, useState, useEffect } from 'react';
import { renderCategories, renderPagination, renderSortForm, renderProducts } from "./renderFunctions.js";
import { renderRatings, renderRangeSlider } from "./renderFunctions.tsx";
import './products.css';
import "./spinner.css";
import { useSelector, useDispatch } from 'react-redux';
import { selectIsLoggedIn } from '../../store/selectors/authSelectors.js';
import { cartActions } from "../../store/slices/cartSlice.js";
import { setCartItem, getCart } from "../../store/actions/cartActions.js";
import { selectCartItems, selectCartId } from '../../store/selectors/cartSelectors.js';

const Products = () => {

    const isLoggedIn = useSelector(selectIsLoggedIn);

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
        sort,
        updateProductsByPriceRange,
        minPrice,
        maxPrice
    } = useContext(ProductContext);


    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const cartId = useSelector(selectCartId);

    useEffect(() => {
        dispatch(getCart());
    }, [dispatch])

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const closeSidebar = () => setSidebar(false);

    const [listView, setlistView] = useState(true);
    const showListView = () => setlistView(true);
    const showGridView = () => setlistView(false);

    const handleAddItem = (product) => (e) => {
        e.preventDefault();
        if (isLoggedIn) {
        const currentCartItems = [...cartItems];
        currentCartItems.push(product);
        dispatch(cartActions.addCartItems(currentCartItems));
        dispatch(setCartItem(product.id, cartId));
        dispatch(cartActions.productNumber(currentCartItems.length));
        setTimeout(() => {
            dispatch(getCart());
        }, 500);
    } else {
        return console.log('Log in to use cart');
    }
    }

    return (
        <div className='productsContainer'>
            <div className='gridContainer'>
                <div className={sidebar ? 'sideBarContainer' : 'sideBarContainer hideSidebar'}>
                    <div className='side-close' onClick={(closeSidebar)}>&#x2716;</div>
                    <div className="sortByPrice">
                        <h3>Price</h3>
                        {renderRangeSlider(updateProductsByPriceRange, minPrice, maxPrice)}
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
                            {renderSortForm(products, sort, currentCategory, currentRating, setProductsToDisplay, switchSortBy, switchPage, minPrice, maxPrice)}
                        </div>
                    </div>
                    <div className="gridIcons">
                        <div className="showSidebarDiv"><FaBars onClick={showSidebar} /></div>
                        <img src={grid} alt='grid' className={listView ? 'active' : ''} onClick={showListView}></img>
                        <img src={list} alt='list' className={!listView ? 'active' : ''} onClick={showGridView}></img>
                    </div>
                    <div className='cardGridContainer'>
                        {renderProducts(productsToDisplay, listView, isLoggedIn, handleAddItem)}
                    </div>
                    <div className="pagination">
                        <ul>
                            {renderPagination(products, currentCategory, currentRating, currentPage, updateProducts, minPrice, maxPrice)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;