import React from 'react'
import { connect } from 'react-redux'
import { openShoppingCart } from '../../actions/actions'

const ShoppingCartBtn = (props) => {
    const { set } = props
    return (
        <li>
            <div className="shopping__cart__item">
                <i onClick={set} class="fas fa-shopping-cart"></i>
            </div>
        </li >


    )
}



const mapDispatchToProps = (dispatch) => {
    return {
        set: () => dispatch(openShoppingCart()),
        dispatch,

    }
}

export default connect(null, mapDispatchToProps)(ShoppingCartBtn)