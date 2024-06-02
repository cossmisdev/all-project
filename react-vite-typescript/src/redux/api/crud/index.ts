import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (builder) => ({
    getProduct: builder.query<TODO.GetResponse, TODO.GetRequest>({
      query: () => ({
        url: "product-v2",
        method: "GET",
      }),
      providesTags: ["crud"],
    }),
    postProduct: builder.mutation<TODO.PostResponse, TODO.PostRequest>({
      query: (newUser) => ({
        url:` product-v2`,
        method: "POST",
        body: newUser,
      }),
      invalidatesTags: ["crud"],
    }),
  }),
});

export const { useGetroductQuery, usePostProductMutation } = api;