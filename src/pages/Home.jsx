import { motion, useMotionValue, animate } from "framer-motion";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

import HeroBanner from "../components/HeroBanner";
import GenreChips from "../components/GenreChips";
import MovieRow from "../components/MovieRow";
import "./styles/Home.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/It_Ends_With_Roane.png";
import poster4 from "../assets/posters/My_Sassy_Roane.png";
import poster5 from "../assets/posters/The_Fault_In_Roane's_Stars.png";
import poster6 from "../assets/posters/365_Days_With_Roane.png";
import poster7 from "../assets/posters/Shark_Attack.png";
import poster8 from "../assets/posters/Roane's_Execution.png";
import poster9 from "../assets/posters/Train_To_Roane.png";
import poster10 from "../assets/posters/Finding_Roane.png";

export default function Home() {
  const [refreshing, setRefreshing] = useState(false);
  const y = useMotionValue(0); // for vertical drag (pull-to-refresh)

  // Hard-coded movies
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

  // Pull-to-refresh handler
  const handleDragEnd = (event, info) => {
    if (info.point.y > 100 && info.offset.y > 100 && !refreshing) {
      setRefreshing(true);

      // Simulate refresh delay
      setTimeout(() => setRefreshing(false), 1000);

      // Animate back to top
      animate(y, 0, { type: "spring", stiffness: 300, damping: 30 });
    }
  };

  return (
    <motion.div
      className="home"
      style={{ y, overflowY: "hidden" }}
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {refreshing && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            padding: "8px",
            margin: "8px",
          }}
        >
          <ClipLoader size={20} color="#fff" />
          <span>Refreshing...</span>
        </div>
      )}

      <h1 className="home-title">Mariaflix</h1>
      
      <HeroBanner />
      <GenreChips />

      <MovieRow key={`cw-${refreshing}`} title="Continue Watching" showProgress movies={continueWatching} />
      <MovieRow key={`rec-${refreshing}`} title="Recommended" movies={recommended} />
      <MovieRow key={`tr-${refreshing}`} title="Trending" movies={trending} />
      <MovieRow key={`nr-${refreshing}`} title="New Releases" movies={newReleases} />
    </motion.div>
  );
}