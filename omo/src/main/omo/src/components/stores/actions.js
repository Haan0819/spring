export const login = (user) => ({
    type: 'LOGIN',
    payload: user
});

export const logout = (user) => ({
    type: 'LOGOUT',
    payload: user
});

export const setCurrentUser = decoded => ({
    type: 'SET_CURRENT_USER',
    payload: decoded
});

export const setMessage = (message) => ({
    type: 'SET_MESSAGE',
    payload: message
});

export const setLoading = (isLoading) => {
    return {
        type: "SET_LOADING",
        payload: isLoading
    }
};
