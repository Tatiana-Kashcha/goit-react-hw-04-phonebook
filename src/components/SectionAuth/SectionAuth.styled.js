import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import backgroundImg from '../../images/backgroundImg.jpg';

export const Section = styled.section`
  padding-top: 220px;
  padding-bottom: 440px;
  background-image: url(${backgroundImg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Container = styled.div`
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;
  width: 700px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px 0;
  font-size: 18px;
  color: rgb(207 87 30);
  font-weight: bold;
  border: 1px solid rgb(207 87 30);
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(242 228 178);
  &:hover {
    background-color: rgb(207 87 30);
    color: rgb(242 228 178);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: rgb(12 80 206);
`;
