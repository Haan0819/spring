import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";


function KakaoLogin() {
    const [, , removeCookie] = useCookies('nickName')

    const KAKAO_LOGOUT_URL = `http://localhost:3000/klogout`

    const [kperson, setKPerson] = useState('')
    const [nickName, setNickName] = useState('')
    const [authority, setAuthority] = useState('')
    const [email, setEmail] = useState('')

    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    console.log(code)
    function deleteCookie() {
        removeCookie('nickName');
        axios.get('/deleteCookie').then(res => window.location.reload())
    }

    useEffect(() => {
        if (code !== null) {
            axios.get('/klogin',
                { params: { code: code } }
            ).then(response => {
                setKPerson(response.data)
                localStorage.setItem("kakao", response.data)
                window.location.assign("http://localhost:3000")
            })
        }
    }, [code, email, kperson, nickName])

    useEffect(() => {
        // if(kperson !== "" && kperson !== null) {
        axios.get("/getCookie").then(response => {
            var arr = response.data.split(" ")
            const nickName = arr[0];
            const email = arr[1];
            const authority = arr[2];

            setNickName(nickName)
            setEmail(email)
            setAuthority(authority)
        })
        // }
    }, [kperson])
    console.log(nickName)
    useEffect(() => {
        if (nickName !== "") {
            axios.post("/addkperson", null, {
                params: {
                    nick_name: nickName,
                    email: email,
                    authority: authority,
                }
            })
        }
    }, [email, nickName])

    const POSTURI = "http://localhost:3000/post/list"//eslint-disable-line no-unused-vars

    if (!nickName) {
        return (
            <button className="flex items-center justify-center w-16 h-8 text-white duration-150 bg-green-600 border-none rounded-md shadow-md hover:bg-green-800">
                <Link to="/login">
                    <p className="font-semibold ">Login </p>
                </Link>
            </button>
        )
    }

}

export default KakaoLogin;