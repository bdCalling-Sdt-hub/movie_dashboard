import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
    endpoints : (builder) =>({
        getUser : builder.query({
            query : ()=>{
                return {
                    url : 'auth/profile',
                    method : "GET"
                }
            },
            providesTags : ['user']
        }),
        updateUserProfile : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/update-user',
                    method : 'PATCH',
                    body : data
                }
            }
        })
    })
})

export const {useGetUserQuery , useUpdateUserProfileMutation} = userApi