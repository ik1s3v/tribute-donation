import { api } from ".";

export const telegramApi = api.injectEndpoints({
	endpoints: (builder) => ({
		isAuthorized: builder.query<boolean, void>({
			query: () => ({
				command: "is_authorized",
			}),
		}),
		requestLoginCode: builder.mutation<
			void,
			{
				phoneNumber: string;
			}
		>({
			query: (args) => ({
				command: "request_login_code",
				args,
			}),
		}),
		signIn: builder.mutation<
			void,
			{
				phoneCode: string;
			}
		>({
			query: (args) => ({
				command: "sign_in",
				args,
			}),
			invalidatesTags: ["Services"],
		}),
		checkPassword: builder.mutation<
			void,
			{
				password: string;
			}
		>({
			query: (args) => ({
				command: "check_password",
				args,
			}),
			invalidatesTags: ["Services"],
		}),
	}),
});
export const {
	useIsAuthorizedQuery,
	useRequestLoginCodeMutation,
	useSignInMutation,
	useCheckPasswordMutation,
} = telegramApi;
