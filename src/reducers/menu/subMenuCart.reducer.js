const initialSate = {
    show: true
}

const setSubMenuCartDisplay = (state = initialSate, action) => {

    switch (action.type) {
        case "SHOW_SUBMENU_CART":
            return { show: false }
        case "HIDE_SUBMENU_CART":
            return { show: true }
        default:
            return state
    }
}

export default setSubMenuCartDisplay;