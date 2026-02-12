import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import GetAppIcon from '@mui/icons-material/GetApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import MovieRow from "../components/MovieRow";
import "./styles/MoviePage.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/The_Fault_In_Roane's_Stars.png";
import poster4 from "../assets/posters/It_Ends_With_Roane.png";
import poster5 from "../assets/posters/My_Sassy_Roane.png";

export default function MoviePage() {
  const navigate = useNavigate();

  const movie = {
    title: "Roane and the Beast 2",
    year: 2013,
    maturity: "PG",
    duration: "90 mins",
    rating: 5.0,
    genre: "Fantasy, Romance, Musical, Family",
    cast: ["Roane", "Beast", "Gaston", "Lumiere", "Mrs. Potts", "Cogsworth", "Chip", "LeFou"],
    director: "Renato Batumbakal",
    tagline: "The spell was broken, but the magic never left.",
    synopsis: "Happily ever after was just the beginning. When the last petal falls, a new ancient magic awakens deep within the castle walls, threatening to turn the Prince back into a beast forever. Roane must trade her ballgown for boots and venture into the forbidden Shadow Grove to find the cure. With time running out and the castle crumbling, she discovers that true beauty isn't just found within—it's fought for.",
    tags: ["#Fairytale", "#Musical", "#Sequel", "#Magic", "#Romance", "#RoaneUniverse"],
    poster: poster1,
  };

  const moreLikeThis = [
    { id: "mlt-1", title: "A Moment to Maria", poster: poster2 },
    { id: "mlt-2", title: "The Fault in Roane's Stars", poster: poster3 },
    { id: "mlt-3", title: "It Ends With Roane", poster: poster4 },
    { id: "mlt-4", title: "My Sassy Roane", poster: poster5 },
  ];

  const staggerTransition = (index) => ({
    delay: index * 0.1,
    type: "spring",
    stiffness: 200,
    damping: 20,
  });

  return (
    <div className="movie-page">
      {/* Back Button */}
      <motion.button
        className="back-btn"
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ArrowBackIcon style={{ fontSize: 28 }} />
      </motion.button>

      {/* Movie Hero */}
      <motion.div
        className="movie-hero"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="poster-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
        >
          <img src={movie.poster} alt={movie.title} className="hero-poster" />
        </motion.div>

        <motion.div
          className="hero-info"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <motion.h1
            className="movie-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(0)}
          >
            {movie.title}
          </motion.h1>
          <motion.p
            className="movie-tagline"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(1)}
          >
            {movie.tagline}
          </motion.p>

          <motion.p
            className="movie-details"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(2)}
          >
            {movie.year} • {movie.maturity} • {movie.duration} • {movie.rating}⭐
          </motion.p>

          <motion.p
            className="movie-genre"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(3)}
          >
            <strong>Genre:</strong> {movie.genre}
          </motion.p>

          <motion.p
            className="movie-director"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(4)}
          >
            <strong>Director:</strong> {movie.director}
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="buttons-grid"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={staggerTransition(5)}
          >
            <button className="grid-btn trailer-btn">🎬 Trailer</button>
            <button className="grid-btn watch-btn">▶ Watch Now</button>
            <button className="grid-btn add-btn">
              <PlaylistAddIcon style={{ marginRight: 5 }} /> Add to List
            </button>
            <button className="grid-btn download-btn">
              <GetAppIcon style={{ marginRight: 5 }} /> Download
            </button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Cast Section */}
      <motion.div
        className="cast-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
      >
        <h2>Cast</h2>
        <div className="cast-list">
          {movie.cast.map((actor, index) => {
            const castCard = (
              <motion.div
                className={`cast-card ${index === 0 ? "clickable" : ""}`}
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05, type: "spring", stiffness: 200 }}
                whileHover={index === 0 ? { scale: 1.07 } : {}}
              >
                <AccountCircleIcon style={{ fontSize: 60 }} />
                <p>{actor}</p>
              </motion.div>
            );

            if (index === 0) {
              return (
                <Link
                  key={index}
                  to={`/cast/${encodeURIComponent(actor)}`}
                  className="cast-card-link"
                >
                  {castCard}
                </Link>
              );
            }

            return castCard;
          })}
        </div>
      </motion.div>

      {/* Synopsis */}
      <motion.div
        className="movie-description"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, type: "spring", stiffness: 200 }}
      >
        <h2>Synopsis</h2>
        <p>{movie.synopsis}</p>
      </motion.div>

      {/* Tags */}
      <motion.div
        className="movie-tags"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, type: "spring", stiffness: 200 }}
      >
        {movie.tags.map((tag, index) => (
          <motion.span
            key={index}
            className="tag"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 + index * 0.05 }}
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>

      {/* More Like This */}
      <motion.div
        className="more-like-this"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, type: "spring", stiffness: 200 }}
      >
        <MovieRow
          title="More Like This"
          movies={moreLikeThis}
          showProgress={false}
        />
      </motion.div>
    </div>
  );
}