import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Temp from "./components/Temp";
import UserPage from "./components/UserPage";
import MarkdownPage from "./components/MarkdownPage";
import Header from "./components/Header";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/token" element={<Temp />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/:user/:repo" element={<MarkdownPage />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
