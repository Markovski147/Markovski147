import { createContext, useState, useEffect } from "react";


const ProductContext = createContext({ products: [] })

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


  const contextValues = {
    products: products.products
  };

  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  )
}

export default ProductContext;

