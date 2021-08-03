import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { closeShoppingCart, shoesAddedToCart, shoesMinusFromCart, shoesDeleteFromCart } from '../../actions/actions'

import './shopping-cart.css'

const ShoppingCartItems = (props) => {
    const { cartItems, add, minus, deleteItem } = props;
    return (
        cartItems.map((item, idx) => {
            const { allInfo, count, total } = item
            const { brand, description, photos, _id } = allInfo
            return (
                <div key={idx} className="item__content_container">

                    <img className="photos"
                        src={`data:image/png;base64,${photos}`}
                        alt={brand} />
                    <div className="item__content_brand">
                        <h3>{brand}</h3>
                        <p className="item__content_description">{description}</p>
                        <p>Кількість</p>
                        <div className="item__content_btn">

                            <button style={{ 'color': "green" }} onClick={() => { add(_id) }}><i className="fa fa-plus" ></i></button>
                            <span>{count}</span>
                            <button style={{ 'color': "red" }} onClick={() => { minus(_id) }}><i className="fa fa-minus" ></i></button>

                        </div>
                        <button className="del-btn" onClick={() => { deleteItem(_id) }}><i className="fa fa-trash" ></i></button>
                        <h3 className="price">{total} ₴</h3>
                    </div>



                </div>
            )
        })
    )
}


const ShoppingCart = (props) => {
    const { set, active, cartItems, orderTotal, add, minus, deleteItem } = props


    useEffect(() => {
        const body = document.querySelector('body');
        body.style.overflow = active ? 'hidden' : 'auto';
    }, [active])

    return (
        <div className={active ? "modals active" : 'modals'} onClick={set}>

            <div className={active ? "modals__content active" : 'modals__content'} onClick={e => e.stopPropagation()}>

                <div className="item__content">
                    <h2>В кошику {cartItems.length} товари</h2>
                    <ShoppingCartItems cartItems={cartItems} add={add} minus={minus} deleteItem={deleteItem} />
                </div>
                <div className="shooping-cart-total">
                    <div className="container__total">

                        <div>
                            <p>Cума замовлення:</p>
                            <h3>{orderTotal}₴</h3>
                        </div>
                        <button className="shooping-cart-total-btn">Оформити Замовлення</button>
                    </div>

                </div>


            </div>
        </div >
    )
}

const mapStateToProps = ({ shoppingCart: { status, cartItems, orderTotal } }) => {
    return {
        active: status,
        cartItems,
        orderTotal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {



        set: () => dispatch(closeShoppingCart()),

        add: (id) => {
            dispatch(shoesAddedToCart(id))
        },
        minus: (id) => {
            dispatch(shoesMinusFromCart(id))
        },
        deleteItem: (id) => {
            dispatch(shoesDeleteFromCart(id))
        },
        dispatch,


    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)