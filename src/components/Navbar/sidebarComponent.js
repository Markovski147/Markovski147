import NavbarButtons from './NavbarButtons';
import { useContext } from 'react';
import { Link } from "react-router-dom";
import AuthContext from '../../store/auth-context';

function SidebarComponent({
    navItems = [],
}) {

    const { isLoggedIn, sidebar, closeSidebar } = useContext(AuthContext);

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
    )
}

export default SidebarComponent;    