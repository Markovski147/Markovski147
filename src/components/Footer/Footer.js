import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';
import logo from '../../assets/logo.svg';

const FooterContainer = styled.div`
  position: relative;
   bottom: 0;
   width: 100%;
   margin-bottom: 15px;

   @media (max-width: 720px) and (orientation:portrait) {
   }

   .search-container {
    display: flex;
    justify-content: space-evenly;
    padding: 50px 0 ;

    @media (max-width: 720px) and (orientation:portrait) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }
   }

   .src-product, .subs {
    display: flex;
    width: 350px;
    height: 50px;

    @media (max-width: 720px) and (orientation:portrait) {
      justify-content: center;
      margin: 10px 0 10px 0;
      }
    }

    .search-container input{
      padding: 20px;
     }

    .src-product input {
      width: 300px;
    }

    .src-btn, .sub-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 50px;
      width: 200px;
      background: #db1f1f;
      font-weight: 800;
      font-size: 12px;
     }

    .src-btn {
      width: 60px;
      }

   .footer{
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 15px;

    @media (max-width: 720px) and (orientation:portrait) {
     display: block;
    }
   }

    .logo {
      display: flex;
      margin: 50px;

      @media (max-width: 720px) and (orientation:portrait) {
      margin: 20px;
      }
    }

    img {
      margin: auto;
      width: 80px;
    }
    
    .footer-nav {
      display: flex;
      font-weight: 300;
      justify-content: space-around;
      @media (max-width: 720px) and (orientation:portrait) {
        height: 100%;
        display: block;
        text-align: center;
      }
    }
    .footer-nav div {
      font-size: 14px;
      margin: 5px 25px;
    }
    .footer-nav .top {
      font-size: 16px;
      margin: 20px 25px 10px;
      font-weight: 700;
    }
    .copyrights {
      border-top: 1px solid;
      font-size: 12px;
      font-weight: 200;
      text-align: center;
      padding-top: 10px;
    }
  `;

const Footer = () => {
  return (
    <FooterContainer>
      <div className='search-container'>
        <div className='src-product'>
          <input type="text" />
          <div className='src-btn'>
            <FaSearch />
          </div>
        </div>
        <div className='subs'>
          <input type="text"/>
          <div className='sub-btn'>
            <div>
              SUBSCRIBE NOW
            </div>
          </div>
        </div>
      </div>
      <div className='footer'>
        <div className='logo'>
          <img src={logo} alt='Logo' />
        </div>
        <div className='footer-nav'>
          <div>
            <div className='top'>Categories</div>
            <div>Runnign Shoes</div>
            <div>Yoga Shoes</div>
            <div>Sport Shoes</div>
            <div>Casual Shoes</div>
            <div>School Shoes</div>
          </div>
          <div>
            <div className='top'>Get Help</div>
            <div>About Us</div>
            <div>Contact Us</div>
            <div>Return Policy</div>
            <div>Privacy Policy</div>
            <div>Payment Policy</div>
          </div>
          <div>
            <div className='top'>Usefull Links</div>
            <div>News</div>
            <div>Services</div>
            <div>Policy</div>
            <div>Customer Care</div>
            <div>FAQ's</div>
          </div>
        </div>
      </div>
      <div className='copyrights'>
        <div>
          2022 Footskip Inc. All Rights Reserved
        </div>
      </div>
    </FooterContainer>
  )
}

export default Footer;
