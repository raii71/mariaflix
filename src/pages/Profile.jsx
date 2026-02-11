import { useState } from "react";
import { motion } from "framer-motion";
import AvatarIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import LockIcon from "@mui/icons-material/Lock";
import LogoutIcon from "@mui/icons-material/Logout";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import "./styles/Profile.css";

export default function Profile() {
  const [notifications, setNotifications] = useState(true);

  const user = {
    name: "Maria Sayre",
    email: "maria.sayre67@gmail.com",
    subscription: "Premium",
    planExpires: "Feb. 14, 2026",
    watchTime: "124 hrs",
    favorites: 2,
  };

  return (
    <div className="profile-page">
      <motion.div
        className="profile-header"
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <AvatarIcon className="avatar" />
        <div className="user-details">
          <h2>{user.name}</h2>
          <p>{user.email}</p>

          <div className="subscription-badge">
            {user.subscription} • Expires {user.planExpires}
          </div>
        </div>
      </motion.div>

      <div className="profile-stats">
        <div>
          <h4>{user.watchTime}</h4>
          <span>Watch Time</span>
        </div>
        <div>
          <h4>{user.favorites}</h4>
          <span>Favorites</span>
        </div>
      </div>

      <div className="profile-section">
        <h3>Account</h3>

        <ProfileButton icon={<EditIcon />} label="Edit Profile" />
        <ProfileButton icon={<LockIcon />} label="Change Password" />
      </div>

      <div className="profile-section">
        <h3>Preferences</h3>

        <div
          className="profile-toggle"
          onClick={() => setNotifications(!notifications)}
        >
          <div className="toggle-left">
            <NotificationsIcon />
            <span>Notifications</span>
          </div>

          <motion.div
            className={`toggle-switch ${notifications ? "on" : "off"}`}
            layout
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            <motion.div className="toggle-thumb" layout />
          </motion.div>
        </div>

        <ProfileButton icon={<LanguageIcon />} label="Language" />
      </div>

      <div className="profile-section">
        <ProfileButton icon={<LogoutIcon />} label="Logout" danger />
      </div>
    </div>
  );
}

function ProfileButton({ icon, label, danger }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={`profile-btn ${danger ? "danger" : ""}`}
    >
      <span className="btn-left">
        {icon}
        {label}
      </span>
    </motion.button>
  );
}