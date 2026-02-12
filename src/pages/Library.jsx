import { motion } from "framer-motion";
import MovieCard from "../components/MovieCard";
import MovieRow from "../components/MovieRow";
import "./styles/Library.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/Shark_Attack.png";
import poster4 from "../assets/posters/Finding_Roane.png";

export default function Library() {
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

  // Helper for staggered animation
  const sectionVariant = (index) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { delay: index * 0.1, type: "spring", stiffness: 200, damping: 20 },
  });

  return (
    <div className="library-page">
      {/* Page title */}
      <motion.h1
        className="library-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, type: "spring", stiffness: 200 }}
        style={{ marginTop: "8px" }}
      >
        My Library
      </motion.h1>

      {/* Sections */}
      <motion.div style={{ marginLeft: "-12px" }} {...sectionVariant(0)}>
        <MovieRow
          title="Continue Watching"
          movies={continueWatching}
          showProgress
        />
      </motion.div>

      <motion.div style={{ marginLeft: "-12px" }} {...sectionVariant(1)}>
        <MovieRow title="My List" movies={myList} />
      </motion.div>

      <motion.div style={{ marginLeft: "-12px" }} {...sectionVariant(2)}>
        <MovieRow title="Downloaded" movies={downloads} />
      </motion.div>

      <motion.div style={{ marginLeft: "-12px" }} {...sectionVariant(3)}>
        <MovieRow title="Watch History" movies={history} />
      </motion.div>
    </div>
  );
}

// Optional: animated section for individual MovieCards
export function Section({ title, movies, delayIndex = 0 }) {
  if (movies.length === 0) return null;

  return (
    <motion.div
      className="library-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delayIndex * 0.1, type: "spring", stiffness: 200, damping: 20 }}
    >
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05 + delayIndex * 0.1, type: "spring", stiffness: 200 }}
      >
        {title}
      </motion.h3>
      <div className="library-row">
        {movies.map((movie, index) => (
          <motion.div
            key={movie.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + index * 0.05, type: "spring", stiffness: 200, damping: 20 }}
          >
            <MovieCard poster={movie.poster} />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}