import React from 'react'
import './backdrop.css'

const Backdrop = (prop) => {
    return (prop.show &&
        <div className="backdrop" onClick={() => prop.click()}>

        </div>
    )
}

export default Backdrop
