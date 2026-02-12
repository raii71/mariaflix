import React from "react";
import { motion } from "framer-motion";
import "./styles/GenreChips.css";

const genres = ["Action", "Drama", "Comedy", "Horror", "Romance"];

export default function GenreChips() {
  const [selected, setSelected] = React.useState(null);
  const handleClick = (g) => {
    setSelected(selected === g ? null : g);
  };

  return (
    <div className="genre-chips">
      {genres.map((g, index) => (
        <motion.button
          key={g}
          className={selected === g ? "selected" : ""}
          onClick={() => handleClick(g)}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: index * 0.08,
            type: "spring",
            stiffness: 200,
            damping: 20,
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {g}
        </motion.button>
      ))}
    </div>
  );
}