const initialState = []

const getNavMenu = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "GET_NAV_MENU":
            return [ ...state, ...action.payload]
        default:
            return state
    }
}

export default getNavMenu;