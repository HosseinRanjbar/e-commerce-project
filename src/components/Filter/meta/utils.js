export const priceReducer = () => (state, action) => {

    switch (action.type) {
        case "MIN":
            return { ...state, min: action.payload }
        case "MAX":
            return { ...state, max: action.payload }
        //TODO: set default or error handling
        default:
            break;
    }

}