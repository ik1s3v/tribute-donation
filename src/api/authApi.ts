import { api } from ".";

export const authApi = api.injectEndpoints({
	endpoints: (builder) => ({
		init: builder.query<void, void>({
			query: () => ({
				command: "init",
			}),
		}),
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
		}),
	}),
});
export const {
	useIsAuthorizedQuery,
	useInitQuery,
	useRequestLoginCodeMutation,
	useSignInMutation,
	useCheckPasswordMutation,
} = authApi;
