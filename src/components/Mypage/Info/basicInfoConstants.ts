import { UserInfo, BasicInfoData } from '@/types/apis/userInfo';

interface BasicInfoItem {
  label: string;
  value: string;
  field: keyof BasicInfoData;
}

interface EditBasicInfoItem extends BasicInfoItem {
  active: boolean;
}

const createBasicInfoData = (userInfo: UserInfo): BasicInfoItem[] => {
  const items: BasicInfoItem[] = [
    {
      label: '이름',
      field: 'userFirstName',
      value: userInfo.userFirstName,
    },
    {
      label: '성',
      field: 'userLastName',
      value: userInfo.userLastName,
    },
    {
      label: '아이디',
      field: 'userId',
      value: userInfo.userId,
    },
    {
      label: '이메일',
      field: 'userEmail',
      value: userInfo.userEmail,
    },
    {
      label: '주소',
      field: 'address',
      value: userInfo.address,
    },
    {
      label: '휴대폰번호',
      field: 'phoneNumber',
      value: userInfo.phoneNumber,
    },
    {
      label: '생년월일',
      field: 'birthDate',
      value: userInfo.birthDate,
    },
  ];

  return items;
};

const addActiveToBasicInfoData = (userInfo: UserInfo): EditBasicInfoItem[] => {
  const activeValues = {
    userFirstName: false,
    userLastName: false,
    userId: true,
    userEmail: true,
    address: true,
    phoneNumber: true,
    birthDate: true,
  };

  const basicInfoItems = createBasicInfoData(userInfo);

  return basicInfoItems.map((item) => ({
    ...item,
    active: activeValues[item.field],
  }));
};

export { createBasicInfoData, addActiveToBasicInfoData };
