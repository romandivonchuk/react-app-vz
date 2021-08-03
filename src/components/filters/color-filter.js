import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useHistory } from "react-router-dom";

import './size-filter.css'

const ColorFilter = (props) => {
    let history = useHistory();

    const [colorState, setColorState] = useState(false)

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


    let colorObj = {};

    const { shoesArray } = props;


    shoesArray.forEach((x) => {

        if (colorObj[x.color] === undefined) {
            colorObj[x.color] = 1
        } else {
            colorObj[x.color] += 1
        }

    })

    let colorArray = Object.entries(colorObj)




    useEffect(() => {
        setColorState(query.color)

    }, [query.color]);



    return (
        <>
            <h3>КОЛІР</h3>

            {colorArray.sort().map((color, idx) =>
                <div key={idx} className="radio">
                    <input onClick={() => {

                        if (colorState === color[0]) {
                            setColorState(false)

                            query.color = undefined;
                            history.push({
                                pathname: '/shop',
                                search: queryString.stringify(query),
                            });
                        } else {
                            setColorState(query.color)
                            query.color = color[0];
                            history.push({
                                pathname: '/shop',
                                search: queryString.stringify(query),
                            });
                        }


                    }}
                        className="radio__input" type="radio" id={`color-${idx}`} name="color" value={color[0]} checked={colorState === color[0] ? true : false} />
                    <label className="radio__label" for={`color-${idx}`}>{color[0]} <span>{color[1]}</span></label>
                </div>)}




        </>
    )
}

export default ColorFilter
