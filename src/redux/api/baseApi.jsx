import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
    // baseUrl: 'http://134.209.35.249:7000',
    baseUrl: 'http://174.138.74.126:7000',
    prepareHeaders: (headers) => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }
        // headers.set('Content-Type', 'application/json');
        return headers;
    },
});


// const baseQuery = fetchBaseQuery({
//     baseUrl: 'http://134.209.35.249:7000/',
//     prepareHeaders: (headers, { getState }) => {
//       const token = getState().auth?.token;
  
//       if (token) {
//         headers.set('authorization', `Bearer ${token}`);
//       }
  
//       return headers;
//     },
//   });

export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: baseQuery,
    tagTypes: [],
    endpoints: () => ({})
});

// export const imgURL = "http://134.209.35.249:7000/" 
export const imgURL = "http://174.138.74.126:7000/" 