import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.section`
  padding: 150px 0;
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
  color: rgb(126 79 15);
  font-weight: bold;
  border: 1px solid rgb(126 79 15);
  border-radius: 4px;
  min-width: 100px;
  text-align: center;
  cursor: pointer;
  background-color: rgb(242 228 178);
  &:hover {
    background-color: rgb(126 79 15);
    color: rgb(242 228 178);
  }
`;

export const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;
