import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const month = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    const [selectyear, setselectyear] = useState("2000");
    const [selected, setselect] = useState("1");
    const [selectday, setselectday] = useState("1");
    const [select_s, setselect_s] = useState("Male");
    const [info, setInfo] = useState({
        id: "",
        pw: "",
        name: "",
        birth: "",
        sex: ""
    })
    let isCheck_id = false;
    let date = new Date();
    let lastyear = date.getUTCFullYear();
    let Days = []
    let years = []
    let i = 1;
    let lastday = 32;
    let mon = selected;
    let y = selectyear;
    const s = ["Male", "Female"]
    const sexoption = (e) => {
        setselect_s(e.target.value);
        setInfo({ ...info, sex: select_s })
    }

    const checkId = (e) => {
        e.preventDefault();
        axios.post('/checkid', { ...info, id: info.id }).then(res => {
            if (res.data.length == 1) {
                alert("아이디가 존재합니다.");
                console.log(res)
                isCheck_id = false;
                console.log(isCheck_id)
            } else {
                alert("사용가능한 아이디입니다.");
                isCheck_id = true;
                console.log(isCheck_id)
            }
        }).catch(res => console.log(res))
    }


    info.birth = selectyear + selected + selectday;
    console.log(info.birth)
    console.log(info)
    const year_option = (e) => {
        setselectyear(e.target.value);
        setInfo({ ...info, birth: selectyear })
    }

    const options = (e) => {
        setselect(e.target.value);
        setInfo({ ...info, birth: selectyear + selected })
    };

    const dayoption = (e) => {
        setselectday(e.target.value);
        setInfo({ ...info, birth: selectyear + selected + selectday })
    }
    let leapyear = 0
    for (let v = 1900; v < lastyear + 1; v++) {
        const year = [`${v}`]
        years = [...years, year]
    }
    y = y.slice(0, 4)
    if ((y % 400 === 0) || ((y % 100 !== 0) && (y % 4 === 0))) {
        leapyear = 1;
    }

    if (mon === '2') {
        lastday = 29 + leapyear;
    }
    if (mon === '4' || mon === '6' || mon === '9' || mon === '11') {
        lastday = 31
    }

    for (i; i < lastday; i++) {
        const day = [`${i}`]
        Days = [...Days, day]
    }
    const navigate = useNavigate();
    const view_info = (e) => {
        e.preventDefault();
        info.birth = selectyear + selected + selectday;
        info.sex = select_s;
        console.log(info)
        axios.post('/signup', info).then(res => console.log(res))
    }

    return (
        <div className="signup_con">
            <h3>회원가입</h3>
            <form>
                <h4>아이디</h4>
                <input type="text" value={info.id} onChange={e => {
                    setInfo({ ...info, id: e.target.value })
                    isCheck_id = false;
                    console.log(isCheck_id)
                }} />
                <button onClick={checkId}>중복확인</button>
                <h4>비밀번호</h4>
                <input type="password" value={info.pw} onChange={e =>
                    setInfo({ ...info, pw: e.target.value })} />
                <h4>비밀번호 확인</h4>
                <input />
                <h4>이름</h4>
                <input type="text" value={info.name} onChange={e =>
                    setInfo({ ...info, name: e.target.value })} />
                <h4>생년월일</h4>
                <select onChange={year_option} value={selectyear} >
                    {years.map(year => (
                        <option value={year} key={year}>{year}</option>
                    ))}
                </select>
                <select onChange={options} value={selected}>
                    {month.map(item => (
                        <option value={item} key={item}>{item}</option>
                    ))}
                </select>
                <select onChange={dayoption} value={selectday}>
                    {Days.map(Day => (
                        <option value={Day} key={Day}>{Day}</option>
                    ))}
                </select>
                <h4>성별</h4>
                <select onChange={sexoption} value={select_s}>
                    {s.map(s => (
                        <option value={s} key={s}>{s}</option>
                    ))}
                </select>

                <button onClick={view_info}>확인</button>
            </form>
            <button onClick={() => navigate(-1)}>뒤로가기</button>
        </div>
    )
}

export default SignUp;