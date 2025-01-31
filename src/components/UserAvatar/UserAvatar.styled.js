import styled from 'styled-components';

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
  min-width: 38px;
  min-height: 38px;
  object-fit: cover;
  cursor: pointer;
`;

export const Upload = styled.input`
  visibility: hidden;
`;
