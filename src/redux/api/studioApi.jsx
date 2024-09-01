import { baseApi } from "./baseApi";

const studioApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getStudioList : builder.query({
            query : ()=>({
                url : 'studio/get-studio-list/movie',
                method : "GET"
            })
        })
    })
})
export const { useGetStudioListQuery } = studioApi;