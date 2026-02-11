import { NavLink } from "react-router-dom";
import "./styles/BottomNav.css";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/home" className={({ isActive }) => (isActive ? "active" : "")}>
        <HomeIcon />
        <span>Home</span>
      </NavLink>

      <NavLink to="/search" className={({ isActive }) => (isActive ? "active" : "")}>
        <SearchIcon />
        <span>Search</span>
      </NavLink>

      <NavLink to="/library" className={({ isActive }) => (isActive ? "active" : "")}>
        <VideoLibraryIcon />
        <span>Library</span>
      </NavLink>

      <NavLink to="/profile" className={({ isActive }) => (isActive ? "active" : "")}>
        <PersonIcon />
        <span>Profile</span>
      </NavLink>
    </nav>
  );
}