import styled from 'styled-components';
import img from '../../assets/no-img.gif'

const CheckoutContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.mainContainer {
  width: 940px;
  display: flex;
  flex-direction: column;
}
  h2 {
    text-transform: uppercase;
  }

  .headerContainer {
    display: flex;
    flex-direction: row;
  }

  .productsHeader {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-right: 1px solid;
    padding: 1.5em 0;
  }

  h3 {
    text-transform: uppercase;
  }

  .orderDetailsHeader {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-evenly;
    width: 60%;
    padding: 1.5em 0;
  }
  
  .productCardsContainer {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid;
  }

  .product {
    display: flex;
    flex-direction: row;
  }

    .productCard {
      display: flex;
      flex-direction: row;
      width: 40%;
      align-items: center;
      border-right: 1px solid;
      padding: 1.5em 0;

    img {
      width: 150px;
    }

    h3 {
      margin-left: 1em;
    }
  }

  .productOptions{
    display: flex;
    flex-direction: row;
    width: 60%;
    padding: 1.5em 0;
    justify-content: space-evenly;
    align-items: center;
  }

  .orderSummaryHeader{
    width: 40%;
    border-right: 1px solid;
    padding: 1em 0 0 0;
  }
  
  .summaryMainContainer{
    display: flex;
    flex-direction: row;
  }

  span, h4 {
    font-weight: 700;
    text-transform: uppercase;
  }

  .orderSummaryContainer {
    display: flex;
    flex-direction: column;
    width: 40%;
    border-right: 1px solid;
    padding: 1em 0 2em 0;
    align-items: start;
  }
  
  .summary {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
  }

  .totalSummaryContainer {
    display: flex;
    flex-direction: column;
    width: 60%;
    padding: 1em 0 2em 0;
    align-items: end;
  }

  .total {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
  }
`

const Checkout = () => {

  return (
    <CheckoutContainer>
      <div className='mainContainer'>
        <div className='headerContainer'>
          <div className='productsHeader'>
            <h2>My Cart</h2>
            <h3>Products</h3>
          </div>
          <div className='orderDetailsHeader'>
            <h3>Size</h3>
            <h3>Quantity</h3>
            <h3>Price</h3>
          </div>
        </div>
        <div className='productCardsContainer'>
          <div className='product'>
            <div className='productCard'>
              <img src={img} alt='product'></img>
              <h3>Product</h3>
            </div>
            <div className='productOptions'>
              <span>10</span>
              <span>- 1 +</span>
              <span>$100</span>
            </div>
          </div>
          <div className='product'>
            <div className='productCard'>
              <img src={img} alt='product'></img>
              <h3>Product</h3>
            </div>
            <div className='productOptions'>
              <span>10</span>
              <span>- 1 +</span>
              <span>$100</span>
            </div>
          </div>
          <div className='product'>
            <div className='productCard'>
              <img src={img} alt='product'></img>
              <h3>Product</h3>
            </div>
            <div className='productOptions'>
              <span>10</span>
              <span>- 1 +</span>
              <span>$100</span>
            </div>
          </div>
        </div>
        <div className='orderSummaryHeader'>
          <h4>Order summary</h4>
        </div>
        <div className='summaryMainContainer'>
        <div className='orderSummaryContainer'>
          <div className='summary'>
            <span >Sub total:</span>
            <span>$100</span>
          </div>
        </div>
        <div className='totalSummaryContainer'>
          <div className='total'>
            <span>Total:</span>
            <span>$300</span>
          </div>
        </div>
        </div>
      </div>
    </CheckoutContainer>
  )
}

export default Checkout;