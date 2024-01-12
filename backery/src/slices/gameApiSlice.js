import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const gameApiSlice = createApi({
    reducerPath: 'gameApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
    tagTypes: ['ApiUser', 'ApiPastries'],
    endpoints: (builder) => ({
        getPastries : builder.query({
            query : () => ({
                url:'/game/pastries',
                credentials: 'include',
            })
        }),

        getRewards : builder.query({
            query: (number) => '/game/win-pastries/'+number
        }),

        getApiPastries : builder.query({
            query : () => ({
                url:'/api/pastries',
                credentials: 'include',
            }),
            providesTags: ['ApiPastries'] 
        }),

        getApiPastrieId : builder.query({
            query : (id) => ({
                url:'/api/pastrie/'+id,
                credentials: 'include',
            }),
         
        }),

        getApiPastrieWord : builder.query({
            query : (word) => ({
                url:'/api/pastries-search/'+word,
                credentials: 'include',
            }),
            providesTags: ['ApiPastries']
        }),

        getApiPastriesCount : builder.query({
            query : () => ({
                url:'/api/pastries-count',
                credentials: 'include',
            }),
            providesTags: ['ApiPastries']
        }),

         getMe : builder.query({
            query: () => ({
                url:'/me',
                credentials: 'include',
            }),
            providesTags: ['ApiUser'] 
        }),

        getLogout : builder.mutation({
            query: () => ({
                url:'/logout',
                credentials: 'include',
            }),
            invalidatesTags: ['ApiUser'],
        }),
        

        postLogin: builder.mutation({
            query: ({ email, password }) => ({
                url: '/login',
                method: 'POST',
                body: { email, password },
                credentials: 'include',
            }),
            invalidatesTags: [ 'ApiUser'],  
        }),


        postAddPastrie: builder.mutation({
            query: ({ name, quantity }) => ({
                url: '/api/pastrie',
                method: 'POST',
                body: { name, quantity },
                credentials: 'include',
            }),
            invalidatesTags: ['ApiPastries'],
        }),

        putChangePastrie: builder.mutation({
            query: ({ id, name, quantity }) => ({
                url: '/api/pastrie/'+id,
                method: 'PUT',
                body: {name, quantity },
                credentials: 'include',
            }),
            invalidatesTags: ['ApiPastries'],
        }),
        
        deletePastrie: builder.mutation({
            query: ( {id} ) => ({
                url: '/api/pastrie/'+id,
                method: 'DELETE',
                credentials: 'include',
            }),
            invalidatesTags: ['ApiPastries'],
        }),
        
    }),
});

export const { 
    useGetPastriesQuery, 
    useGetRewardsQuery, 
    useGetLogoutMutation, 
    useGetMeQuery,
    useGetApiPastriesQuery,
    useGetApiPastrieIdQuery,
    useGetApiPastrieWordQuery, 
    useGetApiPastriesCountQuery, 
    usePostLoginMutation,
    usePostAddPastrieMutation,
    usePutChangePastrieMutation,
    useDeletePastrieMutation,
} = gameApiSlice;

