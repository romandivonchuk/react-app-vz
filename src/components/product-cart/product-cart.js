import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchShoes, addShoes } from '../../actions/actions';


import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import { shoesAddedToCart } from '../../actions/actions';
import withShoesstoreService from '../hoc';
import './product-cart.css';

import Footer from '../footer'



class ProductCart extends React.Component {

    componentDidMount() {

        if (this.props.shoes.length === 0) {
            const { fetchShoes } = this.props
            fetchShoes()
        }


    }


    render() {
        const { shoes, loading, error, prodId, add } = this.props

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }
        const currentShoes = shoes.find((shoe) => shoe._id === prodId)


        const { brand, photos, description, price, _id, size } = currentShoes

        const divStyle = {

            backgroundImage: 'url(data:image/png;base64,' + photos + ')',

        };

        return (
            <>
                <div className="container">
                    <div className="product-section">
                        <div className="product-section__carousel">
                            <div className="product-slider">
                                <ul>
                                    <li><div className="side-content" style={divStyle}></div></li>
                                    <li><div className="side-content" style={divStyle}></div></li>
                                    <li><div className="side-content" style={divStyle}></div></li>
                                    <li><div className="side-content" style={divStyle}></div></li>
                                </ul>
                                <div className="main-content" style={divStyle}></div>

                            </div>
                            {/* <img className="shoes-list-item-photos" src={`data:image/png;base64,${photos}`} alt={brand} /> */}
                        </div>

                        <div className="product-list">
                            <h3>{brand}</h3>
                            <p className="description">{description} {brand} {_id.substring(0, 7)} </p>
                            <h3 className="price">{price}<sub>₴</sub></h3>
                            <div className="select-container">
                                <div className="select-title">Розмір:</div>
                                <select name="size-select">
                                    {size.map((size, idx) => <option key={idx} value={size}>{size}</option>)}

                                </select>
                            </div>

                            <button onClick={() => add(_id)} className="button-add-to-cart">Додати в кошик</button>

                            <div className="buy-one-click">
                                <div className="title__buy-one-click">Або замовити в один клік вказавши лише номер телефону та розмір</div>
                                <form onSubmit={(e) => { e.preventDefault() }}>
                                    <input className="input" type="text" placeholder="+380631234567" />
                                    <input className="input__button" type="submit" value="Надіслати" />
                                </form>

                            </div>

                            <div className="product-details">
                                <ul>
                                    <li>Колір: чорний</li>
                                    <li>Склад: 100 % шкіра</li>
                                    <li>Підошва: 100% гума</li>
                                    <li>Висота підошви: 2 см</li>
                                    <li>Висота каблука: 3 см</li>
                                    <li>Застібка: шнурівка</li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
                <Footer />
            </>


        )

    }
}

const mapStateToProps = (state) => {
    return {
        shoes: state.shoesList.shoes,
        loading: state.shoesList.loading,
        error: state.shoesList.error
    }

}


// const mapDispatchToProps = (dispatch, ownProps) => {
//     const { shoesstoreService } = ownProps
//     const fetch = bindActionCreators(
//         {
//             fetchShoes: fetchShoes(shoesstoreService),

//         }, dispatch
//     )

//     return {
//         ...fetch,
//         add: (id) => {
//             dispatch(shoesAddedToCart(id))
//         }
//     }


// };


const mapDispatchToProps = (dispatch, ownProps) => {
    const { shoesstoreService } = ownProps
    const fetch = bindActionCreators(
        {
            fetchShoes: fetchShoes(shoesstoreService),

        }, dispatch
    )
    return {
        ...fetch,
        add: (id) => {
            dispatch(shoesAddedToCart(id))
        }
    }

}



export default withShoesstoreService()(connect(mapStateToProps, mapDispatchToProps)(ProductCart))