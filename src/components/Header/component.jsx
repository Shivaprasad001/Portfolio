import ThemeToggleBtn from './components/ThemeToggleBtn';
import Navigation from './components/Navigation';

import logo from '../../assets/SB.png';

export default function Header() {
    return (
        <header id="header">
            <div className="header__logo">
                <img src={logo} alt="Logo" width="35"/>
            </div>
            <div className="header__right-section">
                <Navigation/>
                <ThemeToggleBtn/>
            </div>
        </header>
    )
}