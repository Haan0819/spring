const initialState = {
    isLoggedIn: false,
    user: null,
    message: ""
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isLoggedIn: true,
                user: action.payload
            };
        case 'LOGOUT':
            return {
                ...state,
                isLoggedIn: false,
                user: null
            };
        case 'SET_CURRENT_USER':
            return {
                ...state,
                user: action.payload
            };
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload
            }
        case "SET_LOADING":
            return {
                ...state,
                isLoading: action.payload
            };
        default:
            return state;
    }


};

export default reducer;
