import React from 'react';

interface MyInquiryIconProps {
  fill?: string;
}

const MyInquiryIcon: React.FC<MyInquiryIconProps> = ({ fill = 'none' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M1.5 18V22.5H6L18 10.5L13.5 5.99999L1.5 18ZM6 21H3V18H4.5V19.5H6V21ZM21.45 7.04999L19.5 8.99999L15 4.49999L16.95 2.54999C17.0888 2.41094 17.2536 2.30062 17.4351 2.22535C17.6165 2.15007 17.811 2.11133 18.0075 2.11133C18.204 2.11133 18.3985 2.15007 18.5799 2.22535C18.7614 2.30062 18.9262 2.41094 19.065 2.54999L21.45 4.93499C22.035 5.51999 22.035 6.46499 21.45 7.04999Z"
      fill={fill}
    />
  </svg>
);

export default MyInquiryIcon;
