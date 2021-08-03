import React from 'react'
import './sidedrawer.css'
import { Link } from 'react-router-dom';

const Sidedrawer = ({ show, click }) => {
    const sideDrawerClass = ["sidedrawer"];
    if (show) {
        sideDrawerClass.push("show")
    }

    return (

        <div className={sideDrawerClass.join(" ")}>
            <ul className="sidedrawer__links" onClick={() => click()}>
                <li>
                    <Link to="/cart" className="sidedrawer__cart__links">
                        <i className="fas fa-shopping-cart"></i>
                        <span>
                            Cart
                            <span className="sidedrawer__cart__badge">0</span>
                        </span>


                    </Link>
                </li>
                <li>
                    <Link to="/">
                        {/* {icon} */}
                        shop

                    </Link>
                </li>

            </ul>

        </div>
    )
}

export default Sidedrawer
