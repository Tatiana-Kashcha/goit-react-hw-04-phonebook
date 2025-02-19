import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

export const Description = styled.p`
  font-weight: bold;
  font-size: 18px;
`;

export const Input = styled.input`
  max-width: 100%;
  padding: 4px;
  border: 1px solid rgb(34 155 15);
  border-radius: 4px;
  margin-left: 10px;
  &:focus {
    border-color: rgb(99, 149, 241, 0.6);
    outline: 2px rgba(99, 149, 241, 0.6);
    outline-style: solid;
  }
`;
