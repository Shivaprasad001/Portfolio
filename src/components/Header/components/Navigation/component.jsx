import { NavLink } from "react-router-dom";
import { MAIN_MENU } from "./constants";

export default function Navigation() {
    return (
        <nav className="main-navigation">
            <ul>
                {MAIN_MENU.map(menuItem => {
                    return(
                        <li key={menuItem.id}>
                            <NavLink
                                to={menuItem.path}
                                className={({isActive}) => (isActive ? "active main-nav-link" : "main-nav-link")}
                                end
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