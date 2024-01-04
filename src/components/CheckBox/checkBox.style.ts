'use client';
import styled from 'styled-components';

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 12px;
`;

export const CheckBoxDisplay = styled.div<{ position?: string }>`
  display: flex;
  flex-direction: ${({ position }) =>
    position === 'left' ? 'row' : 'row-reverse'};
  align-items: center;
`;
