import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (data) => {
                console.log(data)
                return {
                    url: '/auth/sign-in',
                    method: "POST",
                    body: data
                }
            }
        })
    })
})

export const { useLoginUserMutation } = authApi