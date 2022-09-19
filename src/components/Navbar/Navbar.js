import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import NavbarButtons from './NavbarButtons';
import { useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import AuthContext from '../../store/auth-context';
import SidebarComponent from './sidebarComponent';

const NavBarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 0;

  .nav-center {
    width: 90vw;
    margin: 0 auto;
  }

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 80px;
    }

    .nav-toggle {
      background: transparent;
      border: transparent;
      color: #FFF;
      cursor: pointer;

      svg {
        font-size: 32px;
      }
    }
  }

  .nav-links {
    display: none;
    list-style: none;
  }

  .navbar-btns {
    display: none;

  @media (min-width: 992px) {
    display: flex;
  }
  
  .welcome {
    text-transform: uppercase;
    margin: 0 30px;
  }

  span {
    text-transform: uppercase;
    font-weight: bold;
  }

}

  .sidebar-container {
    height: 100%;
    width: 0;
    position: fixed;
    z-index: 2;
    top: 0;
    right: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;

        .side-close {
          margin: 25px 10%;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          background: #fff;
          width: 30px;
          height:30px;
          border-radius: 15px;
          color: black;
          font-size: 20px;
          font-weight: bold;
          text-align: center;
        }

        .sidebar-btns {
        display: flex;
        justify-content: center;
        border-bottom: 1px solid white;
        padding: 20px 0;
        }

        .side-links {
        list-style: none;
        padding: 0;
        margin: 0;
        text-align: center;

          li {
          text-transform: uppercase;
          text-decoration: none;
          font-weight: 500;
          padding: 25px 0;
          border-bottom: 1px solid white;
        }
          
          a {
            color: white;
            text-decoration: none;
          }
          
      .hidden {
        display: none;
      }
    }
    }
    
    .activeNav {
      width: 360px;

      @media (max-width: 600px) {
        width: 100%;
      }
      
    @media (min-width: 992px) {
      width: 0px;
      }

    }

  @media (min-width: 992px) {
    .nav-center {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
    }

    .nav-toggle {
      display: none;
    }

    .nav-links {
      display: flex;
      justify-content: center;
      margin: 0;
      padding: 0;

      a {
        padding: 0 20px;
        color: white;
        text-decoration: none;
        width: auto;
        text-transform: uppercase;
      }

      .active {
        font-weight: bold;
      }
    }
  }

  .hidden {
    display: none;
  }
`;

function NavBar({
  navItems = [],
}) {

  const { isLoggedIn, loggedInUser, showSidebar, closeSidebar } = useContext(AuthContext);

  return (
    <NavBarContainer>
      <div className='nav-center'>
        <div className='nav-header'>
          <Link to='/' onClick={(closeSidebar)}>
            <img src={logo} alt='Logo' />
          </Link>
          <button className='nav-toggle' onClick={(showSidebar)}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {
            navItems.map(({ label, url, id, isPrivate }, index) => {
              return (
                <NavLink className={!isLoggedIn && isPrivate ? 'hidden' : ''} key={index} activeClassName='active' to={url} onClick={(closeSidebar)}>{label}</NavLink>
              )
            })
          }
        </ul>
        <div className='navbar-btns'>
          <div className={isLoggedIn ? 'welcome' : 'hidden'}>Welcome
            <span> {loggedInUser ? loggedInUser.email : ''}!</span>
          </div>
          <NavbarButtons onClick={(closeSidebar)} />
        </div>
        <SidebarComponent navItems={navItems}/>
      </div>
    </NavBarContainer>
  )
}

export default NavBar;
