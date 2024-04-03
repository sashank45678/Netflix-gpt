
import { IMG_CDN } from "../utils/constants";
const MovieCard = ({ posterPath }) => {
  if(!posterPath){
    return 
  }
  return (

    <div className="w-48">
      <img
        className="rounded-lg pr-4 "
        alt=""
        src={IMG_CDN + posterPath}
      />
    </div>
  );
};
export default MovieCard;
