import { configureStore } from "@reduxjs/toolkit";
import {tmdbApi} from '../services/TMDB'
console.log(tmdbApi)

export default configureStore({
      reducer:{
        [tmdbApi.reducerPath]: tmdbApi.reducer,
      },
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tmdbApi.middleware),
});
