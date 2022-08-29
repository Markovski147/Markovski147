import { createContext, useState, useEffect } from "react";


const ProductContext = createContext({
  products: [],
  wishList: [],
  wishListProducts: 0,
  toggleWishList: () => {},
  isOnWishList: () => {}
})

export const ProductsContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
  const response = await fetch('https://dummyjson.com/products');
  const data = await response.json();
  setProducts(data)
  }

  useEffect(() => {
    fetchProducts();
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

  const contextValues = {
    products: products.products,
    wishList: wishList,
    wishListProducts: wishListProducts,
    toggleWishList: toggleWishList,
    isOnWishList: isOnWishList,
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;

