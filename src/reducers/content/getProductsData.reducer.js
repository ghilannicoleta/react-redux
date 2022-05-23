const initialState = []

const getProductsData = (state = initialState, action) => {

    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return [ ...state, ...action.payload]
        default:
            return state
    }
}

export default getProductsData;