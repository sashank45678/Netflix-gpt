import { useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addPopularMovies } from "../utils/movieSlice"
const usePopularMoviesList=()=>{
  const store=useSelector((store)=>{
    return store.movies
  })
    const dispatch=useDispatch()
  const movieslist=async()=>{
    try{
    const data=await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",API_OPTIONS)
    const movielist=await data.json();
    dispatch(addPopularMovies(movielist.results))
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
    !store.popularMovies && movieslist();
  },[])
}
export default usePopularMoviesList;