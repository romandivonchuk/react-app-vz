import React, { useState, useEffect } from 'react'
import ShopPage from '../pages/shoes-page'
import { Route, Switch, Link } from 'react-router-dom'
import ProductCart from '../product-cart'
import MainPage from '../pages/main-page'
import Header from '../header'
import Backdrop from '../backdrop/backdrop'
import Sidedrawer from '../sidedrawer/sidedrawer'
import ShoppingCart from '../shopping-cart'
import ShoppingCartBtn from '../shopping-cart-btn/shopping-cart-btn'
import './app.css'

const App = () => {
    const [sideToggle, setsideToggle] = useState(false);

    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = sideToggle ? 'hidden' : 'auto';
    }, [sideToggle])

    return (
        <div>

            <Header setsideToggle={() => setsideToggle(true)} />
            <Sidedrawer show={sideToggle} click={() => setsideToggle(false)} />
            <Backdrop show={sideToggle} click={() => setsideToggle(false)} />
            <ShoppingCart />
            <Switch>
                <Route path="/" exact={true} component={MainPage} />
                <Route path="/shop/" exact={true} component={ShopPage} />

                <Route path="/shop/:id" exact={true} render={({ match, loacation, history }) => {

                    const { id } = match.params

                    return <ProductCart prodId={id} />
                }} />



            </Switch>

        </div>
    )
}
export default App