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
                // console.log(data);
                return {
                    url: '/studio/create-studio',
                    method: "POST",
                    body: data,
                    // headers: {
                    //     "content- type": "multipart/form-data"
                    // }
                }
            }
        })
    })
})
export const { useGetStudioListQuery, useDeleteStudioMutation, useCreateNewStudioMutation } = studioApi;