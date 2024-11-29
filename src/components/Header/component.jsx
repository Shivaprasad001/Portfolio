import ThemeToggleBtn from './components/ThemeToggleBtn';
import Navigation from './components/Navigation';

import logo from '../../assets/SB.png';
import { useState } from 'react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const hamburgerClickHandler =  () => setIsOpen((prevState) => !prevState)

    const menuItemClickHandler = () => setIsOpen(false);
    return (
        <header id="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" width="35"/>
            </div>
            <div className="header__right-section">
                <Navigation isMenuOpen={isOpen} onMenuItemClick = {menuItemClickHandler}/>
                <div className={'hamburger-icon' + " " + (isOpen ? 'open': '')} onClick={hamburgerClickHandler}>
                    <span className='first'></span>
                    <span className='second'></span>
                    <span className='third'></span>
                </div>
                {/* <ThemeToggleBtn/> */}
            </div>
        </header>
    )
}