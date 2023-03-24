import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import signin_img from './static/images/login.png'
import axios from "axios";
import 'url-search-params-polyfill';
import { useDispatch, useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { login, setMessage } from "./stores/actions";

// 뒤로가기
const SignIn = () => {
    const navigate = useNavigate()

    const message = useSelector(state => state.message)
    const isLogin = useSelector(state => state.isLoggedIn);
    const dispatch = useDispatch();

    const [input, set_input] = useState({
        id: '',
        pw: ''
    })
    const onClickLogin = (e) => {
        e.preventDefault();

        axios.post('/api/auth/signin', {
            username: input.id,
            password: input.pw
        }).then(response => {
            console.log(response)
            if (response.data != null) {
                dispatch(setMessage(response.data))
                console.log(message)
                
            }
            const token = response.headers.authorization;
            console.log(token)
            localStorage.setItem("accessToken", token)
            const decoded = jwt_decode(token)
            console.log(decoded);

            dispatch(login(decoded.sub));
            console.log(isLogin);
            if (!response.data.message) {
                navigate('/')
                dispatch(setMessage(""))
            }
        }).catch(error => {
            console.log(error);
        });
        set_input({ ...input, pw: "" })
    }



    return (
        <div className="container">
            <div className="signin_con">
                <div className="signin_con2">
                    <img src={signin_img} alt='signinimg' />
                    <form className="signin_form" onSubmit={onClickLogin}>
                        {message ? <><p>{message}</p></> : <></>}
                        <div className="signin_div"><input type="text" value={input.id} onChange={(e) => { set_input({ ...input, id: e.target.value }) }} placeholder="UserName" className="signin_input" /></div>
                        <div className="signin_div"><input type="password" value={input.pw} onChange={e => set_input({ ...input, pw: e.target.value })} placeholder="PassWord" className="signin_input" /></div>
                        <div className="signin_div"><input type="submit" className="signin_btn" /></div>
                    </form>
                    <div className="option">
                        <Link className="linkstyle" to='/signup'>회원가입</Link>
                        &nbsp;&nbsp;|&nbsp;&nbsp;
                        <Link className="linkstyle" to='/search'>회원정보 찾기</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn;