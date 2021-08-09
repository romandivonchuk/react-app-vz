import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import { useHistory } from "react-router-dom";

import './size-filter.css'

const SizeFilter = (props) => {
    let history = useHistory();

    const [check, setCheck] = useState(false)

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


    let sizeObj = {};

    const { shoesArray } = props;


    shoesArray.forEach((x) => {


        x.size.forEach((size) => {
            if (sizeObj[size] === undefined) {
                sizeObj[size] = 1
            } else {
                sizeObj[size] += 1
            }
        })



    })

    let sizeArray = Object.entries(sizeObj)




    useEffect(() => {
        setCheck(query.size)

    }, [query.size]);



    return (
        <>
            <h3>РОЗМІР</h3>

            {sizeArray.sort().map((size, idx) =>
                <div key={idx} className="radio">
                    <input onClick={() => {

                        if (check === size[0]) {
                            setCheck(false)
                            query.size = undefined;
                            history.push({
                                pathname: '/shop',
                                search: queryString.stringify(query),
                            });
                        } else {
                            setCheck(size[0]);
                            query.size = size[0];
                            history.push({
                                pathname: '/shop',
                                search: queryString.stringify(query),
                            });
                        }


                    }}
                        className="radio__input" type="radio" id={`size-${idx}`} name="size" value={size[0]} defaultChecked readOnly checked={check === size[0] ? true : false} />
                    <label className="radio__label" for={`size-${idx}`}>{size[0]} <span>{size[1]}</span></label>
                </div>)}




        </>
    )
}

export default SizeFilter
