import styled from 'styled-components';
import success from './../assets/order-success.jpg'
import { Link } from "react-router-dom";

const OrderSuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

    .imgDiv {
      width: 90%;
      max-width: 800px;
    }

    img {
        width: 100%;
    }
    
  .returnShoppingBtn {
    height: 40px;
    width: 12rem;
    border: none;
    border-radius: 3px;
    color: white;
    background: rgb(19, 43, 159);
    background: linear-gradient(90deg, rgba(19, 43, 159, 1) 0%, rgba(249, 5, 5, 1) 100%);
    font-size: 14px;
    font-weight: bold;
    text-transform: uppercase;
    cursor: pointer;
    margin: 3rem 0;
  }
  
  @media (max-width: 992px) {
    .returnShoppingBtn {
        height: 6vw;
        width: 26vw;
        font-size: 2.2vw;
      }
  }
  `;


const OrderSuccess = () => {
  return (
    <OrderSuccessContainer>
      <div className='imgDiv'>
        <img src={success} alt='' />
      </div>
      <Link to='/products'>
        <button className='returnShoppingBtn'>Return to shop</button>
      </Link>
    </OrderSuccessContainer>
  )
}

export default OrderSuccess;