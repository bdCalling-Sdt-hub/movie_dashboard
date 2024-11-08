import { baseApi } from "./baseApi";

const movieApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllMovies: builder.query({
            query: ({type, currentPage,searchQuery}) => {
                return {
                    url: `/movie/admin-tmdb-movie-list?search=${searchQuery}&page=${currentPage}&type=${type}`,
                    method: "GET"
                }
            },
            providesTags :['allMovies']
        }),
        getSingleStudioMovie : builder.query({
            query : (id)=>{
                return {
                    url : `/movie/admin-tmdb-movie-list?studio_id=${id}` ,
                    method : 'GET'
                }
            },
            providesTags : ['studioMovie']
        }),
        postMovies : builder.mutation({
            query : (data)=>{
                return {
                    url : '/movie/admin-add-movie',
                    method : 'POST',
                    body : data
                }
            },
            invalidatesTags:['allMovies']
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

export const { useGetAllMoviesQuery, usePostMoviesMutation , useGetMoviesQuery , useGetSingleStudioMovieQuery} = movieApi