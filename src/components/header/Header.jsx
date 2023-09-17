import logoImg from './../../img/icons/logo.svg'
import './header.css'

function Header () {
    return <header className="header">
        <div className="container">
            <div className="header__row">
                <div className="header__logo">
                    <img src={logoImg} alt="Logo" />
                    <span>ASGARD</span>
                </div>
                <nav className="header__nav">
                    <ul>
                        <li><a href='#!'>О КОМПАНИИ</a></li>
                        <li><a href='#!'>УСЛУГИ</a></li>
                        <li><a href='#!'>ПОРТФОЛИО</a></li>
                        <li><a href='#!'>СТОИМОСТЬ</a></li>
                        <li><a href='#!'>КОНТАКТЫ</a></li>
                        <li><a href='#!'>ПАРТНЕРЫ</a></li>
                        <li><a href='#!'>БЛОГ</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>;
    
}

export default Header; 