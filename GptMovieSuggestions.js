import { useSelector } from "react-redux";
import MovieList from "./movieList";

const GptMovieSuggestions = () => {
  const gpt = useSelector((store) => {
    return store.gpt;
  });
  const { movieNames, movieResults } = gpt;
  if (!movieNames) {
    return;
  }
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-70">
      {movieNames.map((movieName, index) => {
        return (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        );
      })}
    </div>
  );
};
export default GptMovieSuggestions;
