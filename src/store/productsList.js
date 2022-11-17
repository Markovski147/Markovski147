import { createContext, useState, useEffect } from "react";


const ProductContext = createContext({
  products: [],
  currentPage: 1,
  switchPage: () => { },
  productsToDisplay: [],
  setProductsToDisplay: () => { },
  currentCategory: [],
  switchCategory: () => { },
  currentRating: [],
  switchRating: () => { },
  currentSortBy: [],
  switchSortBy: () => { },
  updateProducts: () => { },
  updateProduct: () => { },
  updateProductsByCategory: () => { },
  updateProductsByRating: () => { },
  sort: () => { },
  currentId: [],
  setCurrentProduct: () => { },
  currentPriceRange: [],
  updateProductsByPriceRange: () => { },
  minPrice: [],
  maxPrice: []
})

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async (setData) => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setData(data.products);
  }

  useEffect(() => {
    fetchProducts(setProducts);
  }, []);

  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [currentPage, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(setProductsToDisplay);
  }, []);

  const switchPage = (num) => {
    setPage(num);
  }

  const [currentCategory, setCategory] = useState('');

  const switchCategory = (category) => {
    setCategory(category);
  }

  const [currentRating, setRating] = useState('');

  const switchRating = (rating) => {
    setRating(rating);
  }

  const [currentSortBy, setCurrentSortBy] = useState([]);
  const switchSortBy = (sortBy) => {
    setCurrentSortBy(sortBy);
  }

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);


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

  const updateProducts = (page) => () => {
    let updatedProducts = [...products];
    sort(updatedProducts, currentSortBy);
    updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
    updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
    updatedProducts = updatedProducts.filter(item => item.price >= minPrice & item.price <= maxPrice);
    updatedProducts = updatedProducts.slice((6 * page - 6), (6 * page));
    switchPage(page);
    setProductsToDisplay(updatedProducts);
    if (currentPage === page) {
      return
    } else {
      window.scrollTo({ top: 460, behavior: 'smooth' });
    }
  }

  const updateProduct = () => () => {
    let updatedProducts = [...products];
    setProductsToDisplay(updatedProducts);
  }

  const updateProductsByCategory = (cat) => () => {
    switchCategory(cat);
    let updatedProducts = [...products];
    sort(updatedProducts, currentSortBy);
    updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
    updatedProducts = updatedProducts.filter(item => item.category.includes(cat));
    updatedProducts = updatedProducts.filter(item => item.price >= minPrice & item.price <= maxPrice);
    console.log(minPrice, maxPrice)
    updatedProducts = updatedProducts.slice(0, 6);
    switchPage(1);
    setProductsToDisplay(updatedProducts);
  }

  const updateProductsByRating = (rating) => () => {
    let updatedProducts = [...products];
    sort(updatedProducts, currentSortBy);
    updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
    updatedProducts = updatedProducts.filter(item => item.rating > rating);
    updatedProducts = updatedProducts.filter(item => item.price >= minPrice & item.price <= maxPrice);
    updatedProducts = updatedProducts.slice(0, 6);
    switchRating(rating);
    switchPage(1);
    setProductsToDisplay(updatedProducts);
  }

  const updateProductsByPriceRange = (changeMinPrice, changeMaxPrice) => {
    setMinPrice(changeMinPrice);
    setMaxPrice(changeMaxPrice);
    let updatedProducts = [...products];
    sort(updatedProducts, currentSortBy);
    updatedProducts = updatedProducts.filter(item => item.category.includes(currentCategory));
    updatedProducts = updatedProducts.filter(item => item.rating > currentRating);
    updatedProducts = updatedProducts.filter(item => item.price >= minPrice & item.price <= maxPrice);
    updatedProducts = updatedProducts.slice(0, 6);
    switchRating(currentRating);
    switchPage(1);
    setProductsToDisplay(updatedProducts);
  }

  const [currentId, setCurrentId] = useState();
  const setCurrentProduct = () => {
    let curId = window.location.pathname.slice(-2);
    setCurrentId(products[curId.replace('/', '') - 1]);
  }

  const contextValues = {
    products: products,
    currentPage: currentPage,
    switchPage: switchPage,
    productsToDisplay: productsToDisplay,
    setProductsToDisplay: setProductsToDisplay,
    currentCategory: currentCategory,
    switchCategory: switchCategory,
    currentRating: currentRating,
    switchRating: switchRating,
    currentSortBy: currentSortBy,
    switchSortBy: switchSortBy,
    updateProducts: updateProducts,
    updateProduct: updateProduct,
    updateProductsByCategory: updateProductsByCategory,
    updateProductsByRating: updateProductsByRating,
    sort: sort,
    currentId: currentId,
    setCurrentProduct: setCurrentProduct,
    updateProductsByPriceRange,
    minPrice: minPrice,
    maxPrice: maxPrice
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;

