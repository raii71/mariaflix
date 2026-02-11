import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MovieCard from "../components/MovieCard";
import GenreChips from "../components/GenreChips";
import SearchIcon from "@mui/icons-material/Search";
import "./styles/Search.css";

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

export default function Search() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(false);
  const [recentSearches, setRecentSearches] = useState(
    JSON.parse(localStorage.getItem("recentSearches")) || []
  );
  const [selectedGenre, setSelectedGenre] = useState("All");

  const movies = [
    { id: 1, title: "Roane And The Beast 2", genre: "Romance", poster: poster1 },
    { id: 2, title: "A Moment To Maria", genre: "Drama", poster: poster2 },
    { id: 3, title: "It Ends With Roane", genre: "Romance", poster: poster3 },
    { id: 4, title: "My Sassy Roane", genre: "Comedy", poster: poster4 },
    { id: 5, title: "The Fault In Roane's Stars", genre: "Romance", poster: poster5 },
    { id: 6, title: "365 Days With Roane", genre: "Drama", poster: poster6 },
    { id: 7, title: "Shark Attack", genre: "Horror", poster: poster7 },
    { id: 8, title: "Roane's Execution", genre: "Thriller", poster: poster8 },
    { id: 9, title: "Train To Roane", genre: "Action", poster: poster9 },
    { id: 10, title: "Finding Roane", genre: "Adventure", poster: poster10 },
  ];

  const trending = movies.slice(0, 5);

  const handleSearchSubmit = (title) => {
    if (!title.trim()) return;

    let updated = [title, ...recentSearches.filter((r) => r !== title)];
    updated = updated.slice(0, 5);

    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const filteredMovies = movies.filter((movie) => {
    const matchesQuery = movie.title
      .toLowerCase()
      .includes(query.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" || movie.genre === selectedGenre;

    return matchesQuery && matchesGenre;
  });

  const suggestions =
    query.length > 0
      ? movies.filter((movie) =>
          movie.title.toLowerCase().includes(query.toLowerCase())
        )
      : [];

  return (
    <div className="search-page">
      <div className={`search-bar ${active ? "active" : ""}`}>
        <input
          type="text"
          placeholder="Search movies..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setActive(true)}
          onBlur={() => setTimeout(() => setActive(false), 200)}
        />
        <SearchIcon
          className={`search-icon ${active ? "active" : ""}`}
        />

        <AnimatePresence>
          {active && query.length > 0 && (
            <motion.div
              className="suggestions-dropdown"
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            >
              {suggestions.slice(0, 5).map((movie) => (
                <div
                  key={movie.id}
                  className="suggestion-item"
                  onClick={() => {
                    setQuery(movie.title);
                    handleSearchSubmit(movie.title);
                  }}
                >
                  {movie.title}
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div style={{ marginLeft: "-12px" }}>
        <GenreChips
          selected={selectedGenre}
          onSelect={(genre) => setSelectedGenre(genre)}
        />
      </div>

      {query === "" ? (
        <>
          {recentSearches.length > 0 && (
            <div className="recent-section">
              <h3 style={{ marginBottom: "4px" }}>Recent Searches</h3>

              {recentSearches.map((item, idx) => (
                <div
                  key={idx}
                  className="recent-item"
                  onClick={() => setQuery(item)}
                >
                  <span>{item}</span>

                  <span
                    className="remove-recent"
                    onClick={(e) => {
                      e.stopPropagation();
                      const updated = recentSearches.filter((r) => r !== item);
                      setRecentSearches(updated);
                      localStorage.setItem(
                        "recentSearches",
                        JSON.stringify(updated)
                      );
                    }}
                  >
                    ✕
                  </span>
                </div>
              ))}
            </div>
          )}

          <div className="trending-section">
            <h3>🔥 Trending</h3>
            <div className="search-results">
              {trending.map((movie) => (
                <motion.div
                  key={movie.id}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MovieCard poster={movie.poster} />
                </motion.div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <motion.div
          key={query}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="search-results"
        >
          {filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <motion.div
                key={movie.id}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MovieCard poster={movie.poster} />
              </motion.div>
            ))
          ) : (
            <p className="no-results">No movies found.</p>
          )}
        </motion.div>
      )}
    </div>
  );
}