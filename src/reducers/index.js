


const updateShoesList = (state, action) => {

    if (state === undefined) {
        return {
            shoes: [],
            loading: true,
            error: null,

        }
    }

    switch (action.type) {
        case 'FETCH_SHOES_REQUESTED':
            return {
                shoes: [],
                loading: true,
                error: null,

            }

        case 'FETCH_SHOES_SUCCESS':
            return {
                shoes: action.payload,
                loading: false,
                error: null,

            };

        case 'FETCH_SHOES_FAILURE':
            return {
                shoes: [],
                loading: false,
                error: action.payload,

            };

        case 'SHOES_TYPE_FILTER':
            return {
                shoes: state.shoesList.shoes,
                loading: false,
                error: null,

            }

        default:
            return state.shoesList;
    }
}

const updateCartItems = (cartItems, item, idx) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems, item
        ]
    }

    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ]
}

const updateCartItem = (shoe, item = {}, quantity) => {
    const {
        _id = shoe._id,
        count = 0,
        allInfo = shoe,
        total = 0 } = item

    return {
        _id, allInfo,
        count: count + quantity,
        total: total + quantity * shoe.price
    }

}



const updateOrder = (state, shoesId, quantity) => {
    const { shoesList: { shoes }, shoppingCart: { cartItems } } = state
    const shoe = shoes.find((shoe) => shoe._id === shoesId)
    const itemIndex = cartItems.findIndex((shoe) => shoe._id === shoesId)
    const item = cartItems[itemIndex]

    const newItem = updateCartItem(shoe, item, quantity)
    const newItems = updateCartItems(cartItems, newItem, itemIndex);
    const newTotal = newItems.reduce((acc, current) => acc + current.total, 0);
    return {
        cartItems: newItems,
        orderTotal: newTotal,
    }
}


const updateShoppingCart = (state, action) => {

    if (state === undefined) {
        return {
            status: false,
            cartItems: [],
            orderTotal: 0,

        }
    }
    const { shoppingCart } = state

    switch (action.type) {

        case 'OPEN_SHOPPING_CART':
            return {
                ...shoppingCart,
                status: true
            };

        case 'CLOSE_SHOPPING_CART':
            return {
                ...shoppingCart,
                status: false
            };

        case 'SHOES_ADDED_TO_CART':

            return {
                ...shoppingCart, ...updateOrder(state, action.payload, 1)
            }
        case 'SHOES_MINUS_FROM_CART':
            return {
                ...shoppingCart, ...updateOrder(state, action.payload, -1)
            }
        case 'SHOES_DELETE_FROM_CART':
            const item = state.shoppingCart.cartItems.find(({ _id }) => _id === action.payload)
            return {
                ...shoppingCart, ...updateOrder(state, action.payload, -item.count)
            }


        default:
            return state.shoppingCart;
    }

}

const reducer = (state, action) => {
    return {
        shoesList: updateShoesList(state, action),
        shoppingCart: updateShoppingCart(state, action),
    }
}

export default reducer