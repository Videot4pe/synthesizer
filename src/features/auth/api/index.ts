import {ApiClient} from "#/shared/api/client/api-client";
import {TokenDto, UserLoginDto} from "#/entities/user/model";

const client = new ApiClient('auth');

export const AuthApi = {
  login: (user: UserLoginDto) => client.post<TokenDto>('/login', user),
  signup: (user: UserLoginDto) => client.post<TokenDto>('/signup', user),
  refresh: (refreshToken: string) => client.post<TokenDto>('/refresh', {refreshToken}),
};
