import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Omocard from "./components/Omocard";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RoutesSetup from "./routes/RoutesSetup";
import Index from "./pages/Index";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignUpPage";
import BoardList from "./pages/Board/BoardList";
import BoardCreate from "./pages/Board/BoardCreate";
import NewNav from "./components/NewNav";
import BoardDetail from "./pages/Board/BoardDetail";
import BoardMy from "./pages/Board/BoardMy";
import ChangeInfoPage from "./pages/ChangeInfoPage";
import NoMatch from "./routes/NoMatch";

export default function App() {
  return (
    <main>
      <BrowserRouter>
        {/* <NewNav /> */}
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/board" element={<BoardList />} />
          <Route path="/board/create" element={<BoardCreate />} />
          <Route path="/board/detail" element={<BoardDetail />} />
          <Route path="/board/my" element={<BoardMy />} />
          <Route path="/changeinfo" element={<ChangeInfoPage />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </main>
  );
}
