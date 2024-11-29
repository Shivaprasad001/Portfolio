import { NavLink } from "react-router-dom";
import { MAIN_MENU } from "./constants";
import classNames from "classnames";

export default function Navigation(props) {

    let btnGroupClasses = classNames(
        'main-navigation',
        {
            'open' : props.isMenuOpen
        }
    )

    const menuItemClickHandler = function() {
        props.onMenuItemClick();
    }
    return (
        <nav className={btnGroupClasses}>
            <ul>
                {MAIN_MENU.map(menuItem => {
                    return(
                        <li key={menuItem.id}>
                            <NavLink
                                to={menuItem.path}
                                className={({isActive}) => (isActive ? "active main-nav-link" : "main-nav-link")}
                                end
                                onClick={menuItemClickHandler}
                            >
                                {menuItem.menuText}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}