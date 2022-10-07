import React from "react";

export const Spinner = () => <div className="loader"></div>;

export const checkProduct = (isLoading: boolean, triggerLoading: Function, img: string) => {
    triggerLoading();
    if (isLoading) {
        return Spinner();
    } else {
        return <div className="no-product">
            <img src={img} alt=""></img>
        </div>;
    }
}

export const renderRatings = (updateFunc: Function) => {
    return [...Array(6).keys()].splice(1).map((rating, index) => {
        return (<div>
            <input type="radio" name="ratings" value={rating} key={index} onClick={updateFunc(rating)} />{rating}
        </div>
        )
    });
}

export const renderRangeSlider = (updateProductsByPriceRange: Function, minPrice: number, maxPrice: number) => {
    const handleSubmitMin = (event) => {
        event.preventDefault();
        const changeMinPrice: number = event.target.value;
        changeMinPrice < maxPrice ? updateProductsByPriceRange(changeMinPrice, maxPrice) : updateProductsByPriceRange(maxPrice, maxPrice);
    }

    const handleSubmitMax = (event) => {
        event.preventDefault();
        const changeMaxPrice: number = +event.target.value;
        changeMaxPrice > minPrice ? updateProductsByPriceRange(minPrice, changeMaxPrice) : updateProductsByPriceRange(minPrice, minPrice);
    }

    const renderSlider = (
        <>
            <div className="priceRangeDiv">
                <input className="minP" type="range" name="price" id="price1" min="0" max='2000' step="1" value={minPrice} onChange={handleSubmitMin}></input>
                <input className="maxP" type="range" name="price" id="price2" min='0' max='2000' step="1" value={maxPrice} onChange={handleSubmitMax}></input>
            </div>
            <output className="price-output">
                <div>Price: ${minPrice} - ${maxPrice}
                </div>
            </output>
        </>
    )
    return (
        <>{renderSlider}</>
    )
}

export const toggleMenu = (type, showType, setType) => () => {
    switch (type) {
        case 'description':
            showType ? setType(false) : setType(true);
            break;
        case 'details':
            showType ? setType(false) : setType(true);
            break;
        case 'shipping':
            showType ? setType(false) : setType(true);
            break;
        default:
    }
}
