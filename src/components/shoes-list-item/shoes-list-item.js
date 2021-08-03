import React from 'react'
import { useHistory } from "react-router-dom";
import './shoes-list-item.css'

const ShoesListItem = (props) => {

    let history = useHistory()

    const { brand, description, price, size,
        color, photos } = props.shoes



    return (
        <div onClick={() => history.push(`/shop/${props.id}`)} key={props.id} className="product-item">
            <img className="product-item-photos" src={`data:image/png;base64,${photos}`} />
            <div className="like"><i className="fa fa-heart"></i></div>
            <div className="product-item-info">
                <h3>{brand}</h3>
                <p className="description">{description}</p>
                <h3 className="price">{price} ₴</h3>
            </div>



        </div>

    )

}

export default ShoesListItem