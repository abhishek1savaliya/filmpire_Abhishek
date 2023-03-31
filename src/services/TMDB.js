import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const tmdbApikey = process.env.REACT_APP__TMDB_KEY;
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://api.themoviedb.org/3"}),
    endpoints:(builder)=>({
          //*get Genres 
          getGenres: builder.query({
            query:()=> `genre/movie/list?api_key=${tmdbApikey}`
          }),

         //*Get Movie By type
           getMovies: builder.query({
             query:()=> `movie/popular?page=${page}&api_key=${tmdbApikey}`
           })
    })
})

export const{useGetMoviesQuery,
             useGetGenresQuery} = tmdbApi

