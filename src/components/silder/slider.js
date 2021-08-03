import React, { useEffect, useState } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchShoes } from '../../actions/actions'
import ErrorIndicator from '../error-indicator'
import Spinner from '../spinner'
import withShoesstoreService from '../hoc'
import SliderItem from './slider-item'





const Slider = (props) => {


    const [counter, setCounter] = useState(1)
    const { shoes, loading, error, fetchShoes } = props

    useEffect(() =>
        fetchShoes()
        , [])


    if (loading) {
        return <Spinner />
    }
    if (error) {
        return <ErrorIndicator />
    }

    const handlerSlider = (arg) => {

        let number = counter + arg

        if (number > 9) {
            let mult
            if (number % 9 !== 0) {
                mult = number % 9
                number = number - mult * 9
                setCounter(number)
            }
        }

        if (number <= 0) {
            number = 9 + number
            setCounter(number)
        }

        setCounter(number)
    }

    let arr = []
    for (let i = 0; i < shoes.length; i++) {
        arr.push(i)
    }
    arr = [...arr, ...arr.slice(0, 5)].slice(counter - 1, counter + 4)

    return (

        <>

            <div onClick={() => { handlerSlider(-1) }} className="arrow__left"></div>

            {[shoes[arr[0]], shoes[arr[1]], shoes[arr[2]], shoes[arr[3]]].map((item) => <SliderItem item={item} />)}




            <div onClick={() => { handlerSlider(1) }} className="arrow__right"></div>
        </>
    )
}

const mapStateToProps = (state) => {

    return {
        shoes: state.shoesList.shoes,
        loading: state.shoesList.loading,
        error: state.shoesList.error,
    }

}

const mapDispatchToProps = (dispatch, ownProps) => {
    const { shoesstoreService } = ownProps
    return bindActionCreators(
        {
            fetchShoes: fetchShoes(shoesstoreService),
        }, dispatch
    )
}

export default withShoesstoreService()(connect(mapStateToProps, mapDispatchToProps)(Slider))








