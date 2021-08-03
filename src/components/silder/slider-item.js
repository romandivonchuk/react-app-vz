import React from 'react'
import { useHistory } from "react-router-dom";
const SliderItem = (prop) => {
    const history = useHistory()
    const { brand, photos, description, price, _id } = prop.item
    return (
        <>
            <div className="order__rigthnow__item">
                <img src={`data:image/png;base64,${photos}`} alt="" onClick={() => history.push(`/shop/${_id}`)} />

                <p className="order__rigthnow__name">{brand}</p>
                <p className="order__rigthnow__description">{description}</p>
                <p className="order__rigthnow__price" >{price} ₴</p>
            </div>
        </>
    )
}

export default SliderItem
