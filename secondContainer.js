import { useSelector } from "react-redux";
import MovieList from "./movieList";
const SecondContainer = () => {
  const movies = useSelector((store) => {
    return store.movies;
  });
  return (
    <div className=" bg-black">
      <div className="-mt-32 relative pl-12 z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending"} movies={movies.trendingMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />
        <MovieList title={"Horror Movies"} movies={movies.horrorMovies} />
      </div>
    </div>
  );
};
export default SecondContainer;
