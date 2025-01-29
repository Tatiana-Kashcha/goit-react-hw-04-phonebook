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
    padding-top: 20px;
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

export const Thumb = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 50%;
  margin-right: 40px;
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const Upload = styled.input`
  visibility: hidden;
`;
