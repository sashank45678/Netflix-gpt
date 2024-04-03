import { useDispatch, useSelector} from "react-redux"
import { API_OPTIONS } from "../utils/constants"
import { useEffect } from "react"
import { addTrendingMovies } from "../utils/movieSlice"
const useTrendingMoviesList=()=>{
    const dispatch=useDispatch()
    const trendingMovies=useSelector((store)=>{
      return store.movies.trendingMovies
    })
  const movieslist=async()=>{
    try{
    const data=await fetch("https://api.themoviedb.org/3/trending/movie/day?language=en-US",API_OPTIONS)
    const movielist=await data.json();
    dispatch(addTrendingMovies(movielist.results))
    }
    catch(error){
      console.error(error);
    }
  }
  useEffect(()=>{
     movieslist();
  },[])
}
export default useTrendingMoviesList;