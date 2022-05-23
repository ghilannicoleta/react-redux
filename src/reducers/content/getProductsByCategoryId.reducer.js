const initialState = []

const getProductsByCategoryId = (state = initialState, action) => {

    switch (action.type) {
        case "GET_PRODUCT_BY_ID":
            return [ ...state, ...action.payload]
        default:
            return state
    }
}

export default getProductsByCategoryId;