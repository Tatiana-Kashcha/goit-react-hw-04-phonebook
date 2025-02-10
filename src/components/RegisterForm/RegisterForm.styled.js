import styled from 'styled-components';

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
`;

export const Form = styled.form`
  padding: 10px;
  margin-top: 20px;
  border: 2px solid rgb(12 80 206);
  border-radius: 4px;
  button {
    padding: 10px 0;
    font-size: 18px;
    color: rgb(12 80 206);
    font-weight: bold;
    border: 1px solid rgb(12 80 206);
    border-radius: 4px;
    min-width: 100px;
    cursor: pointer;
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 0px 1px, rgba(0, 0, 0, 0.14) 0px 0px 1px,
      rgba(0, 0, 0, 0.2) 0px 1px 0px;
    &:hover {
      background-color: rgb(12 80 206);
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
    max-width: 100%;
    padding: 4px;
    margin-top: 6px;
    border: 1px solid rgb(12 80 206);
    border-radius: 4px;
    &:focus {
      border-color: rgb(99, 149, 241, 0.6);
      outline: 2px rgba(99, 149, 241, 0.6);
      outline-style: solid;
    }
  }
`;

export const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
