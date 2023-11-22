export interface UserApi {
  id: number;
  email: string;
}

export interface ListApi extends UserApi {
  desc?: string;
}
