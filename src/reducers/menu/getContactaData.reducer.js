const initialState = [
    {
        city: 'Chișinău',
        number: '022 210-210'
    }
]

const getContactData = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case "GET_ALL_CONTACTS":
            return [ ...action.payload]
        default:
            return state
    }
}

export default getContactData;