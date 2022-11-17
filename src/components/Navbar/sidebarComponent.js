import NavbarButtons from './NavbarButtons';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../store/auth-context';
import { selectIsLoggedIn } from '../../store/selectors/authSelectors.js';
import { useSelector } from 'react-redux'

function SidebarComponent({
    navItems = [],
}) {

    const { sidebar, closeSidebar } = useContext(AuthContext);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <div className={sidebar ? 'sidebar-container activeNav' : 'sidebar-container'}>
            <div className='side-close' onClick={(closeSidebar)}>&#x2716;</div>
            <div className='sidebar-btns' onClick={(closeSidebar)}>
                <NavbarButtons />
            </div>
            <ul className='side-links'>
                {
                    navItems.map(({ label, url, id, isPrivate }, index) => {
                        return (
                            <div key={index}>
                            <Link to={url} className={!isLoggedIn && isPrivate ? 'hidden' : 'link'} onClick={(closeSidebar)}>
                                <li key={index}>
                                    <div className='navItem'>{label}</div>
                                </li>
                            </Link>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default SidebarComponent;    