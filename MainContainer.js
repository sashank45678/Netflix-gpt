import { useSelector } from "react-redux";
import VideoTitle from "./videoTitle";
import VideoBackGround from "./videoBackGround";
const MainContainer = () => {
  const movies = useSelector((store) => {
    return store.movies.nowPlayingMovies;
  });
  
  if(movies===null){
    return(<div><p>Loading</p></div>);
  }
  return (
    <div className="relative w-12/12 h-screen">
      {(movies[0]) && <VideoBackGround id={movies[0].id}/>}
      {(movies[0]) &&<VideoTitle title={movies[0].original_title} overview={movies[0].overview} vote_average={movies[0].vote_average} /> }
    </div>
  );
};
export default MainContainer;
