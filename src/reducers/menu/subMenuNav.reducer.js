const initialSate = {
    show: true
}

const setSubMenuNav = (state = initialSate, action) => {

    switch (action.type) {
        case "SHOW_SUBMENU":
            return { show: false }
        case "HIDE_SUBMENU":
            return { show: true }
        default:
            return state
    }
}

export default setSubMenuNav;