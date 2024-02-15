import styled from 'styled-components';

export const ViewCountWrapper = styled.div`
  display: inline-block;
  position: relative;
  cursor: pointer;
`;

export const ViewCountLabel = styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const ViewCount = styled.div<{ isDropdownOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  width: 170px;
  height: 55px;
  padding: 15px 10px;
  border-radius: 8px;
  border: 1px solid #5d8554;
  background: #fff;
  color: #000;
  background: ${(props) => (props.isDropdownOpen ? '#5d8554' : '#fff')};

  & ${ViewCountLabel} {
    color: ${(props) => (props.isDropdownOpen ? '#ffffff' : '#000')};
  }
`;
