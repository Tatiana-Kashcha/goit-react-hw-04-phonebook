import { NavLink } from 'react-router-dom';
import phoneBookHero from '../../images/phoneBookHero.jpg';
import styled from 'styled-components';

export const Thumb = styled.div`
  display: flex;
  justify-content: center;
  height: 920px;
  background-image: url(${phoneBookHero});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

export const List = styled.ul`
  margin-top: 35%;
  display: flex;
  list-style: none;
  li {
    font-weight: bold;
    &:not(:last-child) {
      margin-right: 20px;
    }
  }
`;
