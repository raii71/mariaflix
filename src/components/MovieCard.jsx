import { motion } from "framer-motion";
import "./styles/MovieCard.css";

export default function MovieCard({ poster, progress }) {
  return (
    <motion.div
      className="movie-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200, damping: 20, mass: 0.5 }}
      style={{ borderRadius: 6, overflow: "hidden" }}
    >
      <img
        src={poster}
        alt="movie"
        style={{ display: "block", width: "100%", height: "auto" }}
        draggable={false}
      />

      {progress !== undefined && (
        <div className="progress-bar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      )}
    </motion.div>
  );
}