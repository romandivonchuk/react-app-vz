
import React from 'react'
import './side-filter.css'

import ShoesTypeFilter from './shoes-type-filter'
import SizeFilter from './size-filter'
import ColorFilter from './color-filter'




const SideFilters = (props) => {

    let sex

    switch (props.queryString.sex) {
        case 'man':
            sex = "Чоловіче"
            break;

        case 'woman':
            sex = "Жіноче"
            break;

        case 'children':
            sex = "Дитяче"
            break;

        default:
            sex = ""
            break
    }

    return (
        <div className="side-filter">
            <h3 className="filter-name">{`${sex} взуття`}</h3>
            <ul className="filter-shoes">

                <ShoesTypeFilter shoesArray={props.shoesArray} />

            </ul>
            <ul className="filter-size">
                <SizeFilter shoesArray={props.shoesArray} />
            </ul>

            <ul className="filter-color">
                <ColorFilter shoesArray={props.shoesArray} />

            </ul>




        </div>
    )
}



export default SideFilters