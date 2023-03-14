import Header from "./Header";
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Footer from './Footer';
import signin_img from './static/images/login.png';
import './App.css';
import { useEffect } from "react";
import axios from 'axios'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./stores/actions";
import AxiosApi from "./Axios";


const Layout = () => {



    useEffect(() => {



    }, []);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const users = useSelector(state => state.user);
    const isLogin = useSelector(state => state.isLoggedIn);
    console.log(users)
    console.log(isLogin);


    const onLogoutHandler = () => {
        localStorage.removeItem("accessToken");
        axios.post('/logout', {}).then(res => console.log(res)).catch(error => console.log(error))
        dispatch(logout(users))
        navigate('/')
    }
    const onsub = (e) => {
        e.preventDefault();
        AxiosApi.post('/api/auth/add_post', {
            title: "post1",
            content: "content"
        }).then(res => {
            console.log(res.data)

        }).catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            <div>
                <header className="navbar">
                    <div className="nav_title"><Link to={'/'} className="nav_title2 linkstyle">Nav</Link></div>
                    <div className="nav_link">
                        <Header />
                        {isLogin ?
                            <form onSubmit={onLogoutHandler}>
                                <input type="submit" className="logout_link" value={"로그아웃"} ></input>
                            </form>
                            :
                            <Link to='/signin' className="signin_link"><img src={signin_img} alt='signinimg' /></Link>
                        }
                    </div>
                </header>
                <main className="main_cont">
                    <Outlet />
                    <form onSubmit={onsub}>
                        <input type="submit" />
                    </form>
                </main>
                <Footer />
            </div>
        </div>
    )
}


export default Layout;