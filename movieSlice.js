import { createSlice } from "@reduxjs/toolkit";

const movieSlice=createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        trailerVideo:null,
        trendingMovies:null,
        popularMovies:null,
        upcomingMovies:null,
        horrorMovies:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.nowPlayingMovies=action.payload
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload
        },
        addTrendingMovies:(state,action)=>{
            state.trendingMovies=action.payload
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies=action.payload
        },
        addUpcomingMovies:(state,action)=>{
            state.upcomingMovies=action.payload
        },
        addHorrorMovies:(state,action)=>{
            state.horrorMovies=action.payload
        }
    }
})
export const{addNowPlayingMovies,addTrailerVideo,addTrendingMovies,addPopularMovies,addUpcomingMovies,addHorrorMovies}=movieSlice.actions;
export default movieSlice.reducer;