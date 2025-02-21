export interface ILoginRequest {
  email: string;
  password: string;
}

export interface IRegisterRequest extends ILoginRequest {
  username: string;
}

export interface ILoginResponse {
  statusCode: number;
  message: string;
  data?: {
    accessToken?: string;
    user?: {
      id: string;
      email: string;
      username: string;
    };
  };
}
