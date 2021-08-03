import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import queryString from 'query-string'
import './shoes-type-filter.css'

const ShoesTypeFilter = (props) => {
    const { shoesArray, history } = props


    const newArr = []

    shoesArray.forEach((x) => {
        if (!newArr.includes(x.type)) {
            newArr.push(x.type)
        }
    })

    const parseQuery = (queryString) => {
        let query = {};
        let pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (let i = 0; i < pairs.length; i++) {
            let pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    let query = parseQuery(history.location.search)



    return (newArr.sort().map((item, idx) => (
        <li onClick={() => {
            query.type = item;
            history.push({
                pathname: '/shop',
                search: queryString.stringify(query),
            });
        }}
            key={idx} className={query.type === item ? "filter-shoes-item active" : "filter-shoes-item"}>{item}</li>)))

}

const mapStateToProps = ({ shoesList }) => {
    return {
        shoesList
    }
}



export default withRouter(connect(mapStateToProps)(ShoesTypeFilter))