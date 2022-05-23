import Api from '../../Api/api';

export const getProductsData = () => {
    return async dispatch => {
        const res = await Api.getProductsData();
        await dispatch({ type: "GET_ALL_PRODUCTS", payload: res })

    }
}

export const getProductsByCategoryId = (id) => {
    return async dispatch => {
        const res = await Api.getProductsByCategoryId(id);
        await dispatch({ type: "GET_PRODUCT_BY_ID", payload: res })

    }
}
