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
  switchSortBy: () => { }
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
    switchSortBy: switchSortBy
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;

