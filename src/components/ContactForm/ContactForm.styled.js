import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  margin-top: 20px;
  border: 2px solid rgb(34 155 15);
  border-radius: 4px;
  button {
    padding: 4px 8px;
    font-size: 14px;
    color: rgb(34 155 15);
    font-weight: bold;
    border: 1px solid rgb(34 155 15);
    border-radius: 4px;
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
      rgba(0, 0, 0, 0.2) 0px 1px 0px;
    &:hover {
      background-color: rgb(34 155 15);
      color: #ffffff;
    }
  }
`;

export const Label = styled.label`
  font-size: 20px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  input {
    max-width: 550px;
    padding: 2px;
    margin-top: 6px;
    border: 1px solid rgb(34 155 15);
    border-radius: 4px;
    &:focus {
      border-color: rgb(99, 149, 241, 0.6);
      outline: 2px rgba(99, 149, 241, 0.6);
      outline-style: solid;
    }
  }
`;
