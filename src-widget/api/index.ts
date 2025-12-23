import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
	reducerPath: "api",
	tagTypes: ["Messages"],
	baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:12553/api" }),
	endpoints: () => ({}),
});
