import React from "react";
import "./styles/GenreChips.css";

const genres = ["Action", "Drama", "Comedy", "Horror", "Romance"];

export default function GenreChips() {
  const [selected, setSelected] = React.useState(null);
  const handleClick = (g) => {
    setSelected(selected === g ? null : g);
  };
  return (
    <div className="genre-chips">
      {genres.map((g) => (
        <button
          key={g}
          className={selected === g ? "selected" : ""}
          onClick={() => handleClick(g)}
        >
          {g}
        </button>
      ))}
    </div>
  );
}