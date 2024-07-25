import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: #1f1534;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 40px;
  overflow: hidden;
  text-align: center;
  padding:20px;
`;

export default function Title({ children }) {
  return (
    <StyledTitle>{children}</StyledTitle>
  );
}
