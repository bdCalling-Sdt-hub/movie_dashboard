import { baseApi } from "./baseApi";

const studioApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getStudioList: builder.query({
            query: () => ({
                url: '/studio/get-studio',
                method: "GET"
            }),
            providesTags: ["allStudio"]
        }),
        deleteStudio: builder.mutation({
            query: (id) => ({
                url: `/studio/delete-studio/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["allStudio"]
        }),
        createNewStudio: builder.mutation({
            query: (data) => {
                return {
                    url: '/studio/create-studio',
                    method: "POST",
                    body: data,
                    // headers: {
                    //     "content- type": "multipart/form-data"
                    // }
                }
            }
        }),
        getMovieByStudioId : builder.query({
            query : ({id,searchValue}) =>{
                const nameQuery = searchValue ? `search=${searchValue}` : '';
                return {
                    url : `/movie/all-movies?studio_id=${id}&${nameQuery}`,
                    method : "GET"
                }
            },
            providesTags : ['movies']
        }),
        deleteMovie : builder.mutation({
            query : (data)=>{
                return {
                    url : '/movie/delete-movie',
                    method : 'DELETE',
                    body : data
                }
                
            },
            invalidatesTags : ['movies']
        }) ,
        getStudioById  : builder.query({
            query : (id)=>{
                return {
                    url : `/studio/get-studio/${id}`,
                    method : "GET"
                }
            }
        })
    })
})
export const { useGetStudioListQuery, useDeleteStudioMutation, useCreateNewStudioMutation, useGetMovieByStudioIdQuery, useDeleteMovieMutation, useGetStudioByIdQuery } = studioApi;