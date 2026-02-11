import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
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
          <Route path="/" element={<Navigate to="/mariaflix/" replace />} />

          <Route path="/mariaflix" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="*" element={<Navigate to="/mariaflix/" replace />} />
        </Routes>
        <BottomNav />
      </div>
    </BrowserRouter>
  );
}