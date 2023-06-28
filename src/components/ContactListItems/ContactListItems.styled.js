import styled from 'styled-components';

export const Button = styled.button`
  padding: 1px 4px;
  margin-left: 10px;
  border: 1px solid rgb(219, 216, 216);
  border-radius: 4px;
  cursor: pointer;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
    rgba(0, 0, 0, 0.2) 0px 1px 0px;
  &:active {
    background-color: rgb(99 149 241);
  }
`;

export const Name = styled.p`
  font-size: 18px;
  margin-left: 10px;
`;

export const Number = styled.p`
  font-size: 18px;
  margin-left: 5px;
`;
