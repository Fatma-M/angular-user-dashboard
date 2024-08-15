export interface IUserData {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface IUserDataResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserData[];
  support: {
    url: string;
    text: string;
  };
}

export interface ISingleUserResponse {
  data: IUserData;
  support: IUsersResponseSupport;
}

export interface IUsersResponseSupport {
  url: string;
  text: string;
}
