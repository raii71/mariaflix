import { useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import ClipLoader from "react-spinners/ClipLoader";

import HeroBanner from "../components/HeroBanner";
import GenreChips from "../components/GenreChips";
import MovieRow from "../components/MovieRow";

const PULL_DISTANCE = 100;

export default function Home({
  continueWatching,
  recommended,
  trending,
  newReleases,
}) {
  const homeRef = useRef(null);

  const y = useMotionValue(0);
  const [refreshing, setRefreshing] = useState(false);
  const [canPull, setCanPull] = useState(true);

  // Enable pull ONLY when scrolled to top
  const handleScroll = () => {
    if (!homeRef.current) return;
    setCanPull(homeRef.current.scrollTop === 0);
  };

  // Pull-to-refresh
  const handleDragEnd = (_, info) => {
    if (!canPull) return;

    if (info.offset.y > PULL_DISTANCE && !refreshing) {
      setRefreshing(true);

      // Simulate refresh
      setTimeout(() => {
        setRefreshing(false);
      }, 1000);
    }

    // Snap back
    animate(y, 0, {
      type: "spring",
      stiffness: 320,
      damping: 28,
    });
  };

  return (
    <div
      ref={homeRef}
      className="home"
      onScroll={handleScroll}
    >
      <motion.div
        style={{ y }}
        drag={canPull ? "y" : false}
        dragConstraints={{ top: 0, bottom: 120 }}
        dragElastic={0.35}
        onDragEnd={handleDragEnd}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {refreshing && (
          <div className="refresh-indicator">
            <ClipLoader size={20} color="#fff" />
            <span>Refreshing...</span>
          </div>
        )}

        <h1 className="home-title">Mariaflix</h1>

        <HeroBanner />
        <GenreChips />

        <MovieRow
          title="Continue Watching"
          showProgress
          movies={continueWatching}
        />
        <MovieRow title="Recommended" movies={recommended} />
        <MovieRow title="Trending" movies={trending} />
        <MovieRow title="New Releases" movies={newReleases} />
      </motion.div>
    </div>
  );
}