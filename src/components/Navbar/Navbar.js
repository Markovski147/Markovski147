import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import logo from '../../assets/logo.svg';
import NavbarButtons from './NavbarButtons';
import { useState, useContext } from 'react';
import { NavLink, Link } from "react-router-dom";
import AuthContext from '../../store/auth-context';

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
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
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

      .hidden {
        display: none;
      }
    }
  }
`;

function NavBar({
  navItems = [],
}) {
  
  const { isLoggedIn } = useContext(AuthContext);

  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const closeSidebar = () => setSidebar(false);
  
  return (
    <NavBarContainer>
      <div className='nav-center'>
        <div className='nav-header'>
        <Link to='/' onClick={(closeSidebar)}>
          <img src={logo} alt='Logo' />
          </Link>
          <button className='nav-toggle'>
            <FaBars onClick={(showSidebar)} />
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
        <NavbarButtons onClick={(closeSidebar)}/>
          </div>
        <div className={sidebar ? 'sidebar-container activeNav' : 'sidebar-container'}>
          <div className='side-close' onClick={(closeSidebar)}>&#x2716;</div>
          <div className='sidebar-btns' onClick={(closeSidebar)}>
            <NavbarButtons />
          </div>
          <ul className='side-links'>         
            {
              navItems.map(({ label, url, id, isPrivate }, index) => {
                return (
                  <Link to={url} className={!isLoggedIn && isPrivate ? 'hidden' : 'link'} onClick={(closeSidebar)}>
                  <li key={index}>
                    <div className='navItem'>{label}</div>
                  </li>
                  </Link>
                )
              })
            }
          </ul>
        </div>
      </div>
    </NavBarContainer>
  )
}

export default NavBar;
