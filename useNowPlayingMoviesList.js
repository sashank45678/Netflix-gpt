import { useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addNowPlayingMovies } from "../utils/movieSlice"
const useNowPlayingMoviesList=()=>{
    const dispatch=useDispatch()
    const store=useSelector((store)=>{
      return store.movies
    })
  const movieslist=async()=>{
    try{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",API_OPTIONS)
    const movielist=await data.json();
    dispatch(addNowPlayingMovies(movielist.results))
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    !store.nowPlayingMovies && movieslist();
  },[])
}
export default useNowPlayingMoviesList;