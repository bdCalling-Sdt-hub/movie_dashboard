import { baseApi } from "./baseApi";

const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: ({type, currentPage,searchQuery}) => {
                return {
                    url: `/movie/admin-tmdb-movie-list?search=${searchQuery}&page=${currentPage}&type=${type}`,
                    method: "GET"
                }
            }
        }),
        postMovies : builder.mutation({
            query : (data)=>{
                return {
                    url : '/movie/admin-add-movie',
                    method : 'POST',
                    body : data
                }
            }
        }),
        getMovies : builder.query({
           query : ()=>{
            return {
                url : `movie/all-movies`,
                method : "GET"
            }
           } 
        }),
       
        


    })
})

export const { useGetAllMoviesQuery, usePostMoviesMutation , useGetMoviesQuery ,} = movieApi