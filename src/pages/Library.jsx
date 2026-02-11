import MovieCard from "../components/MovieCard";
import MovieRow from "../components/MovieRow";
import "./styles/Library.css";

import poster1 from "../assets/posters/Roane_And_The_Beast_2.png";
import poster2 from "../assets/posters/A_Moment_To_Maria.png";
import poster3 from "../assets/posters/Shark_Attack.png";
import poster4 from "../assets/posters/Finding_Roane.png";

export default function Library() {
  const continueWatching = [
    { id: 1, poster: poster1, progress: 30 },
    { id: 2, poster: poster2, progress: 60 },
  ];

  const myList = [
    { id: 3, poster: poster3 },
    { id: 4, poster: poster4 },
  ];

  const downloads = [
    { id: 5, poster: poster1 },
  ];

  const history = [
    { id: 6, poster: poster2 },
    { id: 7, poster: poster3 },
  ];

  return (
    <div className="library-page">
      <h1 className="library-title" style={{ marginTop: "8px" }}>
        My Library
      </h1>

      <div style={{ marginLeft: "-12px" }}>
        <MovieRow
          title="Continue Watching"
          movies={continueWatching}
          showProgress
        />
      </div>

      <div style={{ marginLeft: "-12px" }}>
        <MovieRow title="My List" movies={myList} />
      </div>

      <div style={{ marginLeft: "-12px" }}>
        <MovieRow title="Downloaded" movies={downloads} />
      </div>

      <div style={{ marginLeft: "-12px" }}>
        <MovieRow title="Watch History" movies={history} />
      </div>
    </div>
  );
}

function Section({ title, movies }) {
  if (movies.length === 0) return null;

  return (
    <div className="library-section">
      <h3>{title}</h3>
      <div className="library-row">
        {movies.map((movie) => (
          <MovieCard key={movie.id} poster={movie.poster} />
        ))}
      </div>
    </div>
  );
}