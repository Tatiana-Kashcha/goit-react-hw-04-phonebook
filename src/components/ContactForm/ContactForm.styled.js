import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  margin-top: 20px;
  border: 1px solid rgb(0, 0, 0);
  button {
    padding: 1px 4px;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
      rgba(0, 0, 0, 0.2) 0px 1px 0px;
    &:active {
      background-color: rgb(99 149 241);
    }
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  input {
    width: 200px;
    padding: 2px;
    margin-top: 6px;
    border: 1px solid rgb(219, 216, 216);
    border-radius: 2px;
    &:focus {
      border-color: rgb(99, 149, 241, 0.6);
      outline: 2px rgba(99, 149, 241, 0.6);
      outline-style: solid;
    }
  }
`;
