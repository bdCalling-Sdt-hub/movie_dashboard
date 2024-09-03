import { baseApi } from "./baseApi";

const studioApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getStudioList : builder.query({
            query : ()=>({
                url : '/studio/get-studio',
                method : "GET"
            }),
            providesTags : ["allStudio"]
        }),
        deleteStudio : builder.mutation({
            query : (id)=>({
                url : `/studio/delete-studio/${id}`,
                method : "DELETE"
            }),
            invalidatesTags : ["allStudio"]
        })
    })
})
export const { useGetStudioListQuery, useDeleteStudioMutation } = studioApi;