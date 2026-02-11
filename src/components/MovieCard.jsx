import { motion } from "framer-motion";
import "./styles/MovieCard.css";

export default function MovieCard({ poster, progress }) {
  return (
    <motion.div
      className="movie-card"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      style={{
        borderRadius: 6,
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={poster}
        alt="movie"
        style={{
          display: "block",
          width: "100%",
          height: "auto",
          pointerEvents: "none",
        }}
        draggable={false}
      />

      {progress !== undefined && (
        <div className="progress-bar">
          <div
            className="progress"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}
    </motion.div>
  );
}