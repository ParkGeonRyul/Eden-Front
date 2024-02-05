export interface UserInfo {
  userName: string;
  userId: string;
  userEmail: string;
  address: string;
  phoneNumber: string;
  birthDate: string;
  userImage: string;
}

export interface BasicInfoData extends Omit<UserInfo, 'userImage'> {}
