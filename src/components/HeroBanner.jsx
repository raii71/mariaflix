import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./styles/HeroBanner.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/It_Ends_With_Roane.png";

export default function HeroBanner() {
  const posters = [poster1, poster2, poster3];
  const [index, setIndex] = useState(0);

  // Automatic carousel
  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % posters.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div className="hero-banner" style={{ position: "relative", overflow: "hidden" }}>
       <AnimatePresence mode="sync">
         <motion.div
           key={index}
           className="hero-banner-bg"
           initial={{ x: "100%" }}
           animate={{ x: 0 }}
           exit={{ x: "-100%" }}
           transition={{ type: "tween", duration: 1 }}
           style={{
             backgroundImage: `url(${posters[index]})`,
             backgroundSize: "cover",
             backgroundPosition: "center",
             position: "absolute",
             top: 0,
             left: 0,
             width: "100%",
             height: "100%",
             zIndex: 1
           }}
         />
       </AnimatePresence>
      <div className="hero-banner-content" style={{ position: "relative", zIndex: 2 }}>
        <h1 className="hero-banner-title">Featured Movie</h1>
        <button className="hero-banner-play" aria-label="Play">
          <PlayArrowIcon style={{ fontSize: 28 }} />
        </button>
      </div>
    </div>
  );
}