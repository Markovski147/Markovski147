import { Link } from "react-router-dom";
import {Spinner}  from "./renderFunctions.tsx";

export const renderCategories = (products, updateFunc) => {
    let categories = [];
    products.map(({ category }) => {
        if (!categories.includes(category)) {
            return categories.push(category);
        } else {
            return categories;
        }
    })
    return categories.map((category, index) => {
        return (
            <div>
                <input type="radio" name='category' value='category' key={index} onClick={updateFunc(category)} />{category.charAt(0).toUpperCase() + category.slice(1)}
            </div>
        )
    })
}

export const renderPagination = (products, currentCategory, currentRating, currentPage, updateFunc, minPrice, maxPrice) => {
    let updatedProducts = [...products];
    updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
    updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
    updatedProducts = updatedProducts.filter(item => item.price >= minPrice & item.price <= maxPrice);
    let pages = [...Array(Math.ceil(updatedProducts.length / 6 + 1)).keys()];
    pages.splice(0, 1);
    return pages.map((index) => {
        return (
            <li className={currentPage === index ? "active" : ''} key={index} onClick={updateFunc(index)}>{index}</li>
        )
    })
}

export const renderSortForm = (products, sort, currentCategory, currentRating, setProductsToDisplay, switchSortBy, switchPage, minPrice, maxPrice) => {
    let updatedProducts = [...products];
    const handleSubmit = (event) => {
        event.preventDefault();
        const sortBy = event.target.value;
        updatedProducts = [...products];
        sort(updatedProducts, sortBy);
        updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
        updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
        updatedProducts = updatedProducts.filter(item => item.price >= minPrice & item.price <= maxPrice);
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

export const renderProducts = (products, listView, isLoggedIn, handleAddItem) => {
    if (products >= 0) {
        return (
            <Spinner />
        )
    } else {
        return products.slice(0, 6).map(({ id, title, description, price, thumbnail, rating }, index) => {
            return (
                <div key={index} className={!listView ? 'card listView' : 'card'}>
                    <div className="imgDiv">
                        <Link to={`/product/${id}`}>
                            <img src={thumbnail} alt=''></img>
                        </Link>
                    </div>
                    <div className="detailsContainer">
                        <div className="productDetails">
                            <div className="title">{title}</div>
                            <div className={listView ? 'hidden' : ''}>DESCRIPTION: {description}</div>
                            <div className="price">${price}</div>
                            <div className={listView ? 'hidden' : ''}>{rating}&#11088;</div>
                        </div>
                        <div className={'cart'} title={isLoggedIn ? 'Add to cart' : 'Please login to use cart'} onClick={handleAddItem(products[id-1])}>
                            &#10084;</div>
                    </div>
                </div>
            )
        })
    }
}

export const renderSimilarProducts = (products, currentItem, updateFunc, setMainImageHandler) => {
    let category = currentItem.category;
    let updatedProducts = [...products];
    updatedProducts = updatedProducts.filter(item => item.category.includes(category));
    updatedProducts = updatedProducts.filter(item => item.id !== currentItem.id);
    updatedProducts = updatedProducts.sort(() => 0.5 - Math.random());
    if (products === undefined) {
        return <div>loading...</div>
    } else {
        return updatedProducts.slice(0, 2).map(({ id, title, price, thumbnail, brand }, index) => {
            return (
                <div className="item-container">
                    <Link onClick={updateFunc()} to={`/product/${id}`}>
                        <img src={thumbnail} alt='' onClick={setMainImageHandler(0)}></img>
                    </Link>
                    <div className="item-details">
                        <h6>{brand}</h6>
                        <h6 className="title">{title}</h6>
                        <h6 className="price">${price}</h6>
                    </div>
                </div>
            )
        })
    }
}
