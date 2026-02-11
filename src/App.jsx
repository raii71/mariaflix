import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import MoviePage from "./pages/MoviePage";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Profile from "./pages/Profile";
import BottomNav from "./components/BottomNav";
import "./index.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="/home" replace />} />

          <Route path="/home" element={<Home />} />
          <Route path="/moviepage" element={<MoviePage />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>

        <BottomNav />
      </div>
    </BrowserRouter>
  );
}