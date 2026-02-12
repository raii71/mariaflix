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
      {/* Header */}
      <motion.div
        className="profile-header"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <AvatarIcon className="avatar" />
        <div className="user-details">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, type: "spring", stiffness: 200 }}
          >
            {user.name}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          >
            {user.email}
          </motion.p>

          <motion.div
            className="subscription-badge"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
          >
            {user.subscription} • Expires {user.planExpires}
          </motion.div>
        </div>
      </motion.div>

      {/* Stats */}
      <motion.div
        className="profile-stats"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 20 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          <h4>{user.watchTime}</h4>
          <span>Watch Time</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h4>{user.favorites}</h4>
          <span>Favorites</span>
        </motion.div>
      </motion.div>

      {/* Account Section */}
      <ProfileSection title="Account" delay={0.35}>
        <ProfileButton icon={<EditIcon />} label="Edit Profile" />
        <ProfileButton icon={<LockIcon />} label="Change Password" />
      </ProfileSection>

      {/* Preferences Section */}
      <ProfileSection title="Preferences" delay={0.45}>
        <motion.div
          className="profile-toggle"
          onClick={() => setNotifications(!notifications)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, type: "spring", stiffness: 200, damping: 20 }}
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
        </motion.div>

        <ProfileButton icon={<LanguageIcon />} label="Language" />
      </ProfileSection>

      {/* Logout Section */}
      <ProfileSection title="" delay={0.55}>
        <ProfileButton icon={<LogoutIcon />} label="Logout" danger />
      </ProfileSection>
    </div>
  );
}

// Animated section wrapper
function ProfileSection({ title, delay = 0, children }) {
  return (
    <motion.div
      className="profile-section"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, type: "spring", stiffness: 200, damping: 20 }}
    >
      {title && <motion.h3 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: delay + 0.05 }}>{title}</motion.h3>}
      {children}
    </motion.div>
  );
}

// Animated buttons
function ProfileButton({ icon, label, danger }) {
  return (
    <motion.button
      whileTap={{ scale: 0.97 }}
      whileHover={{ scale: 1.02 }}
      className={`profile-btn ${danger ? "danger" : ""}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 20 }}
    >
      <span className="btn-left">
        {icon}
        {label}
      </span>
    </motion.button>
  );
}