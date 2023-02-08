import styled from 'styled-components';

export const Btn = styled.button`
  padding: 20px 30px;
  margin-right: 5px;
  font-size: 24px;
  border-radius: 5px;
  &:hover,
  &:focus {
    color: blue;
    background: yellow;
  }
  &:active {
    color: yellow;
    background: blue;
  }
`;
