import { motion } from "framer-motion";
import MovieCard from "./MovieCard";
import "./styles/MovieRow.css";

export default function MovieRow({ title, movies, showProgress }) {
  return (
    <section className="movie-row">
      <h2>{title}</h2>
      <motion.div
        className="movie-row-list"
        style={{
          overflow: "hidden"
        }}
        drag={movies.length > 3 ? "x" : false}
        dragConstraints={{ left: -(movies.length - 3) * 130, right: 0 }}
      >
        {movies.map((movie, idx) => (
          <div
            key={movie.id || idx}
            style={{ minWidth: 120, maxWidth: 120, flex: "0 0 120px" }}
          >
            <MovieCard
              poster={movie.poster}
              progress={showProgress ? movie.progress : undefined}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
}