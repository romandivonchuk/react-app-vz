const filterSortHighest = () => {
    return {
        type: 'SORT_HIGHEST',

    }
};

const filterSortLowest = () => {
    return {
        type: 'SORT_LOWEST',

    }
};

const filterSortNone = () => {
    return {
        type: 'SORT_NONE',

    }
};

const shoesRequested = () => {
    return {
        type: 'FETCH_SHOES_REQUESTED',

    }
}

const shoesLoaded = (newShoes) => {
    return {
        type: 'FETCH_SHOES_SUCCESS',
        payload: newShoes
    };
};

const shoesError = (error) => {
    return {
        type: 'FETCH_SHOES_FAILURE',
        payload: error
    };
};

const fetchShoes = (shoesstoreService) => () => (dispatch) => {

    dispatch(shoesRequested())
    shoesstoreService.getAllShoes()
        .then((data) => dispatch(shoesLoaded(data))
        ).catch((err) => dispatch(shoesError(err)))
}

const addShoes = (id) => () => (dispatch) => {

    dispatch(shoesAddedToCart(id))

}



const openShoppingCart = () => {
    return {
        type: 'OPEN_SHOPPING_CART',

    };
}
const closeShoppingCart = () => {
    return {
        type: 'CLOSE_SHOPPING_CART',

    };
}

const shoesAddedToCart = (shoesId) => {
    return {
        type: 'SHOES_ADDED_TO_CART',
        payload: shoesId

    };
}
const shoesMinusFromCart = (shoesId) => {
    return {
        type: 'SHOES_MINUS_FROM_CART',
        payload: shoesId

    };
}
const shoesDeleteFromCart = (shoesId) => {
    return {
        type: 'SHOES_DELETE_FROM_CART',
        payload: shoesId

    };
}





export { filterSortHighest, filterSortLowest, filterSortNone, addShoes, shoesAddedToCart, shoesMinusFromCart, shoesDeleteFromCart, closeShoppingCart, openShoppingCart, shoesLoaded, shoesRequested, shoesError, fetchShoes }