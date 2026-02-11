import React from "react";
import { motion } from "framer-motion";
import "./styles/TopRatedRow.css";

export default function TopRatedRow({ movies }) {
  return (
    <div className="top-rated-row">
      <h2 className="row-title">Top Rated</h2>

      <div className="top-rated-scroll">
        {movies.map((movie, index) => (
          <motion.div
            className="top-rated-item"
            key={movie.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            whileHover={{ scale: 1.07 }}
          >
            <motion.span
              className="rank-number"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.2, x: 0 }}
              transition={{ delay: index * 0.1 + 0.1, duration: 0.5 }}
            >
              {index + 1}
            </motion.span>

            <motion.img
              className="poster"
              src={movie.poster}
              alt={movie.title}
              draggable={false}
              whileTap={{ scale: 0.96 }}
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}