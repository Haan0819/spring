import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Main'
import Product from './Product'
import Home from './Home'
import Products from './Products'
import Layout from './Layout'
import NotFound from './NotFound';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Search from './Search';
import SearchPw from './SearchPw';
import { useSelector } from 'react-redux';

const Loading = () => {
  return (
    <div>
      loading
    </div>
  )
}

function App() {
  const isLoading = useSelector(state => state.isLoading)


  return (
    <>
      <div>
        {isLoading ?
          <div>
            <Loading />
          </div>
          :
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/main' element={<Main />} />
              <Route path='/products' element={<Products />} />
              <Route path='/product/:productid' element={<Product />} />
              <Route path='/signin' element={<SignIn />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/search' element={<Search />} />
              <Route path='/search_pw' element={<SearchPw />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        }
      </div>
    </>
  );
}

export default App;
