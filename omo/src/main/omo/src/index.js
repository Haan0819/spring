import reducer from './stores/reducer';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import jwt_decode from 'jwt-decode';
import { login, setCurrentUser } from './stores/actions';
import axios from 'axios';

const store = createStore(reducer);
// 애플리케이션이 시작될 때, 로컬 스토리지에서 JWT 토큰을 읽어와 사용자 정보를 복원합니다.
if (localStorage.accessToken && localStorage.accessToken != null) {
  const token = localStorage.accessToken;
  let decoded = jwt_decode(token);
  const user = decoded.sub
  store.dispatch(setCurrentUser(user));
  const date = new Date()
  store.dispatch({ type: 'SET_LOADING', payload: true });
  axios.post('/api/auth/refresh', null, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  }).then(res => {
    const update = res.headers.authorization
    console.log(res.data);
    localStorage.setItem("accessToken", update)
    decoded = jwt_decode(update);
    if (decoded.exp > (date.getTime() / 1000)) {
      store.dispatch(login(decoded.sub))
    }
    store.dispatch({ type: 'SET_LOADING', payload: false });
  }).catch((error) => {
    console.log(error);
    // isLoading을 false로 설정합니다.
    store.dispatch({ type: 'SET_LOADING', payload: false });
  });


  if (decoded.exp > (date.getTime() / 1000)) {
    store.dispatch(login(decoded.sub))
  }
  console.log(date.getTime() / 1000)
  console.log(decoded.exp)

}
if (localStorage.accessToken == null) {
  localStorage.removeItem("accessToken")
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CookiesProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </CookiesProvider >
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
