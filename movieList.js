import MovieCard from "./movieCard";
import { Link } from "react-router-dom";
const MovieList = ({ title, movies }) => {
  return (
    <div className="pt-6 px-4">
        <div>
          <h1 className="text-white text-2xl font-bold">{title}</h1>
        </div>
      <div className="flex  overflow-x-scroll  pt-4 no-scrollbar">
        <div className="flex">
          {movies &&
            movies.map((movie, index) => {
              return (
                <Link key={movie.id} to={"/moviecast/"+movie.id}><MovieCard  posterPath={movie.poster_path} /></Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};
export default MovieList;
