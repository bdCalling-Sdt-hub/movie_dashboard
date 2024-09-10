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
            },
            invalidatesTags : ['user']
        }),
        changePassword : builder.mutation({
            query : (data)=>{
                return {
                    url : "/auth/change-password",
                    method : 'PATCH',
                    body : data
                }
            }
        }),
        getTerms : builder.query({
            query : ()=>{
                return {
                    url  :'/settings/get-settings/Terms',
                    method : 'GET'
                }
            }
        }),
        postTerms : builder.mutation({
            query : (data)=>{
                return {
                    url : '/settings/update-settings',
                    method : 'POST',
                    body : data
                }
            }
        }),
        getPrivacy : builder.query({
            query : ()=>{
                return {
                    url  :'/settings/get-settings/Privacy',
                    method : 'GET'
                }
            }
        }),
        postPrivacy : builder.mutation({
            query : (data)=>{
                return {
                    url : '/settings/update-settings',
                    method : 'POST',
                    body : data
                }
            }
        }),
        forgetAdminPassword :  builder.mutation({
            query : (email)=>{
                return {
                    url : '/auth/send-verify-email',
                    method : "POST",
                    body : email
                }
            }
        }),
        verifyOtp: builder.mutation({
            query: (data) => {
                return {
                    url: '/auth/verify-code',
                    method: "POST",
                    body: data,
                   
                }
            }
        }),
        resetPassword : builder.mutation({
            query : (data)=>{
                return {
                    url : '/auth/reset-password',
                    method : "POST",
                    body : data,
                    headers : {
                        Authorization :  `Bearer ${localStorage.getItem("accessToken")}`
                    }
                }
            }
        })

    })
})

export const {useGetUserQuery , useUpdateUserProfileMutation, useChangePasswordMutation, useGetTermsQuery, usePostTermsMutation,useGetPrivacyQuery, usePostPrivacyMutation, useForgetAdminPasswordMutation, useVerifyOtpMutation, useResetPasswordMutation} = userApi