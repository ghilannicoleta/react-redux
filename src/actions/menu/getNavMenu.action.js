import Api from '../../Api/api';

export const getNavMenu = () => {
    return async dispatch => {
        const res = await Api.getNavMenu();
        await dispatch({ type: "GET_NAV_MENU", payload: res })

    }
}
