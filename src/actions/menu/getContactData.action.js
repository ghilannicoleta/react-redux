import Api from '../../Api/api';

export const getContactData = () => {
    return async dispatch => {
        const res = await Api.getContactData();
        await dispatch({ type: "GET_ALL_CONTACTS", payload: res })

    }
}
