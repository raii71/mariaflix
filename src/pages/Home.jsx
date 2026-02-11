import { useRef, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import { useRef, useState } from "react";
import { ClipLoader } from "react-spinners";

import HeroBanner from "../components/HeroBanner";
import GenreChips from "../components/GenreChips";
import MovieRow from "../components/MovieRow";

import "/styles/Home.css";

const PULL_DISTANCE = 100;

export default function Home() {
  const homeRef = useRef(null);
  const y = useMotionValue(0);
  const [refreshing, setRefreshing] = useState(false);
  const [canPull, setCanPull] = useState(true);

  // Hard-coded movies (unchanged)
  const continueWatching = [
    { id: "cw-1", poster: poster1, progress: 30 },
    { id: "cw-2", poster: poster2, progress: 60 },
  ];
  const recommended = [
    { id: "rec-1", poster: poster3 },
    { id: "rec-2", poster: poster4 },
    { id: "rec-3", poster: poster5 },
    { id: "rec-4", poster: poster2 },
  ];
  const trending = [
    { id: "tr-1", poster: poster6 },
    { id: "tr-2", poster: poster2 },
    { id: "tr-3", poster: poster7 },
    { id: "tr-4", poster: poster1 },
    { id: "tr-5", poster: poster3 },
  ];
  const newReleases = [
    { id: "nr-1", poster: poster8 },
    { id: "nr-2", poster: poster9 },
    { id: "nr-3", poster: poster10 },
    { id: "nr-4", poster: poster4 },
  ];

  // Enable pull-to-refresh only when scrolled to top
  const handleScroll = () => {
    if (!homeRef.current) return;
    setCanPull(homeRef.current.scrollTop === 0);
  };

  const handleDragEnd = (_, info) => {
    if (!canPull) return;

    if (info.offset.y > PULL_DISTANCE && !refreshing) {
      setRefreshing(true);

      // Simulate refresh
      setTimeout(() => setRefreshing(false), 1000);
    }

    // Snap back
    animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
  };

  return (
    <div
      ref={homeRef}
      className="home"
      onScroll={handleScroll}
    >
      {/* Pull-to-refresh indicator wrapper */}
      <motion.div
        style={{ y }}
        drag={canPull ? "y" : false}
        dragConstraints={{ top: 0, bottom: 120 }}
        dragElastic={0.35}
        onDragEnd={handleDragEnd}
      >
        {refreshing && (
          <div className="refresh-indicator">
            <ClipLoader size={20} color="#fff" />
            <span>Refreshing...</span>
          </div>
        )}
      </motion.div>

      {/* Scrollable content */}
      <h1 className="home-title">Mariaflix</h1>
      <HeroBanner />
      <GenreChips />

      <MovieRow
        key={`cw-${refreshing}`}
        title="Continue Watching"
        showProgress
        movies={continueWatching}
      />
      <MovieRow
        key={`rec-${refreshing}`}
        title="Recommended"
        movies={recommended}
      />
      <MovieRow
        key={`tr-${refreshing}`}
        title="Trending"
        movies={trending}
      />
      <MovieRow
        key={`nr-${refreshing}`}
        title="New Releases"
        movies={newReleases}
      />
    </div>
  );
}