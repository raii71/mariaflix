import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import GetAppIcon from '@mui/icons-material/GetApp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import "./styles/MoviePage.css";
import poster from "../assets/posters/Roane_And_The_Beast_2.png";

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
    poster: poster,
  };

  return (
    <div className="movie-page">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <ArrowBackIcon style={{ fontSize: 28 }} />
      </button>

      <div className="movie-hero">
        <div className="poster-container">
          <img src={movie.poster} alt={movie.title} className="hero-poster" />
        </div>

        <div className="hero-info">
          <h1 className="movie-title">{movie.title}</h1>
          <p className="movie-tagline">{movie.tagline}</p>

          <p className="movie-details">
            {movie.year} • {movie.maturity} • {movie.duration} • {movie.rating}⭐
          </p>

          <p className="movie-genre"><strong>Genre:</strong> {movie.genre}</p>
          <p className="movie-director"><strong>Director:</strong> {movie.director}</p>

          <div className="buttons-grid">
            <button className="grid-btn trailer-btn">🎬 Trailer</button>
            <button className="grid-btn watch-btn">▶ Watch Now</button>
            <button className="grid-btn add-btn">
              <PlaylistAddIcon style={{ marginRight: 5 }} /> Add to List
            </button>
            <button className="grid-btn download-btn">
              <GetAppIcon style={{ marginRight: 5 }} /> Download
            </button>
          </div>
        </div>
      </div>

      <div className="cast-section">
        <h2>Cast</h2>
        <div className="cast-list">
          {movie.cast.map((actor, index) => (
            <div key={index} className="cast-card">
              <AccountCircleIcon style={{ fontSize: 60 }} />
              <p>{actor}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="movie-description">
        <h2>Synopsis</h2>
        <p>{movie.synopsis}</p>
      </div>

      <div className="movie-tags">
        {movie.tags.map((tag, index) => (
          <span key={index} className="tag">{tag}</span>
        ))}
      </div>
    </div>
  );
}