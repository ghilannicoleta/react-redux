const initialSate = {
    show: true
}

const setSubMenuDisplayState = (state = initialSate, action) => {

    switch (action.type) {
        case "SHOW":
            return { show: false }
        case "HIDE":
            return { show: true }
        default:
            return state
    }
}

export default setSubMenuDisplayState;