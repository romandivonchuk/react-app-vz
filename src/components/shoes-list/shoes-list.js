import React from 'react'
import { connect } from 'react-redux'

import Spinner from '../spinner'

import ErrorIndicator from '../error-indicator'
import ShoesListItem from '../shoes-list-item'



import './shoes-list.css'



class ShoesList extends React.Component {





    render() {
        const { shoesArray, loading, error } = this.props

        if (loading) {
            return <Spinner />
        }
        if (error) {
            return <ErrorIndicator />
        }




        return (
            <>

                <div className="shoes__list">

                    {shoesArray.map((shoes) => <ShoesListItem shoes={shoes} key={shoes._id} id={shoes._id} />)}

                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => {

    return {

        loading: state.shoesList.loading,
        error: state.shoesList.error,

    }

}



export default connect(mapStateToProps)(ShoesList)