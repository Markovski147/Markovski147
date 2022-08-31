import { createContext, useState, useEffect } from "react";


const ProductContext = createContext({
  products: [],
  wishList: [],
  wishListProducts: 0,
  toggleWishList: () => { },
  isOnWishList: () => { },
  page: 1,
  switchPage: () => { },
  productsToDisplay: [],
  setProductsToDisplay: () => { },
  currentCategory: [],
  switchCategory: () => { },
  allCategories: []
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

  const [wishList, setWishList] = useState([1, 5, 9]);

  const toggleWishList = (id) => () => {
    if (wishList.includes(id)) {
      setWishList(list => list.filter(product => product !== (id)));
      console.log(wishList)
    } else {
      setWishList([...wishList, id]);
      console.log(wishList)
    }
  }

  const isOnWishList = (id) => {
    if (wishList.includes(id)) {
      return true
    } else {
      return false
    }
  }

  const wishListProducts = wishList.length;

  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchProducts(setProductsToDisplay);
  }, []);

  const switchPage = (num) => {
    setPage(num);
    console.log(page);
  }

  const [currentCategory, setCategory] = useState('');
  const [allCategories, setAllCategories] = useState([]);

  const switchCategory = (category) => {
    setCategory(category);
    console.log(category);
  }

  const renderCategories = products.map(({ category }, index) => {
    return category;
  })

  // const filteredCategories = renderCategories.filter(el => {
  //   if (renderCategories.includes(el)) {
  //     return renderCategories.remove(el);
  //   }
  // }
  // )

  // setAllCategories([...filteredCategories]);


  const contextValues = {
    products: products,
    wishList: wishList,
    wishListProducts: wishListProducts,
    toggleWishList: toggleWishList,
    isOnWishList: isOnWishList,
    page: page,
    switchPage: switchPage,
    productsToDisplay: productsToDisplay,
    setProductsToDisplay: setProductsToDisplay,
    currentCategory: currentCategory,
    switchCategory: switchCategory,
    allCategories: allCategories
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;

