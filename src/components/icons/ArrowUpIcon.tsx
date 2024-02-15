import React from 'react';

interface ArrowUpIconProps {
  fill?: string;
}

const ArrowUpIcon: React.FC<ArrowUpIconProps> = ({ fill = 'none' }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg">
    <g id="Arrows-chevron/Arrow-Down">
      <path
        id="Icon"
        fill={fill}
        d="M11.9998 7.25015C11.8008 7.24921 11.6097 7.32852 11.4698 7.47015L3.46985 15.4702C3.19449 15.7657 3.20261 16.2262 3.48823 16.5118C3.77384 16.7974 4.23434 16.8055 4.52985 16.5302L11.9998 9.06015L19.4698 16.5302C19.7654 16.8055 20.2259 16.7974 20.5115 16.5118C20.7971 16.2262 20.8052 15.7657 20.5298 15.4702L12.5298 7.47015C12.39 7.32852 12.1989 7.24921 11.9998 7.25015Z"
      />
    </g>
  </svg>
);

export default ArrowUpIcon;
