import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 400px;
`;

export const ButtonAuth = styled.button`
  min-width: 65px;
  padding: 10px 8px;
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
`;
