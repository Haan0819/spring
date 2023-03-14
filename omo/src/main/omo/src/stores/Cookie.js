import { Cookies } from 'react-cookie';



const cookies = new Cookies();


export const getCookieToken = (name) => {
    return cookies.get(name);
};

export const removeCookieToken = () => {
    return cookies.remove('refreshToken');
}

const COOKIE_NAME = 'refreshToken';

export const setCookie = (name, value, days) => {
    let expires = '';
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

export const getCookie = (name) => {
    const nameEQ = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') cookie = cookie.substring(1, cookie.length);
        if (cookie.indexOf(nameEQ) === 0) return cookie.substring(nameEQ.length, cookie.length);
    }
    return null;
}

export const deleteCookie = (name) => {
    document.cookie = name + '=; Max-Age=-99999999;';
}

export const setAuthCookie = (token) => {
    setCookie(COOKIE_NAME, token, 7);
}

export const getAuthCookie = () => {
    return getCookie(COOKIE_NAME);
}

export const deleteAuthCookie = () => {
    deleteCookie(COOKIE_NAME);
}
