import logo from "./logo.svg";
import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Temp from "./components/Temp";
import UserPage from "./components/UserPage";
import MarkdownPage from "./components/MarkdownPage";
import Header from "./components/Header";
import { UserProvider } from "./Context/UserContext";
import { Track, TrackComponent } from "@kaku-g/react-analytics";

function App() {
  const TrackedMainPage = TrackComponent(MainPage);
  const TrackedUserPage = TrackComponent(UserPage);
  const TrackedMarkdownPage = TrackComponent(MarkdownPage);
  return (
    <BrowserRouter>
      <Track userId="119ddd48-21c8-494b-b55f-593eb86e02d9" project="hosting">
        <UserProvider>
          <Header />
          <Routes>
            <Route path="/" element={<TrackedMainPage />} />
            <Route path="/token" element={<Temp />} />
            <Route path="/user" element={<TrackedUserPage />} />
            <Route path="/:user/:repo" element={<TrackedMarkdownPage />} />
          </Routes>
        </UserProvider>
      </Track>
    </BrowserRouter>
  );
}

export default App;
