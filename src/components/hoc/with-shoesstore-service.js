import React from 'react'

import { ShoesstoreServiceConsumer } from '../shoesstore-service-context'

const withShoesstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <ShoesstoreServiceConsumer>
                {
                    (shoesstoreService) => {
                        return <Wrapped {...props}
                            shoesstoreService={shoesstoreService} />
                    }
                }
            </ShoesstoreServiceConsumer>
        )
    }
}

export default withShoesstoreService