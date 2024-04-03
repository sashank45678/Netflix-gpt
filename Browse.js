import Header from "./header";
import useNowPlayingMoviesList from "../hooks/useNowPlayingMoviesList";
import MainContainer from "./MainContainer";
import SecondContainer from "./secondContainer";
import useTrendingMoviesList from "../hooks/useTrending";
import usePopularMoviesList from "../hooks/usePopular";
import useUpcomingMoviesList from "../hooks/useUpcomingMovies";
import useHorrorMoviesList from "../hooks/useHorrorMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
  const showGpt = useSelector((store) => {
    return store.gpt.showGptSearch;
  });
  useNowPlayingMoviesList();
  useTrendingMoviesList();
  usePopularMoviesList();
  useUpcomingMoviesList();
  useHorrorMoviesList();
  return (
    <div>
      <Header />
      {showGpt ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondContainer />
        </>
      )}
    </div>
  );
};
export default Browse;
