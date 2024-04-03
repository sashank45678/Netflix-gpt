import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const VideoBackGround = ({ id }) => {
    const dispatch=useDispatch();
    const trailerVideo=useSelector((store)=>{
        return store.movies.trailerVideo
    })
  const getTrailer = async function () {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos",
      API_OPTIONS
    );
    const json = await data.json();
    const filterdata = json.results.filter((video) => {
      return video.type === "Trailer";
    });
    const filter1=filterdata[0]
    dispatch(addTrailerVideo(filter1))
  };
  useEffect(() => {
    getTrailer();
  },[id]);
  return (
    <div className="absolute">
      <iframe className="w-screen h-screen aspect-video"
        width="560"
        height="315"
        src={(trailerVideo) && "https://www.youtube.com/embed/"+trailerVideo.key+"?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};
export default VideoBackGround;
