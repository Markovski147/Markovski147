import { Link } from "react-router-dom";

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

export const renderRatings = (updateFunc) => {
    return [...Array(6).keys()].splice(1).map((rating, index) => {
        return (<div>
            <input type="radio" name="ratings" value={rating} key={index} onClick={updateFunc(rating)} />{rating}
        </div>
        )
    });
}

export const renderPagination = (products, sort, currentCategory, currentRating, currentPage, updateFunc) => {
    let updatedProducts = [...products];
    sort(updatedProducts);
    updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
    updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
    let pages = [...Array(Math.ceil(updatedProducts.length / 6 + 1)).keys()];
    pages.splice(0, 1);
    return pages.map((index) => {
        return (
            <li className={currentPage === index ? "active" : ''} key={index} onClick={updateFunc(index)}>{index}</li>
        )
    })
}

export const renderSortForm = (products, sort, currentCategory, currentRating, setProductsToDisplay, switchSortBy, switchPage) => {
    let updatedProducts = [...products];
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

export const renderProducts = (products, listView, isInCart, isLoggedIn, toggleCart) => {
    if (products === undefined) {
        return <div>loading...</div>
    } else {
        return products.slice(0, 6).map(({ id, title, description, price, thumbnail, rating }, index) => {
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
                            <div className={listView ? 'hidden' : ''}>{rating}&#11088;</div>
                        </div>
                        <div className={isInCart(id) ? 'cart addedTocart' : 'cart'} title={!isInCart(id) & isLoggedIn ? 'Add to cart' : !isInCart(id) ? 'Please login to use cart' : 'Remove from cart'} onClick={toggleCart(products, id, isLoggedIn)}>
                            &#10084;</div>
                    </div>
                </div>
            )
        })
    }
}