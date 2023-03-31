import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react';


const tmdbApikey = process.env.REACT_APP__TMDB_KEY;
console.log(tmdbApikey);
const page = 1;

export const tmdbApi = createApi({
    reducerPath: 'tmdbApi',
    baseQuery: fetchBaseQuery({baseUrl:"https://api.themoviedb.org/3"}),
    endpoints:(builder)=>({
           getMovies: builder.query({
             query:()=> `movie/popular?page=${page}&api_key=${tmdbApikey}`
           })
    })
})

export const{useGetMoviesQuery} = tmdbApi

