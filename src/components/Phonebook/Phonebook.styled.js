import styled from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;
`;

export const Div = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
  h2 {
    margin-top: 20px;
  }
`;

export const Greeting = styled.p`
  font-weight: bold;
  font-size: 18px;
  margin-right: 15px;
  span {
    color: rgb(12 80 206);
  }
`;
