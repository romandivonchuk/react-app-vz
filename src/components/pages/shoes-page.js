import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import withShoesstoreService from '../hoc'
import ErrorIndicator from '../error-indicator'
import { fetchShoes, filterSortHighest, filterSortLowest, filterSortNone } from '../../actions/actions'

import SideFilters from '../filters/side-filtres'
import ShoesList from '../shoes-list'
import { withRouter } from 'react-router-dom'
import './shoppage.css'
import { Link } from 'react-router-dom'
import queryString from 'query-string'



class ShopPage extends React.Component {

    componentDidMount() {

        if (this.props.shoes.length === 0) {
            const { fetchShoes } = this.props
            fetchShoes()
        }

    }


    onhandlerSort = (value) => {
        const { filterSortHighest, filterSortLowest, filterSortNone } = this.props

        if (value === 'none') {
            filterSortNone();

        } else if (value === 'lowest') {
            filterSortLowest();

        } else if (value === 'highest') {
            filterSortHighest();

        }
    }


    render() {


        const { location } = this.props.history
        const values = queryString.parse(location.search)

        const valuesArray = Object.entries(values)

        const { shoes, error, sort } = this.props

        if (error) {
            return <ErrorIndicator />
        }

        let shoesArrayForShoesList = shoes.slice();
        let shoesArrayForShoesFilter = shoes.slice();

        if (values.sex !== undefined) {
            shoesArrayForShoesList = shoesArrayForShoesList.filter(item => item.sex === values.sex)
            shoesArrayForShoesFilter = shoesArrayForShoesFilter.filter(item => item.sex === values.sex)
        }

        if (values.type !== undefined) {
            shoesArrayForShoesList = shoesArrayForShoesList.filter(item => item.type === values.type)
        }

        if (values.size !== undefined) {
            shoesArrayForShoesList = shoesArrayForShoesList.filter(item => item.size.includes(Number(values.size)))

        }
        if (values.color !== undefined) {
            shoesArrayForShoesList = shoesArrayForShoesList.filter(item => item.color === values.color)

        }

        if (sort !== undefined) {
            shoesArrayForShoesList = sort(shoesArrayForShoesList)

        }




        return (
            <>
                <div className="breadcrumbs">
                    <div className="breadcrumbs__container">
                        <Link to='/shop'>взуття.ua<span>/</span> </Link>
                        {valuesArray.map((item, idx) => <Link key={idx} to={`/shop?${item[0]}=${item[1]}`}>{item[1]}<span>/</span> </Link>)}

                    </div>
                </div>
                <div className="shop__container sort">

                    <select onChange={(e) => { this.onhandlerSort(e.target.value) }} className="sort" name="sort">
                        <option value="none"> без фільтру</option>
                        <option value="lowest"> від меншої ціни</option>
                        <option value="highest"> від більшої ціни</option>
                    </select>
                    <p>сортувати</p>
                </div>

                <div className="shop__container">
                    <SideFilters queryString={values} shoesArray={shoesArrayForShoesFilter} />
                    <ShoesList shoesArray={shoesArrayForShoesList} />
                </div>

            </>
        )
    }
}



;


const mapStateToProps = (state) => {

    return {
        shoes: state.shoesList.shoes,
        error: state.shoesList.error,
        sort: state.filtersShopPage.filterSort
    }

};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { shoesstoreService } = ownProps
    return bindActionCreators(
        {
            fetchShoes: fetchShoes(shoesstoreService),
            filterSortHighest,
            filterSortLowest,
            filterSortNone

        }, dispatch
    )
};

export default withRouter(withShoesstoreService()(connect(mapStateToProps, mapDispatchToProps)(ShopPage)))
