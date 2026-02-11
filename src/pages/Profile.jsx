import { useState } from "react";
import MovieRow from "../components/MovieRow";
import MovieCard from "../components/MovieCard";
import GenreChips from "../components/GenreChips";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import "./styles/Profile.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/Shark_Attack.png";
import poster4 from "../assets/posters/Finding_Roane.png";

export default function Profile() {
  // User data
  const [user, setUser] = useState({
    name: "Maria Sayre",
    email: "maria.sayre67@gmail.com",
    subscription: "Premium",
  });

  const [selectedGenre, setSelectedGenre] = useState("All");

  const continueWatching = [
    { id: 1, poster: poster1, progress: 30 },
    { id: 2, poster: poster2, progress: 60 },
  ];

  const myList = [
    { id: 3, poster: poster3 },
    { id: 4, poster: poster4 },
  ];

  const downloads = [
    { id: 5, poster: poster1 },
  ];

  const history = [
    { id: 6, poster: poster2 },
    { id: 7, poster: poster3 },
  ];

  return (
    <div className="profile-page">
      {/* User Info Section */}
      <div className="profile-info">
        <AvatarIcon className="avatar" fontSize="large" />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p className="subscription">Subscription: {user.subscription}</p>
        </div>
      </div>

      {/* Profile Settings */}
      <div className="profile-settings">
        <h3 style={{ marginBottom: "12px" }}>Settings</h3>
        <button className="settings-btn">Edit Profile</button>
        <button className="settings-btn">Change Password</button>
        <button className="settings-btn logout">Logout</button>
      </div>

      {/* Extra Personal Options */}
      <div className="profile-extra">
        <h3>Preferences</h3>
        <button className="settings-btn">Notifications</button>
        <button className="settings-btn">Language</button>
      </div>
    </div>
  );
}