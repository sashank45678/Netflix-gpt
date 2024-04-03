export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer '+'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYzQ0N2M4ZTA3OGJkNDgwMTI5Zjk4MDRlOGM0YWExNiIsInN1YiI6IjY1ZGRiZDYxMjRiMzMzMDEyZmI2OGM4MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.27pPzUptV37Ic8z4C87p-33zgEbcpSMzTUk3nK0YYT8'
    }
  };
  export const IMG_CDN="https://image.tmdb.org/t/p/w400/"
  //export const cast=("https://api.themoviedb.org/3/movie/"+id+"/credits",API_OPTIONS)
  export const API_GPT_KEY=process.env.REACT_APP_OPENAI_KEY