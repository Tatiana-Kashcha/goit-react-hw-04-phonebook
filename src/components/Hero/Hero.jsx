import * as s from './Hero.styled';

export const Hero = () => {
  return (
    <>
      <s.Thumb>
        <s.List>
          <li>
            <s.StyledLink to="/register">Register</s.StyledLink>
          </li>
          <li>
            <s.StyledLink to="/login">Login</s.StyledLink>
          </li>
        </s.List>
      </s.Thumb>
    </>
  );
};
