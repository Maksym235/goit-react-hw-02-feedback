import styled from 'styled-components';

export const ButtonWrapper = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 10px 0px;
  border: none;
  border-radius: 5px;
  background-color: #768799;
  color: #ffffff;
  width: 60px;

  &:hover {
    background-color: #acb7c1;
  }
`;
