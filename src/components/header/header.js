import React from 'react'
import './header.css'
import { Link, useHistory } from 'react-router-dom'
import ShoppingCartBtn from '../shopping-cart-btn/shopping-cart-btn'

const Header = ({ setsideToggle }) => {
    let history = useHistory();
    return (
        <>

            <div>
                <div className="header__adv">
                    Покупка частинами від Монобанк без комисії та переплат до 3 платежів
                </div>
            </div>

            <nav >
                <div className="container">
                    <ul className="main__nav">
                        <li>
                            <ul className="nav__menu">
                                <Link to="/shop?sex=woman">Жінкам</Link>
                                <Link to="/shop?sex=man">Чоловікам</Link>
                                <Link to="/shop?sex=children">Дітям</Link>
                                <Link to="/shop?new=1">Новинки</Link>
                                <Link to="/shop?sale=1">Sale</Link>
                            </ul>
                        </li>



                        <li>
                            <ul className="nav__menu2">
                                <li>
                                    <a href="tel:+380633084047">
                                        <i className="fas fa-phone"></i>
                                    </a>
                                </li>

                                <ShoppingCartBtn />

                                <li>
                                    <div className="likes__cart__item">
                                        <i className="fas fa-heart"></i>
                                    </div>
                                </li>
                                <li className="loggin__button">
                                    <p>ВХІД</p>
                                </li>
                                <li className="burger__menu" onClick={() => setsideToggle()}>
                                    <div></div>
                                    <div></div>
                                    <div></div>
                                </li>

                            </ul>
                        </li>
                    </ul>
                    <div className="logo" onClick={() => { history.push('/') }}>
                        <p>ВЗУТТЯ.UA</p>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Header
