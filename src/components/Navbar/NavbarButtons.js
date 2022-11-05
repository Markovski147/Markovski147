import styled from 'styled-components';
import search from '../../assets/search.svg';
import cartIcon from '../../assets/cart.svg';
import logout from '../../assets/logout.webp'
import user from '../../assets/user.svg';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../store/selectors/authSelectors.js';
import { authActions } from '../../store/slices/authLogin.js';
import { selectCartProducts } from '../../store/selectors/cartSelectors.js';

const NavbarButtonsContainer = styled.div`
  display: flex;

  .btn-container {
    width: 40px;
    margin-right: 4px;
    cursor: pointer;

    img {
      max-height: 20px;
    }
  }

  .cart-btn {
    position: relative;

    .cart-values {
      position: absolute;
      top: -10px;
      font-weight: 700;
      color: white;
    }
  }

  .auth-btn {
    background: transparent;
    border: transparent;
  }
`;

const NavbarButtons = () => {
  
  const dispatch = useDispatch()
  const isLoggedIn = useSelector(selectIsLoggedIn)

  const cartProducts = useSelector(selectCartProducts);
  const cartProductsLength = cartProducts.reduce((accumulator, object) => {
    return accumulator + object.quantity;
  }, 0);
  

  return (
    <NavbarButtonsContainer>
      <div className='search-btn btn-container'>
        <img src={search} alt='Search' />
      </div>
      <Link to='/checkout'>
      <div className='cart-btn btn-container'>
        <img src={cartIcon} alt='Cart' />
        <span className='cart-values'>{cartProductsLength}</span>
      </div>
      </Link>
      {isLoggedIn ? (
        <Link to='/'>
        <button className='auth-btn btn-container' onClick={() => dispatch(authActions.logout())}>
          <img src={!isLoggedIn ? user : logout} alt='Logged out user' />
        </button>
        </Link>
      ) : (
        <Link to='/login'>
        <button className='auth-btn btn-container'>
          <img src={!isLoggedIn ? user : logout} alt='Logged in user' />
        </button>
        </Link>
      )}
    </NavbarButtonsContainer>
  );
};

export default NavbarButtons;
