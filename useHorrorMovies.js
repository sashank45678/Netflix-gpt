import { useDispatch} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect,useSelector } from "react"
import { addHorrorMovies } from "../utils/movieSlice"
const useHorrorMoviesList=()=>{
    const dispatch=useDispatch()
    // const store=useSelector((store)=>{
    //   return store.movies
    // })
  const movieslist=async()=>{
    try{
    const data=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=XXXXX&with_genres=27",API_OPTIONS)
    const movielist=await data.json();
    dispatch(addHorrorMovies(movielist.results))
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
     movieslist();
  },[])
}
export default useHorrorMoviesList;