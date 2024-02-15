import styled from 'styled-components';

export const ViewCountDropContainer = styled.div<{ isDropdownOpen: boolean }>`
  position: absolute;
  top: calc(-294px - 6px);
  left: 0;
  display: ${(props) => (props.isDropdownOpen ? 'flex' : 'none')};
  flex-direction: column;
  width: 170px;
  height: auto;
  background-color: #ffffff;
  pointer-events: ${(props) => (props.isDropdownOpen ? '' : 'none')};
`;

export const ViewCountDropItem = styled.div`
  width: 170px;
  height: 49px;
  padding: 14px 0 13px 13px;
  border-radius: 8px;

  font-family: Inter;
  font-size: 18px;
  color: #5d5a5a;
  line-height: 100%;

  &:hover {
    background-color: #e9ece9;
  }
`;
