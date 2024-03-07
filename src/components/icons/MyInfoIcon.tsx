import React from 'react';

interface MyInfoIconsProps {
  fill?: string;
}

const MyInfoIcon: React.FC<MyInfoIconsProps> = ({ fill = 'none' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M20.745 3.255C19.62 2.13 18.21 1.545 16.5 1.5C14.805 1.545 13.38 2.13 12.255 3.255C11.13 4.38 10.56 5.79 10.515 7.5C10.515 7.95 10.56 8.385 10.65 8.835L1.5 18V19.5L3 21H6L7.5 19.5V18H9V16.5H10.5V15H13.5L15.135 13.335C15.585 13.455 16.02 13.5 16.5 13.5C18.21 13.455 19.62 12.87 20.745 11.745C21.87 10.62 22.455 9.21 22.5 7.5C22.455 5.79 21.87 4.38 20.745 3.255ZM18 8.07C16.845 8.07 15.93 7.155 15.93 6C15.93 4.845 16.845 3.93 18 3.93C19.155 3.93 20.07 4.845 20.07 6C20.07 7.155 19.155 8.07 18 8.07Z"
      fill={fill}
    />
  </svg>
);

export default MyInfoIcon;
